import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
import Button from "./Button";
import CartItem from "./CartItem";
import '../Styles/CartDropdown.styles.scss';

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);
    return (
      <div className='cart-dropdown-container'>
          <div className="cart-items">
              {cartItems.map((item) => <CartItem cartItem={item} key={item.id} />)}
          </div>
          <Button>CHECKOUT</Button>
      </div>
    );
  }
  
  export default CartDropdown;