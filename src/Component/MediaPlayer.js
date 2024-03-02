import React, { Component } from "react";
import { useState } from 'react';
import { useRef } from 'react';
import { FaRegHeart } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";
import { FaBackwardStep } from "react-icons/fa6";
import { FaPlayCircle } from "react-icons/fa";
import { FaForwardStep } from "react-icons/fa6";
import { FaRepeat } from "react-icons/fa6";
import { FaVolumeUp } from "react-icons/fa";


import DisplayTrack from "./DisplayTrack";
import AudioPlayer from "./AudioPlayer";

import Settings from "./Settings";

import { trackList } from "./Tracks";

const MediaPlayer = () => {
    const [currentTrack, setCurrentTrack] = useState(trackList[0]);
    const audioRef = useRef();
    <audio src={currentTrack.src} ref={audioRef}/>
    console.log(audioRef)
        return ( <div className='Player'>
        <DisplayTrack currentTrack={currentTrack}/>
        <AudioPlayer  currentTrack={currentTrack} audioRef={audioRef} />
        <Settings audioRef={audioRef}/>
        </div>
        )
    };


export default MediaPlayer;