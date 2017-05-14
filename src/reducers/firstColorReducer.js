import { SET_FIRST_COLOR } from '../actions/index';

const INITIAL_STATE = { first: 'powderblue'};

export default function firstColorReducer(state = INITIAL_STATE, action){
	switch(action.type){
		case SET_FIRST_COLOR:
			return {...state, first: action.payload};
		default: return state;
	}
}