import axios from "axios"


export const signIn = (info) => async (dispatch) =>{
    try {
    console.log(info , "info in action sign in");
    dispatch({type:"SIGN_IN"})
    const {data} = await axios.post("http://localhost:5000/signin",info)
    console.log(data , "data recieved from server on request");
    dispatch({
        type:"SIGN_IN_SUCCESS",
        payload:data
    })
    
   } catch (error) {
      dispatch({
          type:"SIGN_IN_FAIL",
          payload:error
      }) 
   }
} 
export const signUp = (info) => async (dispatch) =>{
    try {
        console.log(info , "info in action sign up");
        dispatch({type:"SIGN_UP"})
        const {data} = await axios.post("http://localhost:5000/signup",info)
        console.log(data , "data recieved from server on request signup");
    
        dispatch({
            type:"SIGN_UP_SUCCESS",
            payload:data
        })
        
       } catch (error) {
          dispatch({
              type:"SIGN_UP_FAIL",
              payload:error
          }) 
       }
}

