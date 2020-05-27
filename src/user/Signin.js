import React, {useState} from 'react';
import Base from '../core/Base';
import {Link} from 'react-router-dom';

const Signin = () => {
    const signInForm = () => {
        return(
            <div className="container">
                <div className="pa4 black-80 br2 shadow-3 bg3 col-12 col-md-6 offset-md-3">
                    <form className="measure center">
                        <div  className="ba b--transparent ph0 mh0">
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6">Email</label>
                                <input className="pa2 input-reset ba bg2 hover-bg-black hover-white w-100" type="email"/>
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6">Password</label>
                                <input className="b pa2 input-reset ba bg2 hover-bg-black hover-white w-100" type="password"/>
                            </div>
                        </div>
                        <div>
                            <button className="btn btn-block bg1 grow pointer f6 br2">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
    return(
        <Base title = 'Signin Page' description = 'User Signin'>
            {signInForm()}
        </Base>
    );
}

export default Signin;