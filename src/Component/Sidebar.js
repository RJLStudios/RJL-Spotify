import react, { Component } from 'react';
import { MdHomeFilled } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { PiStackThin } from "react-icons/pi";
import { IoIosAdd } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

import LofiGirl from './Data/Images/Lofi Girl.jpg';
import SpotifyWrapped from './Data/Images/Spotify Wrapped.jpg';
import WatchMyBackImg from './Data/Images/Watch My Back.jpg';
import PoisonImg from './Data/Images/Poison.jpg';

class Sidebar extends Component {
  render() {

    return <div className='Sidebar-Wrapper'>
      <div class="Sidebar">
        <div class="Sidebar-Nav">
          <div class='Nav-Home Hover'><i className='Nav-Home-Icon'>< MdHomeFilled /></i> Home </div>
          <div class='Nav-Search Hover'><i className='Nav-Search-Icon'>< IoSearch /></i> Search</div>
        </div>


        <div class="Sidebar-Playlists">
          <div class='Library'>
            <div class='Library-left Hover'>
              <i className='Collapse-Library-Icon Icon-Font-Secondary'><PiStackThin /></i>
              <p className='Library-Title'>Your Library</p>
            </div>
            <div class='Library-right'></div>
            <i className='Add-Library-Icon Icon-Font-Secondary Hover'><IoIosAdd /></i>
          </div>

          <div class='Playlist-Scroll'>
            <ul className='Filter'>
              <li className='Filter-li'>Playlists</li>
              <li className='Filter-li'>Artists</li>
              <li className='Filter-li'>Albums</li>
              <li className='Filter-li'>Podcasts & Shows</li>
            </ul>
          </div>

          <div class='Library-Search'>
            <div className='Library-Search-Left Hover'>
              <i className='Nav-Search-Icon Icon-Font-Secondary'><IoSearch /></i>
            </div>
 
            <div className='Library-Search-Right Hover'>
              <p className='Recents-label'>Recents</p>
              <i className='Recents-Icon Icon-Font-Secondary'><IoMenu /></i>
            </div>

          </div>



          <div class='Playlists'>
            <div className='Playlist-grid'>
              <div className='Playlist-grid-item'>
                <div className='Playlist-grid-img'>
                  <i className='Liked-Playlist'><FaHeart/></i>
                </div>
                <div className='Playlist-bio-wrapper'>
                <div className='Playlist-grid-title'>Liked Songs</div>
                <div className='Playlist-grid-bio'>Playlist - Rich</div>
                </div>
              </div>

              <div className='Playlist-grid-item'>
                <img className='Playlist-grid-img' src={LofiGirl}>
                </img>
                <div className='Playlist-bio-wrapper'>
                <div className='Playlist-grid-title'>Lofi beats</div>
                <div className='Playlist-grid-bio'>Playlist - Rich</div>
                </div>
              </div>

              <div className='Playlist-grid-item'>
                <img className='Playlist-grid-img' src={WatchMyBackImg}>
                </img>
                <div className='Playlist-bio-wrapper'>
                <div className='Playlist-grid-title'>Watch My Back</div>
                <div className='Playlist-grid-bio'>Album - Lucki</div>
                </div>
              </div>

              <div className='Playlist-grid-item'>
                <img className='Playlist-grid-img' src={SpotifyWrapped}>
                </img>
                <div className='Playlist-bio-wrapper'>
                <div className='Playlist-grid-title'>2023 Spotify Wrapped</div>
                <div className='Playlist-grid-bio'>Playlist - Rich</div>
                </div>
              </div>

              <div className='Playlist-grid-item'>
                <img className='Playlist-grid-img' src={PoisonImg}>
                </img>
                <div className='Playlist-bio-wrapper'>
                <div className='Playlist-grid-title'>Poison</div>
                <div className='Playlist-grid-bio'>Single - Jaydes</div>
                </div>
              </div>
            </div>

          </div>
        </div>


      </div>
    </div>

  }
} export default Sidebar;


