import { combineReducers } from 'redux';
import numColorsReducer from './numColorsReducer';
import firstColorReducer from './firstColorReducer';
import secondColorReducer from './secondColorReducer';
import thirdColorReducer from './thirdColorReducer';
import colorsReducer from './colorsReducer';

const rootReducer = combineReducers({
  numColors: numColorsReducer,
  firstColor: firstColorReducer,
  secondColor: secondColorReducer,
  thirdColor: thirdColorReducer,
  colors: colorsReducer,
});

export default rootReducer;
