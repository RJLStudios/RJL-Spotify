import { Component } from "react";
import React from "react";
import { useState } from 'react';
import { FaRegHeart } from "react-icons/fa";
import RushHourImg from './Data/Images/Rush hour.jpg';


const DisplayTrack = ({ currentTrack }) => {
  return <div className='Song-Details-Wrapper'>
        <img className='Song-Img' src={RushHourImg} ></img>
        <div className='Song-Details'>
            <p className='Song-Title'>{currentTrack.title}</p>
            <p className='Artist-Name'>{currentTrack.author}</p>
        </div>

        <i className='Liked Hover'><FaRegHeart/></i>
        
    </div>
}

export default DisplayTrack;