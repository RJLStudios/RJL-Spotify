  import react, { Component } from 'react';
  import { SlArrowLeft } from "react-icons/sl";
  import { SlArrowRight } from "react-icons/sl";
  import { FaPlay } from "react-icons/fa";

  import RushHourImg from './Data/Images/Rush hour.jpg';
import AfterTheStormImg from './Data/Images/After The Storm.jpg';
import DiveIntoMellowImg from './Data/Images/Dive Into The Mellow.jpg';
import DDuragImg from './Data/Images/DragonBall Durag.jpg';
import DumebiImg from './Data/Images/Dumebi.jpg';
import PoisonImg from './Data/Images/Poison.jpg';
import SelfDestructImg from './Data/Images/Self Destruct.jpg';
import TooImg from './Data/Images/Too.jpg';
import VetImg from './Data/Images/Vet.jpg';
import WatchMyBackImg from './Data/Images/Watch My Back.jpg';
import GeekedImg from './Data/Images/Geeked.jpg';


import RushHour from "./Data/TrackList/Tony Shhnow - Rush Hour.mp3";
import AfterTheStorm from "./Data/TrackList/After The Storm (feat. Tyler, The Creator & Bootsy Collins).mp3";
import DiveIntoMellow from "./Data/TrackList/Aquatic Mine_ Dive Into The Mellow.mp3";
import DDurag from "./Data/TrackList/Dragonball Durag.mp3";
import Geeked from "./Data/TrackList/Geeked.mp3";
import Poison from "./Data/TrackList/jaydes - poison (og version).mp3";
import Dumebi from "./Data/TrackList/Rema - Dumebi.mp3";
import Vet from "./Data/TrackList/Tony Shhnow - Vet.mp3";
import Too from "./Data/TrackList/Too [CashCache+Deadman] Tony Shhnow + 10KDunkin.mp3";
  
  class Header extends Component{
    render() {
      return  <div className="Main-Body">
        <div class="Main-header">
      <div class="Nav-buttons">
        <button class="Backward-Nav Hover"><i class=" fa-chevron-left"><SlArrowLeft/></i></button>
        <button class="Forward-Nav Hover"><i class=" fa-chevron-right"><SlArrowRight/></i></button>
      </div>
     
      <div class="User-icon">
       <div class="User-PFP"><i class="fa-regular fa-user"></i></div>
       <div class="User-name">User</div>
       <i class="fa-solid fa-caret-down"></i>
      </div>
   </div>

   <div className='Main-Grid Recents'>
    <div className='Main-Grid-Title'>Recently Played</div>
    <div className='Grid'>
    <div className='Grid-Item'>
      <div className='Grid-Image-Wrapper'>
      <img className='Grid-Image' src={GeekedImg}></img>
      <div className='Grid-Play-Btn'><i class="facircleplay Hover"><FaPlay/></i></div>

      </div>
      <div className='Grid-Bio-Wrapper'>
        <div className='Title Hover'>Geeked</div>
        <div className='Author Hover'>Lucki</div>
      </div>
      </div>

      <div className='Grid-Item'>
      <div className='Grid-Image-Wrapper'>
      <img className='Grid-Image' src={DiveIntoMellowImg}></img>
      <div className='Grid-Play-Btn'><i class="facircleplay"><FaPlay/></i></div>
      </div>
      <div className='Grid-Bio-Wrapper'>
        <div className='Title'>Dive Into Mellow</div>
        <div className='Author'>Sonic Team</div>
      </div>
      </div>

      
      <div className='Grid-Item'>
      <div className='Grid-Image-Wrapper'>
      <img className='Grid-Image' src={PoisonImg}></img>
      <div className='Grid-Play-Btn'><i class="facircleplay"><FaPlay/></i></div>
      </div>
      <div className='Grid-Bio-Wrapper'>
        <div className='Title'>Poison</div>
        <div className='Author'>Jaydes</div>
      </div>
      </div>

      <div className='Grid-Item'>
      <div className='Grid-Image-Wrapper'>
      <img className='Grid-Image' src={DDuragImg}></img>
      <div className='Grid-Play-Btn'><i class="facircleplay"><FaPlay/></i></div>
      </div>
      <div className='Grid-Bio-Wrapper'>
        <div className='Title'>DragonBall Durag</div>
        <div className='Author'>ThunderCat</div>
      </div>
      </div>

     

    </div>
   </div>
 
   <div className='Main-Grid Rich-Playlist'>
    <div className='Main-Grid-Title'>Made for Rich</div>
    <div className='Grid'>
    <div className='Grid-Item'>
      <div className='Grid-Image-Wrapper'>
      <img className='Grid-Image' src={DumebiImg}></img>
      <div className='Grid-Play-Btn'><i class="facircleplay"><FaPlay/></i></div>
      </div>
      <div className='Grid-Bio-Wrapper'>
        <div className='Title'>Dumebi</div>
        <div className='Author'>Rema</div>
      </div>
      </div>

      <div className='Grid-Item'>
      <div className='Grid-Image-Wrapper'>
      <img className='Grid-Image' src={VetImg}></img>
      <div className='Grid-Play-Btn'><i class="facircleplay"><FaPlay/></i></div>
      </div>
      <div className='Grid-Bio-Wrapper'>
        <div className='Title'>Vet</div>
        <div className='Author'>Tony Shhnow</div>
      </div>
      </div>

      <div className='Grid-Item'>
      <div className='Grid-Image-Wrapper'>
      <img className='Grid-Image' src={AfterTheStormImg}></img>
      <div className='Grid-Play-Btn'><i class="facircleplay"><FaPlay/></i></div>
      </div>
      <div className='Grid-Bio-Wrapper'>
        <div className='Title'>After The Storm</div>
        <div className='Author'>Kali Uchis</div>
      </div>
      </div>

      <div className='Grid-Item'>
      <div className='Grid-Image-Wrapper'>
      <img className='Grid-Image' src={RushHourImg}></img>
      <div className='Grid-Play-Btn'><i class="facircleplay"><FaPlay/></i></div>
      </div>
      <div className='Grid-Bio-Wrapper'>
        <div className='Title'>Walked In</div>
        <div className='Author'>Tony Shhnow</div>
      </div>
      </div>
    </div>
   </div>
   </div>
    }
  } export default Header;
   