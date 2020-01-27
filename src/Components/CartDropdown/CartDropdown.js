import React from 'react';
import './CartDropdown.scss';
import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';
import { connect } from 'react-redux';
import { selectCartItems } from '../../Redux/Cart/CartSelectors';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../Redux/Cart/CartActions';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ?
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                :
                <span className='empty-message'>Your cart is empty</span>
            }
        </div>
        <CustomButton 
            onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }}
        >
            GO TO CHECKOUT
        </CustomButton>
    </div>
);

const mapStateToProps = state => ({
    cartItems: selectCartItems(state) 
});

export default withRouter(connect(mapStateToProps)(CartDropdown));