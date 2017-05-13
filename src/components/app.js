import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setColors } from '../actions/index';

class App extends Component {
	constructor(){
		super();
		this.setNumColorsTo1 = this.setNumColorsTo1.bind(this);
		this.setNumColorsTo2 = this.setNumColorsTo2.bind(this);
		this.setNumColorsTo3 = this.setNumColorsTo3.bind(this);
	}

setNumColorsTo1(){
	console.log("to 1 was called");
	this.props.setColors(1);
	console.log("Current state is:",this.props.numColors);
}

setNumColorsTo2(){
	this.props.setColors(2);
	console.log("Current state is:",this.props.numColors);
}

setNumColorsTo3(){
	this.props.setColors(3);
	console.log("Current state is:",this.props.numColors);
}

  render() {
    return (
      <div className="app">
     
      	<div className="colorFrame">
      		<div className="colorComponent one">
      		</div>
      		<div className="colorComponent two">
      		</div>
      		<div className="colorComponent three">
      		</div>
      	</div>
      	<div className="settings">
      		<span onClick={this.setNumColorsTo1}> 1 color </span>
      		<span onClick={this.setNumColorsTo2}> 2 colors </span>
      		<span onClick={this.setNumColorsTo3}> 3 colors </span>
      	</div>
      	<h2>Color Library</h2>
      	<div className="colorLibrary">
			<div className="colour" />
      	</div>
      </div>
    );
  }
}

function mapStateToProps(state){
	return {
		numColors: state.numColors.cols,
	};
}

export default connect(mapStateToProps,{setColors})(App);