import React, { useState, useEffect } from "react";
import './App.css';
import Post from "./Post";
import { db } from "./firebase";
import { Button } from '@material-ui/core';
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
     const [posts, setPosts] = useState([
      {
        username: "Qazi", 
         caption: "WOW it works", 
        imageUrl: "https://blog.desafiolatam.com/wp-content/uploads/2019/04/react-galaxia.png",
      },

      {
        username: "Jonathan",
         caption: "Hello world",
        imageUrl: "https://cdn.pixabay.com/photo/2020/10/09/19/39/utah-5641320_960_720.jpg",
      }
     ]);

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
        open={open}
        onClose={() => setOpen(false)}  
      >
    <div style={modalStyle} className={classes.paper}>
      <h2>The modal title</h2>
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

        <h1>let's build a instagram clone here clever programmers</h1>

       {
         posts.map(({id, post}) => ( 
           <Post  key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
         ))
       }

    </div>
  );
}

export default App;