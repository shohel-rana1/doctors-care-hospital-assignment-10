import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="backgrnd-img">
            <div className="container login-form ">
                <div className="py-5">
                    <h2>Login Please</h2>
                    <Form className="text-left w-50 mx-auto">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember Me Login" />
                        </Form.Group>
                        <Button variant="primary" type="submit" size="lg">
                            Submit
                        </Button>
                    </Form>
                    <p>New to this website? <Link to="/register">Create Account</Link></p>
                    <div>...................or.................</div>
                    <button className="btn btn-success">Google Login</button>
                </div>
            </div>
        </div>
    );
};

export default Login;