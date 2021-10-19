// import React, { useEffect, useState } from 'react';
import useConsultants from '../../hooks/useConsultants';
import Consultant from '../Consultant/Consultant';

const Consultants = () => {
    const [consultors] = useConsultants();
    return (
        <div className="backgrnd-img">
            <h1 className="pt-5">Please select your Consultant</h1>
            <div className="container service-container mx-auto row g-2">
                {
                    consultors.map(consultor => <Consultant
                        key={consultor.D_id}
                        consultor={consultor}
                    ></Consultant>)
                }
            </div>
        </div>
    );
};

export default Consultants;