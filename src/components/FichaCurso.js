// src/components/FichaCurso.js
import React from 'react';

export default function FichaCurso({ nombre, curso, descripcion }) {
    return (
        <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
            <h2>{nombre}</h2>
            <h3>{curso}</h3>
            <p>{descripcion}</p>
        </div>
    );
}