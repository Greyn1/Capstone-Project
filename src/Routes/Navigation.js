import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext";
import { signOutUser } from "../Utils/Firebase";
import { ReactComponent as CrwnLogo } from '../Assets/crown.svg';
import '../Styles/Navigation.styles.scss';

function Navigation() {
    const { curUser, setCurUser } = useContext(UserContext);
    // console.log(curUser);

    const signOutHandler = async () => {
        await signOutUser();
        setCurUser(null);
    }

    return (
        <>
            <div className="navigation">
                <Link to='/' className="logo-container" >
                    <CrwnLogo className="logo" />
                </Link>
                <div className="nav-links-container" >
                    <Link to='/shop' className="nav-link" >SHOP</Link>
                    {
                        curUser ? (<span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>)
                            :
                            (<Link to='/auth' className="nav-link" >SIGN IN</Link>)
                    }
                </div>
            </div>
            <Outlet />
        </>
    );
}

export default Navigation;
