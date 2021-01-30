import siteReducer from './siteReducer.js';
import responsiveReducer from './responsiveReducer.js';
import slideReducer from './slideReducer.js';
import chooseFilmReducer from './chooseFilmReducer.js';
import filmReducer from './filmReducer.js';
import { combineReducers} from 'redux';

const rootReducer = combineReducers({
	site: siteReducer,
	responsive: responsiveReducer,
	slide: slideReducer,
	film: chooseFilmReducer,
	allFilm: filmReducer
});

export default rootReducer;