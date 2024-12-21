import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function dbConnect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connection successful");
    return;
  } catch (error) {
    console.log(error);
  }
}

export default dbConnect;
