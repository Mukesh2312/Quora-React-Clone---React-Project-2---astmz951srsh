import React, { useState, useEffect } from 'react'
import axios from 'axios';
import '../styles/Post.css';

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
            <h2>Post</h2>
            <div className="post_content_container">
                {
                    post.map((pst, index) => {
                        return (
                            <div className="auther_details_wrapper" key={index}>
                                <div className="auther_personal_details">

                                    <div className="auther_img">
                                        <img src={pst.author.profileImage} alt="" />
                                    </div>
                                    <div className="auther_name">
                                        <small>{pst.author.name}</small>
                                    </div>
                                </div>
                                <div className="author_post_content">

                                    <div className="author_post_text">
                                        <div className="author_post_text_heading">
                                            <h4>
                                                {pst.title}
                                            </h4>
                                        </div>
                                        <div className="author_post_text_body">
                                            <p>

                                                {pst.content}
                                            </p>

                                        </div>
                                    </div>
                                    <div className="author_post_img">

                                        <img src={pst.images[0]} alt="" />
                                    </div>

                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Post
