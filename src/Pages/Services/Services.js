import React, { useEffect, useState } from 'react';
import ServiceItem from '../ServiceItem/ServiceItem';
import './Services.css'
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="backgrnd-img">
            <h1 className="pt-5">The Services we provides</h1>
            <div className="container service-container mx-auto row g-2">
                {
                    services.map(service => <ServiceItem
                        S_id={service.S_id}
                        service={service}
                    ></ServiceItem>)
                }
            </div>
        </div>
    );
};

export default Services;