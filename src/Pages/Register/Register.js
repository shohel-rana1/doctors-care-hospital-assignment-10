import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { handleRegistration, handleEmail, handlePassword, toggleLogin, signInWithGoogle } = useAuth();
    return (
        <div className="backgrnd-img">
            <div className="container login-form ">
                <div className="py-5">
                    <h2>Create Account</h2>
                    <form className="text-left" onSubmit={handleRegistration}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" class="form-label">Email address</label>
                            <input onBlur={handleEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input onBlur={handlePassword} type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Re-enter Password</label>
                            <input onBlur={handlePassword} type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 form-check">
                            <input onChange={toggleLogin} type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Already Login?</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    <p>
                        Already have an account? <Link to="/login">Log-In</Link>
                    </p>
                    <button onClick={signInWithGoogle} className="btn-regular">Google Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Register;