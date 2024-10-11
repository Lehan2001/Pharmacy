import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaSignOutAlt } from 'react-icons/fa';

function Emp() {
    const[users, setUsers]=useState([])
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:4000')
            .then(result => {
                console.log(result.data); 

                setUsers(result.data);
            })
            .catch(err => console.log(err));
    }, []);


    const handleDelete=(id) =>{
        axios.delete('http://localhost:4000/deleteuser/'+id)
        .then(res => {console.log(res)
            window.location.reload()
        })
        .catch(err=>console.log(err))
    }
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

        <div className='w-60 bg-white rounded p-4'>
            <div class='employee-form-view'>
            <h3>Employee management</h3>
            <br></br>
            <Link to="/create" className='btn-add'>Add +</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>EmpID</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Role</th>
                        <th>Contact</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) =>{
                            return<tr>
                                <td>{user.name}</td>
                                <td>{user.empID}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td>{user.role}</td>
                                <td>{user.contact}</td>
                                <td>
                                    <Link to={`/update/${user._id}`} className='btn btn-success'>Edit</Link>

                                    <button className='btn btn-danger' onClick={(e)=> handleDelete(user._id)}> Delete</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
        </div>
    </div>
  )
}
export default  Emp;
