import { SET_COLORS } from '../actions/index';

const INITIAL_STATE = { cols: 3 };

export default function numColorsReducer(state = INITIAL_STATE, action){
	switch(action.type){
		case SET_COLORS:
			return {...state, cols: action.payload};
		default: return state;
	}
}