import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import * as Scroll from 'react-scroll';
import DropdownSite from './DropdownSite';
import Sidebar from './Sidebar';
import './Navbar.css';
import {useSelector} from 'react-redux';
const NavBar = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	const size = useSelector(state => state.responsive.size);
	const site = useSelector(state => state.site.site);
	const [isToggle,setIsToggle] = useState(false);
	const toggleSidebar = () => {
		setIsToggle(prev => !prev);
	}
	return (
		<nav className="navbar">
			<div className="nav-brand">
				<Link to="/">
					<img src="/app/images/web-logo.png" alt="" />
				</Link>
			</div>
			{(size<736)?null:(<ul className="nav-menu">
				<li>
					<Scroll.Link to="home-movie" spy={true} smooth={true} duration={400} offset={-100} activeClass="nav-link-active">
						Lịch chiếu
					</Scroll.Link>
				</li>
				<li>
					<Scroll.Link to="cluster" spy={true} smooth={true} duration={400} offset={-150} activeClass="nav-link-active">
						Cụm chiếu
					</Scroll.Link>
				</li>
				<li>
					<Scroll.Link to="news" spy={true} smooth={true} duration={400} offset={-100} activeClass="nav-link-active">
						Tin tức
					</Scroll.Link>
				</li>
				<li>
					<Scroll.Link to="app" spy={true} smooth={true} duration={400} offset={-100} activeClass="nav-link-active">
						Ứng dụng
					</Scroll.Link>
				</li>
			</ul>)}
			{(size<735)?null:(<div className="info">
				<div className="login">
					<img src="./app/images/avatar.png" alt="" />
					<Link className="login-page" to="/login">Đăng nhập</Link>
				</div>
				<div className="divider"></div>
				<div className="site">
					<img src="./app/images/location-header.png" alt="" />
					<span>{site}</span>
					<i className="fa fa-angle-down" onClick={() => setIsOpen(prev => !prev)}></i>
					{isOpen && <DropdownSite/>}
				</div>
			</div>)}
			{(size<735)?(<button className="menu-option" onClick={toggleSidebar}><img src="./app/images/menu-options.png" alt="" /></button>):null}
			{isToggle?<Sidebar toggleSidebar={toggleSidebar}/>:null}
		</nav>
	);
}

export default NavBar;