# URL SHORTNER
- A URL shortner service that takes in a valid URL and returns a shortened URL, redirecting the user to the previous provided URL.

- Also keep track of total visits/clicks on the URL.

## Routes

- Post /url - Generates a new short url and returns the shortned url in formal example.com/random-id

- Get /:id - redirects user to the original URL

- Get /url/analytics/:id - returns the clics for provided short id