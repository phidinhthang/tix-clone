import React,{useEffect} from 'react';
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import * as Scroll from 'react-scroll';
import NavBar from './components/NavBar';
import { useSelector, useDispatch} from 'react-redux';
import {resize} from './action/responsiveAction.js';
import Carousel from './components/Carousel.js';
import HomeMovie from './components/HomeMovie.js';
import CinemaBlock from './components/CinemaBlock.js';
import News from './components/News.js';
import Footer from './components/Footer.js';
import LoginPage from './components/LoginPage.js';

const App = () => {
	const site = useSelector(state => state.site.site);
	
	const dispatch = useDispatch();
	const handleResize = () => {
		dispatch(resize(window.innerWidth));
	}
	useEffect(()=>{
		window.addEventListener('resize',()=>{
			dispatch(resize(window.innerWidth));
		});
		return window.removeEventListener('resize',()=>{
			dispatch(resize(window.innerWidth))
		});
	},[])
	return (
		<Router>
				 <NavBar />

			<Switch>
				<Route path="/" exact>
				 <Carousel />
				 <HomeMovie id="home-movie" />
				 <CinemaBlock id="cluster" />
				 <News id="news"/>
				 <Footer id="app" /> 
			 </Route>
			 <Route path="/login">
			 		<LoginPage />
			 </Route>
			</Switch>
		</Router>
	);
}

export default App;

