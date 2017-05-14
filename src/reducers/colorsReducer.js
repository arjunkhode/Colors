import { ADD_COLOR } from '../actions/index';

const INITIAL_STATE = { cols: [
'plum',
'navajowhite',
'goldenrod',
'seashell',
'mistyrose',
'lime',
'fuchsia',
'antiquewhite',
'darkkhaki',
'beige',
'powderblue',
'steelblue',
'azure',
'aqua',
'indianred',
'mediumvioletred',
'paleturquoise',
'hotpink',
'lawngreen',
'ghostwhite',
'tomato',
'chartreuse',
'midnightblue',
'greenyellow',
'floralwhite',
'rosybrown',
'salmon',
'honeydew',
'thistle',
'peachpuff'
	] };

export default function( state = INITIAL_STATE, action) {

switch(action.type){
		case ADD_COLOR:
			return {...state, cols: action.payload};
		default: return state;
	}

}