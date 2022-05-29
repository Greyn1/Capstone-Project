import { useContext } from 'react';
import { CartContext } from '../Contexts/CartContext';
import {ReactComponent as ShoppingIcon} from '../Assets/shopping-bag.svg';
import '../Styles/CartIcon.styles.scss';

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{cartCount}</span>
    </div>
  );
}

export default CartIcon;