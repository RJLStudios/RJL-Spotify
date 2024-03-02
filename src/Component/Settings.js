import React from "react";
import { FaVolumeUp } from "react-icons/fa";

const Settings = () => {
    return(
<div className='Settings'>
<div className='Volume-Wrapper'>
    <i className='Volume'><FaVolumeUp/></i>

    <div className='Volume-bar-wrapper'>
    <div className='Volume-bar'></div>
    </div>
</div>
</div>
)
};

export default Settings;