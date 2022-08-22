import React from 'react';
import Posts from '../Posts/Posts';
import Share from '../Share/Share';
import './PostSide.css';


const PostSide = () => {
  return (
    <div className='col-md-6 postSide'>
      {/* Share section */}
      <Share />

      {/* Post Section */}
      <Posts />
    </div>
  )
}

export default PostSide