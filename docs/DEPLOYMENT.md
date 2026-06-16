# Deployment Guide - EduTrack Nigeria

## Prerequisites

- Docker & Docker Compose
- Node.js 18+
- PostgreSQL 12+
- Redis 6+
- AWS Account (for S3, optional)
- Domain name
- SSL Certificate

## Development Deployment

### Using Docker Compose

```bash
# Clone repository
git clone https://github.com/Loveth316/EduTrack-Nigeria.git
cd EduTrack-Nigeria

# Create environment files
cp backend/.env.example backend/.env
cp web/.env.example web/.env
cp mobile/.env.example mobile/.env

# Edit .env files with your configuration

# Start all services
docker-compose up -d

# Check status
docker-compose ps

# View logs
docker-compose logs -f
```

## Production Deployment

### Backend Deployment (Heroku, DigitalOcean, AWS)

#### Option 1: DigitalOcean (Recommended)

```bash
# Create droplet (Ubuntu 22.04, 2GB RAM minimum)
# SSH into droplet

# Install dependencies
sudo apt update && sudo apt upgrade -y
sudo apt install -y curl git nodejs npm postgresql postgresql-contrib redis-server

# Clone repository
git clone https://github.com/Loveth316/EduTrack-Nigeria.git
cd EduTrack-Nigeria/backend

# Install dependencies
npm install --production

# Build
npm run build

# Create .env file with production values
cp .env.example .env
# Edit .env

# Setup PostgreSQL
sudo systemctl start postgresql
sudo -u postgres createdb edutract_db
sudo -u postgres createuser -P edutract_user

# Run migrations
DATABASE_URL=postgresql://edutract_user:password@localhost:5432/edutract_db npm run migrate

# Start with PM2
npm install -g pm2
pm2 start dist/index.js --name "edutract-api"
pm2 save
pm2 startup
```

#### Option 2: Docker on DigitalOcean

```bash
# SSH into droplet

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Clone repository
git clone https://github.com/Loveth316/EduTrack-Nigeria.git
cd EduTrack-Nigeria

# Create production .env files
cp backend/.env.example backend/.env
cp web/.env.example web/.env

# Edit files with production values

# Start services
sudo docker-compose -f docker-compose.yml up -d
```

### Web Deployment (Vercel, Netlify, AWS Amplify)

#### Option 1: Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy web app
cd web
vercel --prod
```

#### Option 2: Netlify

```bash
# Build
cd web
npm run build

# Deploy via Git
# Push to GitHub and connect repository to Netlify
# Set build command: npm run build
# Set publish directory: dist
```

#### Option 3: AWS S3 + CloudFront

```bash
# Build
cd web
npm run build

# Deploy to S3
aws s3 sync dist/ s3://your-bucket-name/ --delete

# Invalidate CloudFront
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

### Mobile Deployment (EAS Build)

```bash
# Navigate to mobile directory
cd mobile

# Login to Expo
eas login

# Build APK for Android
eas build --platform android --release

# Build IPA for iOS (requires Apple Developer Account)
eas build --platform ios --release

# Download built files
# APK: https://expo.dev/accounts/[account]/projects/[project]/builds
```

## Database Backup & Recovery

### Backup PostgreSQL

```bash
# Full database backup
pg_dump -U edutract_user -d edutract_db > backup_$(date +%Y%m%d_%H%M%S).sql

# Compressed backup
pg_dump -U edutract_user -d edutract_db | gzip > backup_$(date +%Y%m%d_%H%M%S).sql.gz

# Automated daily backup
# Add to crontab (crontab -e):
0 2 * * * pg_dump -U edutract_user -d edutract_db | gzip > /backups/backup_$(date +\%Y\%m\%d).sql.gz
```

### Restore PostgreSQL

```bash
# Restore from backup
psql -U edutract_user -d edutract_db < backup_20240616.sql

# Restore from compressed backup
gunzip -c backup_20240616.sql.gz | psql -U edutract_user -d edutract_db
```

## SSL/TLS Configuration

### Using Let's Encrypt with Nginx

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Obtain certificate
sudo certbot certonly --nginx -d yourdomain.com

# Configure Nginx
sudo vim /etc/nginx/sites-available/default

# Add to Nginx config:
server {
    listen 443 ssl;
    ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;
    server_name yourdomain.com;
    
    location / {
        proxy_pass http://localhost:5000;
    }
}

# Restart Nginx
sudo systemctl restart nginx

# Auto-renew certificates
sudo certbot renew --dry-run
```

## Monitoring & Logging

### Setup Monitoring

```bash
# Install New Relic Agent
npm install newrelic

# Install PM2 Monitoring
pm2 install pm2-auto-pull
pm2 install pm2-logrotate
```

### Log Aggregation

```bash
# View logs
cat /var/log/edutract-api.log

# Real-time logs
tail -f /var/log/edutract-api.log

# Search logs
grep "ERROR" /var/log/edutract-api.log
```

## Performance Optimization

### Enable Caching

```bash
# Redis cache
REDIS_URL=redis://localhost:6379
CACHE_TTL=3600
```

### Database Optimization

```bash
# Analyze query performance
EXPLAIN ANALYZE SELECT * FROM students WHERE class_id = 'uuid';

# Vacuum database
VACUUM ANALYZE;
```

## Troubleshooting

### Common Issues

1. **Database Connection Error**
   ```bash
   # Check PostgreSQL status
   sudo systemctl status postgresql
   
   # Restart PostgreSQL
   sudo systemctl restart postgresql
   ```

2. **Port Already in Use**
   ```bash
   # Kill process using port 5000
   lsof -i :5000
   kill -9 <PID>
   ```

3. **High Memory Usage**
   ```bash
   # Check memory
   free -h
   
   # Clear cache
   redis-cli FLUSHALL
   ```

## Maintenance

### Regular Tasks

- Daily: Check logs, monitor performance
- Weekly: Database optimization, backup verification
- Monthly: Security updates, dependency updates
- Quarterly: Performance audit, capacity planning