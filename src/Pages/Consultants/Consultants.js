import React, { useEffect, useState } from 'react';
import Consultant from '../Consultant/Consultant';

const Consultants = () => {
    const [consultors, Setconsultors] = useState([]);
    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => Setconsultors(data))
    }, [])
    return (
        <div className="backgrnd-img">
            <h1 className="pt-5">Please select your Consultant</h1>
            <div className="container service-container mx-auto row g-4">
                {
                    consultors.map(consultor => <Consultant
                        key={consultor.key}
                        consultor={consultor}
                    ></Consultant>)
                }
            </div>
        </div>
    );
};

export default Consultants;