import React from 'react';
import { useParams } from "react-router-dom";

import { DitheredGradientBox } from './ditheredGradient';
import { projectsList } from '../assets/projectsList';

export const ProjectEntry = () => {
  let params = useParams();
  let project = projectsList.find(x => x.id === params.entry);
  return (
    <div className="ContentWrapper PinkBorder">
      <div className="ContentTitle ButtonStyle">
        {project.title}
        <DitheredGradientBox />
      </div>
      <div className="ListingWrapper ProjectListingWrapper">
        <span className="ProjectListingText ProjectListingHeading B I"> {project.role} </span>
        {project.heromedia}
        {project.extlink &&
          <a className="ProjectListingText ProjectListingLink DBO" href={project.extlink} target="_blank" rel="noopener noreferrer">{project.extlink}</a>
        }
        <span className="ProjectListingText ProjectListingHeading B"> {project.context} </span>
        <span className="ProjectListingText ProjectListingBody"> {project.bodytext} </span>
        <span className="ProjectListingText B I"> {project.tech} </span>
      </div>                     
    </div>
  )
};