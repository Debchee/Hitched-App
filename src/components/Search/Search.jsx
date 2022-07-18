import React from 'react';
import './Search.css';
import logo from '../../img/logo.png';
import {UilSearch} from '@iconscout/react-unicons'

const Search = () => {
  return (
    <div className='search'>
    <img src ={logo} alt=""/>
        <div className='search__input'>
          <input type="text" placeholder="#Explore hitched" />
          <div className='search__icon'>
          <UilSearch />

          </div>
        </div>
    </div>
  )
}

export default Search