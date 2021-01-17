import React from 'react';
import "./Post.css";


function Post() {

    return (
        <div className="post">

            <h1>Username</h1>
            <img 
            className="post_image"
            src="https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266_960_720.jpg"
            alt="abc"
            />
            <h4>Username: caption</h4>

        </div>
    );
}

export default Post;