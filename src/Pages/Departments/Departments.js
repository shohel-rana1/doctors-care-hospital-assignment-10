import useDepartments from '../../hooks/useDepartments';
import DeptItem from '../DeptItem/DeptItem';
import './Departments.css'

const Departments = () => {
    const [depts] = useDepartments();

    return (
        <div className="backgrnd-img">
            <h1 className="pt-5">The Departments we direct</h1>
            <div className="container service-container mx-auto row g-4">
                {
                    depts.map(dept => <DeptItem
                        key={dept.id}
                        dept={dept}
                    ></DeptItem>)
                }
            </div>
        </div>
    );
};

export default Departments;