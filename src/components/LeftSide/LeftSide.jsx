import React from 'react';
import Followers from '../Followers/Followers';
import Search from '../Search/Search';
import UserCard from '../UserCard/UserCard';
import './LeftSide.css';

const LeftSide = () => {
  return (
    <div className='col-md-3 leftside m-3'>
      {/* Search */}
      <Search />
      {/* User Card */}
      {/* <UserCard /> */}
      {/* Followers */}
      <Followers />
      
    </div>
  )
}

export default LeftSide