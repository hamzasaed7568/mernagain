
export const signInReducer  = (state= {user : [] } , action) => {
    switch (action.type){
        case "SIGN_IN":
            return {loading:true , user:[]}
        case "SIGN_IN_SUCCESS":
            return {loading:false , user:action.payload}
        case "SIGN_IN_FAIL":
            return {loading:false , error:action.payload}   
        default:
            return state;
    }
}

export const signUpReducer = (state = {user : [] } ,action) => {
    console.log(action.payload ,  "data recived from server signup after sucesdfully");
    switch (action.type){
        case "SIGN_UP":
            return {loading:true , user:[]}
        case "SIGN_UP_SUCCESS":
            return {loading:false , user:[action.payload]}
        case "SIGN_UP_FAIL":
            return {loading:false , error:action.payload}        
        default:
            return state;
    }
}


