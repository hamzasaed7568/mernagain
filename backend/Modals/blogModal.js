import mongoose from "mongoose";

const blogModalSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    author:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    }
},
{
    timestamps:true
})
const blogModal = mongoose.model("data",blogModalSchema);
export default blogModal