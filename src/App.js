import React, { useState, useEffect } from "react";
import './App.css';
import Post from "./Post";
import { db } from "./firebase";


function App() {
     const [posts, setPosts] = useState([
       {
        username: "Qazi",
        caption: "WOW it works",
        imageUrl: "https://blog.desafiolatam.com/wp-content/uploads/2019/04/react-galaxia.png"
       },

       {
        username: "Jonathan", 
        caption: "Hello world", 
        imageUrl: "https://cdn.pixabay.com/photo/2020/10/09/19/39/utah-5641320_960_720.jpg"
       }
     ]);

     useEffect(() => {
       
     db.collection('posts').onSnapshot(snapshot => {

       // every time a new post is added, this code firebase...
       setPosts(snapshot.docs.map(doc => ({
         
        id: doc.id,
        post: doc.data()
      })));
     })
     }, [input])

  return (
    <div className="App">
        <Modal
        open={open}
        onClose={handleClose}
        
      >
        <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">I am a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
      <SimpleModal />
    </div>
      </Modal>
        <div className="app_header">
           <img 
             className="app_headerImage"
             alt="abc" 
             src="https://cdn.pixabay.com/photo/2016/08/15/01/29/instagram-1594387_960_720.png"
            />
        </div>
        <h1>let's build a instagram clone here clever programmers</h1>

        {
          posts.map( ({id,post}) => (
           <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
          ))
        }

        <Post username="Qazi" caption="WOW it works" imageUrl="https://blog.desafiolatam.com/wp-content/uploads/2019/04/react-galaxia.png" />
        <Post username="Jonathan" caption="Hello world" imageUrl="https://cdn.pixabay.com/photo/2020/10/09/19/39/utah-5641320_960_720.jpg" />
    </div>
  );
}

export default App;