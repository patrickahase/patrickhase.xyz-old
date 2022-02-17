import React from 'react';

import { aboutCopy } from '../assets/copy';
import { DitheredGradientBox } from './ditheredGradient';

export const About = (props) => {
  return (
    <div className="ContentWrapper PinkBorder">
      {!props.mobile
        ?<><div className="ContentTitle ButtonStyle">
            about
            <DitheredGradientBox />
          </div>
          <div className="ListingWrapper ProjectListingWrapper AboutText">
            <img id="pressed-pic" src={require('../assets/structural-images/pressed-pic.png')} alt="patrick hase"/>
            <div className="ProjectListingText">
              {aboutCopy.bio}
              <br />
              <br />
              {aboutCopy.email}
            </div>
          </div> 
        </>
        :<>
        <div className="ListingWrapper ProjectListingWrapper AboutText">
          <div className="ProjectListingText AboutListingText">
            HMU
            <br />
            <a href="mailto:patrickahase@gmail.com">
            patrickahase@gmail.com
            </a>
            <br />
            <br />
            {aboutCopy.bio}
            <br />
            <br />
          </div>
        </div> 
        </>}                          
    </div>
  )
};

