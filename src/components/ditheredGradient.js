import React, { Component, useRef } from 'react';

export const DitheredGradientBox = () => {
  const thisGradientBox = useRef(null);
  return <div className="DitheredGradientBox" ref={thisGradientBox}>
            <DitheredGradient
               />           
         </div>
}

class DitheredGradient extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      svgWidth: 0,
      svgHeight: 0
    };
    this.updateSVGDimensions = this.updateSVGDimensions.bind(this);
  }
  render() {
    return  <svg
              className="DitheredGradient"
              viewBox={`0 0 ${this.state.svgWidth} ${this.state.svgHeight}`}
              xmlns="http://www.w3.org/2000/svg" >
                {/* bg fill */}       
                <rect width="100%" height="100%" x="0%" y="0" fill="url(#myGradient)" />       
                <defs>
                  <linearGradient id="myGradient">
                    <stop offset="0%"  stopColor="#90c0a0" />
                    <stop offset="35%" stopColor="#6f577e" />
                    <stop offset="65%" stopColor="#6f577e" />
                    <stop offset="100%" stopColor="#575f7e" />
                  </linearGradient>
                </defs>            
            </svg> ;
  }
  componentDidMount(){
    this.updateSVGDimensions();
    window.addEventListener('resize', this.updateSVGDimensions);
  }
  updateSVGDimensions(){
    this.setState({
      svgWidth: document.getElementsByClassName("ContentTitle")[0].clientWidth,
      svgHeight: document.getElementsByClassName("ContentTitle")[0].offsetHeight
    });   
  }
}


/* patterns */
/* <rect width="12.5%" height="100%" x="0" y="0" fill="url(#dither1)" />       
<rect width="12.5%" height="100%" x="12.5%" y="0" fill="url(#dither2)" />       
<rect width="12.5%" height="100%" x="25%" y="0" fill="url(#dither3)" />       
<rect width="12.5%" height="100%" x="37.5%" y="0" fill="url(#dither4)" />       
<rect width="12.5%" height="100%" x="50%" y="0" fill="url(#dither5)" />       
<rect width="12.5%" height="100%" x="62.5%" y="0" fill="url(#dither6)" />       
<rect width="12.5%" height="100%" x="75%" y="0" fill="url(#dither7)" />       
<rect width="12.5%" height="100%" x="87.5%" y="0" fill="url(#dither8)" />       
<defs>
  <pattern id="dither1" viewBox="0,0,4,4" width={4} height={4} patternUnits="userSpaceOnUse">
    <rect width={1} height={1} x={1} y={0} fill="#ff8e80" />
  </pattern>
  <pattern id="dither2" viewBox="0,0,4,4" width={4} height={4} patternUnits="userSpaceOnUse">
    <rect width={1} height={1} x={0} y={3} fill="#ff8e80" />
    <rect width={1} height={2} x={1} y={0} fill="#ff8e80" />                    
  </pattern>
  <pattern id="dither3" viewBox="0,0,4,4" width={4} height={4} patternUnits="userSpaceOnUse">
    <rect width={1} height={2} x={0} y={2} fill="#ff8e80" />
    <rect width={1} height={2} x={1} y={0} fill="#ff8e80" />
    <rect width={1} height={1} x={2} y={0} fill="#ff8e80" />
  </pattern>
  <pattern id="dither4" viewBox="0,0,4,4" width={4} height={4} patternUnits="userSpaceOnUse">
    <rect width={1} height={2} x={0} y={2} fill="#ff8e80" />
    <rect width={1} height={3} x={1} y={0} fill="#ff8e80" />
    <rect width={1} height={1} x={2} y={0} fill="#ff8e80" />
    <rect width={1} height={1} x={3} y={3} fill="#ff8e80" />
  </pattern>
  <pattern id="dither5" viewBox="0,0,4,4" width={4} height={4} patternUnits="userSpaceOnUse">
    <rect width={1} height={3} x={0} y={1} fill="#ff8e80" />
    <rect width={1} height={3} x={1} y={0} fill="#ff8e80" />
    <rect width={1} height={1} x={2} y={0} fill="#ff8e80" />
    <rect width={2} height={1} x={2} y={3} fill="#ff8e80" />
  </pattern>
  <pattern id="dither6" viewBox="0,0,4,4" width={4} height={4} patternUnits="userSpaceOnUse">
    <rect width={1} height={3} x={0} y={1} fill="#ff8e80" />
    <rect width={1} height={3} x={1} y={0} fill="#ff8e80" />
    <rect width={2} height={1} x={2} y={0} fill="#ff8e80" />                    
    <rect width={2} height={1} x={2} y={3} fill="#ff8e80" />
    <rect width={1} height={1} x={3} y={2} fill="#ff8e80" />
  </pattern>
  <pattern id="dither7" viewBox="0,0,4,4" width={4} height={4} patternUnits="userSpaceOnUse">
    <rect width={1} height={3} x={0} y={1} fill="#ff8e80" />
    <rect width={1} height={4} x={1} y={0} fill="#ff8e80" />
    <rect width={2} height={1} x={2} y={0} fill="#ff8e80" />
    <rect width={1} height={1} x={2} y={1} fill="#ff8e80" />                    
    <rect width={2} height={1} x={2} y={3} fill="#ff8e80" />
    <rect width={1} height={1} x={3} y={2} fill="#ff8e80" />
  </pattern>
  <pattern id="dither8" viewBox="0,0,4,4" width={4} height={4} patternUnits="userSpaceOnUse">
    <rect width={1} height={4} x={0} y={0} fill="#ff8e80" />
    <rect width={1} height={1} x={1} y={0} fill="#ff8e80" />
    <rect width={1} height={2} x={1} y={2} fill="#ff8e80" />
    <rect width={2} height={4} x={2} y={0} fill="#ff8e80" />
  </pattern>
</defs> */