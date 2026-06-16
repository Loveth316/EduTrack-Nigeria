# Web Application - EduTrack Nigeria

React 18 web application for EduTrack Nigeria school management system.

## Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **HTTP Client**: Axios
- **Routing**: React Router v6
- **UI Components**: Headless UI, React Icons
- **Form Handling**: React Hook Form
- **Charts**: Chart.js
- **Build Tool**: Vite

## Project Structure

```
web/
├── public/
├── src/
│   ├── components/
│   │   ├── common/
│   │   ├── dashboard/
│   │   ├── layout/
│   │   ├── forms/
│   │   └── charts/
│   ├── pages/
│   │   ├── auth/
│   │   ├── dashboard/
│   │   ├── classes/
│   │   ├── students/
│   │   ├── assessments/
│   │   ├── results/
│   │   ├── attendance/
│   │   └── reports/
│   ├── layouts/
│   ├── hooks/
│   ├── services/
│   ├── store/
│   ├── styles/
│   ├── types/
│   ├── utils/
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Installation

```bash
# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Start development server
npm run dev
```

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
npm run type-check  # Type check with TypeScript
```