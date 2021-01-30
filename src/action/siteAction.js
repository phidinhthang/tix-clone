import {CHOOSE_SITE} from '../action/type.js';

const chooseSite = (site) => {
	return {
		type: CHOOSE_SITE,
		payload:site
	}
}

export { chooseSite };