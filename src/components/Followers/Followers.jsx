import React from 'react';
import './Followers.css';
import followerImg from '../../img/img3.png'

const Followers = () => {
  return (
    <div className='followers mt-4'>
    <h4>Who's following you?</h4>
      <div className='follower my-2'>
      <div>
        <img src={followerImg} alt=""className='follower__img'/>
        <div className='follower__name '>
          <span>Ozioma Excel</span>
          <span>@ozing</span>

        </div>
      </div>
      <button className="button fol-button">
        Follow
      </button>

      </div>

      <div className='follower my-2'>
      <div>
        <img src={followerImg} alt=""className='follower__img'/>
        <div className='follower__name '>
          <span>Ozioma Excel</span>
          <span>@ozing</span>

        </div>
      </div>
      <button className="button fol-button">
        Follow
      </button>

      </div>
      <div className='follower my-2'>
      <div>
        <img src={followerImg} alt=""className='follower__img'/>
        <div className='follower__name '>
          <span>Ozioma Excel</span>
          <span>@ozing</span>

        </div>
      </div>
      <button className="button fol-button">
        Follow
      </button>

      </div>
      <div className='follower my-2'>
      <div>
        <img src={followerImg} alt=""className='follower__img'/>
        <div className='follower__name '>
          <span>Ozioma Excel</span>
          <span>@ozing</span>

        </div>
      </div>
      <button className="button fol-button">
        Follow
      </button>

      </div>
      <div className='follower my-2'>
      <div>
        <img src={followerImg} alt=""className='follower__img'/>
        <div className='follower__name '>
          <span>Ozioma Excel</span>
          <span>@ozing</span>

        </div>
      </div>
      <button className="button fol-button">
        Follow
      </button>

      </div>
      <div className='follower my-2'>
      <div>
        <img src={followerImg} alt=""className='follower__img'/>
        <div className='follower__name '>
          <span>Ozioma Excel</span>
          <span>@ozing</span>

        </div>
      </div>
      <button className="button fol-button">
        Follow
      </button>

      </div>
      <div className='follower my-2'>
      <div>
        <img src={followerImg} alt=""className='follower__img'/>
        <div className='follower__name '>
          <span>Ozioma Excel</span>
          <span>@ozing</span>

        </div>
      </div>
      <button className="button fol-button">
        Follow
      </button>

      </div>
    </div>
  )
}

export default Followers