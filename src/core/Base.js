import React from 'react';
import Navbar from './Navbar';

const Base = ({
    title = 'My Title',
    description = 'My Description',
    className = 'p-4 bg2 shadow-1',
    children
}) => {
    return(
        <div>
            <Navbar/>
            <div className = 'container-fluid'>
                <div className = 'jumbotron bg1 text-center mt3'>
                    <h2 className = 'display-4'>{title}</h2>
                    <p className = 'lead'>{description}</p>
                </div>
                <div className = {className}>
                    {children}
                </div>
            </div>
            <footer className = 'footer mt-auto py3'>
                <div className = 'container-fluid bg2 mt5 text-center py-3'>
                    <h4>If you got any question, feel free to reach out</h4>
                    <button className = 'btn bg-gold btn-lg br2 grow'>Contact Us</button>
                </div>
                <div className = 'container'>
                    <span className = 'text-muted'>A T-shirt Hub</span>
                </div>
            </footer>
        </div>
    );
}

export default Base;