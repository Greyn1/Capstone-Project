import { useContext } from 'react';
import { CartContext } from '../Contexts/CartContext';
import { CartIconContainer, ItemCount, ShoppingIcon } from '../Styles/CartIcon.styles.js';

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
        <ShoppingIcon className='shopping-icon'/>
        <ItemCount className='item-count'>{cartCount}</ItemCount>
    </CartIconContainer>
  );
}

export default CartIcon;