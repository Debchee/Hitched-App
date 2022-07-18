import React from 'react';
import './RightSide.css';
import {UilSetting} from '@iconscout/react-unicons';
import homeIcon from '../../img/home.png';
import notificationIcon from '../../img/noti.png';
import comment from '../../img/comment.png';

const RightSide = () => {
  return (
    <div className='col-md-3 rightside'>
      <div className="rightside__icons">
        <img src={homeIcon} alt="" />
        <UilSetting />
        <img src={notificationIcon} alt=''/>
        <img src={comment} alt=''/>

      </div>
    </div>
  )
}

export default RightSide