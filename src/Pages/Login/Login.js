import React from 'react';
import './Login.css'
import { useLocation, useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInWithGoogle, processLogin, handleEmail, handlePassword } = useAuth();

    //to place order after login
    const location = useLocation()
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div className="backgrnd-img" onSubmit={processLogin}>
            <div className="container login-form ">
                <div className="py-5">
                    <h2>Login Please</h2>
                    <form className="text-left">
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input onBlur={handleEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input onBlur={handlePassword} type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Already Registered</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    <p>New to this website? <Link to="/register">Create Account</Link></p>
                    <div>...................or.................</div>
                    <button onClick={handleGoogleLogin} className="btn-regular">Google Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Login;