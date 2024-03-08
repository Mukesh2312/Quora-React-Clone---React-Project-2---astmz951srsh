import React, { useState, useEffect } from 'react'
import axios from 'axios';
import '../styles/Post.css';
import PostCard from './PostCard';

function Post() {
    const [post, setPost] = useState([]);

    useEffect(() => {
        postHandler()
    }, [])
    const postHandler = async () => {
        await axios.get('https://academics.newtonschool.co/api/v1/quora/post?limit=100').then((Response) => {
            console.log(Response.data.data)
            setPost(Response.data.data)
        }).catch((err) => {
            console.log(err)
        })
    }


    return (
        <div id='Post_section'>
            {/* <h2>Post</h2> */}
            <div className="post_content_container">
                <PostCard post={post} />
            </div>
        </div>
    )
}

export default Post
