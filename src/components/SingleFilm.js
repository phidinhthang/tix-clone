import React,{useState} from 'react';
import './SingleFilm.css';

const SingleFilm = ({image,name,level,time,rate}) => {
	const [isMouse,setIsMouse] = useState(false);
	return (
		<div className="single-film" onMouseEnter={()=>setIsMouse(true)} onMouseLeave={()=>setIsMouse(false)}>
			<img src={image} alt="" />
			<div className="rate">
				<p>{rate}</p>
			</div>
			{isMouse?(
				<React.Fragment>
				<button className="buy-ticket">Mua vé</button>
				<button className="play"><img src="/app/images/play-video.png" alt="" /></button>
				</React.Fragment>
				):(
				<React.Fragment>
				<div className="content">
					<div className={level[0]=='C'?'level high':'level low'}>
						{level}
					</div>
					<p>{name}</p>
				</div>
				<div className="time">
					{time} phút
				</div>
				</React.Fragment>
			)}
		</div>
	);
}

export default SingleFilm;