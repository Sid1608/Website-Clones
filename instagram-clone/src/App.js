import React, { useState, useEffect } from "react";
import "./App.css";
import Post from "./Post";
import { auth, db } from "./firebase";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button,Input } from "@material-ui/core";
import ImageUpload from "./ImageUpload"
import InstagramEmbed from 'react-instagram-embed';

function getModalStyle() {
  const top = 50 ;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  }, 
}));




function App() {
  const classes=useStyles();
  const [modalStyle]=useState(getModalStyle);

  const [posts, setPosts] = useState([]); /*just to set variable in react */
  const [open, setOpen]=useState(false);
  const [openSignIn,setOpenSignIn]=useState(false);
  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  /* TO keep track of user */
  const [user,setUser]=useState(null);
  //UseEffect runs a piece of code based on specific conditions
  

  /** authenticate the user*/
  useEffect(()=>{
    /**then functin will listen any authentication changes happen i.e every single time andy changel happen this fireoff*/
   const unsubscribe=auth.onAuthStateChanged( (authUser)=>{
     if(authUser){
       //user has logged in
       console.log(authUser)
       /**it will even survive on refresh let if you login and refresh this will keep you login, state is not persistent but onAuthStateChanges keeps you logi in */
       setUser(authUser);
       if(authUser.displayName){
         //dont update username
       }else{
         // if we just created someone go to the user you just logged in with update their profile 
         return authUser.updateProfile({
           displayName: username
         });
       }
     
     }else{
       //User has logged out
 
       /* IF LOG OUT user will be null */
       setUser(null);
     }
   })
   return ()=>{
     //perform some clean up action before you refire remove spamming
     unsubscribe();
   }
  },[user,username]);
 
  useEffect(() => {
    /*  onSnapshot is a very powerful listener. Every single time db changes in a collection it takes snapshot of that colection, basically every single time db chages this code runs*/
    // db.collection('posts').onSnapshot(snapshot=>{
    //   setPosts(snapshot.docs.map(doc=>doc.data()))
    // });
    /**Every single time a new post added or something pushed into a collection this code fireof */
    /**How do we pull indivdual post id */
    /* Every single document has its own unique id  */
    db.collection("posts").orderBy('timestamp',"desc").onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }))
      );
    });
  }, []);
  // if blank it will runs once when app component loads but it will not gonna run again

 
  const signUp=(event)=>{
    event.preventDefault();
    auth
    .createUserWithEmailAndPassword(email,password)
    .then((authUser)=>{
      return authUser.user.updateProfile({
        displayName: username
      })
    })
    .catch((error)=>alert(error.message));
    setOpen(false);
  }

  const signIn=(event)=>{
    event.preventDefault();//does not refresh
    auth
    .signInWithEmailAndPassword(email,password)
    .catch((error)=>alert(error.message))

    setOpenSignIn(false);

  }
  return (
    
    <div className="App">
      
       
    




       {/* When we click it pops on  */}
       {/* Sign Up modal */}
      <Modal 
        open={open}
        onClose={()=>setOpen(false)}
       >
    
        
        <div style={modalStyle} className={classes.paper}>
          
          <form className="app_signup">
            <center>
              <img
                className="app__headerImage"
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                alt=""
              /> 
            </center>
            <Input
              placeholder="username"
              type="text"
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
            />
            <Input
              placeholder="email"
              type="text"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            <Input
              placeholder="password"
              type="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
            <Button type="submit" onClick={signUp}>SignUp</Button>
          </form>
        </div> 
      
      </Modal>

      {/* sign In Modal */}
      <Modal 
        open={openSignIn}
        onClose={()=>setOpenSignIn(false)}
       >
    
        
        <div style={modalStyle} className={classes.paper}>
          
          <form className="app_signup">
            <center>
              <img
                className="app__headerImage"
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                alt=""
              /> 
            </center>
            <Input
              placeholder="email"
              type="text"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            <Input
              placeholder="password"
              type="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
            <Button type="submit" onClick={signIn}>Sign In</Button>
          </form>
        </div> 
      
      </Modal>

      {/* instagram Logo Header */}
      <div className="app_header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        /> 
        
        {/* SignIn SignUp button */}
        {user?(
          <Button onClick={()=>auth.signOut()}>Logout</Button>

        ):(
          <div className ="app__loginContainer">
          <Button onClick={()=>setOpenSignIn(true)}>Sign In</Button>
          <Button onClick={()=>setOpen(true)}>Sign Up</Button>
          </div>
        )}
      </div>
      
      <div className="app_posts">
           <div className="app_postsLeft">
    
          {/* Display All Posts */}
          {
            posts.map(({ id, post }) => (
              <Post
                key={id}
                postId={id}
                user={user}
                username={post.username}
                caption={post.caption}
                imageUrl={post.imageUrl}
              />
            ))
            /**without a key it actually rerender or refreshes then entire collecion but withkey it adds after the old */
          }
          </div>
          <InstagramEmbed
          url='https://www.instagram.com/p/CUYQXcVgJUP/'
          clientAccessToken='123|456'
          maxWidth={320}
          hideCaption={false}
          containerTagName='div'
          protocol=''
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
          <div className="app_postsRight">
              <InstagramEmbed
                url='https://www.instagram.com/p/CUYQXcVgJUP/'
                
                maxWidth={320}
                hideCaption={false}
                containerTagName='div'
                protocol=''
                injectScript
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
            />
        </div>
      </div>
      
      
      {user?.displayName?(
          <ImageUpload username={user.displayName}/>
        ):(
          <h3>Sorry you need to login to upload</h3>
        )
      }
    </div>
  );
}

export default App;
