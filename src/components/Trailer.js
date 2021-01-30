import React, {useState} from 'react';
import './Trailer.css';
import VideoTrailer from './VideoTrailer';

function Trailer({videoId}) {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="trailer">
			<button onClick={()=>setIsOpen(true)}><img src="/app/images/play-video.png" alt="" /></button>
			{isOpen && <VideoTrailer setIsOpen={setIsOpen} videoId={videoId} />}
		</div>
	)
}

export default Trailer