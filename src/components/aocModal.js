import React, { Component } from 'react';

import { AOC } from '../assets/copy';

export class AOCModal extends Component {
  render() {
    return <div id="modal-overlay">
      <div className="PinkBorder" id="modal-content-wrapper">
        <span className="ProjectListingText ProjectListingHeading AOCText B"> {AOC} </span>
        <button onClick={this.props.closeModal} className="ButtonStyle DesktopMenuButton AOCButton">Continue</button>
      </div>
    </div>;
  }
}

export default AOCModal;
