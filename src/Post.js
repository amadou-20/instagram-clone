import React from 'react';
import "./Post.css";
import { Avatar } from '@material-ui/core';


function Post({ username, caption, imageUrl }) {

    return (
        <div className="post">
           <div className="post_header">  
          <Avatar 
           className="post_avatar"
           alt="john"
           src="https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561_960_720.png"
           />
            <h3>{username}</h3>
            </div>
            <img className="post_image" src={imageUrl} alt="abc" />
            <h4 className="post_text"> <strong>{username}</strong> {caption} </h4>         
        </div>
    );
}

export default Post;