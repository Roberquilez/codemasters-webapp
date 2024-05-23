// pages/login.js
import React, { useState } from 'react';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const res = await fetch('https://mi-api.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'UsuarioCodeMasters': 'tu-usuario-codemasters',
            },
            body: JSON.stringify({ username, password }),
        });

        if (res.ok) {
            const data = await res.json();
            const jwt = data.jwt;

            localStorage.setItem('jwt', jwt);
        } else {
            console.error('Error de inicio de sesión');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nombre de usuario:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
                Contraseña:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button type="submit">Entrar</button>
        </form>
    );
}