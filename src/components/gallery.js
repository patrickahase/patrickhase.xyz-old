import React, { Component } from 'react';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

import { DitheredGradientBox } from './ditheredGradient';
import { ProjectEntry } from './projectEntry';

export class Gallery extends Component {
  render() {
    return (
      <Routes>
        <Route path={`/:entry`} element={
          <ProjectEntry
            mobile={this.props.mobile} />
        } />
        <Route path="/" element={
          <div className="ContentWrapper PinkBorder">
            {!this.props.mobile &&
              <div className="ContentTitle ButtonStyle">
                {this.props.title}
                <DitheredGradientBox />
              </div>
            }            
            <GalleryListings
              mobile={this.props.mobile}
              list={this.props.list} />                     
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
        {props.mobile 
          ?<img className='ListImg' src={project.listhold} alt={project.listgifalt} />
          :<img className='ListImg' src={project.listgif} alt={project.listgifalt} />
        }        
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
