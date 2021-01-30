import React from 'react';
import Slider from 'react-slick';
import './Footer.css';

const Footer = (props) => {
	const settings = {
  dots: false,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  touchMove: true,
	}
	const imgs = ["cgv.png","bhd.png","galaxycine.png","cinestar.png","lotte1.png","megags.png","bt.jpg","dongdacinema.png","TOUCH.png","cnx.jpg","STARLIGHT.png"];
	return (
		<React.Fragment>
			<div id={props.id} className="footer-app">
				<div className="app-wrapper">
					<div className="app-info">
						<h1>Ứng dụng tiện lợi dành cho người yêu điện ảnh</h1>
						<p>Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.</p>
						<button>App miễn phí - Tải về ngay!</button>
						<small>TIX có hai phiên bản <span>iOS</span> & <span>Android</span></small>
					</div>
					<div className="app-carousel">
						<Slider {...settings}>
						<div>
		          <img src="/app/images/slide10.jpg" alt="" />
		         </div>
		         <div>
		          <img src="/app/images/slide11.jpg" alt="" />
		         </div>
		         <div>
		          <img src="/app/images/slide12.jpg" alt="" />
		          </div>
	        	</Slider>
					</div>
				</div>
			</div>
			<div className="information-wrapper">
			<div className="information">
				<div className="tix">
					<h4>TIX</h4>
					<div className="content">
						<ul>
							<li>FAQ</li>
							<li>Brand Guidelines</li>
						</ul>
						<ul>
							<li>Thỏa thuận sử dụng</li>
							<li>Chính sách bảo mật</li>
						</ul>
					</div>
				</div>
				<div className="partner">
					<h4>Đối tác</h4>
					<div className="content">
						{
							imgs.map((img,index) => (
								<a href="/" key={index}>
									<img src={"/app/images/"+img} alt="" />
								</a>
							))
						}
					</div>
				</div>
				<div className="social">
					<div className="social-item">
						<h4>MOBILE APP</h4>
						<div>
							<img src="/app/images/apple-logo.png" alt="" />
							<img src="/app/images/android-logo.png" alt="" />
						</div>
					</div>
					<div className="social-item">
						<h4>SOCIAL</h4>
						<div>
							<img src="/app/images/facebook-logo.png" alt="" />
							<img src="/app/images/zalo-logo.png" alt="" />
						</div>
					</div>
					<div>
						
					</div>
				</div>
			</div>
			</div>
			<div className="footer-container">
				<div className="footer">
					<div className="logo">
						<img src="/app/images/zion-logo.jpg" alt="" />
					</div>
					<div className="contact">
						<h4>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</h4>
						<p>Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam.</p>
						<p>Giấy chứng nhận đăng ký kinh doanh số: 0101659783,</p>
						<p>đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp.</p>
						<p>Số Điện Thoại (Hotline): 1900 545 436</p>
						<p>Email: <span>support@tix.vn</span></p>
					</div>
					<div className="gov">
						<img src="/app/images/gov.png" alt="" />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Footer;