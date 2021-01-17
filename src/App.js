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
             src="https://e7.pngegg.com/pngimages/712/1009/png-clipart-letter-instagram-font-instagram-text-logo.png"
            />
        </div>

        <Post />
    </div>
  );
}

export default App;