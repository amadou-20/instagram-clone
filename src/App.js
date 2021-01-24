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
        <h1>let's build a instagram clone here clever programmers</h1>
        <a href=""><p>instagram clone here clever programmers</p></a>
        <li>instagram clone here clever programmers</li>

        <Post username="Amadou" caption="WOW it works" imageUrl="https://cdn.pixabay.com/photo/2016/08/15/01/29/instagram-1594387_960_720.png" />
        <Post username="John" caption="Hello world" imageUrl="https://cdn.pixabay.com/photo/2020/10/09/19/39/utah-5641320_960_720.jpg" />
        <Post username="Theo" caption="it's a new project" imageUrl="https://cdn.pixabay.com/photo/2017/10/07/16/22/river-2826927_960_720.jpg" />
    </div>
  );
}

export default App;