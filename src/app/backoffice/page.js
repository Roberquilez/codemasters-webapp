
// src/app/backoffice/page.js
import React from 'react';
import CourseList from '../../components/CourseList';

export default function Home() {
    return (
        <>
            <h1>CodeMasters Dashboard</h1>
            <p>Bienvenido al Dashboard de CodeMasters</p>
            <p>¡ Gestiona los cursos desde aquí !</p>
            <p>Selecciona una sección en el menú de la izquierda</p>
            <CourseList />
        </>
    );
}
