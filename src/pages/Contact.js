"use client";
import { useState } from "react";
import Link from "next/link";

export default function Contact() {
    const [sent, setSent] = useState(false);

    return (
        <div
            id="contact"
            className="relative min-h-screen flex flex-col space-y-8 sm:space-y-10 md:space-y-12 p-4 sm:p-6 md:p-10 lg:p-12"
            style={{ fontFamily: "Press Start 2P, monospace" }}
        >
            {/* Título */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-cyan-400 text-center mb-6 sm:mb-8 font-tourney animate-bounce">
                CONTACT
            </h1>

            {/* Contenedor principal */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto w-full font-tourney font-bold">
                {/* FORMULARIO */}
                {!sent ? (
                    <form
                        action="https://formspree.io/f/xjkagwpn"
                        method="POST"
                        onSubmit={() => setSent(true)}
                        className="bg-gray-900/80 border-4 border-cyan-400 p-6 sm:p-8 md:p-10 rounded-lg shadow-lg shadow-cyan-500/40 space-y-4 sm:space-y-6"
                    >
                        {/* Nombre */}
                        <div>
                            <label className="block text-[10px] sm:text-xs text-cyan-400 mb-2">NAME</label>
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="Your Name"
                                className="w-full p-2 sm:p-3 bg-black border-2 border-cyan-500 text-green-400 text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:border-pink-400"
                            />
                        </div>

                        {/* Asunto */}
                        <div>
                            <label className="block text-[10px] sm:text-xs text-cyan-400 mb-2">SUBJECT</label>
                            <input
                                type="text"
                                name="subject"
                                required
                                placeholder="Your Subject"
                                className="w-full p-2 sm:p-3 bg-black border-2 border-cyan-500 text-green-400 text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:border-pink-400"
                            />
                        </div>

                        {/* Mensaje largo */}
                        <div>
                            <label className="block text-[10px] sm:text-xs text-cyan-400 mb-2">MESSAGE</label>
                            <textarea
                                name="message"
                                required
                                placeholder="Write your message here..."
                                rows="4"
                                className="w-full p-2 sm:p-3 bg-black border-2 border-cyan-500 text-green-400 text-sm sm:text-base placeholder-gray-500 resize-none focus:outline-none focus:border-pink-400"
                            />
                        </div>

                        {/* Contacto */}
                        <div>
                            <label className="block text-[10px] sm:text-xs text-cyan-400 mb-2">CONTACT</label>
                            <input
                                type="email"
                                name="contact"
                                required
                                placeholder="your@email.com"
                                className="w-full p-2 sm:p-3 bg-black border-2 border-cyan-500 text-green-400 text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:border-pink-400"
                            />
                        </div>

                        {/* Botón enviar */}
                        <button
                            type="submit"
                            className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-cyan-400 text-cyan-400 text-xs sm:text-sm font-bold animate-pulse hover:bg-cyan-400 hover:text-black transition-all duration-200"
                        >
                            [ SEND ]
                        </button>
                    </form>
                ) : (
                    <div className="text-center mt-10 sm:mt-20">
                        <h2 className="text-xl sm:text-2xl text-green-400 animate-pulse">✔ MESSAGE SENT!</h2>
                        <p className="text-cyan-400 text-xs sm:text-sm mt-4 animate-bounce">
                            Thanks for reaching out 🚀
                        </p>
                    </div>
                )}

                {/* INFO PERSONAL */}
                <div className="flex flex-col justify-center items-center text-center bg-gray-900/80 border-4 border-pink-400 p-6 sm:p-8 md:p-10 rounded-lg shadow-lg shadow-pink-500/40 text-base sm:text-lg md:text-xl lg:text-2xl space-y-4 sm:space-y-6">
                    <h2 className="text-pink-400 text-base sm:text-lg md:text-xl mb-2 sm:mb-4 animate-pulse">
                        [ INFO DIRECTA ]
                    </h2>

                    <p className="text-gray-300 text-sm sm:text-base md:text-lg">
                        <span className="text-cyan-400">Email:</span> azc7794@gmail.com
                    </p>

                    <p className="text-gray-300 text-sm sm:text-base md:text-lg">
                        <span className="text-cyan-400">Phone:</span> +506 8455-7365
                    </p>

                    <p className="text-gray-300 text-sm sm:text-base md:text-lg">
                        <span className="text-cyan-400">GitHub:</span>{" "}
                        <a
                            href="https://github.com/adrianpyth"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-white"
                        >
                            github.com/adrianpyth
                        </a>
                    </p>
                    <p className="text-gray-300 text-sm sm:text-base md:text-lg">
                        <span className="text-cyan-400">LinkedIn:</span>{" "}
                        <a
                            href="https://www.linkedin.com/in/adri%C3%A1nzcastro/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-white"
                        >
                            adrinzcastro
                        </a>
                    </p>
                </div>
            </div>

            {/* BOTÓN REGRESAR */}
            <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6  flex justify-between font-tourney">
                <Link href="/Projects">
                    <button className="px-4 py-2 sm:px-6 sm:py-3 bg-green-500 text-black font-bold text-[10px] sm:text-xs animate-pulse hover:bg-violet-400 transition-all duration-200 transform hover:scale-105 shadow-lg shadow-green-500/50">
                        ← BACK
                    </button>
                </Link>
            </div>
        </div>
    );
}
