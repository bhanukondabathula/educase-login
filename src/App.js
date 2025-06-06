import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import AuthLogin from './pages/AuthLogin';
import Signup from './pages/Signup';
import Account from './pages/Account';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/login" element={<AuthLogin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/account" element={<Account />} />
            </Routes>
        </Router>
    );
}

export default App;
