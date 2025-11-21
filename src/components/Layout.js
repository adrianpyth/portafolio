import React, { useState } from 'react';

// Se utiliza 'a' tags simples en lugar de next/link para mantener la portabilidad
// y cumplir con el requisito de archivo único, asumiendo que el enrutamiento se manejará
// fuera del scope de este componente si fuera necesario.

const NavLink = ({ href, children, onClick }) => (
    <a
        href={href}
        onClick={onClick}
        className="relative group text-sm font-semibold tracking-wider text-gray-300 hover:text-cyan-400 transition-colors duration-300 px-3 py-2 uppercase focus:outline-none"
    >
        {children}
        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left shadow-lg shadow-cyan-500/30"></span>
    </a>
);

// Componente de icono de menú simple (Hamburger)
const MenuIcon = ({ isOpen }) => (
    <svg
        className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        )}
    </svg>
);


export default function Layout({ children }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { name: 'HOME', href: '/' },
        { name: 'ABOUT', href: '/About' },
        { name: 'PROJECTS', href: '/Projects' },
        { name: 'CONTACT', href: '/Contact' }
    ];

    return (
        // 1. Estilos Globales y Custom CSS para la estética de "Tech UI"
        <div className="min-h-screen bg-gray-950 text-gray-50 flex items-center justify-center p-4 sm:p-8 font-inter">
            {/* Custom CSS para efectos de brillo y "Tech UI" */}
            {/* Se removieron los atributos 'jsx' y 'global' para evitar advertencias de React. */}
            <style>{`
                /* Asumiendo que Inter es el font principal de Tailwind, usamos font-mono para el terminal look */
                .terminal-frame {
                    /* Sutil efecto de brillo externo */
                    box-shadow: 0 0 40px rgba(0, 200, 255, 0.1), /* Sombra cian suave */
                                0 0 15px rgba(255, 255, 255, 0.05); /* Sombra blanca muy tenue */
                    border: 1px solid rgba(17, 24, 39, 0.8); /* Borde casi invisible */
                }
                .terminal-screen {
                    /* Borde de pantalla con 'glow' */
                    border: 2px solid #00ffff50; /* Cian transparente para el marco interior */
                    box-shadow: inset 0 0 20px rgba(0, 200, 255, 0.15); /* Sombra interna para profundidad */
                }
                .logo-glow {
                    text-shadow: 0 0 8px #00ffff; /* Brillo cian para el texto del logo */
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }
                /* Animación de cursor de terminal */
                .terminal-cursor {
                    animation: blink 1s step-start 0s infinite;
                }
                @keyframes blink {
                    50% { opacity: 0; }
                }
            `}</style>

            {/* Contenedor principal: Marco de la UI */}
            <div className="relative w-full max-w-7xl mx-auto rounded-3xl p-2 sm:p-4 lg:p-6 bg-gray-900 terminal-frame">

                {/* Área de la pantalla/Contenido */}
                <div className="relative bg-black rounded-xl terminal-screen overflow-hidden">

                    {/* Indicador de Status (Más sutil y elegante) */}
                    <div className="absolute top-4 right-4 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/70 terminal-cursor z-20"></div>

                    {/* CABECERA (HEADER) */}
                    <header className="bg-black/90 border-b border-cyan-800/50 backdrop-blur-md sticky top-0 z-50">
                        <nav className="max-w-6xl mx-auto px-4 sm:px-8 py-3 sm:py-4">
                            <div className="flex justify-between items-center">

                                {/* LOGO (Refinado) */}
                                <a href="/" className="flex items-center space-x-2 cursor-pointer transition-opacity hover:opacity-80">
                                    <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-mono text-cyan-400 logo-glow">
                                        &gt; DEV_PORT
                                    </span>
                                    <span className="hidden sm:inline text-xs text-gray-500/50 font-mono">
                                        V.2025.1.0
                                    </span>
                                </a>

                                {/* MENU ESCRITORIO */}
                                <div className="hidden lg:flex space-x-6">
                                    {navItems.map((item, index) => (
                                        <NavLink key={index} href={item.href}>
                                            {item.name}
                                        </NavLink>
                                    ))}
                                </div>

                                {/* BOTÓN DE MENÚ MÓVIL */}
                                <div className="lg:hidden">
                                    <button
                                        onClick={() => setMenuOpen(!menuOpen)}
                                        className="p-2 sm:p-2.5 rounded-lg text-cyan-400 border border-cyan-400/50 hover:bg-cyan-900 transition-colors focus:ring-2 focus:ring-cyan-500/50"
                                        aria-expanded={menuOpen}
                                        aria-controls="mobile-menu"
                                    >
                                        <MenuIcon isOpen={menuOpen} />
                                    </button>
                                </div>
                            </div>

                            {/* MENÚ DESPLEGABLE MÓVIL */}
                            {menuOpen && (
                                <div id="mobile-menu" className="lg:hidden mt-4 space-y-2 border-t border-cyan-700/50 pt-4 animate-fadeIn">
                                    {navItems.map((item, index) => (
                                        <a
                                            key={index}
                                            href={item.href}
                                            onClick={() => setMenuOpen(false)}
                                            className="block w-full text-center px-4 py-3 text-base text-gray-300 bg-gray-900/50 hover:bg-cyan-900 hover:text-cyan-400 transition-all duration-200 rounded-lg font-semibold border-l-4 border-cyan-500/0 hover:border-cyan-500 font-mono"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </nav>
                    </header>

                    {/* CONTENIDO PRINCIPAL */}
                    <main className="px-4 sm:px-8 lg:px-12 py-6 sm:py-10 lg:py-12 min-h-[70vh] text-gray-200">
                        {children}
                    </main>

                    {/* FOOTER (Minimalista y profesional) */}
                    <footer className="bg-black/90 border-t border-cyan-900/50 py-4 sm:py-6 lg:py-8 backdrop-blur-md">
                        <div className="max-w-6xl mx-auto px-4 sm:px-8">
                            <div className="text-center font-mono">
                                <p className="text-cyan-400 text-xs sm:text-sm mb-1">
                                    [SYSTEM_STATUS: ONLINE]
                                </p>
                                <div className="text-[10px] xs:text-xs text-gray-500">
                                    {/* Cambiado el copyright a un formato profesional */}
                                    © 2025 DEV_PORT / ALL RIGHTS RESERVED.
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    )
}