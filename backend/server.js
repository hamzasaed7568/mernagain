import express from "express"
import colors from "colors"
import dotenv from "dotenv"
import cors from "cors";
import userRoutes from "./routes/userRouter.js"
import connectDB from "./config/db.js";
connectDB();

const app = express();
dotenv.config();
app.use(cors())
app.use(express.json())
app.use("/",userRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`server is running in ${process.env.NODE_ENV} made on port ${PORT}`.yellow.bold);
})








