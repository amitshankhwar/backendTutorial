import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.listen(process.env.PORT, () => {
  console.log(`server is running on PORT ${process.env.PORT}`);
});

//MVC -> MODAL(DATA MODAL), VIEW(REACT) , CONTROLLER(logic)