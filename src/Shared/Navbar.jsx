
import { Link } from 'react-router-dom';
import LogoMain from '../assets/icon/icon.png'
import { useContext } from 'react';
import AuthContext from '../Context/AuthContext';
import auth from '../firebase/firebase.init';

const Navbar = () => {

    const { user, UsersignOut } = useContext(AuthContext);

    const handleSignOut = () => {
        UsersignOut()
            .then(() => {
                console.log('you pages is sign out success')
            })
            .catch(() => {
                console.log('please live me alon')
            })

    }

    const Links = <>
        <li> <Link to='/'>Home</Link></li>
        <li> <Link to='#'>Home</Link></li>
        <li> <Link to='#'>Home</Link></li>

    </>

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {Links}
                    </ul>
                </div>
                <div>
                    <img src={LogoMain} alt="" />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <button onClick={handleSignOut} className='btn'>Sign Out</button></> : <><Link to='/registar'>Registation Now</Link>
                        <button className='btn'><Link to='/signin'>Sign In</Link></button></>
                }

            </div>
        </div>
    );
};

export default Navbar;