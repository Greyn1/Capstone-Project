import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import CartItem from "./CartItem";
import '../Styles/CartDropdown.styles.scss';

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckOutHandler = () => {
      navigate('/checkout')
    }

    return (
      <div className='cart-dropdown-container'>
          <div className="cart-items">
              {cartItems.map((item) => <CartItem cartItem={item} key={item.id} />)}
          </div>
          <Button onClick={goToCheckOutHandler}>CHECKOUT</Button>
      </div>
    );
  }
  
  export default CartDropdown;