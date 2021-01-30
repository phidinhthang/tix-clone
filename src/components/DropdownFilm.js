import React, {useState} from 'react';
import './DropdownFilm.css';
import {chooseFilm,chooseCinema,chooseDate,chooseTime} from '../action/chooseFilmAction.js';
import {useDispatch, useSelector} from 'react-redux';
function DropdownFilm() {
	const film = useSelector(state => state.film);
	const [toggleFilm,setToggleFilm] = useState(false);
	const [toggleCinema,setToggleCinema] = useState(false);
	const [toggleDate,setToggleDate] = useState(false);
	const [toggleTime,setToggleTime] = useState(false);
	const dispatch = useDispatch();
	const handleToggleFilm = () => {
		setToggleFilm(prev => !prev);
		setToggleCinema(false);
		setToggleDate(false);
		setToggleTime(false)
	}
	const handleToggleCinema = () => {
		setToggleFilm(false);
		setToggleCinema(prev => !prev);
		setToggleDate(false);
		setToggleTime(false)
	}
	const handleToggleDate = () => {
		setToggleFilm(false);
		setToggleCinema(false);
		setToggleDate(prev => !prev);
		setToggleTime(false)
	}
	const handleToggleTime = () => {
		setToggleFilm(false);
		setToggleCinema(false);
		setToggleDate(false);
		setToggleTime(prev => !prev);
	}
	const handleChooseFilm = (film) => {
		dispatch(chooseFilm(film));
		dispatch(chooseCinema('Rạp'));
		dispatch(chooseDate('Ngày xem'));
		dispatch(chooseTime('Suất chiếu'));
	}

	const handleChooseCinema = (cinema) => {
		dispatch(chooseCinema(cinema));
		dispatch(chooseDate('Ngày xem'));
		dispatch(chooseTime('Suất chiếu'));
	}

	const handleChooseDate = (date) => {
		dispatch(chooseDate(date));
		dispatch(chooseTime('Suất chiếu'));
	}

	const handleChooseTime = (time) => {
		dispatch(chooseTime(time));
	}

	return (
		<div className="dropdown-container">
			<div className="dropdown-film" onClick={()=>handleToggleFilm(prev => !prev)}><p>{film.current.film}</p>
			{toggleFilm && (<ul>
				{Object.keys(film.film).map((film,index) => (
					<li key={index} onClick={()=>(handleChooseFilm(film))}>{film}</li>
				))}
			</ul>)}
			</div>
			<div className="dropdown-cinema" onClick={()=>handleToggleCinema(prev => !prev)}><p>{film.current.cinema}</p>
			{toggleCinema && (<ul>
				{film.film[film.current.film]?Object.keys(film.film[film.current.film]).map((cinema,index) => (
					<li key={index} onClick={()=>(handleChooseCinema(cinema))}>{cinema || 'Rạp'}</li>
				)):(<li>Vui lòng chọn phim</li>)}
			</ul>)}
			</div>
			<div className="dropdown-date" onClick={()=>handleToggleDate(prev => !prev)}><p>{film.current.date}</p>
			{toggleDate && (<ul>
				{film.film[film.current.film] && film.film[film.current.film][film.current.cinema]?Object.keys(film.film[film.current.film][film.current.cinema]).map((date,index) => (
					<li key={index} onClick={()=>(handleChooseDate(date))}>{date || 'Ngày xem'}</li>
				)):(<li>Vui lòng chọn phim và rạp</li>)}
			</ul>)}
			</div>
			<div className="dropdown-time" onClick={()=>handleToggleTime(prev => !prev)}><p>{film.current.time}</p>
			{toggleTime && (<ul>
			{film.film[film.current.film] && film.film[film.current.film][film.current.cinema] && film.film[film.current.film][film.current.cinema][film.current.date]?(film.film[film.current.film][film.current.cinema][film.current.date]).map((time,index) => (
				<li key={index} onClick={()=>(handleChooseTime(time))}>{time || 'Suất chiếu'}</li>
			)):(<li>Vui lòng chọn phim, rạp và ngày xem</li>)}
			</ul>)}
			</div>
			<button>Mua vé ngay</button>
		</div>
	)
}

export default DropdownFilm;