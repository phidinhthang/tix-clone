import React from 'react';
import './DropdownSite.css';
import { chooseSite } from '../action/siteAction';
import { useSelector, useDispatch } from 'react-redux';
const DropdownSite = (props) => {
	const sites = useSelector(state => state.site.sites);
	const dispatch = useDispatch();
	return (
		<div className="dropdownSite">
			<ul>
				{ sites.map((site,index) => {
					return <li key={index} onClick={() => dispatch(chooseSite(site))}>{site}</li>
				})}
			</ul>
		</div>
	);
}

export default DropdownSite;