// src/components/ListaDeCursos.js
import React from 'react';

export default function ListaDeCursos() {
    const courses = ['Java', 'C++', 'Python', 'HTML', 'JavaScript', 'CSS'];

    return (
        <div>
            <h1>Cursos disponibles</h1>
            <ul>
                {courses.map((course, index) => (
                    <li key={index}>{course}</li>
                ))}
            </ul>
        </div>
    );
}