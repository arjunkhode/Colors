import { SET_CURRENT } from '../actions/index';

const INITIAL_STATE = { curr: 1};

export default function firstColorReducer(state = INITIAL_STATE, action){
	switch(action.type){
		case SET_CURRENT:
			return {...state, curr: action.payload};
		default: return state;
	}
}