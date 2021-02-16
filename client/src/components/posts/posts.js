import React from 'react';
import Post from './post/post';
import userStyles from './styles';

const Posts =()=>{
    const classes=userStyles();
    return(
        <>
        <h1>POSTS</h1>
        <Post></Post>
        <Post></Post>
        </>
    );
}
export default Posts; 