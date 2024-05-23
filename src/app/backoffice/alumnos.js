// pages/backoffice/alumnos.js
import React from 'react';

export default function Alumnos({ datos }) {
    // Renderiza los datos en tu componente
    return (
        <div>
            {/* Renderiza tus datos aquí */}
        </div>
    );
}

export async function getServerSideProps() {
    let datos;

    try {
        // Reemplaza esta URL con la URL de tu API
        const res = await fetch('https://mi-api.com/alumnos');
        datos = await res.json();
    } catch (error) {
        // Genera datos dummy si hay un error
        datos = { /* Tus datos dummy aquí */ };
    }

    return {
        props: {
            datos,
        },
    };
}