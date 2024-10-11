import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { FaUser, FaSignOutAlt } from 'react-icons/fa';

function UpdateEmp() {
    const { id } = useParams();
    const [name, setName] = useState('');   // Default to empty string
    const [empID, setEmpID] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [role, setRole] = useState('');
    const [contact, setContact] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://127.0.0.1:4000/getUser/${id}`)
            .then(result => {
                console.log(result.data); // Log the fetched data
                const user = result.data;
                setName(user.name);
                setEmpID(user.empID);
                setEmail(user.email);
                setAge(user.age);
                setRole(user.role);
                setContact(user.contact);
            })
            .catch(err => console.log('Error fetching user: ', err));
    }, [id]);

    const handleUpdate = (e) => {
        e.preventDefault();
       
        axios.put("http://127.0.0.1:4000/updateUser/"+id, {
            name,
            empID,
            email,
            age,
            role,
            contact
        })
        .then(() => navigate('/'))
        .catch(err => console.log(err));
    };

    return (
        <div className='container'>
            <div className="sidebar">
        <ul>
            <li><a href="/order">Order</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/supplier">Supplier</a></li>
            <li><a href="/employee">Employee</a></li>
        </ul>
        <div className="sidebar-bottom">
            <div className="icon">
                <FaUser size={24} /><FaSignOutAlt size={24} />
            </div>
        </div>
        </div>
                
                <div className='employee-form-update'>
                    <h2>Update Employee</h2>
                    <form id='employeeForm' onSubmit={handleUpdate}>
                        <div className='mb-2'>
                            <label>Name</label>
                            <input
                                type='text'
                                placeholder='Enter Name'
                                className='form-control'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className='mb-2'>
                            <label>Employee ID</label>
                            <input
                                type='number'
                                placeholder='Enter EmpID'
                                className='form-control'
                                value={empID}
                                onChange={(e) => setEmpID(e.target.value)}
                            />
                        </div>
                        <div className='mb-2'>
                            <label>Email</label>
                            <input
                                type='email'
                                placeholder='Enter Email'
                                className='form-control'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='mb-2'>
                            <label>Age</label>
                            <input
                                type='number'
                                placeholder='Enter Age'
                                className='form-control'
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                            />
                        </div>
                        <div className='mb-2'>
                            <label>Role</label>
                            <input
                                type='text'
                                placeholder='Enter Role'
                                className='form-control'
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                            />
                        </div>
                        <div className='mb-2'>
                            <label>Contact</label>
                            <input
                                type='text'
                                placeholder='Enter Contact'
                                className='form-control'
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                            />
                        </div>
                        <button className='btn btn-success'>Update</button>
                    </form>
                </div>
            </div>
        
    );
}

export default UpdateEmp;
