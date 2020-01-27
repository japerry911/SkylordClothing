import React from 'react';
import './CartDropdown.scss';
import CustomButton from '../CustomButton/CustomButton';

const CartDropdown = ({ hidden }) => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

export default CartDropdown;