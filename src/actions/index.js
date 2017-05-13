export const SET_COLORS = 'SET_COLORS';

export function setColors(num){
	console.log("setcolors was called with num:",num);
	return {
		type: SET_COLORS,
		payload: num,
	}
}