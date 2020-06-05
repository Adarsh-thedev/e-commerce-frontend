import React from 'react';
import {API} from '../Backend';
import Base from './Base';
import Card from './Card';
import '../styles.css';

const Home = () => {
    console.log('API is ',API);
    return(
        <Base title="Home Page" description="Welcome to the Tshirt Store">
            <div className = 'container'>
                <div className="row">
                    <div className="col-md-4 mb2">
                        <Card/>
                    </div>
                    <div className="col-md-4 mb2">
                        <Card/>
                    </div>
                    <div className="col-md-4 mb2">
                        <Card/>
                    </div>
                </div>
            </div>
        </Base>
    );
}

export default Home;