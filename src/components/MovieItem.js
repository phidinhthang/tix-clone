import React, {useState} from 'react';
import './MovieItem.css';
import {useSelector} from 'react-redux';
import SingleFilm from './SingleFilm.js';

	let notTransition = false;
const MovieItem = ({type}) => {
	const [slide,setSlide] = useState(1);
	const film = useSelector(state => state.allFilm[type]);
	const filmSlider = [film[film.length-1],...film,film[0]];
	let transition = {
			transition:'0.3s ease-in-out'
		};
	let noneTransition = {
			transition:'none'
		}
	const handleSlide = (a) => {
		if(slide == 0 && a == -1) return;
		if(slide == filmSlider.length-1 && a == 1) return;
		setSlide(prev=> prev+a);
	}

	return (
		<div className="carousel-movie">
			<div className="wrapper">
				<div className="slides" style={notTransition?({...noneTransition,transform:`translateX(${-slide*950}px)`}):({...transition,transform:`translateX(${-slide*950}px)`})} >
					{
						filmSlider.map((films,index) => 
							<div className="slide" key={index}>
								{
									films.map((film,idx) => 
										<SingleFilm key={idx} name={film.name} rate={film.rate} level={film.level} time={film.time} image={film.image}/>
									)
								}
							</div>
						)
					}
				</div>
			</div>
			<button className="prev-btn" onClick={()=>handleSlide(-1)}>
				<img src="./app/images/back-session.png" alt="" />
			</button>
			<button className="next-btn" onClick={()=>handleSlide(1)}>
				<img src="./app/images/next-session.png" alt="" />
			</button>
		</div>
	);
}

export default MovieItem;