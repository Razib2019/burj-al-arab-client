import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './Register.css';

const Register = () => {
    const [error, setError] = useState(null);
    const { createUser, googleSignIn, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error('error:', error);
            })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        if (password.length < 6) {
            setError('Password should be at least 6 characters or more.');
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true });
                updateUserProfile(name)
                    .then(() => {
                    })
                    .catch(() => {

                    });
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Registration</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" required />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <input className='btn-submit' type="submit" value="Register" />
            </form>
            <p>Already Have an Account ? <Link to='/login'>Login</Link> </p>
            <p className='text-error'>{error}</p>
            <button onClick={() => { handleGoogleSignIn() }} className='btn-google'><FaGoogle /> SignIn With Google</button>
        </div>
    );
};

export default Register;