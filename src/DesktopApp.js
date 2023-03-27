import React from 'react';

import './DesktopApp.css';
import Title from './components/title';
import Gallery from './components/gallery';

export default function DesktopApp() {
  return (
    <div id="desktop-wrapper">

      {/* site title and animation */}
      <Title />

      {/* project gallery */}
      <Gallery />
      
      {/* SVG defs */}
      <svg 
      width="0%"
      height="0%"
      xmlns="http://www.w3.org/2000/svg">
        <filter id="duotone">
          <feColorMatrix type="matrix" result="grayscale"
            values="1 0 0 0 0
                    1 0 0 0 0
                    1 0 0 0 0
                    0 0 0 1 0" >
          </feColorMatrix>
          <feComponentTransfer colorInterpolationFilters="sRGB" result="duotone">
            <feFuncR type="table" tableValues="0.243 0.118"></feFuncR>
            <feFuncG type="table" tableValues="0.094 0.565"></feFuncG>
            <feFuncB type="table" tableValues="0.082 1.0"></feFuncB>
            <feFuncA type="table" tableValues="0 1"></feFuncA>
          </feComponentTransfer> 
        </filter>        
      </svg>
      
    </div>
  )
}


