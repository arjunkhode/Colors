import { combineReducers } from 'redux';
import numColorsReducer from './numColorsReducer';

const rootReducer = combineReducers({
  numColors: numColorsReducer,
});

export default rootReducer;
