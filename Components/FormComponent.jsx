import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormComponent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phoneNo: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: '',
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.phoneNo) newErrors.phoneNo = 'Phone Number is required';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.panNo) newErrors.panNo = 'PAN Number is required';
    if (!formData.aadharNo) newErrors.aadharNo = 'Aadhar Number is required';
  
    return newErrors;
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Check if the current input box has an error message and if it's filled, remove the error
    if (errors[name] && value.trim() !== '') {
      setErrors({ ...errors, [name]: undefined });
    }
  };
  
  const isFormValid = Object.values(formData).every(value => !!value) &&
    /\S+@\S+\.\S+/.test(formData.email) &&
    Object.keys(errors).every(key => !errors[key]);
  
  <button className='submit' type="submit" disabled={!isFormValid}>Submit</button>

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    const hasRequiredErrors = Object.keys(newErrors).some(key => {
      return key !== 'phoneNo' && newErrors[key] !== undefined;
    });
    if (!hasRequiredErrors) {
      navigate('/success', { state: { formData } });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className='container'>
      <header>Registration Form</header>
    <form onSubmit={handleSubmit}>
      <div className='input-box'>
        <label>First Name</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        {errors.firstName && <span className='error-msg'>{errors.firstName}</span>}
      </div>
      <div className='input-box'>
        <label>Last Name</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        {errors.lastName && <span className='error-msg'>{errors.lastName}</span>}
      </div>
      <div className='input-box'>
        <label>Username</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
        {errors.username && <span className='error-msg'>{errors.username}</span>}
      </div>
      <div className='input-box'>
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <span className='error-msg'>{errors.email}</span>}
      </div>
      <div className='input-box'>
        <label>Password</label>
        <input
          type={showPassword ? 'text' : 'password'}
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button className='ShowHideBtn' type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? 'Hide' : 'Show'}
        </button>
        {errors.password && <span className='error-msg'>{errors.password}</span>}
      </div>
      <div className='input-box'>
       <label>Phone Number</label>
       <div className="phone-input">
    <select name="countryCode" value={formData.countryCode} onChange={handleChange}>
      <option value="">Country Code</option>
      <option value="+1">+1 (USA)</option>
      <option value="+91">+91 (India)</option>
      {/* Add more country codes as needed */}
    </select>
    <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} placeholder="Mobile Number" />
       </div>
  {errors.phoneNo && <span className='error-msg'>{errors.phoneNo}</span>}
</div>
      <div className='input-box'>
        <label>Country</label>
        <select name="country" value={formData.country} onChange={handleChange}>
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          {/* Add more options as needed */}
        </select>
        {errors.country && <span className='error-msg'>{errors.country}</span>}
      </div>
      <div className='input-box'>
        <label>City</label>
        <select name="city" value={formData.city} onChange={handleChange}>
          <option value="">Select City</option>
          <option value="Mumbai">Mumbai</option>
          <option value="New York">New York</option>
          {/* Add more options as needed */}
        </select>
        {errors.city && <span className='error-msg'>{errors.city}</span>}
      </div>
      <div className='input-box'>
        <label>PAN Number</label>
        <input type="text" name="panNo" value={formData.panNo} onChange={handleChange} />
        {errors.panNo && <span className='error-msg'>{errors.panNo}</span>}
      </div>
      <div className='input-box'>
        <label>Aadhar Number</label>
        <input type="text" name="aadharNo" value={formData.aadharNo} onChange={handleChange} />
        {errors.aadharNo && <span className='error-msg'>{errors.aadharNo}</span>}
      </div>
      <button className='submit' type="submit" disabled={Object.keys(errors).length > 0}>Submit</button>
    </form>
    </div>
  );
};

export default FormComponent;
