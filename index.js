import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to mongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(helmet());
// to make input as json
app.use(express.json());
app.use(cookieParser());
// Parse the allowed origins from .env

// const allowedOrigins = process.env.ALLOWED_ORIGINS
//   ? process.env.ALLOWED_ORIGINS.split(",")
//   : ["http://localhost:5173"]; 

// app.use(
//   cors({
//     origin: (origin, callback) => {
//       console.log('ORIGIN:',origin)
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true); 
//       } else {
//         callback(new Error("Not allowed by CORS")); 
//       }
//     },
//     credentials: true,
//   })
// );



// app.use(
//   cors({
//     origin: "*", // Allow all origins
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allow all methods
//     credentials: true,
//   })
// );

app.use(
  cors({
    origin: 'https://notetaker-three-henna.vercel.app', // Frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    credentials: true, // Allow cookies if needed
  })
);
app.use((req,res,next)=>{
console.log('req.cookies:', req.cookies);
next();
})
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

// import routes
import authRouter from "./routes/auth.route.js";
import noteRouter from "./routes/note.route.js";
import ProfileRouter from './routes/profile.route.js'

app.use("/api/auth", authRouter);
app.use("/api/note", noteRouter);
app.use('/api/profile',ProfileRouter)

// error handling
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Serer Error";

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
