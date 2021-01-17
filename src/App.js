import React from "react";
import './App.css';
import Post from "./Post";


function App() {


  return (
    <div className="App">
        <div className="app_header">
           <img 
             className="app_headerImage"
             alt="abc" 
             src="https://cdn.pixabay.com/photo/2016/08/15/01/29/instagram-1594387_960_720.png"
            />
        </div>

        <Post />
    </div>
  );
}

export default App;