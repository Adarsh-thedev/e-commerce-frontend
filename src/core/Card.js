import React from 'react';
import ImageHelper from './helper/ImageHelper';

const Card = ({
    product,
    addToCart = true,
    removeFromCart = false
}) => {
    const shwoAddTtoCart = () => {
        return(
            addToCart && (
                <button className = "tc bg-washed-blue btn btn-block btn-outline-info b dim f6 br2 shadow-2" href="#">Add To Cart</button>
            )
        );
    }

    const showRemoveFromCart = () => {
        return(
            removeFromCart && (
                <button className = "tc btn btn-block b btn-outline-danger dim f6 br2 shadow-2" href="#">Remove From Cart</button>
            )
        );
    }

    const cardTitle = product ? product.name : 'T-Shirt';
    const cardPrice = product ? product.price : 'Default Price';
    const cardDescription = product ? product.description : 'Default Description';

    return(
        <section>
            <div className = "card bn mw5 br2 bg-1 shadow-3 tc center grow">
                <div className = 'card-header bg1 white'>{cardTitle}</div>
                <ImageHelper product = {product}/>
                <div className = "pa2 ma1 bt bn">
                    <p className = "card-text bg1 white db">{cardDescription}</p>
                    <p className = "card-text db">Price: {cardPrice}</p>
                    {shwoAddTtoCart()}
                    {showRemoveFromCart()}
                </div>
            </div>
        </section>
    );
}

export default Card;