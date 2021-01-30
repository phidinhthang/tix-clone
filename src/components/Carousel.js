import React,{ useRef} from 'react';
import './Carousel.css';
import { useSelector, useDispatch } from 'react-redux';
import Trailer from './Trailer.js';
import DropdownFilm from './DropdownFilm.js';

function Carousel() {
	const slides = useSelector(state => state.slide.slides);
	const allSlides = [slides[slides.length-1],...slides,slides[0]];
	const size = useSelector(state => state.responsive.size);
	const slideRef = useRef();
	let index = 1;
	let shouldChange = true;
	const changeSlide = (newSlide) => {
		if(shouldChange){
			index = newSlide;
			slideRef.current.style.transition = 'all .3s ease';
			slideRef.current.style.transform = 'translateX(-'+size*index+'px)';
		}
		shouldChange = false;
	}
	const checkSlide = () => {
		if(index == 0){
			index = 5;
			slideRef.current.style.transition = 'none';
			slideRef.current.style.transform = 'translateX(-'+size*index+'px)';
		}
		if(index == 6){
			index = 1;
			slideRef.current.style.transition = 'none';
			slideRef.current.style.transform = 'translateX(-'+size*index+'px)';
		}
		shouldChange = true;
	}
	return (
		<div className="slider">
			<div className="wrapper">
				<div className="slides" ref={slideRef} onTransitionEnd={checkSlide}>
					{allSlides.map((slide,index) => (
						<div className="slide" key={index}>
							<img src={slide.images} alt="" />
							<Trailer videoId={slide.id}/>
						</div>
						))
					}
				</div>
			</div>
		<a className="control prev" onClick={()=>changeSlide(--index)}></a>
		<a className="control next" onClick={()=>changeSlide(++index)}></a>
		<DropdownFilm />
	</div>
	);
}

export default Carousel;