import React from 'react';
import './Sidebar.css';


function Sidebar(props) {
	function closeSidebar(e) {
		if(e.currentTarget == e.target){
			props.toggleSidebar();
		}
		
	}
	return (
		<div className="sidebar overlay" onClick={closeSidebar}>
			<div className="content">
				a
			</div>
		</div>
	)
}

export default Sidebar