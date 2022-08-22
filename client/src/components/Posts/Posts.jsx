import React from 'react';
import Post from '../Post/Post';
import './Posts.css';
import img1 from '../../img/postpic1.jpg';
import img2 from '../../img/postpic2.jpg';
import img3 from '../../img/postpic3.jpg';


const Posts = () => {

  let postData= [
    {
      media: img1,
      user:'Chidinma',
      desc:'A short description',
      likes:23,
      comments:0
    },
    {
      media: img2,
      user:'Justina',
      desc:'A short description also',
      likes:2365,
      comments:0
    },
    {
      media: img3,
      user:'Racheal',
      desc:'Another short description',
      likes:4600,
      comments:0
    }
  ];
  return (
    <div className="posts">
      {
        postData.map((post, id)=>(
          <Post post={post}key={id}/>
        ))
      }
    </div>
    
    )
}

export default Posts