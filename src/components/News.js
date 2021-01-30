import React, {useState} from 'react';
import {  animateScroll as scroll } from 'react-scroll';
import './News.css';
import data from './NewsData';

const News = (props) => {
	const [current,setCurrent] = useState("news");
	const [number,setNumber] = useState({
		"news":0,
		"review":0,
		"promotion":0
	})
	const handleViewMore = () => {
		setNumber(prev => ({...prev,[current]:prev[current]+1}))
		setTimeout(()=>{
			scroll.scrollMore(400);
		},100);
	}
  return (
		<div id={props.id} className="news">
			<div className="btn-group">
				<button onClick={()=>setCurrent("news")} className={current=="news"?"active":null}>Điện Ảnh 24h</button>
				<button onClick={()=>setCurrent("review")} className={current=="review"?"active":null}>Review</button>
				<button onClick={()=>setCurrent("promotion")} className={current=="promotion"?"active":null}>Khuyến Mãi</button>
			</div>
			<div className="content">
				{
					data[current].filter((news,index) => (index <= number[current])).map((pages,idx)=>(
						<div className="pages" key={idx}>
							<div className="main">
								{pages.slice(0,2).map((page,index) => (
									<div key={index}>
										<img src={page.image_full} alt="" />
										<h4 className="title">{page.news_title}</h4>
										<p className="description">{page.news_description}</p>
										<div className="rate">
											<div className="like">
												<img src="/app/images/like.png" alt="" />
												<p>{page.up_vote}</p>
											</div>
											<div className="comment">
												<img src="/app/images/comment.png" alt="" />
												<p>{page.total_comment}</p>
											</div>
										</div>
									</div>
								))}
							</div>
							<div className="sub-main">
								<div className="sub-page">
									{
										pages.slice(2,4).map((page,index) => (
											<div key={index}>
												<img src={page.image_full} alt="" />
										<h4 className="title">{page.news_title}</h4>
										<p className="description">{page.news_description}</p>
										<div className="rate">
											<div className="like">
												<img src="/app/images/like.png" alt="" />
												<p>{page.up_vote}</p>
											</div>
											<div className="comment">
												<img src="/app/images/comment.png" alt="" />
												<p>{page.total_comment}</p>
											</div>
										</div>
											</div>
										))
									}
								</div>
								<div className="aside">
									{
										pages.slice(4).map((page,index) => (
											<div key={index} className="aside-item">
												<img src={page.image_small} alt="" />
												<p>{page.news_title}</p>
											</div>
										))
									}
								</div>
							</div>
						</div>
					))
				}
			</div>
			<div className="view-more-wrapper">
			<button className="view-more" onClick={handleViewMore}>Xem thêm</button>
			</div>
		</div>
	);
}

export default News;