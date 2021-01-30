import React,{useState} from 'react';
import {CSSTransition, SwitchTransition} from 'react-transition-group';
import './HomeMovie.css';
import MovieItem from './MovieItem.js';


function HomeMovie(props) {
	const [active, setActive] = useState(true);

	return (
		<div id={props.id}>
			<div className="button-group">
				<button className={active?"active":null} onClick={()=>setActive(true)}>Đang chiếu</button>
				<button className={active?null:"active"} onClick={()=>setActive(false)}>Sắp chiếu</button>
			</div>
			<SwitchTransition>
				<CSSTransition
					key={active}
					timeout={300}
					classNames={"carousel"}
				>
				<div>
					{active&&(
						<MovieItem type={"nowShowing"}/>
					)}
					{(!active)&&(
						<MovieItem type={"comingUp"}/>
					)}
				</div>
				</CSSTransition>
			</SwitchTransition>
		</div>
	)
}

export default HomeMovie;