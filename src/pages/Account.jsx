import React, { useEffect, useState } from 'react';
import '../styles/Account.css';

const Account = () => {
    const [user, setUser] = useState({ name: '', email: '' });

    useEffect(() => {
        const account = JSON.parse(localStorage.getItem('popx-user'));
        if (account) {
            setUser({
                name: account.name || 'User',
                email: account.email || 'user@example.com'
            });
        }
    }, []);

    return (
        <div className="user-wrapper">
            <div className="user-card">
                <h3 className="user-title">Account Settings</h3>

                <div className="user-info">
                    <div className="user-top">
                        <img
                            src="https://tse1.mm.bing.net/th?id=OIP.UGvszP1kpazIwiJJL94uYQHaJh&pid=Api&P=0&h=180"
                            alt="User Avatar"
                            className="user-avatar"
                        />
                        <div className="user-meta">
                            <p className="user-name">{user.name}</p>
                            <p className="user-email">{user.email}</p>
                        </div>
                    </div>
                    <p className="user-desc">
                        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Account;
