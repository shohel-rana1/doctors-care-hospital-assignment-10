import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import './ServiceItem.css'

const ServiceItem = (props) => {
    const { img, name, description } = props.service;
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
                    <Button
                        className="w-100 ba-color">View Details</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ServiceItem;