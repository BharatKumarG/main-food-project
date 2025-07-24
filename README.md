# FoodHub - Andhra Cuisine Restaurant

A modern, responsive restaurant website built with React, TypeScript, and Tailwind CSS, featuring Xano backend integration for user authentication.

## Features

- 🍽️ Beautiful restaurant interface with authentic Andhra cuisine menu
- 🛒 Shopping cart functionality with real-time updates
- 🔐 Modern authentication system with Xano backend integration
- 📱 Fully responsive design for all devices
- ⚡ Fast and smooth animations with Framer Motion
- 🎨 Clean, modern UI with Tailwind CSS

## Xano Backend Setup

To integrate with your Xano backend, follow these steps:

### 1. Create Xano Workspace
1. Go to [Xano.com](https://xano.com) and create an account
2. Create a new workspace for your restaurant app

### 2. Database Setup
Create a `users` table with the following fields:
- `id` (Integer, Auto Increment, Primary Key)
- `name` (Text)
- `email` (Text, Unique)
- `password` (Text)
- `created_at` (DateTime, Default: now())

### 3. API Endpoints
Create the following API endpoints in Xano:

#### POST `/auth/signup`
- **Input**: `name`, `email`, `password`
- **Function Stack**:
  1. Hash password using bcrypt
  2. Create user record
  3. Generate JWT token
  4. Return user data and token

#### POST `/auth/login`
- **Input**: `email`, `password`
- **Function Stack**:
  1. Find user by email
  2. Verify password with bcrypt
  3. Generate JWT token
  4. Return user data and token

### 4. Configure Your App
Update the `XANO_BASE_URL` in `src/context/AuthContext.tsx`:

```typescript
const XANO_BASE_URL = 'https://your-workspace-id.us-east-1.xano.io/api:your-api-group-id';
```

Replace:
- `your-workspace-id` with your actual Xano workspace ID
- `your-api-group-id` with your API group ID from Xano

### 5. Expected API Response Format

**Signup/Login Success Response:**
```json
{
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "created_at": "2024-01-01T00:00:00Z"
  },
  "authToken": "your-jwt-token-here"
}
```

**Error Response:**
```json
{
  "message": "Error description here"
}
```

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

## Authentication Features

- ✅ Beautiful modal-based authentication UI
- ✅ Login and signup forms with validation
- ✅ Password visibility toggle
- ✅ Form error handling
- ✅ Loading states and animations
- ✅ Automatic token storage and retrieval
- ✅ User session persistence
- ✅ Responsive design for mobile and desktop

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Backend**: Xano (BaaS)
- **Authentication**: JWT tokens with localStorage

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── AuthModal.tsx   # Authentication modal
│   ├── Navbar.tsx      # Navigation with auth integration
│   └── ...
├── context/            # React context providers
│   ├── AuthContext.tsx # Authentication state management
│   └── CartContext.tsx # Shopping cart state
├── data/               # Static data and types
└── App.tsx            # Main application component
```

## Deployment

The app is ready for deployment on platforms like Netlify, Vercel, or any static hosting service. Make sure to update the Xano API URL for production.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - feel free to use this project for your own restaurant or business needs.