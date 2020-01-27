import React from 'react';
import './CartIcon.scss';
import { ReactComponent as ShoppingIcon } from '../../Assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../Redux/Cart/CartActions';
import { selectCartItemsCount } from '../../Redux/Cart/CartSelectors';

const CartIcon = ({ itemCount, toggleCartHidden }) => (
    <div 
        className='cart-icon'
        onClick={toggleCartHidden}
    >
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);