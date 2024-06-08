import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SuccessComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const { formData } = state || {};

  if (!formData) {
    navigate('/');
    return null;
  }

  return (
    <div>
      <h1>Submission Successful!</h1>
      <ul>
        <li>First Name: {formData.firstName}</li>
        <li>Last Name: {formData.lastName}</li>
        <li>Username: {formData.username}</li>
        <li>Email: {formData.email}</li>
        <li>Phone Number: {formData.phoneNo}</li>
        <li>Country: {formData.country}</li>
        <li>City: {formData.city}</li>
        <li>PAN Number: {formData.panNo}</li>
        <li>Aadhar Number: {formData.aadharNo}</li>
      </ul>
      <button onClick={() => navigate('/')}>Back to Form</button>
    </div>
  );
};

export default SuccessComponent;
