import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import CartItem from "./CartItem";
import { CartDropdownContainer, EmptyMessage, CartItems } from "../Styles/CartDropdown.styles.js";
import '../Styles/CartDropdown.styles.js';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckOutHandler = () => {
    navigate('/checkout')
  }

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ?
          cartItems.map((item) => <CartItem cartItem={item} key={item.id} />)
          : <EmptyMessage>Your Cart is Empty</EmptyMessage>
        }
      </CartItems>
      <Button onClick={goToCheckOutHandler}>CHECKOUT</Button>
    </CartDropdownContainer>
  );
}

export default CartDropdown;