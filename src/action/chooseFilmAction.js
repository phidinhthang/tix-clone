import {CHOOSE_FILM,CHOOSE_DATE,CHOOSE_CINEMA,CHOOSE_TIME} from './type.js';

export const chooseFilm = (film) => {
	return {
		type: CHOOSE_FILM,
		payload: film
	}
}

export const chooseDate = (date) => {
	return {
		type: CHOOSE_DATE,
		payload: date
	}
}

export const chooseCinema = (cinema) => {
	return {
		type: CHOOSE_CINEMA,
		payload: cinema
	}
}

export const chooseTime = (time) => {
	return {
		type: CHOOSE_TIME,
		payload:time
	}
}