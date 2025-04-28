import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./Routes/ReviewFilter.js";

dotenv.config();
const app = express();


app.use(express.json());
app.use(cors("*"));
app.use("/", router);
app.listen(3000, () => {
    console.log(`Server is running on port ${3000}`);
});


