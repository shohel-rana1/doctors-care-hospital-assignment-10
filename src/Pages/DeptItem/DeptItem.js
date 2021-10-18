import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DeptItem = (props) => {
    const { img, name } = props.dept;
    return (
        <div className="col-12 col-md-6 col-lg-4 mt-5">
            <Card className="card" style={{ width: '320px' }}>
                <Card.Img className="img card" variant="top" src={img} style={{ height: '220px' }} />
                <Card.Body>
                    <Card.Title className="name">{name}</Card.Title>
                </Card.Body>
                <Card.Body>
                    <Link className="nav-link" to="/consultants"><Button
                        className="w-100 ba-color">Preview Now</Button></Link>

                </Card.Body>
            </Card>
        </div>
    );
};

export default DeptItem;