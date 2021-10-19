// import React, { useEffect, useState } from 'react';
import useServices from '../../hooks/useServices';
import ServiceItem from '../ServiceItem/ServiceItem';
import './Services.css'
const Services = () => {
    const [services] = useServices();
    return (
        <div className="backgrnd-img">
            <h1 className="pt-5">The Services we provides</h1>
            <div className="container service-container mx-auto row g-2">
                {
                    services?.map(service => <ServiceItem
                        key={service.key}
                        service={service}
                    ></ServiceItem>)
                }
            </div>
        </div>
    );
};

export default Services;