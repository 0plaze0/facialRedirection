# facialRedirection

Rredirects you to website after facial reconigation

![HTML](https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## Table of contents

- [facialRedirection](#facialredirection)
  - [Table of contents](#table-of-contents)
  - [Built with](#built-with)
    - [Frontend](#frontend)
  - [Contributing](#contributing)
  - [Getting Started](#getting-started)

## Built with

#### Frontend

- HTML5
- CSS
- Javascript
- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev/guide/)
- face-api.js

> This project follows [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) message

<hr/>

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes.

## Getting Started

1. Clone the repository.
2. Install dependencies for both api and client: `npm install`

   ```
   //frontend
   VITE_BASE_API=(eg. http://localhost:5555/)

   //backend
   DB_URI=(eg. mongodb://127.0.0.1:27017/)
    SALT=(eg. 10)
    ACCESS_TOKEN_SECRET=(eg. secret)
   ```

3. Set up environment variables such as database connection string, JWT secret key, etc.
4. Start the server: `npm start`
5. Start the frontend development server: `npm start`
