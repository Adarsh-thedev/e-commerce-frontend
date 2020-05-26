import React from 'react';
import {API} from '../Backend';
import Base from './Base';
//import 'tachyons';
import '../styles.css';

const Home = () => {
    console.log('API is ',API);
    return(
        <Base title = 'Home Page'>
            <h1>Home</h1>
        </Base>
    );
}

export default Home;