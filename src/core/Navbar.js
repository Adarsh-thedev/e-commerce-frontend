import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {signout, isAuthenticated} from '../auth/helper/index';

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
				{!isAuthenticated() && (
					<React.Fragment>
						<li className = 'nav-item dim'>
							<Link style={currentTab(history, '/signup')} className = 'nav-link' to = '/signup'>SignUp</Link>
						</li>
						<li className = 'nav-item dim'>
							<Link style={currentTab(history, '/signin')} className = 'nav-link' to = '/signin'>SignIn</Link>
						</li>
					</React.Fragment>
				)}
				{isAuthenticated() && (
					<li className = 'nav-item dim'>
						<span className = 'nav-link pointer' onClick = {()=> {
							signout(()=> {
								history.push('/')
							})
						}}>
							Signout
						</span>
					</li>
				)}
			</ul>
		</nav>
	);
}

export default withRouter(Navbar);