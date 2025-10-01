// src/components/Layout.js
import Link from "next/link";
import { useState } from "react";

export default function Layout({ children }) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        // Contenedor exterior: padding mínimo en móviles pequeños
        <div className="min-h-screen bg-gray-900 p-1 xs:p-2 sm:p-4 flex items-center justify-center"
            style={{ fontFamily: 'Press Start 2P, monospace' }}>

            {/* Contenedor central */}
            <div className="relative w-full max-w-7xl mx-auto">
                {/* Marco externo: bordes más delgados en móvil */}
                <div className="relative bg-gray-800 p-2 xs:p-3 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl lg:rounded-4xl border-2 xs:border-3 sm:border-6 lg:border-8 border-gray-700 shadow-2xl">
                    {/* Pantalla interna */}
                    <div className="relative bg-black p-1.5 xs:p-2 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl lg:rounded-2xl border xs:border-2 sm:border-3 lg:border-4 border-gray-600">

                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-lg sm:rounded-xl lg:rounded-2xl pointer-events-none"></div>
                        <div className="absolute inset-0 pointer-events-none opacity-30 rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden scanlines"></div>

                        {/* Contenedor de la vista de terminal */}
                        <div className="relative z-10 min-h-[95vh] bg-black text-green-500 rounded-md sm:rounded-lg lg:rounded-xl overflow-hidden">

                            <div className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full animate-pulse shadow-lg shadow-red-500/50"></div>

                            {/* CABECERA (HEADER) */}
                            <header className="bg-gray-900/80 border-b border-green-500 sm:border-b-2 backdrop-blur-sm sticky top-0 z-50">
                                <nav className="max-w-6xl mx-auto px-2 xs:px-3 sm:px-6 py-2 sm:py-3 lg:py-4">
                                    <div className="flex justify-between items-center">

                                        {/* LOGO: Responsive desde 320px */}
                                        <Link href="/">
                                            <div className="text-sm xs:text-base sm:text-xl lg:text-2xl font-bold cursor-pointer hover:opacity-80 transition-opacity">
                                                <span className="text-cyan-400">&gt;</span>
                                                <span className="rainbow-text-1 text-shadow-3d font-pixel"> P</span>
                                                <span className="rainbow-text-2 text-shadow-3d font-pixel">L</span>
                                                <span className="rainbow-text-3 text-shadow-3d font-pixel">A</span>
                                                <span className="rainbow-text-4 text-shadow-3d font-pixel">Y</span>
                                                <span className="rainbow-text-5 text-shadow-3d font-pixel">E</span>
                                                <span className="rainbow-text-6 text-shadow-3d font-pixel">R</span>
                                                <span className="text-pink-400 text-shadow-3d font-pixel">_</span>
                                                <span className="rainbow-text-7 text-shadow-3d font-pixel">1</span>
                                            </div>
                                        </Link>

                                        {/* MENU ESCRITORIO: visible solo en lg (1024px) o más */}
                                        <div className="hidden lg:flex space-x-1 font-bold font-tourney">
                                            {[
                                                { name: 'START', href: '/' },
                                                { name: 'INFO', href: '/About' },
                                                { name: 'WORK', href: '/Projects' },
                                                { name: 'CALL', href: '/Contact' }
                                            ].map((item, index) => (
                                                <Link
                                                    key={index}
                                                    href={item.href}
                                                    className="px-3 py-1.5 sm:px-4 sm:py-2 text-green-400 hover:text-black hover:bg-green-400 transition-all duration-200 border border-green-500 text-[10px] sm:text-xs hover:shadow-lg hover:shadow-green-400/50 transform hover:scale-105"
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>

                                        {/* BOTÓN DE MENÚ MÓVIL: visible hasta 1024px */}
                                        <div className="lg:hidden">
                                            <button
                                                onClick={() => setMenuOpen(!menuOpen)}
                                                className="text-green-400 text-[10px] xs:text-xs sm:text-sm hover:text-cyan-400 px-2 py-1 sm:px-3 sm:py-1.5 border border-green-500 hover:bg-green-500 hover:text-black transition-colors font-tourney"
                                            >
                                                {menuOpen ? 'CLOSE' : 'MENU'}
                                            </button>
                                        </div>
                                    </div>

                                    {/* MENÚ DESPLEGABLE MÓVIL */}
                                    {menuOpen && (
                                        <div className="lg:hidden mt-3 space-y-2 border-t border-green-500/30 pt-3 animate-fadeIn">
                                            {[
                                                { name: 'START', href: '/' },
                                                { name: 'INFO', href: '/About' },
                                                { name: 'WORK', href: '/Projects' },
                                                { name: 'CALL', href: '/Contact' }
                                            ].map((item, index) => (
                                                <Link
                                                    key={index}
                                                    href={item.href}
                                                    onClick={() => setMenuOpen(false)}
                                                    className="block w-full text-center px-3 py-2.5 sm:py-3 text-green-400 hover:text-black hover:bg-green-400 transition-all duration-200 border border-green-500 text-xs sm:text-sm font-tourney hover:shadow-lg hover:shadow-green-400/50 transform hover:scale-[1.02]"
                                                >
                                                    [{String.fromCharCode(65 + index)}] {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </nav>
                            </header>

                            {/* CONTENIDO PRINCIPAL: padding optimizado */}
                            <main className="px-2 xs:px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8 min-h-[70vh] sm:min-h-[65vh] lg:min-h-[60vh]">
                                {children}
                            </main>

                            {/* FOOTER */}
                            <footer className="bg-gray-900/80 border-t border-cyan-500 sm:border-t-2 py-3 sm:py-4 lg:py-6 backdrop-blur-sm">
                                <div className="max-w-6xl mx-auto px-2 xs:px-3 sm:px-4 lg:px-6">
                                    <div className="text-center">
                                        <p className="text-cyan-400 mb-2 sm:mb-4 text-[10px] xs:text-xs sm:text-sm leading-relaxed">
                                            <span className="text-pink-400">&gt;</span>
                                            <span className="hidden xs:inline"> PRESS START TO CONTINUE </span>
                                            <span className="xs:hidden"> START </span>
                                            <span className="text-pink-400">&lt;</span>
                                        </p>
                                        <div className="text-[8px] xs:text-[10px] sm:text-xs text-green-500/60 font-mono">
                                            © 2025 PLAYER_1 • ALL RIGHTS RESERVED
                                        </div>
                                    </div>
                                </div>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}