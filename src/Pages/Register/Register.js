import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="backgrnd-img">
            <div className="container login-form ">
                <div className="py-5">
                    <h2>Create a new account</h2>
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
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Re-enter Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember Me Login" />
                        </Form.Group>
                        <Button variant="primary" type="submit" size="lg">
                            Submit
                        </Button>
                    </Form>
                    <p>
                        Already have an account? <Link to="/login">Log-In</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;