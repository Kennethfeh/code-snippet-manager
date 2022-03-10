# Code Snippet Manager

A modern Next.js full-stack application for managing and organizing code snippets with PostgreSQL database.

## Features

- 📝 Create and edit code snippets with syntax highlighting
- 🏷️ Tag-based organization and filtering
- 🔍 Search functionality across snippets and tags
- 📋 Copy snippets to clipboard
- 🎨 Syntax highlighting for multiple programming languages
- 📱 Responsive design for mobile and desktop
- 🔐 User authentication and authorization
- 🗄️ PostgreSQL database with Prisma ORM

## Tech Stack

- **Frontend**: Next.js 13, React, TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Styling**: Tailwind CSS
- **Authentication**: NextAuth.js
- **Code Highlighting**: react-syntax-highlighter
- **Testing**: Jest, React Testing Library

## Getting Started

### Prerequisites

- Node.js 16.x or later
- PostgreSQL database
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd code-snippet-manager
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your database connection and other configuration.

4. Set up the database:
   ```bash
   npm run db:generate
   npm run db:migrate
   npm run db:seed
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Usage

### Creating Snippets

1. Click the "New Snippet" button
2. Enter a title and description
3. Select the programming language
4. Paste your code
5. Add relevant tags
6. Save the snippet

### Searching and Filtering

- Use the search bar to find snippets by title or content
- Filter by programming language
- Filter by tags
- Sort by date created or modified

### Managing Snippets

- Edit existing snippets by clicking the edit button
- Delete snippets you no longer need
- Copy snippet code to clipboard with one click

## Database Schema

The application uses the following main models:

- **Snippet**: Core snippet data (title, content, language, etc.)
- **Tag**: Tags for categorizing snippets
- **User**: User accounts and authentication
- **SnippetTag**: Many-to-many relationship between snippets and tags

## API Routes

- `GET /api/snippets` - List snippets with filtering
- `POST /api/snippets` - Create new snippet
- `GET /api/snippets/[id]` - Get single snippet
- `PUT /api/snippets/[id]` - Update snippet
- `DELETE /api/snippets/[id]` - Delete snippet
- `GET /api/tags` - List all tags
- `POST /api/tags` - Create new tag

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Lint code
npm run lint

# Database operations
npm run db:migrate    # Run database migrations
npm run db:generate   # Generate Prisma client
npm run db:seed       # Seed database with sample data
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

Kenneth Feh - 2022
