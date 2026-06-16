# EduTrack Nigeria - Modern School Management System

![EduTrack Nigeria](https://img.shields.io/badge/EduTrack-Nigeria-green?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)
![Status](https://img.shields.io/badge/status-Active-brightgreen?style=flat-square)

A comprehensive school management and learning platform designed specifically for Nigerian schools (KG1-SS3), built with modern web technologies and React Native for mobile.

## 🎯 Purpose

EduTrack Nigeria is a simplified school management system tailored for Nigerian educational institutions, combining:
- Student management and profiles
- Continuous Assessment System (CA1, CA2, CA3)
- Three-term academic structure
- Digital report cards
- Attendance tracking
- Learning materials and lesson notes
- Parent portal
- Teacher assessment tools

## 🎨 Design Philosophy

- **Clean & Modern UI** - Minimalist design with maximum usability
- **Mobile-First** - Responsive design optimized for all devices
- **Color Palette** - Green and blue educational theme
- **Accessibility** - WCAG 2.1 compliant
- **Simple Navigation** - Intuitive user flows with minimal learning curve

## 📱 Supported Levels

- **Kindergarten**: KG1, KG2
- **Primary School**: Primary 1-6
- **Junior Secondary**: JSS1-JSS3
- **Senior Secondary**: SS1-SS3

## 👥 User Roles

1. **Administrator** - System management, school settings
2. **Teacher** - Assessment creation, attendance, grading
3. **Student** - Assignments, results, lesson access
4. **Parent** - Result viewing, attendance tracking, notifications

## ✨ Core Features

### Dashboard
- Personalized dashboards per user role
- Quick statistics and KPIs
- AI-powered learning suggestions
- Upcoming assessments
- Attendance summary
- Recent results

### Academic Management
- Class and subject management
- Three-term structure (Term 1, 2, 3)
- All Nigerian school subjects

### Continuous Assessment System
- CA1: Assignment
- CA2: Quiz/Test
- CA3: Project/Classwork
- Examination Score
- Automatic grading calculations

### Report Card System
- Mid-term reports
- End-of-term reports
- Annual cumulative reports
- Grade generation (A-F)
- Promotion recommendations

### Learning Materials
- Lesson notes
- Audio-visual instructional materials
- Sample videos
- Practical items

### Attendance Management
- Daily attendance marking
- Attendance reports
- Percentage calculations
- Parent notifications

## 🛠️ Tech Stack

### Web Application
- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express, PostgreSQL
- **Authentication**: JWT, OAuth
- **Real-time**: WebSocket
- **State Management**: Redux Toolkit

### Mobile Application (APK)
- **Framework**: React Native with Expo
- **State Management**: Redux Toolkit
- **UI Library**: React Native Paper
- **Database**: SQLite (local), Firebase (sync)

## 📊 Grade Calculation

### Continuous Assessment
```
Final Score = CA1 + CA2 + CA3 + Exam Score
```

### Grade Scale
| Grade | Range |
|-------|-------|
| A | 70–100 |
| B | 60–69 |
| C | 50–59 |
| D | 45–49 |
| E | 40–44 |
| F | 0–39 |

## 📖 Documentation

- [Backend API Documentation](./docs/API.md)
- [Database Schema](./docs/DATABASE.md)
- [Deployment Guide](./docs/DEPLOYMENT.md)
- [User Guides](./docs/USER_GUIDES/)

## 🚀 Quick Start

```bash
# Clone repository
git clone https://github.com/Loveth316/EduTrack-Nigeria.git
cd EduTrack-Nigeria

# Using Docker
docker-compose up -d

# Or install manually
cd backend && npm install && npm start
cd ../web && npm install && npm start
cd ../mobile && npm install && npm start
```

## 📁 Project Structure

```
EduTrack-Nigeria/
├── backend/                 # Node.js/Express API
├── web/                     # React web application
├── mobile/                  # React Native mobile app
├── docs/                    # Documentation
└── docker-compose.yml       # Docker configuration
```

## 📄 License

MIT License - See LICENSE file for details

## 🤝 Contributing

Contributions are welcome! Please read our [contributing guidelines](./CONTRIBUTING.md)

## 📧 Support

For support, email: support@edutracknigeria.com

---

**Made with ❤️ for Nigerian Education**