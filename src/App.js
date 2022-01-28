import React, { Component } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet
} from "react-router-dom";

import './App.css';
import { DesktopMenu } from './components/desktopMenu';
import Gallery from './components/gallery';
import About from './components/about';
import DrawingPanel from './components/drawingPanel';
import { projectsList } from './assets/projectsList';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      mobile: window.matchMedia('all and (any-hover: none)').matches,
      interactiveList:  projectsList.filter(project => project.type === "i"),
      videoList:  projectsList.filter(project => project.type === "v"),
    };
  }
  render() {
    return (
      <BrowserRouter>
        <Routes>
          {!this.state.mobile
           ?<Route path="/" element={
              <div id="desktop-wrapper">
                <DesktopMenu />
                {/* This is where the current route in rendered */}
                <div className="ContentWindow">
                  <Outlet />
                  <DrawingPanel />
                </div>                
              </div>
            }>

              <Route path="interactive/*" element={
                <Gallery
                  mobile={this.state.mobile}
                  title={"interactive"}
                  list={this.state.interactiveList}
                />} />

              <Route path="video/*" element={
                <Gallery
                  mobile={this.state.mobile}
                  title={"video"}
                  list={this.state.videoList}
                />} />

              <Route path="about" element={
                <About
                  mobile={this.state.mobile}
                />} />

            </Route>
           :<Route path="/" element={
              <div id="mobile-wrapper">
                {/* This is where the current route in rendered */}
                <Outlet />
              </div>
            }>
              {/* Mobile Routes here */}
              {/* <Route path="interactive" element={<div id="interactive" />} />
              <Route path="video" element={<div id="video" />} /> */}
            </Route>
          }
            
        </Routes>
        <Outlet />
      </BrowserRouter>      
    );
  }
  componentDidMount() {
  }
}

export default App;

{/* <BrowserRouter history={this.history}>
        <Routes>
          {!this.state.mobile
            ? <div id="desktop-wrapper">

                <DesktopMenu />

                <Route path="/interactive" element={
                  <Gallery
                    mobile={this.state.mobile} />
                } />

                <Route path="/video" element={
                  <Gallery
                    mobile={this.state.mobile} />
                } />

                <Route path="/about" element={
                  <Gallery
                    mobile={this.state.mobile} />
                } />

              </div>
            : <div id="mobile-wrapper">

              </div>
          }
        </Routes>
</BrowserRouter> */}