import React, { Component } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet
} from "react-router-dom";

import './App.css';
import { DesktopMenu } from './components/desktopMenu';
import { MobileMenu } from './components/mobileMenu';
import { Gallery } from './components/gallery';
import { About } from './components/about';
import { SVGDefs } from './components/svgDefs';
import DrawingPanel from './components/drawingPanel';
import { projectsList } from './assets/projectsList';
import AOCModal from './components/aocModal';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      mobile: window.matchMedia('all and (any-hover: none)').matches,
      interactiveList:  projectsList.filter(project => project.type === "i"),
      videoList:  projectsList.filter(project => project.type === "v"),

      modalIsOpen: true
    };
  }
  render() {
    return (
      <BrowserRouter>
        <Routes>
          {!this.state.mobile
           ?<Route path="/" element={
              <div id="desktop-wrapper">
                {/* {this.state.modalIsOpen &&
                  <AOCModal
                    closeModal={this.closeModal.bind(this)} />
                } */}
                <DesktopMenu />
                <div className="ContentWindow">
                  <Outlet />
                  <DrawingPanel />
                  <SVGDefs />
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
                <Gallery mobile={this.state.mobile}
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
                {this.state.modalIsOpen &&
                  <AOCModal
                    closeModal={this.closeModal.bind(this)} />
                }
                <MobileMenu 
                  resetMobileMenuActive={this.resetMobileMenuActive.bind(this)} />
                {/* This is where the current route in rendered */}
                <Outlet />
              </div>
              
            }>
              
              {/* Mobile Routes here */}
              <Route path="projects/*" element={
                  <Gallery
                    mobile={this.state.mobile}
                    title={"interactive"}
                    list={projectsList}
                  />} />

                <Route path="about" element={
                  <About
                    mobile={this.state.mobile}
                  />} />
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
    if (this.state.mobile){
      //MOBILE
      /* console.log(window.location.href) */
      this.updateCustomVH();
      window.addEventListener('resize', this.updateCustomVH());
    } else {
      //DESKTOP
      window.addEventListener("keydown", (e) => this.onKeyDown(e));
    }
  }
  updateCustomVH(){
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  onKeyDown(e) {
    switch(e.keyCode){
      case 73: // i
      this.selectLink('interactive-button');
      break;
      case 86: // v
      this.selectLink('video-button');
      break;
      case 65: // a
      this.selectLink('about-button');
      break;
      case 72: // h
      this.selectLink('desktop-menu-title-wrapper');
      break;
      default:
    }
  }
  selectLink(button){
    let clicked = document.getElementById(button);
    clicked.classList.add('ActiveButton');
    window.addEventListener("keyup", () => this.unSelectLink(clicked));
  }
  unSelectLink(clicked){
    clicked.parentElement.click();
    clicked.classList.remove('ActiveButton');
    window.removeEventListener("keyup", () => this.unSelectLink(clicked));
  }
  resetMobileMenuActive(){
    Array.from(document.getElementsByClassName('ActiveButton')).forEach(element => {
      element.classList.remove('ActiveButton');
    });
  }
  closeModal(){
    this.setState({ modalIsOpen: false })
  }
}

export default App;
