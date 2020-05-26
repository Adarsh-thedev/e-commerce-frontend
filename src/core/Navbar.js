import React from 'react';
import {Link, withRouter} from 'react-router-dom';

const currentTab = (history, path) => {
	if(history.location.pathname === path) {
		return {color : '#d1d1d1',text : 'bold'}
	} else{
		return {color : 'black'}
	}
}

const Navbar = ({history}) => {
	return(
		<nav className = 'w-100 shadow-5 bg1 navbar'>
			<ul className = 'nav pa2'>
				<li className = 'nav-item dim'>
					<Link style={currentTab(history, '/')} className = 'nav-link' to = '/'>Home</Link>
				</li>
				<li className = 'nav-item dim'>
					<Link style={currentTab(history, '/cart')} className = 'nav-link' to = '/cart'>Cart</Link>
				</li>
				<li className = 'nav-item dim'>
					<Link style={currentTab(history, '/user/dashboard')} className = 'nav-link' to = '/user/dashboard'>Dashboard</Link>
				</li>
				<li className = 'nav-item dim'>
					<Link style={currentTab(history, '/admin/dashboard')} className = 'nav-link' to = '/admin/dashboard'>A.Dashboard</Link>
				</li>
				<li className = 'nav-item dim'>
					<Link style={currentTab(history, '/signup')} className = 'nav-link' to = '/signup'>Signup</Link>
				</li>
				<li className = 'nav-item dim'>
					<Link style={currentTab(history, '/signin')} className = 'nav-link' to = '/signin'>Signin</Link>
				</li>
				<li className = 'nav-item dim'>
					<Link style={currentTab(history, '/signout')} className = 'nav-link' to = '/signout'>Signout</Link>
				</li>
			</ul>
		</nav>
	);
}

export default withRouter(Navbar);