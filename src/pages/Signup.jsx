import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Signup.css';

const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        password: '',
        company: '',
        isAgency: ''
    });

    const updateField = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSignup = (e) => {
        e.preventDefault();
        const userData = {
            name: formData.fullName,
            email: formData.email,
            password: formData.password
        };
        localStorage.setItem('popx-user', JSON.stringify(userData));
        navigate('/login');
    };

    return (
        <div className="signup-wrapper">
            <div className="signup-box">
                <h2 className="signup-title">Create your<br />PopX account</h2>
                <form onSubmit={handleSignup}>
                    <label className="signup-label">Full Name*</label>
                    <input className="signup-input" type="text" name="fullName" value={formData.fullName} onChange={updateField} required />

                    <label className="signup-label">Phone Number*</label>
                    <input className="signup-input" type="text" name="phone" value={formData.phone} onChange={updateField} required />

                    <label className="signup-label">Email Address*</label>
                    <input className="signup-input" type="email" name="email" value={formData.email} onChange={updateField} required />

                    <label className="signup-label">Password*</label>
                    <input className="signup-input" type="password" name="password" value={formData.password} onChange={updateField} required />

                    <label className="signup-label">Company Name</label>
                    <input className="signup-input" type="text" name="company" value={formData.company} onChange={updateField} />

                    <label className="signup-label">Are you an Agency?*</label>
                    <div className="radio-wrapper">
                        <label className="radio-option">
                            <input type="radio" name="isAgency" value="Yes" onChange={updateField} required /> Yes
                        </label>
                        <label className="radio-option">
                            <input type="radio" name="isAgency" value="No" onChange={updateField} /> No
                        </label>
                    </div>

                    <button type="submit" className="signup-btn">Create Account</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
