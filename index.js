import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./Routes/ReviewFilter.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors("*"));
app.use("/", router);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


