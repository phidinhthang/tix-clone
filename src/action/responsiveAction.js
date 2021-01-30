import {RESIZE} from './type.js';

const resize = (size) => {
	return {
		type: RESIZE,
		payload: size
	}
}

export { resize} 