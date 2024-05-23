// src/app/backoffice/layout.js
import React from 'react';
import Link from 'next/link';
import "./backoffice.css";

export default function RootLayout({ children }) {
    return (
        <section id="backoffice">
            <nav id="navigation">
                <ul>
                    <li><Link href="/backoffice/inicio">Inicio</Link></li>
                    <li><Link href="/backoffice/alumnos">Alumnos</Link></li>
                    <li><Link href="/backoffice/profesores">Profesores</Link></li>
                    <li><Link href="/backoffice/cursos">Cursos</Link></li>
                </ul>
            </nav>
            <section id="content">
                {children}
            </section>
        </section>
    );
}