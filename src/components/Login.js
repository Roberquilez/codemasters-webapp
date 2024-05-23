// src/components/Login.js
import React, { useState } from 'react';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        const response = await fetch('https://your-api-url.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'UsuarioCodeMasters': email
            },
            body: JSON.stringify({
                password: password
            })
        });

        if (response.ok) {
            // La solicitud ha funcionado correctamente
            const data = await response.json();
        } else {
            // Hubo un error con la solicitud
            console.error('Error:', response.status, response.statusText);
        }
    };

    return (
        <div>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}