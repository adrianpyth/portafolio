"use client";
import { useState } from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
    const [open, setOpen] = useState(false);

    return (
        <div
            id="projects"
            // Reducimos el padding y el espacio vertical en móvil
            className="relative min-h-screen flex flex-col space-y-8 sm:space-y-12 p-3 sm:p-6"
            style={{ fontFamily: "Press Start 2P, monospace" }}
        >
            {/* Título: Reducido en móvil */}
            <h1 className="text-2xl sm:text-3xl text-green-400 text-center mb-6 sm:mb-8 font-tourney animate-pulse">PROJECTS</h1>

            {/* Proyecto 1: La clase md:flex se encarga de apilar en móvil y poner lado a lado en tablet/escritorio */}
            <div className="md:flex bg-gray-900/80 border-2 sm:border-4 border-cyan-400 rounded-lg shadow-lg shadow-cyan-500/40 p-3 sm:p-4 gap-4 sm:gap-6 hover:scale-105 transition-transform duration-200 font-tourney font-bold">

                {/* IZQUIERDA: Miniatura + tecnología */}
                <div className="md:w-1/3 flex flex-col items-center mb-4 md:mb-0"> {/* Agregamos margen inferior en móvil */}
                    <div
                        // Reducimos el border en móvil
                        className="border-2 sm:border-4 border-cyan-400 rounded-lg p-1 mb-3 sm:mb-4 w-full cursor-pointer relative group"
                        onClick={() => setOpen(true)}
                    >
                        <img
                            src="./assets/artesjac.png"
                            alt="Abrir video"
                            className="w-full rounded-lg"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition">
                            {/* Texto del botón de video reducido en móvil */}
                            <p className="text-cyan-400 font-bold text-sm sm:text-lg">▶ Ver Video</p>
                        </div>
                    </div>
                    {/* Texto de tecnologías reducido en móvil */}
                    <div className="text-xs sm:text-lg text-gray-300 text-center space-y-1">
                        <p>React SPA / Express.js / Tailwind</p>
                        <p>MongoDB / Node.js </p>
                    </div>
                </div>

                {/* DERECHA: Descripción + GitHub */}
                <div className="md:w-2/3 flex flex-col justify-between">
                    {/* Descripción: Reducido en móvil */}
                    <p className="text-xs sm:text-lg text-violet-400 mb-4">
                        Esta es una plataforma de comercio electrónico (e-commerce) diseñada específicamente para conectar a artistas, creadores y artesanos con compradores que buscan productos únicos y hechos a mano. Si estás cansado de los productos masivos, este es tu destino para descubrir arte original, joyería artesanal, decoración, y más. Es un espacio vibrante y fácil de usar, donde la creatividad es la protagonista.
                    </p>
                    {/* Contenedor de enlaces: Usamos flex-wrap para evitar desbordamiento horizontal en móvil */}
                    <div className="flex flex-wrap gap-x-4 gap-y-2 items-center">
                        <FaGithub className="text-gray-300 hover:text-white transition-colors duration-200" />
                        <Link href="https://github.com/JoseP055/artesjac-frontend" target="_blank">
                            {/* Enlaces reducidos en móvil */}
                            <p className="text-xs text-cyan-400 font-bold hover:underline cursor-pointer">
                                Ver en GitHub (Frontend)
                            </p>
                        </Link>
                        <FaGithub className="text-gray-300 hover:text-white transition-colors duration-200" />
                        <Link href="https://github.com/JoseP055/artesjac-backend" target="_blank">
                            {/* Enlaces reducidos en móvil */}
                            <p className="text-xs text-cyan-400 font-bold hover:underline cursor-pointer">
                                Ver en GitHub (Backend)
                            </p>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Modal con YouTube (Ya es responsive gracias a w-full max-w-3xl y aspect-video) */}
            {open && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
                    <div className="relative w-full max-w-3xl aspect-video bg-black rounded-lg shadow-lg">
                        <iframe
                            className="w-full h-full rounded-lg"
                            src="https://www.youtube.com/embed/UNKiFpuXsTI"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <button
                            className="absolute top-2 right-2 bg-red-600 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded hover:bg-red-700 text-sm sm:text-base"
                            onClick={() => setOpen(false)}
                        >
                            ✖
                        </button>
                    </div>
                </div>
            )}

            {/* BOTÓN REGRESAR / NEXT */}
            <div className="absolute bottom-6 left-0 right-0 px-4 sm:px-6 flex justify-between font-tourney">
                <Link href="/About">
                    <button className="px-4 py-2 sm:px-6 sm:py-3 bg-green-500 text-black font-bold text-[10px] sm:text-xs animate-pulse hover:bg-violet-400 transition-all duration-200 transform hover:scale-105 shadow-lg shadow-green-500/50">
                        ← BACK
                    </button>
                </Link>

                <Link href="/Contact">
                    <button className="px-4 py-2 sm:px-6 sm:py-3 bg-green-500 text-black font-bold text-[10px] sm:text-xs animate-pulse hover:bg-violet-400 transition-all duration-200 transform hover:scale-105 shadow-lg shadow-green-500/50">
                        NEXT →
                    </button>
                </Link>
            </div>
        </div>
    );
}