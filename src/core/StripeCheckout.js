import React, {useState, useEffect} from 'react';
import {isAuthenticated} from '../auth/helper/index';
import {emptyCart, loadCart} from './helper/cartHelper';
import { Link } from 'react-router-dom';

const StripeCheckout = ({
    products,
    setReload = f => f,
    reload = undefined
}) => {
    const [data, setData] = useState({
        loading : false,
        success : false,
        error : '',
        address : ''
    })

    const token = isAuthenticated() && isAuthenticated().token;
    const userId = isAuthenticated() && isAuthenticated().user._id;

    const getFinalPrice = () => {
        let amount = 0;
        products.map(p => {
            amount = amount + p.price
        })
        return amount;
    }

    const showStripeButton = () => {
        return isAuthenticated() ? (
            <button className = 'btn bg-green b btn-block br2 dim white hover-white mt2'>Pay With Stripe</button>
        ) : (
            <Link to = '/signin' className = 'text-decoration-none'>
                <button className = 'btn b bg1 btn-block br2 dim white hover-white mt2'>Sign In to checkout</button>
            </Link>
        );
    }

    return(
        <div>
            <h3>Stripe Checkout Section {getFinalPrice()}</h3>
            {showStripeButton()}
        </div>
    );
}

export default StripeCheckout;