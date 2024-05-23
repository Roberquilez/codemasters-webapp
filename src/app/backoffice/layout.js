import "./backoffice.css";

export default function RootLayout({ children }) {
    return (
        <section id="backoffice">
            <nav id="navigation">
                Implementar aquí el menú de navegación
            </nav>
            <section id="content">
                {children}
            </section>
        </section>
    );
}