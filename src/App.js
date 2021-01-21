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
        <h1>let's build a instagram clone here clever programmer</h1>
        <a href=""><p>instagram clone here clever programmer</p></a>
        <li>instagram clone here clever programmer</li>

        <Post username="Amadou" caption="WOW it works" imageUrl="https://cdn.pixabay.com/photo/2016/08/15/01/29/instagram-1594387_960_720.png" />
        <Post username="John" caption="Hello world" />
        <Post username="Theo" caption="it's a new project" />
    </div>
  );
}

export default App;