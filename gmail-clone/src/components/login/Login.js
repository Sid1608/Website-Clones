import React from 'react'
import "./Login.css";
import {auth} from './firebase';
const Login = () => {
  const dispatch=useDispatch();

  const signIn=()=>{
    auth
      .signInWithPopup(provider)
      .then(({user})=>{
        dispatch(
          login({
            displayName:user.displayName,
            email:user.email,
            photoUrl:user.photoURL,
          })
        )
      })
  }
  return (
    <div className="login">
       <div className="login__container"> 
          <img src="" alt=""/>
          <button varaint="contained" color="primary" onClick={signIn}>Login</button>
       </div>
    </div>
  )
}

export default Login;
