// pages/backoffice/cursos.js
import React from 'react';

export default function Cursos({ datos }) {

    return (
        <div>
            {/* Renderiza tus datos aquí */}
        </div>
    );
}

export async function getServerSideProps() {
    let datos;

    try {
        const res = await fetch('https://mi-api.com/cursos');
        datos = await res.json();
    } catch (error) {

        datos = { /* Tus datos dummy aquí */ };
    }

    return {
        props: {
            datos,
        },
    };
}