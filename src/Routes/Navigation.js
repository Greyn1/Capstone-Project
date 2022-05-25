import { Link, Outlet } from "react-router-dom";
import {ReactComponent as CrwnLogo} from '../Assets/crown.svg';
import '../Styles/Navigation.styles.scss';

function Navigation() {
    return (
        <>
            <div className="navigation">
                <Link to='/' className="logo-container" >
                    <CrwnLogo className="logo" />
                </Link>
                <div className="nav-links-container" >
                    <Link to='/shop' className="nav-link" >SHOP</Link>
                    <Link to='/sign-in' className="nav-link" >SIGNIN</Link>
                </div>
            </div>
            <Outlet />
        </>
    );
}

export default Navigation;
