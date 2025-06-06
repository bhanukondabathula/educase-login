import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Welcome.css';

const Welcome = () => {
    const navigate = useNavigate();

    const redirectToSignup = () => navigate('/signup');
    const redirectToLogin = () => navigate('/login');

    return (
        <div className="welcome-screen">
            <div className="welcome-card">
                <h2 className="welcome-title">Welcome to PopX</h2>
                <p className="welcome-text">
                    Lorem ipsum dolor sit amet,<br />
                    consectetur adipiscing elit,
                </p>
                <button className="btn-primary" onClick={redirectToSignup}>
                    Create Account
                </button>
                <button className="btn-secondary" onClick={redirectToLogin}>
                    Already Registered? Login
                </button>
            </div>
        </div>
    );
};

export default Welcome;
