"use client";
import { useState } from "react";
import Link from "next/link";

export default function Contact() {
    const [sent, setSent] = useState(false);

    return (
        <div
            id="contact"
            className="relative min-h-screen flex flex-col space-y-12 p-6"
            style={{ fontFamily: "Press Start 2P, monospace" }}
        >
            <h1 className="text-3xl text-cyan-400 text-center mb-8 font-tourney animate-bounce">CONTACT</h1>

            {!sent ? (
                <form
                    action="https://formspree.io/f/xjkagwpn"
                    method="POST"
                    onSubmit={() => setSent(true)}
                    className="max-w-2xl mx-auto bg-gray-900/80 border-4 border-cyan-400 p-10 rounded-lg shadow-lg shadow-cyan-500/40 space-y-6"
                >
                    {/* Nombre */}
                    <div>
                        <label className="block text-xs text-cyan-400 mb-2">NOMBRE</label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="w-full p-3 bg-black border-2 border-cyan-500 text-green-400 text-sm focus:outline-none focus:border-pink-400"
                        />
                    </div>

                    {/* Asunto */}
                    <div>
                        <label className="block text-xs text-cyan-400 mb-2">ASUNTO</label>
                        <input
                            type="text"
                            name="subject"
                            required
                            className="w-full p-3 bg-black border-2 border-cyan-500 text-green-400 text-sm focus:outline-none focus:border-pink-400"
                        />
                    </div>

                    {/* Contacto */}
                    <div>
                        <label className="block text-xs text-cyan-400 mb-2">CONTACTO</label>
                        <input
                            type="text"
                            name="contact"
                            required
                            className="w-full p-3 bg-black border-2 border-cyan-500 text-green-400 text-sm focus:outline-none focus:border-pink-400"
                        />
                    </div>

                    {/* Botón enviar */}
                    <button
                        type="submit"
                        className="w-full px-6 py-4 border-2 border-cyan-400 text-cyan-400 text-sm font-bold animate-pulse hover:bg-cyan-400 hover:text-black transition-all duration-200"
                    >
                        [ SEND ]
                    </button>
                </form>
            ) : (
                <div className="text-center mt-20">
                    <h2 className="text-2xl text-green-400 animate-pulse">✔ MESSAGE SENT!</h2>
                    <p className="text-cyan-400 text-sm mt-4 animate-bounce">Thanks for reaching out 🚀</p>
                </div>
            )}

            {/* BOTÓN REGRESAR */}
            <div className="absolute bottom-6 left-0 right-0 px-6 flex justify-between font-tourney">
                <Link href="/Projects">
                    <button className="px-6 py-3 bg-green-500 text-black font-bold text-xs animate-pulse hover:bg-violet-400 transition-all duration-200 transform hover:scale-105 shadow-lg shadow-green-500/50">
                        ← BACK
                    </button>
                </Link>
            </div>
        </div>
    );
}
