import React, { useEffect } from 'react';
import './App.css';
import {selectUser,login,logout} from "./features/userSlice";
import { useDispatch, useSelector } from 'react-redux';
import Feed from './components/Feed/Feed';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Login from './components/Login/Login';
import {auth} from './firebase';

function App() {
  const user=useSelector(selectUser);
  const dispatch=useDispatch();
  useEffect(()=>{
    //listen to any sort of authentication changes
    auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
        //user is logged in
        dispatch(login({
          email:userAuth.email,
          uid:userAuth.uid,
          displayName:userAuth.displayName,
          photoURL:userAuth.photoURL,
        }));
      }else{
        // user is logged out
        dispatch(logout());
      }
    })
  },[])
  return (
    <div className="app">
      <Header/>
      {!user ?(
        <Login/>
      ) :(
      <div className="app__body">
        <Sidebar/>
        {/* Feed */}
        <Feed/>
        {/* Widgets */}
      </div>)}
      
    </div>
  );
}

export default App;
