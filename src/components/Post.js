import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Post() {
    const [post, setPost] = useState([]);

    useEffect(() => {
        postHandler()
    }, [])
    const postHandler = async () => {
        await axios.get('https://academics.newtonschool.co/api/v1/quora/post').then((Response) => {
            console.log(Response.data.data)
            setPost(Response.data.data)
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <div id='Post_section'>

        </div>
    )
}

export default Post
