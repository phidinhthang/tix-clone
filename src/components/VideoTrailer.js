import React from 'react';
import './VideoTrailer.css';

const VideoTrailer = ({setIsOpen,videoId}) => {
	const handleOpen = (e) => {
		if(e.currentTarget == e.target){
			setIsOpen(false);
		}
	}
	return (
		<div className="video-trailer" onClick={handleOpen}>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/Lhuqq81oDB0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
		</div>
	);
}

export default VideoTrailer;