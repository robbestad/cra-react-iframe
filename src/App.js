import React, { Component } from 'react';
import './App.css';

import Iframe from "react-iframe";

class App extends Component {
  render() {
    return (
      <div className="App">
<Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
        width="600px"
        height="600px"
        id="myId"
      
        className="myClassname"
        display="initial"
        position="relative"
        allowFullScreen/>

      </div>
    );
  }
}

export default App;
