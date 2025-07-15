import mongoose from "mongoose";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
import { DB_NAME } from "./constants.js";
import express from "express";
dotenv.config({
  path: "./env",
});

connectDB();
// const app = express();
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.error("MongoDB connection error:", error);
//     });
//   } catch (error) {
//     console.error("Error during initialization:", error);
//     throw error;
//   }
// })();
