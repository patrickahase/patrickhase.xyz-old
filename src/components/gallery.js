import React, { Component } from 'react';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

import { ProjectEntry } from './projectEntry';

export class Gallery extends Component {
  render() {
    return (
      <Routes>
        <Route path={`/:entry`} element={
          <ProjectEntry />
        } />
        <Route path="/" element={
          <div className="ContentWrapper">
            <div className="ContentTitle">
              {this.props.title}
            </div>
            <GalleryListings list={this.props.list} />                     
          </div>          
        } />
      </Routes>
    );
  }
}

export default Gallery;

function GalleryListings(props){
  const listEntries = props.list.map((project) =>
    <Link to={project.id} key={project.id} className="GalleryLink">
      <div className='GalleryListing PinkBorder' id={project.id}>
        <img className='ListImg Lazy' src={project.listhold} data-src={project.listgif} alt={project.listgifalt} />
        <span className='ListTitle'> {project.title} </span>
      </div>
    </Link>
  );
  return (
    <div className="ListingWrapper">
      {listEntries}
    </div>    
  )
}
