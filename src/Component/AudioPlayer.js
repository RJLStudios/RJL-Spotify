import React from "react";
import { useEffect } from "react";
import { useState } from 'react';
import { FaShuffle } from "react-icons/fa6";
import { FaBackwardStep } from "react-icons/fa6";
import { FaPauseCircle } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { FaForwardStep } from "react-icons/fa6";
import { FaRepeat } from "react-icons/fa6";


const AudioPlayer = ({ currentTrack, audioRef }) => {

    const [isPlaying, setIsPlaying] = useState(false);
    console.log(isPlaying);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0)

    const handleProgress = (progress) => {
        setCurrentTime(progress.pla)
    }

    const togglePlayPause = () => {
        setIsPlaying((prevState) => !prevState);

    };

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause()
        }
    }, [isPlaying, audioRef]);
  

    return (
        <div className='Player-Wrapper'>
            <div className='Player-Icons'>
                <i className='Shuffle Icon-Hover'><FaShuffle /></i>
                <i className='Back Icon-Hover'><FaBackwardStep /></i>
                <i className='Play-Btn Play-Icon-Hover' onClick=
                    {togglePlayPause}>{isPlaying ? <FaPauseCircle /> : <FaPlayCircle />}
                </i>
                <i className='Skip Icon-Hover'><FaForwardStep /></i>
                <i className='Queue Icon-Hover'> <FaRepeat /></i>
            </div>

            <div className='Player-Progress'>
                <span className='Time Current'>00:00</span>
                <div className='Progress-bar-wrapper'>

                    <div className='Progress-bar'>
                        <audio src={currentTrack.src} ref={audioRef}></audio>
                    </div>

                </div>
                <span className='Time'>03:30</span>
            </div>

        </div>
    );


}
export default AudioPlayer;
