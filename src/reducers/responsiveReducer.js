import {RESIZE} from '../action/type.js';

const initialState = {
	size: window.innerWidth
}

const responsiveReducer = (state = initialState, action) => {
	switch(action.type) {
		case RESIZE:
			return {
				size:action.payload
			}
		default:
			return state;
	}
}

export default responsiveReducer;