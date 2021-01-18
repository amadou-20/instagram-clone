import React from 'react';
import "./Post.css";


function Post() {

    return (
        <div className="post">

            <h1>Username</h1>
            <img 
            className="post_image"
            src="https://cdn.pixabay.com/photo/2016/02/19/17/43/follow-1210793_960_720.png"
            alt="abc"
            />
            <h4>Username: caption</h4>

        </div>
    );
}

export default Post;