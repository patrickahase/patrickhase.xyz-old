import React, { useEffect } from 'react';
import { projectsList } from '../content/projectsList';

export default function Gallery() {

  const listings = projectsList.map((projectEntry) => 
    <GalleryListing listEntry={projectEntry} />
  );

  // run on init
  useEffect(() => {
    document.addEventListener("scroll", () => {
      listings.forEach(element => {
        if(element){}
      });
    }, { passive: true })
  },[]);

  return (
    <div id="gallery-wrapper">
      {listings}
    </div>
    
  )
}

function GalleryListing(props){
  return (
    <div className="GalleryListingWrapper">
      <svg
      viewBox="0 0 100 59"
      xmlns="http://www.w3.org/2000/svg"
      className="GalleryListingBG"
      fill='none'
      strokeWidth='0.2'
      >
    <rect x="0.05vw" y="0.1vw" 
          width="4.5vw" height="2.57vw" />
    </svg>
      <h3 className="GalleryListingTitle">{props.listEntry.title}&nbsp;</h3>
      <h3 className="GalleryListingTitle" style={{zIndex: 3, backgroundColor: 'transparent'}}>{props.listEntry.title}&nbsp;</h3>
      <img className='ListImg' src={props.listEntry.listhold} alt={props.listEntry.listgifalt} />
    </div>
  )
}