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
   git clone https://github.com/sum1275/Notes-App-Backend.git
   cd Notes-App-Backend
   
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Environment Variables**:
   Create a `.env` file in the `backend` directory with the following:
   ```env
   JWT_SECRET=c1fe0a2ad32f7aeb27bae00dc6f505c709996ba9e8a9babeedf089148f113a
   MONGO_URI=mongodb://localhost:27017/notesAppTest
   PORT=3000
   ALLOWED_ORIGINS=http://localhost:5173
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
   - `GET /api/profile/:id :Get Profile
   - `PUT /api/profile/:id` :Update Profile
   - `PUT /api/profile/password/:id` :Update Password



## Deployment
The application is deployed at: [Live Demo Link](https://notetaker-three-henna.vercel.app/)

---

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

---


