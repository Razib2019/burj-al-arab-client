import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './Header.css';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(() => {
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <div className='header'>
            <div className='header-content'>
                <div>
                    <Link to="/"><img className='company-logo' src="https://i.ibb.co/MkDQ75N/logo.png" alt="company logo" /></Link>
                </div>
                <div>
                    <Link className='link-item' to="/">Home</Link>
                    <Link className='link-item' to="/">Book</Link>
                    {user ?
                        <>
                            <Link className='link-item'>{user?.displayName}</Link>
                            <button onClick={handleSignOut} className='btn-logout'>LogOut</button>
                        </>
                        :
                        <>
                            <Link className='link-item' to="/register">Register</Link>
                            <Link className='link-item' to="/login">Login</Link>
                        </>}
                </div>
            </div>
            <div className='basic-info'>
                <h1>Burj Al Arab</h1>
                <h2>A global icon of Arabian luxury</h2>
            </div>
        </div >
    );
};

export default Header;