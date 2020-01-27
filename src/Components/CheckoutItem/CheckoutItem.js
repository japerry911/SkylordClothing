import React from 'react';
import './CheckoutItem.scss';
import { connect } from 'react-redux';
import { clearItemFromCart } from '../../Redux/Cart/CartActions';

const CheckoutItem = ({ cartItem, clearItemFromCart }) => {
    const { name, quantity, price, imageUrl } = cartItem;
    
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>{quantity}</span>
            <span className='price'>{price}</span>
            <div 
                className='remove-button'
                onClick={() => clearItemFromCart(cartItem)}
            >
                &#10005;
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    clearItemFromCart: cartItem => dispatch(clearItemFromCart(cartItem))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);