import React from 'react';

export default class ColorLib extends React.Component {
	render(){
		return(
				<div className="colorLibrary"> {this.props.colours.map((col) => {return(<div className="colour" key={col} style={{background:col}}>{col}</div>)})} </div>
			);
	}
}