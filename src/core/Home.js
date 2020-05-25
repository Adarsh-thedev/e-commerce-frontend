import React from 'react';
import {API} from '../Backend';
import Base from './Base';
//import 'tachyons';
import '../styles.css';

const Home = () => {
    console.log('API is ',API);
    return(
        <Base title = 'Home Page'>
            <div className = 'row'>
                <div className = 'col'>
                    <button className = 'btn grow btn-success br2'>Col1</button>
                </div>
                <div className = 'col'>
                    <button className = 'btn grow btn-success br2'>Col2</button>
                </div>
                <div className = 'col'>
                    <button className = 'grow btn btn-success br2'>Col3</button>
                </div>
            </div>
        </Base>
    );
}

export default Home;