import React, { Component } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet
} from "react-router-dom";

import './App.css';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      mobile: window.matchMedia('all and (any-hover: none)').matches,
    };
  }
  render() {
    return (
      <BrowserRouter>
        <Routes>
          {!this.state.mobile
           ?<Route path="/" element={
              <div id="desktop-wrapper">
                {/* This is where the current route in rendered */}
                <Outlet />
              </div>
            }>
              <Route path="interactive" element={<div id="interactive" />} />
              <Route path="video" element={<div id="video" />} />
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