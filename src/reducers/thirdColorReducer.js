import { SET_THIRD_COLOR } from '../actions/index';

const INITIAL_STATE = { third: 'tomato'};

export default function firstColorReducer(state = INITIAL_STATE, action){
	switch(action.type){
		case SET_THIRD_COLOR:
			return {...state, third: action.payload};
		default: return state;
	}
}