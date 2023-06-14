import express from 'express';

import mongoose from 'mongoose';

import cors from 'cors';

import dotenv from 'dotenv';

import postRouter from "./routes/post-routes.js";
import userRouter from './routes/user-routes.js';
const app = express();
dotenv.config();


app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.use("/user", userRouter);
app.use("/posts", postRouter);
app.use('/', (req, res, next) => {
    res.send("Server Running")
});

const PORT = process.env.PORT || 8000;
mongoose.connect(
    process.env.MONGO_URL
)
    .then(() => console.log("Database connected Successfully"))
    .then(() => app.listen(PORT, () => console.log(`Server is running Successfully on PORT ${PORT}`)))
    .catch((error)=> console.log('Error while connecting to the database '));