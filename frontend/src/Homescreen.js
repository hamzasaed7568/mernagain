import React,{useState} from 'react'
import {Link} from "react-router-dom"
import {useDispatch , useSelector} from "react-redux"
import {signUp} from "./actions/userAction"

const Homescreen = () => {
    const dispatch = useDispatch();

    const [info , setInfo] = useState({name:null,email:null,password:null}) 
    
    const handleSignUp = (e) =>{
        e.preventDefault();
        // console.log(info , "info in action");
        dispatch(signUp(info))
    }
    
    const handleChange = (e) =>{
        setInfo({...info,[e.target.name]:e.target.value})
    }
    // console.log(info , "info in action");
    
    return (
        <div style={{display:'flex'}}>
           {/* <form  style={{display:"flex"}} onSubmit={handleSignUp}> */}
               <label htmlFor="">
                  Name : <input type="text" name="name" id="name" required onChange={handleChange} />
               </label>
               <label htmlFor="">
                  Email : <input type="email" name="email" id="email" required onChange={handleChange} />
               </label>
               <label htmlFor="">
                   Password : <input type="password" name="password" id="password" onChange={handleChange} />
               </label>
              <button type="button" onClick={handleSignUp}>  <Link to="/profile">SIGN UP</Link></button>
            {/* </form> */}
            <p>already have an account ? <Link to="/signin">sign in</Link></p>
        </div>
    )
}

export default Homescreen
