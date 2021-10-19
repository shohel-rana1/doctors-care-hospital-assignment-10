import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ServiceItem.css'

const ServiceItem = ({ service }) => {
    const { img, name, description, key } = service;
    return (
        <div className="col-12 col-md-6 col-lg-4 mt-5">
            <Card style={{ width: '320px' }}>
                <Card.Img className="img image-desgin img-fluid" variant="top" src={img} style={{ height: '280px' }} />
                <Card.Body>
                    <Card.Title className="name">{name}</Card.Title>
                </Card.Body>
                <Card.Body>
                    <Card.Text className="name">{description}</Card.Text>
                </Card.Body>
                <Card.Body>
                    <Link
                        to={`/servicedetails/${key}`}
                        className="btn w-100 btn-bg"
                    >
                        View Details
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ServiceItem;