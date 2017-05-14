import { SET_SECOND_COLOR } from '../actions/index';

const INITIAL_STATE = { second: 'goldenrod'};

export default function firstColorReducer(state = INITIAL_STATE, action){
	switch(action.type){
		case SET_SECOND_COLOR:
			return {...state, second: action.payload};
		default: return state;
	}
}