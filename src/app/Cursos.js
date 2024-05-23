// pages/ListaDeCursos.js
import React from 'react';
import FichaCurso from '../src/components/FichaCurso';

export default function ListaDeCursos({ cursos }) {
    return (
        <div>
            {cursos.map((curso) => (
                <FichaCurso key={curso.id} nombre={curso.nombre} curso={curso.curso} descripcion={curso.descripcion} />
            ))}
        </div>
    );
}

export async function getServerSideProps() {
    // Reemplaza esta URL con la URL de tu API
    const res = await fetch('https://mi-api.com/cursos');
    const cursos = await res.json();

    return {
        props: {
            cursos,
        },
    };
}