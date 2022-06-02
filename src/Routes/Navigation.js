import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext";
import { CartContext } from "../Contexts/CartContext";
import { signOutUser } from "../Utils/Firebase";
import CartIcon from "../Components/CartIcon";
import CartDropdown from "../Components/CartDropdown";
import { ReactComponent as CrwnLogo } from '../Assets/crown.svg';
import { LogoContainer, NavigationContainer, NavLink, NavLinks } from "../Styles/Navigation.styles";

function Navigation() {
    const { curUser } = useContext(UserContext);
    // console.log(curUser);
    const {isCartOpen} = useContext(CartContext);

    return (
        <>
            <NavigationContainer>
                <LogoContainer as={Link} to='/' > 
                    <CrwnLogo className="logo" />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop' as={Link}>SHOP</NavLink>
                    {
                        curUser ? (<NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>)
                            :
                            (<NavLink as={Link} to='/auth'>SIGN IN</NavLink>)
                    }
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </>
    );
}

export default Navigation;
