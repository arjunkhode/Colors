export const SET_COLORS = 'SET_COLORS';
export const SET_FIRST_COLOR = 'SET_FIRST_COLOR';
export const SET_SECOND_COLOR = 'SET_SECOND_COLOR';
export const SET_THIRD_COLOR = 'SET_FTHIRDCOLOR';

export function setColors(num){
	// console.log("setcolors was called with num:", num);
	return {
		type: SET_COLORS,
		payload: num,
	}
}

export function setColorName(num, colr) {
	if(num === 1 ){
		console.log("setting first color to",colr);
		return {
			type: SET_FIRST_COLOR,
			payload: colr,
		};
	}
	else if(num === 2 ){
		console.log("setting second color to",colr);
		return {
			type: SET_SECOND_COLOR,
			payload: colr,
		};
	}
	else if(num === 3 ){
		console.log("setting third color to",colr);
		return {
			type: SET_THIRD_COLOR,
			payload: colr,
		};
	}
}