import React, { useState } from 'react'
import Upvote from './Upvote';
import Downvote from './Downvote';
import CommentIcon from './CommentIcon';
import axios from 'axios';
import { useUser } from './UserProvider';
function PostCard(props) {
    const { getUser } = useUser()
    // console.log(getUser)

    const [isOpen, setIsOpen] = useState(false)
    const [comments, setComments] = useState([])

    //⬆️⬆️⬆️liking the post ⬆️⬆️⬆️




    const commentsHandler = async (id) => {

        try {
            await axios.get(`https://academics.newtonschool.co/api/v1/quora/post/${id}/comments`, null, {
                headers: {
                    'Authorization': `Bearer ${getUser?.token}`
                }
            }).then((Response) => {
                // console.log(Response.data.data);
                const data = Response.data.data
                setIsOpen(!isOpen)
                setComments(data)
            })
        } catch (error) {
            console.log(error)
        }
    }

    console.log(comments)
    const { post } = props;
    return (
        <div id='post-card'>
            {
                post.map((pst, index) => {
                    return (
                        <div className="auther_details_wrapper" key={index} title='post'>
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
                                <div className="post_status_container">
                                    <div className="post_vote_wrapper">
                                        <div className="upvote cmt" >
                                            <Upvote id={pst._id} />

                                        </div>
                                        <div className="downvote cmt" >
                                            <Downvote id={pst._id} />
                                        </div>
                                    </div>
                                    <div className="post_comment cmt" onClick={() => commentsHandler(pst._id)} >
                                        <CommentIcon id={pst._id} />
                                    </div>
                                </div>
                                {
                                    isOpen && <div className="post_comment_container">
                                        comment section
                                    </div>
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PostCard
