import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { FaUser, FaSignOutAlt } from 'react-icons/fa';

function CreateEmp() {
    const [name, setName] = useState()
    const [empID, setEmpID] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const [role, setRole] = useState()
    const [contact, setContact] = useState()
    const navigate =useNavigate()


    const Submit =(e) =>{
        e.preventDefault();
        axios.post("http://127.0.0.1:4000/createEmp", { name, empID, email, age, role, contact })
        .then(result => {
            console.log(result)
            navigate('/')}
            )
        .catch(err => console.log(err))
    }

  return (
    <div>
      <div className='container'>
      <div className="sidebar">
        <ul>
            <li><a href="/order">Suppliers</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/supplier">Delivery</a></li>
            <li><a href="/employee">Employee</a></li>
        </ul>
        <div className="sidebar-bottom">
            <div className="icon">
                <FaUser size={24} /><FaSignOutAlt size={24} />
            </div>
        </div>
        </div>

      <div class='employee-form'>
            <h2>Add New Employee</h2>
            <br/>
            <form onSubmit={Submit} >
                <div class='mb-2'>
                    <label for="">Name </label>
                    <input type='text' placeholder='Enter Name' className='form-control'
                    onChange={(e) => setName(e.target.value)} />
                </div>
                <div class='mb-2'>
                    <label for="">Employee ID </label>
                    <input type='number' placeholder='Enter EmpID' className='form-control'
                    onChange={(e) => setEmpID(e.target.value)}/>
                </div>
                <div class='mb-2'>
                    <label for="">Email </label>
                    <input type='email' placeholder='Enter Email' className='form-control'
                    onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div class='mb-2'>
                    <label for="">Age </label>
                    <input type='number' placeholder='Enter Age' className='form-control'
                    onChange={(e) => setAge(e.target.value)}/>
                </div>
                <div class='mb-2'>
                    <label for="">Role </label>
                    <input type='text' placeholder='Enter Role' className='form-control'
                    onChange={(e) => setRole(e.target.value)}/>
                </div>
                <div class='mb-2'>
                    <label for="">Contact</label>
                    <input type='text' placeholder='Enter Contact' className='form-control'
                    onChange={(e) => setContact(e.target.value)}/>
                </div>
                
                <button className='btn btn-success'>Add Employee</button>
            </form>
        </div>
      </div>
    </div>
  )
}
export default  CreateEmp;