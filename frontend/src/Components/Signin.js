import React,{useState} from 'react'
import {Link} from "react-router-dom"
import {useDispatch , useSelector} from "react-redux"
import {signIn} from "../actions/userAction"

const Signin = () => {
    const dispatch = useDispatch();
    const [info,setInfo] = useState({
        email:null,password:null
    })
    const signInR = useSelector(state => state.signIn)
    const {user , loading , error} = signInR;

    const handleSignIn = () =>{
        dispatch(signIn(info))
    }
    const handleChange = (e) =>{
        setInfo({...info,[e.target.name]:e.target.value})
    }
    // console.log(user ,"sign in route user recieved after sign in");
    return (
        <div>
            <form action="">
                <label htmlFor="">
                   Email : <input type="email" name="email" id="" required onChange={handleChange} />
                </label>
                <label htmlFor="">
                   Password : <input type="password" name="password" id="" required onChange={handleChange} />
                </label>
                <button type="submit" onClick={handleSignIn}><Link to="/profile">Sign in</Link></button>
            </form>
            <Link to="/">back to home</Link>
        </div>
    )
}

export default Signin
