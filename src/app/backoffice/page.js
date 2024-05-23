
// src/app/backoffice/page.js
import React from 'react';
import CourseList from '../../components/CourseList';
import Welcome from '../../components/Welcome';
import UserList from '../../components/UserList';

export default function Home() {
    return (
        <>
            <Welcome />
            <h1>CodeMasters Dashboard</h1>
            <p>Bienvenido al Dashboard de CodeMasters</p>
            <p>¡ Gestiona los cursos desde aquí !</p>
            <p>Selecciona una sección en el menú de la izquierda</p>
            <CourseList />
            <UserList />
        </>
    );
}
