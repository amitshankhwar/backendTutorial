import express, { json } from "express";
import dotenv from "dotenv";
import dbConnect from "./db/dbConnect.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
dotenv.config();

app.use(express.json()); //

dbConnect();

app.use("/api/v1", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`server is running on PORT ${process.env.PORT}`);
});

//MVC -> MODAL(DATA MODAL), VIEW(REACT) , CONTROLLER(logic)
