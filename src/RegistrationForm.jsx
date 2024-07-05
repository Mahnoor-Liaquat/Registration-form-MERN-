import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './App.css';  // Import the CSS file
import axios from 'axios';

function RegistrationForm() {
  const [name, setName] = useState('');
  const [DOB, setDOB] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://registration-form-api.vercel.app/register', { name, DOB, mobileNo, email, password })
      .then(result => console.log(result))
      .catch(error => console.log(error));
  };

  return (
    <div className="center-container">
      <div className="form-container">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label className="form-label">Name:</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter Name" 
              value={name}
              onChange={(e) => setName(e.target.value)} 
            />
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="formBasicDOB">
            <Form.Label className="form-label">Date Of Birth:</Form.Label>
            <Form.Control 
              type="date" 
              placeholder="Enter DOB" 
              value={DOB}
              onChange={(e) => setDOB(e.target.value)} 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label className="form-label">Phone Number:</Form.Label>
            <Form.Control 
              type="number" 
              placeholder="Enter MobilePhone" 
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)} 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="form-label">Email address:</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Enter email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="form-label">Password:</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Are you ready to be part of our organization" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button> 
          <br/>
          <div className='already'>
            Already have an account
          </div>
          <br/>
          <Button variant="primary" type="button">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default RegistrationForm;
