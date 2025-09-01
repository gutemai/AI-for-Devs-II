# PollApp - Modern Polling Application

A Next.js-based polling application with user authentication, poll creation, and real-time voting capabilities.

## Features

- **User Authentication**: Login and signup functionality
- **Poll Management**: Create, view, and vote on polls
- **Real-time Results**: See live voting results
- **Responsive Design**: Modern UI built with Tailwind CSS and Shadcn components
- **TypeScript**: Full type safety throughout the application

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   ├── auth/         # Authentication endpoints
│   │   └── polls/        # Poll management endpoints
│   ├── auth/              # Authentication pages
│   │   ├── login/        # Login page
│   │   └── signup/       # Signup page
│   ├── polls/             # Poll-related pages
│   │   ├── create/       # Create poll page
│   │   └── page.tsx      # Polls listing page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/             # Reusable components
│   ├── auth/              # Authentication components
│   │   ├── LoginForm.tsx
│   │   └── SignupForm.tsx
│   ├── layout/            # Layout components
│   │   └── Navigation.tsx
│   ├── polls/             # Poll-related components
│   │   ├── CreatePollForm.tsx
│   │   ├── PollCard.tsx
│   │   └── PollList.tsx
│   └── ui/                # Shadcn UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── label.tsx
├── lib/                    # Utility functions
│   └── utils.ts
└── types/                  # TypeScript type definitions
    └── index.ts
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   cd polling-app
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Features in Detail

### Authentication System
- **Login Form**: Email/password authentication
- **Signup Form**: User registration with name, email, and password
- **Protected Routes**: Future implementation for authenticated-only areas

### Poll Management
- **Create Polls**: Dynamic form with multiple options
- **View Polls**: Grid layout displaying all active polls
- **Vote System**: Interactive voting on poll options
- **Results Display**: Visual representation of voting results

### UI Components
- **Shadcn Components**: Modern, accessible UI components
- **Responsive Design**: Mobile-first approach
- **Tailwind CSS**: Utility-first CSS framework

## API Endpoints

### Authentication
- `POST /api/auth/login` - User login

### Polls
- `GET /api/polls` - Fetch all polls
- `POST /api/polls` - Create new poll

## Future Enhancements

- [ ] Database integration (PostgreSQL/MongoDB)
- [ ] Real-time updates with WebSockets
- [ ] User profile management
- [ ] Poll categories and tags
- [ ] Advanced analytics and reporting
- [ ] Email notifications
- [ ] Social sharing features

## Technology Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, Shadcn UI
- **State Management**: React hooks (useState, useEffect)
- **API**: Next.js API routes
- **Authentication**: JWT tokens (placeholder)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.
