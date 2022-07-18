import React from 'react';
import './Post.css';
import share from '../../img/share.png';
import comment from '../../img/comment.png';
import like from '../../img/like.png';
import notliked from '../../img/notlike.png'

const Post = ({post}) => {
  return (
    <div className="post">
    <img src={post.media} alt="" />

    <div className="post_reactions">
      <img src={like} alt="" />
      <img src={comment} alt="" />
      <img src={share} alt="" />

    </div>
    <span>300 likes</span>
    <span>45 comments</span>

    <div className="post__details">
      <span><strong>Chidinma</strong></span>
      <span>lorem ipsum lorem ipsum</span>

    </div>
     </div>
  )
}

export default Post