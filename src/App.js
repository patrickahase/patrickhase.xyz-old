import React, { Component } from 'react';
import { BrowserRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import './App.css';
import DesktopMenu from './components/desktopMenu';
import Gallery from './components/gallery';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      mobile: window.matchMedia('all and (any-hover: none)').matches,
    };
    this.history = createBrowserHistory({forceRefresh:true});
  }
  render() {
    return (
      <BrowserRouter history={this.history}>
        <Routes>
          {!this.state.mobile
            ? <div id="desktop-wrapper">

                {/* Navigation Menu */}
                <DesktopMenu />

                {/* Interactive Gallery */}
                <Route path="/interactive" element={
                  <Gallery
                    mobile={this.state.mobile} />
                } />

                {/* Video Gallery */}
                <Route path="/video" element={
                  <Gallery
                    mobile={this.state.mobile} />
                } />

                {/* About */}
                <Route path="/about" element={
                  <Gallery
                    mobile={this.state.mobile} />
                } />

                {/* Drawing Goes Here */}

              </div>
            : <div id="mobile-wrapper">

              </div>
          }
        </Routes>
      </BrowserRouter>
    );
  }
  componentDidMount() {
    console.log("i'm here")
  }
}

export default App;
