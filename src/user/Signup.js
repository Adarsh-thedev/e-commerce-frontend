import React, {useState} from 'react';
import Base from '../core/Base';
import {Link} from 'react-router-dom';

const Signup = () => {
    const signUpForm = () => {
        return(
            <div className="container">
                <div className="pa4 black-80 br1 shadow-3 bg2 col-12 col-md6">
                    <form className="measure center">
                        <div  className="ba b--transparent ph0 mh0">
                        <div className="mt3">
                                <label className="db fw6 lh-copy f6">Name</label>
                                <input className="pa2 input-reset ba bg2 hover-bg-black hover-white w-100" type="text"/>
                            </div>
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
                            <button className="btn btn-block btn-success grow pointer f6 br1">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    return(
        <Base title = 'Signup Page' description = 'User Signup'>
            {signUpForm()}
        </Base>
    );
}

export default Signup;