import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className="app">
      	Hi 
      	<div className="colorFrame">
      		<div className="colorComponent one">
      		</div>
      		<div className="colorComponent two">
      		</div>
      		<div className="colorComponent three">
      		</div>
      	</div>
      	<div className="settings">
      		<span> 1 color </span>
      		<span> 2 colors </span>
      		<span> 3 colors </span>

      	</div>
      </div>
    );
  }
}
