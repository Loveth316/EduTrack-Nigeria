# Mobile Application - EduTrack Nigeria

React Native mobile application for EduTrack Nigeria school management system.

## Tech Stack

- **Framework**: React Native with Expo
- **Language**: TypeScript
- **State Management**: Redux Toolkit
- **Navigation**: React Navigation
- **UI Library**: React Native Paper
- **HTTP Client**: Axios
- **Local Storage**: AsyncStorage
- **Charts**: React Native SVG Charts
- **Build**: EAS Build

## Project Structure

```
mobile/
├── app.json                 # Expo configuration
├── app.config.js           # Environment-specific config
├── eas.json                # EAS Build configuration
├── src/
│   ├── screens/            # Screen components
│   │   ├── auth/
│   │   ├── dashboard/
│   │   ├── assessments/
│   │   ├── results/
│   │   ├── attendance/
│   │   └── profile/
│   ├── components/         # Reusable components
│   ├── navigation/         # Navigation setup
│   ├── store/              # Redux store
│   ├── services/           # API services
│   ├── types/              # TypeScript types
│   ├── utils/              # Utility functions
│   ├── styles/             # Global styles
│   └── App.tsx             # App entry point
├── assets/                 # Images, fonts
├── package.json
└── README.md
```

## Installation

```bash
# Install dependencies
npm install

# Install Expo CLI globally (if not already)
npm install -g expo-cli

# Create .env file
cp .env.example .env

# Start development server
npm start
```

## Build APK

```bash
# Login to Expo
eas login

# Build APK
eas build --platform android

# Or local build (requires Android SDK)
npm run android
```

## Available Scripts

```bash
npm start       # Start Expo development server
npm run android # Build and run on Android emulator
npm run ios     # Build and run on iOS simulator (macOS only)
npm run web     # Run on web browser
npm run build   # Create production build
```