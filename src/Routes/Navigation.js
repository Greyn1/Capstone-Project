import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext";
import { CartContext } from "../Contexts/CartContext";
import { signOutUser } from "../Utils/Firebase";
import CartIcon from "../Components/CartIcon";
import CartDropdown from "../Components/CartDropdown";
import { ReactComponent as CrwnLogo } from '../Assets/crown.svg';
import '../Styles/Navigation.styles.scss';

function Navigation() {
    const { curUser } = useContext(UserContext);
    // console.log(curUser);
    const {isCartOpen} = useContext(CartContext);

    return (
        <>
            <div className="navigation">
                <Link to='/' className="logo-container" >
                    <CrwnLogo className="logo" />
                </Link>
                <div className="nav-links-container" >
                    <Link to='/shop' className="nav-link" >SHOP</Link>
                    {
                        curUser ? (<span className="nav-link" onClick={signOutUser}>SIGN OUT</span>)
                            :
                            (<Link to='/auth' className="nav-link" >SIGN IN</Link>)
                    }
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet />
        </>
    );
}

export default Navigation;
