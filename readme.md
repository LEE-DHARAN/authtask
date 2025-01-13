# User Authentication with Bearer Tokens

This project implements user authentication and authorization using JWT and Bearer tokens in a Node.js/Express application. It uses MongoDB with Mongoose for data persistence.

## Setup

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up `.env` file:
   ```
   MONGO_URI=mongodb://localhost:27017/user-auth
   JWT_SECRET=your_jwt_secret
   ```
4. Run the server:
   ```bash
   npm start
   ```

## Endpoints
- **POST** `/api/auth/register`: Register a new user.
- **POST** `/api/auth/login`: Login to get a JWT token.
- **GET** `/api/auth/user-info`: Get user info (protected route, requires JWT).

## Testing with Postman
- Use Postman to test the routes and view the documentation.
