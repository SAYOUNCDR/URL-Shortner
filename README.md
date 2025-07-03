# URL Shortener

A simple and efficient URL Shortener service that takes in a valid long URL and returns a shortened URL. The service also keeps track of the total number of visits/clicks on each shortened link. It is built using Node.js, Express.js, MongoDB, NanoID, and follows the MVC architectural pattern. The project also uses EJS as the templating engine (if frontend views are added).

## Features

- Create short, shareable URLs.
- Redirect users to the original long URLs via the shortened link.
- Track total number of clicks/visits per URL.
- Built using Node.js, Express.js, MongoDB, and NanoID.
- Follows the MVC pattern for clean project structure.
- Supports future frontend rendering using EJS.

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- NanoID
- EJS (optional for frontend views)
- MVC Pattern

## API Routes

- `POST /`  
  Generates a new short URL and returns the shortened URL in the format:  
  `example.com/random-id`

- `GET /:id`  
  Redirects the user to the original long URL based on the provided short ID.

- `GET /url/analytics/:id`  
  Returns the total number of clicks/visits for the provided short ID.

## Folder Structure

- `/controllers` – Handles business logic.
- `/models` – Mongoose schemas for database models.
- `/routes` – API route definitions.
- `/views` – EJS templates (if implemented).
- `index.js` – Entry point of the application.
- `connection.js` – MongoDB connection logic.

## How to Run

1. Clone the repository.
2. Run `npm install` to install all dependencies.
3. Start the server using:
4. Use Postman or any API client to test the endpoints.

## Future Improvements

- Build a frontend for user input and URL shortening.
- Add URL expiry feature.
- Add authentication to manage user-specific URLs.
- Generate QR codes for shortened URLs.
- Deploy the application to cloud platforms.

## Note

This is a backend-focused project. API testing can be done using Postman or by building a simple frontend using EJS.
