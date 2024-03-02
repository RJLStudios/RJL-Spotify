import react, { Component } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import MediaPlayer from './MediaPlayer';

class Body extends Component{
    render() {
      return <>
        <div className='Body-Grid'>
         <Sidebar />
         <Header />
         
         <MediaPlayer />
         </div>
         
     </>
    }
  } export default Body;
   