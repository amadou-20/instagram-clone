import React from 'react';
import "./Post.css";
import { Avatar } from '@material-ui/core';


function Post() {

    return (
        <div className="post">
           <div className="post_header">  
          <Avatar 
           className="post_avatar"
           alt="john"
           src="https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561_960_720.png"
           />
            <h1>Username</h1>
            </div>
            <img 
            className="post_image"
            src="https://cdn.pixabay.com/photo/2016/02/19/17/43/follow-1210793_960_720.png"
            alt="abc"
            />
            <h4 className="post_text">Username: caption</h4>         
        </div>
    );
}

export default Post;