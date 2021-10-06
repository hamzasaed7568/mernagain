import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();

const connectDB = async () =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useUnifiedTopology:true
        })
        console.log(`db is connected on host ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(`error ${error}`.red.bold.underline)
        process.exit(1)
    }
}
export default connectDB;