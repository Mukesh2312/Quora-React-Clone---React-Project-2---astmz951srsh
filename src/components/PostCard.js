import React from 'react'
import Upvote from './Upvote';
import Downvote from './Downvote';
import CommentIcon from './CommentIcon';

function PostCard(props) {
    const { post } = props;

    return (
        <div id='post-card'>
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
                                <div className="post_status_container">
                                    <div className="post_vote_wrapper">
                                        <div className="upvote cmt">
                                            <Upvote />

                                        </div>
                                        <div className="downvote cmt">
                                            <Downvote />
                                        </div>
                                    </div>
                                    <div className="post_comment cmt">
                                        <CommentIcon />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PostCard
