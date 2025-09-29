// src/components/Layout.js
import Link from "next/link";

export default function Layout({ children }) {
    return (
        <div className="min-h-screen bg-gray-900 p-4 flex items-center justify-center"
            style={{ fontFamily: 'Press Start 2P, monospace' }}>

            <div className="relative w-full max-w-7xl mx-auto">
                <div className="relative bg-gray-800 p-8 rounded-4xl border-8 border-gray-700 shadow-2xl">
                    <div className="relative bg-black p-4 rounded-2xl border-4 border-gray-600">

                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-2xl pointer-events-none"></div>
                        <div className="absolute inset-0 pointer-events-none opacity-30 rounded-2xl overflow-hidden scanlines"></div>

                        <div className="relative z-10 min-h-screen bg-black text-green-500 rounded-xl overflow-hidden">

                            <div className="absolute top-2 right-2 w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-lg shadow-red-500/50"></div>

                            <header className="bg-gray-900/80 border-b-2 border-green-500 backdrop-blur-sm">
                                <nav className="max-w-6xl mx-auto px-6 py-4">
                                    <div className="flex justify-between items-center">

                                        {/* LOGO */}
                                        <div className="text-2xl font-bold">
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

                                        {/* MENU */}
                                        <div className="hidden md:flex space-x-1 font-bold font-tourney" >
                                            {[
                                                { name: 'START', href: '/' },
                                                { name: 'INFO', href: '/About' },
                                                { name: 'WORK', href: '/Projects' },
                                                { name: 'CALL', href: '/Contact' }
                                            ].map((item, index) => (
                                                <Link
                                                    key={index}
                                                    href={item.href}
                                                    className="px-4 py-2 text-green-400 hover:text-black hover:bg-green-400 transition-all duration-200 border border-green-500 text-xs hover:shadow-lg hover:shadow-green-400/50 transform hover:scale-105"
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>

                                        {/* MENU MÓVIL */}
                                        <div className="md:hidden">
                                            <button className="text-green-400 text-lg hover:text-cyan-400">
                                                ▓▓▓
                                            </button>
                                        </div>
                                    </div>
                                </nav>
                            </header>

                            {/* CONTENIDO PRINCIPAL */}
                            <main className="px-6 py-8 min-h-[70vh]">
                                {children}
                            </main>

                            {/* FOOTER */}
                            <footer className="bg-gray-900/80 border-t-2 border-cyan-500 py-6 backdrop-blur-sm">
                                <div className="max-w-6xl mx-auto px-6">
                                    <div className="text-center text-xs text-green-500 mb-4">

                                    </div>
                                    <div className="text-center">
                                        <p className="text-cyan-400 mb-4 text-xs">
                                            <span className="text-pink-400">&gt;</span>
                                            PRESS START TO CONTINUE
                                            <span className="text-pink-400">&lt;</span>
                                        </p>
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
