# Notes Application (MERN Stack)

## Project Overview
This is a Notes Application built using the MERN stack, following the MVC architecture. It provides secure and efficient note management with essential CRUD operations, JWT-based authentication, and responsive UI.

## Features
- **User Authentication**: Secure login and signup using JWT and bcrypt.
- **Notes Management**: Create, read, update, and delete notes with:
  - Title (required)
  - Content (optional)
  - Timestamps for creation and updates
  - Category-based filtering
- **Responsive UI**: Built with React.js and styled using Tailwind CSS.
- **Security Enhancements**:
  - Secure routes with JWT middleware.
  - Input validation and sanitization.
  - HTTP headers secured with Helmet.js.
  - CORS configuration for trusted origins.

## Bonus Features (Optional)
- Real-time updates using WebSocket or polling (not implemented).
- Dark mode toggle (not implemented).

---

## Backend Setup

### Prerequisites
Ensure the following are installed on your system:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Steps to Set Up

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   cd backend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Environment Variables**:
   Create a `.env` file in the `backend` directory with the following:
   ```env
   PORT=5000
   MONGO_URI=<your-mongodb-uri>
   JWT_SECRET=<your-jwt-secret>
   ```

4. **Run the Application**:
   Start the backend server:
   ```bash
   npm start
   ```

   Alternatively, for development with live-reloading:
   ```bash
   npm run dev
   ```

5. **API Endpoints**:
   - `POST /api/users/signup`: User signup
   - `POST /api/users/login`: User login
   - `GET /api/notes`: Get all notes
   - `POST /api/notes`: Create a note
   - `PUT /api/notes/:id`: Update a note
   - `DELETE /api/notes/:id`: Delete a note

---

## Frontend Setup

Refer to the frontend `README.md` in the `/frontend` folder for setup instructions.

---

## Deployment
The application is deployed at: [Live Demo Link](#)

---

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

---

## License
This project is licensed under the [MIT License](LICENSE).
