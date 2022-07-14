import React, {useState, useRef} from 'react';
import './Share.css';
import profileImg from '../../img/new size.jpg';
import {UilScenery, UilPlayCircle, UilLocationPoint,UilSchedule} from '@iconscout/react-unicons';

const Share = () => {
  const imgRef = useRef();
  const [image, setImage] = useState(null);

  const imageChange= (e) => {
    let img = e.target.files[0];

    setImage({
      sapa:URL.createObjectURL(img)
    })
  }

  return (
    <div className='post__Share m-3'>
      <img src={profileImg} alt=""/>

      <div>
        <input type="text" placeholder="What's on your mind..?" />
          <div className='post__media mt-3'>
            <div 
            className='post__media__option'
            onClick={() => imgRef.current.click()}
            >
            <UilScenery />
            Photo
            </div>
            <div className='post__media__option'>
            <UilPlayCircle/>
            Video
            </div>
            <div className='post__media__option'>
            <UilLocationPoint />
            Location</div>
            <div className='post__media__option'>
            <UilSchedule />
            Schedule
            </div>
            <button className='share__btn'>Share</button>

            <div style={{display:'none'}}>
              <input 
              type="file"
              ref={imgRef}
              onChange={imageChange}
              />
            </div>
          </div>
          {image ? <div className='share__img__preview'>
            <img src={image.sapa} alt=""/>
          </div> : null }
          
        </div>
      </div>
  )
}

export default Share