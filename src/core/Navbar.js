import React from 'react';
import {Link, withRouter} from 'react-router-dom';

const currentTab = (history, path) => {
    if(history.location.pathname === path) {
        return {color : '#fff',text : 'bold'}
    } else{
        return {color : '#d1d1d1'}
    }
}

const Navbar = ({history}) => {
    return(
        <div className = 'shadow-5 color1'>
            <ul className = 'nav nav-tabs'>
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
        </div>
    );
}

export default withRouter(Navbar);