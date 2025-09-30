"use client";
import { useState } from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
    const [open, setOpen] = useState(false);

    return (
        <div
            id="projects"
            className="relative min-h-screen flex flex-col space-y-12 p-6"
            style={{ fontFamily: "Press Start 2P, monospace" }}
        >
            <h1 className="text-3xl text-green-400 text-center mb-8 font-tourney animate-pulse">PROJECTS</h1>

            {/* Proyecto 1 con video en modal */}
            <div className="md:flex bg-gray-900/80 border-4 border-cyan-400 rounded-lg shadow-lg shadow-cyan-500/40 p-4 gap-6 hover:scale-105 transition-transform duration-200 font-tourney font-bold">
                {/* IZQUIERDA: Miniatura + botón de video */}
                <div className="md:w-1/3 flex flex-col items-center">
                    <div
                        className="border-4 border-cyan-400 rounded-lg p-1 mb-4 w-full cursor-pointer relative group"
                        onClick={() => setOpen(true)}
                    >
                        <img
                            src="./assets/artesjac.png"
                            alt="Abrir video"
                            className="w-full rounded-lg"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition">
                            <p className="text-cyan-400 font-bold text-lg">▶ Ver Video</p>
                        </div>
                    </div>
                    <div className="text-lg text-gray-300 text-center space-y-1">
                        <p>React SPA / Express.js / Tailwind</p>
                        <p>MongoDB / Node.js </p>
                    </div>
                </div>

                {/* DERECHA: Descripción + GitHub */}
                <div className="md:w-2/3 flex flex-col justify-between">
                    <p className="text-lg text-violet-400 mb-4">
                        Esta es una plataforma de comercio electrónico (e-commerce) diseñada específicamente para conectar a artistas, creadores y artesanos con compradores que buscan productos únicos y hechos a mano. Si estás cansado de los productos masivos, este es tu destino para descubrir arte original, joyería artesanal, decoración, y más. Es un espacio vibrante y fácil de usar, donde la creatividad es la protagonista.
                    </p>
                    <div className="flex items-center space-x-4">
                        <FaGithub className="text-gray-300 hover:text-white transition-colors duration-200" />
                        <Link href="https://github.com/JoseP055/artesjac-frontend" target="_blank">
                            <p className="text-lg text-cyan-400 font-bold hover:underline cursor-pointer">
                                Ver en GitHub (Frontend)
                            </p>
                        </Link>
                        <FaGithub className="text-gray-300 hover:text-white transition-colors duration-200" />
                        <Link href="https://github.com/JoseP055/artesjac-backend" target="_blank">
                            <p className="text-lg text-cyan-400 font-bold hover:underline cursor-pointer">
                                Ver en GitHub (Backend)
                            </p>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Modal con YouTube */}
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
                            className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                            onClick={() => setOpen(false)}
                        >
                            ✖
                        </button>
                    </div>
                </div>
            )}

            {/* Proyecto 2 con video en modal */}
            {/* <div className="md:flex bg-gray-900/80 border-4 border-pink-400 rounded-lg shadow-lg shadow-cyan-500/40 p-4 gap-6 hover:scale-105 transition-transform duration-200 font-tourney font-bold"> */}
            {/* IZQUIERDA: Miniatura + botón de video */}
            {/* <div className="md:w-1/3 flex flex-col items-center">
                    <div
                        className="border-4 border-cyan-400 rounded-lg p-1 mb-4 w-full cursor-pointer relative group"
                        onClick={() => setOpen(true)}
                    >
                        <img
                            src="./assets/artesjac.png"
                            alt="Abrir video"
                            className="w-full rounded-lg"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition">
                            <p className="text-cyan-400 font-bold text-lg">▶ Ver Video</p>
                        </div>
                    </div>
                    <div className="text-lg text-gray-300 text-center space-y-1">
                        <p>React SPA / Express.js / Tailwind</p>
                        <p>MongoDB / Node.js </p>
                    </div>
                </div> */}

            {/* DERECHA: Descripción + GitHub */}
            {/* <div className="md:w-2/3 flex flex-col justify-between">
                    <p className="text-lg text-gray-300 mb-4">
                        Esta es una plataforma de comercio electrónico (e-commerce) diseñada específicamente para conectar a artistas, creadores y artesanos con compradores que buscan productos únicos y hechos a mano. Si estás cansado de los productos masivos, este es tu destino para descubrir arte original, joyería artesanal, decoración, y más. Es un espacio vibrante y fácil de usar, donde la creatividad es la protagonista.
                    </p>
                    <div className="flex items-center space-x-4">
                        <FaGithub className="text-gray-300 hover:text-white transition-colors duration-200" />
                        <Link href="https://github.com/JoseP055/artesjac-frontend" target="_blank">
                            <p className="text-xs text-cyan-400 font-bold hover:underline cursor-pointer">
                                Ver en GitHub (Frontend)
                            </p>
                        </Link>
                        <FaGithub className="text-gray-300 hover:text-white transition-colors duration-200" />
                        <Link href="https://github.com/JoseP055/artesjac-backend" target="_blank">
                            <p className="text-xs text-cyan-400 font-bold hover:underline cursor-pointer">
                                Ver en GitHub (Backend)
                            </p>
                        </Link>
                    </div>
                </div>
            </div> */}


            {/* Modal con YouTube */}
            {/* {open && (
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
                            className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                            onClick={() => setOpen(false)}
                        >
                            ✖
                        </button>
                    </div>
                </div>
            )} */}


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
