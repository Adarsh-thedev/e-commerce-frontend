import React, {useState, useEffect} from 'react';
import Base from './Base';
import Card from './Card';
import {loadCart} from './helper/cartHelper';

const Cart = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(loadCart());
    }, [])

    const loadAllProducts = () => {
        return(
            <div className = 'tc'>
                <h2>Your Cart Items</h2>
                {products.map((product, index) => {
                    return(
                        <Card 
                            key = {index}
                            product = {product}
                            AddToCart = {false}
                            removeFromCart = {true}
                        />
                    );
                })}
            </div>
        );
    }

    const loadCheckout = () => {
        return(
            <div>Checkout Component</div>
        );
    }

    return(
        <Base title = 'Cart' description = 'Items in your cart'>
            <div className = 'container'>
                <div className="row">
                    <div className = 'col-md-6'>
                        {loadAllProducts()}    
                    </div>
                    <div className = 'col-md-6'>
                        {loadCheckout()}    
                    </div>
                </div>
            </div>
        </Base>
    );
}

export default Cart;
