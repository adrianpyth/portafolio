import Link from "next/link";
import { FaGithub, FaReact, FaJava } from "react-icons/fa"; // icono de GitHub

export default function Projects() {
    return (
        <div
            id="projects"
            className="relative min-h-screen flex flex-col space-y-12 p-6"
            style={{ fontFamily: "Press Start 2P, monospace" }}
        >
            <h1 className="text-3xl text-green-400 text-center mb-8 font-tourney animate-pulse">PROJECTS</h1>

            {/* Proyecto 1 */}
            <div className="md:flex bg-gray-900/80 border-4 border-cyan-400 rounded-lg shadow-lg shadow-cyan-500/40 p-4 gap-6 hover:scale-105 transition-transform duration-200">

                {/* IZQUIERDA: Imagen + tecnologías */}
                <div className="md:w-1/3 flex flex-col items-center">
                    <div className="border-4 border-cyan-400 rounded-lg p-1 mb-4">
                        <img
                            src="/projects/ecommerce.png"
                            alt="E-Commerce Retro"
                            className="w-full object-cover rounded-lg"
                        />
                    </div>
                    <div className="text-xs text-gray-300 text-center space-y-1">
                        <p>React / Next.js / Tailwind</p>
                        <p>Node.js / Vercel</p>
                    </div>
                </div>

                {/* DERECHA: Descripción + GitHub */}
                <div className="md:w-2/3 flex flex-col justify-between">
                    <p className="text-xs text-gray-300 mb-4">
                        Tienda online estilo retro con interfaz pixel-art, animaciones y carrito de compras funcional.
                    </p>
                    <div className="flex items-center space-x-4">
                        <FaGithub className="text-gray-300 hover:text-white transition-colors duration-200" />
                        <Link href="https://github.com/tuusuario/ecommerce-retro" target="_blank">
                            <p className="text-xs text-cyan-400 font-bold hover:underline cursor-pointer">
                                Ver en GitHub
                            </p>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Proyecto 2 */}
            <div className="md:flex bg-gray-900/80 border-4 border-pink-400 rounded-lg shadow-lg shadow-pink-500/40 p-4 gap-6 hover:scale-105 transition-transform duration-200">
                <div className="md:w-1/3 flex flex-col items-center">
                    <div className="border-4 border-pink-400 rounded-lg p-1 mb-4">
                        <img
                            src="/projects/facturas.png"
                            alt="Gestión de Facturas"
                            className="w-full object-cover rounded-lg"
                        />
                    </div>
                    <div className="text-xs text-gray-300 text-center space-y-1">
                        <p>Java / SQL Server / OCR</p>
                        <p>Spring Boot / Maven</p>
                    </div>
                </div>
                <div className="md:w-2/3 flex flex-col justify-between">
                    <p className="text-xs text-gray-300 mb-4">
                        Sistema de automatización de facturas electrónicas, capaz de leer PDFs y XML, extraer datos financieros y almacenarlos en SQL Server.
                    </p>
                    <div className="flex items-center space-x-4">
                        <FaGithub className="text-gray-300 hover:text-white transition-colors duration-200" />
                        <Link href="https://github.com/tuusuario/facturas" target="_blank">
                            <p className="text-xs text-pink-400 font-bold hover:underline cursor-pointer">
                                Ver en GitHub
                            </p>
                        </Link>
                    </div>
                </div>
            </div>

            {/* BOTÓN REGRESAR */}
            <div className="absolute bottom-6 left-0 right-0 px-6 flex justify-between font-tourney">
                <Link href="/About">
                    <button className="px-6 py-3 bg-green-500 text-black font-bold text-xs animate-pulse hover:bg-violet-400 transition-all duration-200 transform hover:scale-105 shadow-lg shadow-green-500/50">
                        ← BACK
                    </button>
                </Link>

                <Link href="/Contact">
                    <button className="px-6 py-3 bg-green-500 text-black font-bold text-xs animate-pulse hover:bg-violet-400 transition-all duration-200 transform hover:scale-105 shadow-lg shadow-green-500/50">
                        NEXT →
                    </button>
                </Link>
            </div>



        </div>
    );
}
