// src/components/Login.js

import React, { useState } from 'react';

const Login = ({ setAdminLoggedIn }) => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        });
    };

    const handleLogin = () => {
        // Add authentication logic here (e.g., check against hardcoded credentials)
        const isAdminAuthenticated = credentials.username === 'admin' && credentials.password === 'password';

        if (isAdminAuthenticated) {
            setAdminLoggedIn(true);
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form>
                <label>Username:</label>
                <input type="text" name="username" value={credentials.username} onChange={handleChange} />

                <label>Password:</label>
                <input type="password" name="password" value={credentials.password} onChange={handleChange} />

                <button type="button" onClick={handleLogin}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
