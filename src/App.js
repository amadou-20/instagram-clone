import React, { useState, useEffect } from "react";
import './App.css';
import Post from "./Post";
import { auth, db } from "./firebase";
import { Button, Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Modal } from '@material-ui/core';


function getModalStyle() {
  const top = 50;
  const left = 50;

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

     const [modalStyle] = React.useState(getModalStyle);
     const classes = useStyles();

     const [open, setOpen] = useState(false);
     const [openSignIn, setOpenSignIn] = useState(false);
     const [username, setUsername] = useState('');
     const [password, setPassword] = useState('');
     const [email, setEmail] = useState('');
     const [posts, setPosts] = useState([]);
     const [user, setUser] = useState(null);

     useEffect(() => {
      const unsubscribe= auth.onAuthStateChanged((authUser) => {
        if(authUser){
          console.log(authUser);  
          setUser(authUser);
          if(authUser.displayName){
  
          }else{
            return authUser.updateProfile({
              displayName: username,
            });
          }
        }else{
          setUser(null);
        }
      })
      return () => {
        unsubscribe();
      }
    },[user , username]);

     useEffect(() => {

     db.collection('posts').onSnapshot(snapshot => {
       // every time a new post is added, this code fires...
       setPosts(snapshot.docs.map(doc => ({  
        id: doc.id,
      post: doc.data()
      })));
     })
     }, [])

  return (
    <div className="App">
      <Modal
        open={openSignIn}
        onClose={() => setOpenSignIn(false)}
      >
    <div style={modalStyle} className={classes.paper}>
      <h2>The modal title</h2>
      <center>
      <img 
          className="app_headerImage"
          alt="abc" 
          src="https://cdn.pixabay.com/photo/2016/08/15/01/29/instagram-1594387_960_720.png"
            />
            
      <Input 
        placeholder="email"
        type="text"
        value={email}
        onchange={(e) => setEmail(e.target.value)}
      />

      <Input 
        placeholder="password"
        type="password"
        value={password}
        onchange={(e) => setPassword(e.target.value)}
      />
      </center>
        <Button onClick={signIn}>Sign Up</Button>
    </div>
      </Modal>

        <div className="app_header">
           <img 
             className="app_headerImage"
             alt="abc" 
             src="https://cdn.pixabay.com/photo/2016/08/15/01/29/instagram-1594387_960_720.png"
            />
        </div>

         <Button onClick={() => setOpen(true)}>Sign up</Button>
         
        <h1>let's build a instagram clone Here clever programmers</h1>

       {
           posts.map(({id, post}) => (
             <Post  username={post.username} caption={post.caption} imageUrl={post.imageUrl} key={id} />
         ))
       }

    </div>
  );
}

export default App;