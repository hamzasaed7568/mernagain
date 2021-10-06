import asyncHandler from "express-async-handler"
import User from "../Modals/userModal.js"
import bcrypt from "bcryptjs"


const signinProcess = asyncHandler(async(req,res)=>{
    console.log("data recieved is ",req.body);
    const {email , password} = req.body;
    const user = await User.findOne({email})
    if(user)
    {
        bcrypt.compare(password , user.password , (err,doMatch)=>{
            if(doMatch)
            {
                return res.json(user)
            }
            else
            {
                res.json({message:"user name or email does not exist"})
            }
        })
    } 
    else
    {
        res.json({message:"user name or email does not exist"})
    }
})

const signupProcess = asyncHandler(async (req,res)=>{
    console.log("data recieved in sigup is" + req.body);
    const {name ,email , password} = req.body;

    if(!name || !email || !password)
    {
        return await res.status(401).json({message:"plzz fill all entries"})
    }
    bcrypt.hash(password,12).then((hashPassword)=>{
        const user =new User({
            name,
            email,
            password:hashPassword
        })
        user.save().then(()=>{
            console.log("data saved successfully");
        })
    })
    await res.json({message:"data saved succesfully"})

})

export {signinProcess , signupProcess}
