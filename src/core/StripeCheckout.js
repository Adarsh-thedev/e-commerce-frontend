import React, {useState, useEffect} from 'react';
import {isAuthenticated} from '../auth/helper/index';
//import {emptyCart, loadCart} from './helper/cartHelper';
import { Link } from 'react-router-dom';
import StripeCheckoutCard from 'react-stripe-checkout';
import {API} from '../Backend.js';

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

    const makePayment = (token) => {
        const body = {
            token,
            products,
        }

        const headers = {
            'Content-Type' : 'application/json'
        }

        return fetch(`${API}/stripepayment`, {
            method : 'POST',
            headers : headers,
            body : JSON.stringify(body)
        })
        .then(response => {
            //console.log(response);
            const {status} = response;
            console.log('STATUS : ', status);
        })
        .catch(err => console.log(err));
    }

    const showStripeButton = () => {
        return isAuthenticated() ? (
            <StripeCheckoutCard
                name = 'Place your order'
                token = {makePayment}
                stripeKey = 'pk_test_51GvGLoAjBsv7y60vzHsj70WyUaHLNzhowYpfWlH2UE9TLqkDZxLk60ds7uKYJqyeARJfkk208G5m7o8TXsURKBLH00PnUd7xOi'
                amount={getFinalPrice() * 100} // cents
                currency="INR"
                shippingAddress
                billingAddress
            >
                <button className = 'btn bg-green b btn-block br2 dim white hover-white mt2'>
                    Pay With Stripe
                </button>
            </StripeCheckoutCard>
        ) : (
            <Link to = '/signin' className = 'text-decoration-none'>
                <button className = 'btn b bg1 btn-block br2 dim white hover-white mt2'>Sign In to checkout</button>
            </Link>
        );
    }

    return(
        <div>
            <h3>Your total amount is INR {getFinalPrice()}</h3>
            {showStripeButton()}
        </div>
    );
}

export default StripeCheckout;