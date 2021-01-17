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
             src="https://ih1.redbubble.net/image.366666424.5206/st,small,507x507-pad,600x600,f8f8f8.u3.jpg"
            />
        </div>

        <Post />
    </div>
  );
}

export default App;