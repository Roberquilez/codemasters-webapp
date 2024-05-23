// pages/backoffice/inicio.js
import React from 'react';
export default function Inicio({ datos }) {
    return (
        <div>
            {/* Renderiza tus datos aquí */}
        </div>
    );
}

export async function getServerSideProps() {
    let datos;

    try {
        const res = await fetch('https://mi-api.com/inicio');
        datos = await res.json();
    } catch (error) {
        // Genera lso datos dummy si hay un error
        datos = { /* Tus datos dummy aquí */ };
    }

    return {
        props: {
            datos,
        },
    };
}