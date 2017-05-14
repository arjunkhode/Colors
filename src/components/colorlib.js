import React from 'react';

export default class ColorLib extends React.Component {
	render(){
		if(this.props.colours) 
			if(this.props.colours.length > 0){
		{
			console.log("gift",this.props.colours);
		return(
				<div className="colorLibrary"> {this.props.colours.map((col) => {
					return(<div className="colour" key={col} style={{background:col}}>{col}</div>)})} </div>
			);
		}}
		else return(<div></div>);
	}
}