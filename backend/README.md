# Backend - EduTrack Nigeria API

Node.js/Express REST API for EduTrack Nigeria school management system.

## Tech Stack

- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Database**: PostgreSQL
- **ORM**: TypeORM
- **Authentication**: JWT
- **Validation**: Joi
- **Documentation**: Swagger/OpenAPI
- **Real-time**: Socket.io

## Project Structure

```
backend/
├── src/
│   ├── config/           # Configuration files
│   ├── controllers/      # Request handlers
│   ├── models/           # Database entities
│   ├── routes/           # API routes
│   ├── services/         # Business logic
│   ├── middlewares/      # Custom middlewares
│   ├── utils/            # Utility functions
│   ├── types/            # TypeScript types
│   └── app.ts            # Express app setup
├── database/
│   ├── migrations/       # Database migrations
│   └── seeds/            # Database seeders
├── tests/                # Test files
├── .env.example          # Environment variables example
├── tsconfig.json         # TypeScript configuration
├── package.json          # Dependencies
└── README.md             # Documentation
```

## Installation

```bash
# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Run migrations
npm run migrate

# Start development server
npm run dev
```

## Environment Variables

See `.env.example` for all required variables.

## API Documentation

Swagger documentation available at: `http://localhost:5000/api-docs`

## Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run migrate      # Run database migrations
npm run test         # Run tests
npm run lint         # Run ESLint
```