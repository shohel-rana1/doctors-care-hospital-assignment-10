import React, { useState, useEffect } from 'react';
import DeptItem from '../DeptItem/DeptItem';
import './Departments.css'

const Departments = () => {
    const [depts, setDepts] = useState([]);
    useEffect(() => {
        fetch('./departments.json')
            .then(res => res.json())
            .then(data => setDepts(data))
    }, [])
    return (
        <div className="backgrnd-img">
            <h1 className="pt-5">The Departments we direct</h1>
            <div className="container service-container mx-auto row g-4">
                {
                    depts.map(dept => <DeptItem
                        id={dept.id}
                        dept={dept}
                    ></DeptItem>)
                }
            </div>
        </div>
    );
};

export default Departments;