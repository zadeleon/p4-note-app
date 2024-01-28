import express from "express";
import process from "node:process";
import dotenv from "dotenv";
import mongooseService from "./services/mongooseService.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.set('port', PORT);

mongooseService(
    process.env.DB_HOST,
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD
  );

export default app;