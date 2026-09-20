# Node Accounting API

A simple Node.js REST API for accounting and expense tracking, built with Express.js.

## Features

- User management (Create, Read, Update, Delete)
- Expense tracking (Create, Read, Update, Delete)
- In-memory data storage
- CORS enabled

## Prerequisites

- Node.js v20.x or higher
- npm

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

To start the server in development mode:
```bash
npm run dev
```

To start the server normally:
```bash
npm start
```

The server will run on `http://localhost:3000`.

## API Endpoints

### Users

- `GET /users` - Get all users
- `GET /users/:id` - Get a user by ID
- `POST /users` - Create a new user
- `PATCH /users/:id` - Update a user
- `DELETE /users/:id` - Delete a user

### Expenses

- `GET /expenses` - Get all expenses
- `GET /expenses/:id` - Get an expense by ID
- `POST /expenses` - Create a new expense
- `PATCH /expenses/:id` - Update an expense
- `DELETE /expenses/:id` - Delete an expense

## Testing and Linting

Run tests:
```bash
npm test
```

Run linter:
```bash
npm run lint
```