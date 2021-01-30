import React, {useState} from 'react';
import './CinemaBlock.css';
import { listPCinema,data,listCinema,listMovies,calculateTime,formatTime} from './CinemaData.js';
import {Link} from 'react-router-dom';

const CinemaBlock = (props) => {
	const [PCinema,setPCinema] = useState(0);
	const [active, setActive] = useState(0);
	
	const handleSetPCinema = (a) => {
		setPCinema(a);
		setActive(0);
	}

	console.log(calculateTime(1,1,7));
	return (
		<div className={"cinema-block"} id={props.id}>
			<div className="list-cinema-parent">
				<button className={PCinema==0?"active":null} onClick={()=>handleSetPCinema(0)}>
					<img src="/app/images/bhd.png" alt="" />
				</button>
				<button className={PCinema==1?"active":null} onClick={()=>handleSetPCinema(1)}>
					<img src="/app/images/beta.png" alt="" />
				</button>
				<button className={PCinema==2?"active":null} onClick={()=>handleSetPCinema(2)}>
					<img src="/app/images/lotte.png" alt="" />
				</button>
			</div>
			<div className="list-cinema">
				{listCinema[listPCinema[PCinema]].map((item,index) => (
					<div key={item['cinema_id']} className={(index==active)?"item active":"item"} onClick={()=>setActive(index)}>
						<img src={item.cinema_image} alt="" />
						<div className="content">
							<p className={`brand brand-${PCinema}`}><span>{item.cinema_name_s1}</span> - {item.cinema_name_s2}</p>
							<p className="detail">{item.cinema_address}</p>
							<Link to="/">[chi tiết]</Link>
						</div>
					</div>
				))}
			</div>
			<div className="list-movie">
				{(!listMovies[`${PCinema}-${active}`]||listMovies[`${PCinema}-${active}`].length==0)?(
					<div className="no-movies">
						Không có suất chiếu
					</div>
				):listMovies[`${PCinema}-${active}`].map((movie,index) => (
					<div className="movie" key={index}>
						<div className="wrapper-info">
							<img src={movie.image} alt="" />
							<div className="title">
								<div className="title-wrapper">
								<span className={movie.level[0]=="C"?"high":"low"}>{movie.level}</span><p>{movie.name}</p>
								</div>
								<div className="sub-title">
									<p>{movie.time} phút - TIX {movie.vote_tix} - IMDb {movie.vote_imdb}</p>
								</div>
							</div>
						</div>
						<p className="type">2D {movie.type}</p>
						<div className="time">
							{movie.open.map((time,index) => (
								<button key={index}><span>{formatTime(time.hour)}:{formatTime(time.minute)}</span> ~ {calculateTime(time.hour,time.minute,movie.time).hourEnd}:{calculateTime(time.hour,time.minute,movie.time).minuteEnd}</button>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default CinemaBlock;