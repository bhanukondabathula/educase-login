import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AuthLogin.css';

const AuthLogin = () => {
    const routeTo = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const onLoginSubmit = (e) => {
        e.preventDefault();

        const storedData = JSON.parse(localStorage.getItem('popx-user'));

        if (!storedData) {
            setError('No user found. Please sign up first.');
            return;
        }

        if (email === storedData.email && password === storedData.password) {
            routeTo('/account');
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="auth-wrapper">
            <div className="auth-card">
                <h2 className="auth-title">Signin to your<br />PopX account</h2>
                <p className="auth-description">Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,</p>

                <form onSubmit={onLoginSubmit}>
                    <label htmlFor="emailInput" className="auth-label">Email Address</label>
                    <input
                        type="email"
                        id="emailInput"
                        className="auth-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email address"
                        required
                    />

                    <label htmlFor="passInput" className="auth-label">Password</label>
                    <input
                        type="password"
                        id="passInput"
                        className="auth-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                        required
                    />

                    {error && <p style={{ color: 'red', fontSize: '13px' }}>{error}</p>}

                    <button type="submit" className="auth-button">Login</button>
                </form>
            </div>
        </div>
    );
};

export default AuthLogin;
