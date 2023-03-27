import React from 'react'

export default function Title() {
  return (
    <div id="title-wrapper">        
      <div id="corona-wrapper">
        <TitleCorona points={240} />
      </div>
      <img id="chip-gif" src={require("../content/images/ph-2t-logo.gif")} alt="spinning cpu chip" />
      <h1 id="title-text">Patrick <u>H</u>ase</h1>        
    </div>
  )
}

function TitleCorona(props){

  let pointArray = Array(props.points).fill('');
  const coronaPoints = pointArray.map((nothing, index) => 
    <line x1="50" y1={Math.random()*8 + 30} 
          x2="50" y2={Math.random()*8}
          transform={`rotate(${(360/pointArray.length) * index}, 50, 50)`} key={index} />
  );
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className="TitleCorona"
      fill='none'
      strokeWidth='0.2'
      >
        <g>
        {coronaPoints}
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="0 50 50"
          to="360 50 50"
          dur="1200s"
          repeatCount="indefinite" />
        </g>
        
        <g>
        {coronaPoints}
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="360 50 50"
          to="0 50 50"
          dur="1200s"
          repeatCount="indefinite" />
        </g>
        
    </svg>
  )
}