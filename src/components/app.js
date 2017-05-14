import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setColors } from '../actions/index';
import { setColorName } from '../actions/index';
import { addCol } from '../actions/index';
import ColorLib from './colorlib';

//######## NOTE:  PAY VERY CLOSE ATTENTION TO THE SPELLING 'COLOR' AND 'COLOUR' ##########

class App extends Component {
	constructor(){
		super();
		this.setNumColorsTo1 = this.setNumColorsTo1.bind(this);
		this.setNumColorsTo2 = this.setNumColorsTo2.bind(this);
		this.setNumColorsTo3 = this.setNumColorsTo3.bind(this);
		this.addColor = this.addColor.bind(this);
		// this.renderColors = this.renderColors.bind(this);
	}

// renderColors(){
// 	this.props.colors.map((col) => {
// 		// console.log("I entered",col);
// 		let sty = {backgroundColor: `${col}`}
// 		return (
// 		<div>Hi</div>
// 		);
// 	});
// }


componentDidMount(){
	const secondColor = document.querySelector('.two');
	const thirdColor = document.querySelector('.three');
	if(this.props.numColors === 1){
		secondColor.style.display = 'none';
		thirdColor.style.display = 'none';
	}if(this.props.numColors === 2){
		secondColor.style.display = 'block';
		thirdColor.style.display = 'none';
	}if(this.props.numColors === 3){
		secondColor.style.display = 'block';
		thirdColor.style.display = 'block';
	}
}

addColor(){
	let val = document.querySelector('.newColorValue');
	let v1 = val.value;
	// check if new value already exists in our colors array
	if(this.props.colors.find((col,v1)=>{return col === v1}) === undefined ){
		this.props.addCol([...this.props.colors, v1]);
	}
	else {
		console.log("Value already present");
	}
}

setNumColorsTo1(){
	const secondColor = document.querySelector('.two');
	const thirdColor = document.querySelector('.three');
	// console.log("to 1 was called");
	this.props.setColors(1);
	// console.log("Current state is:",this.props.numColors);
	secondColor.style.display = 'none';
	thirdColor.style.display = 'none';
}

setNumColorsTo2(){
	const secondColor = document.querySelector('.two');
	const thirdColor = document.querySelector('.three');
	this.props.setColors(2);
	// console.log("Current state is:",this.props.numColors);
	secondColor.style.display = 'block';
	thirdColor.style.display = 'none';
}

setNumColorsTo3(){
	const secondColor = document.querySelector('.two');
	const thirdColor = document.querySelector('.three');
	this.props.setColors(3);
	// console.log("Current state is:",this.props.numColors);
	secondColor.style.display = 'block';
	thirdColor.style.display = 'block';
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

      	<div className="newColor">
      		Add Color:
      		<input type="text" className="newColorValue" placeholder="#hexval or valid name"/>
      		<button onClick={this.addColor} type="submit" className="addbtn">+</button>
      	</div>

      	<h2>Color Library</h2>
      	<ColorLib className="colorLibrary" colours={this.props.colors} />
      </div>
    );
  }
}

function mapStateToProps(state){
	return {
		numColors: state.numColors.cols,
		firstColor: state.firstColor.first,
		secondColor: state.secondColor.second,
		thirdColor: state.thirdColor.third,
		colors: state.colors.cols,
	};
}

export default connect(mapStateToProps,{setColors, addCol, setColorName})(App);