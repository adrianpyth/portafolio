"use client";
import Link from "next/link";
import { useState } from "react";
// Eliminada la importación de @formspree/react para solucionar el error de compilación.

export default function Contact() {
    // Definimos el estado del formulario manualmente para manejar el envío con fetch (AJAX)
    const [submitting, setSubmitting] = useState(false);
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null); // Para mostrar errores de Formspree

    // Función para manejar el envío del formulario usando Fetch
    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita que el navegador realice el envío HTML nativo (la redirección)
        setSubmitting(true);
        setError(null);

        const formData = new FormData(e.target);

        try {
            const response = await fetch("https://formspree.io/f/xjkagwpn", {
                method: 'POST',
                body: formData,
                headers: {
                    // Este header es crucial para que Formspree devuelva una respuesta JSON
                    // en lugar de intentar redireccionar a una página de éxito.
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setSucceeded(true);
                e.target.reset(); // Limpia el formulario
            } else {
                const data = await response.json();
                // Manejo simplificado de errores de validación de Formspree
                const errorMessage = data.errors
                    ? data.errors.map(err => err.field ? `${err.field}: ${err.message}` : err.message).join(' | ')
                    : 'Ocurrió un error desconocido al enviar.';
                setError(errorMessage);
            }
        } catch (networkError) {
            setError('Error de red. Por favor, revisa tu conexión.');
        } finally {
            setSubmitting(false);
        }
    };

    // Verificación de éxito para mostrar el mensaje
    if (succeeded) {
        return (
            <div
                id="contact"
                className="relative min-h-screen flex flex-col space-y-8 sm:space-y-10 md:space-y-12 p-4 sm:p-6 md:p-10 lg:p-12"
                style={{ fontFamily: "Press Start 2P, monospace" }}
            >
                <h1 className="text-2xl sm:text-3xl md:text-4xl text-cyan-400 text-center mb-6 sm:mb-8 font-tourney animate-bounce">
                    CONTACT
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto w-full font-tourney font-bold">
                    {/* Mensaje de éxito (Ocupa md:col-span-2, centrado) */}
                    <div className="md:col-span-2 flex flex-col justify-center items-center bg-gray-900/80 border-4 border-cyan-400 p-10 rounded-lg shadow-lg shadow-cyan-500/40 space-y-4">
                        <h2 className="text-3xl sm:text-4xl text-green-400 animate-pulse">
                            ✔ MESSAGE SENT!
                        </h2>
                        <p className="text-cyan-400 text-base sm:text-lg mt-4">
                            Gracias por contactarme. Te responderé pronto 🚀
                        </p>
                    </div>

                    {/* INFO PERSONAL (Ahora también ocupa md:col-span-2 para centrarse y tomar el ancho completo) */}
                    <div className="md:col-span-2 flex flex-col justify-center items-center text-center bg-gray-900/80 border-4 border-pink-400 p-6 sm:p-8 md:p-10 rounded-lg shadow-lg shadow-pink-500/40 text-base sm:text-lg md:text-xl lg:text-2xl space-y-4 sm:space-y-6">
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
                            <Link
                                href="https://github.com/adrianpyth"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline hover:text-white"
                            >
                                github.com/adrianpyth
                            </Link>
                        </p>
                        <p className="text-gray-300 text-sm sm:text-base md:text-lg">
                            <span className="text-cyan-400">LinkedIn:</span>{" "}
                            <Link
                                href="https://www.linkedin.com/in/adri%C3%A1nzcastro/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline hover:text-white"
                            >
                                adrinzcastro
                            </Link>
                        </p>
                    </div>
                </div>
                {/* BOTÓN REGRESAR */}
                <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 flex justify-between font-tourney">
                    <Link href="/Projects">
                        <button className="px-4 py-2 sm:px-6 sm:py-3 bg-green-500 text-black font-bold text-[10px] sm:text-xs animate-pulse hover:bg-violet-400 transition-all duration-200 transform hover:scale-105 shadow-lg shadow-green-500/50">
                            ← BACK
                        </button>
                    </Link>
                </div>
            </div>
        );
    }

    // Renderizado del formulario si aún no se ha enviado
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
                <form
                    // Usamos la función handleSubmit basada en fetch (AJAX)
                    onSubmit={handleSubmit}
                    className="bg-gray-900/80 border-4 border-cyan-400 p-6 sm:p-8 md:p-10 rounded-lg shadow-lg shadow-cyan-500/40 space-y-4 sm:space-y-6"
                >
                    {/* Nombre */}
                    <div>
                        <label htmlFor="name" className="block text-[10px] sm:text-xs text-cyan-400 mb-2">NAME</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            required
                            placeholder="Your Name"
                            className="w-full p-2 sm:p-3 bg-black border-2 border-cyan-500 text-green-400 text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:border-pink-400"
                        />
                    </div>

                    {/* Asunto */}
                    <div>
                        <label htmlFor="subject" className="block text-[10px] sm:text-xs text-cyan-400 mb-2">SUBJECT</label>
                        <input
                            id="subject"
                            type="text"
                            name="subject"
                            required
                            placeholder="Your Subject"
                            className="w-full p-2 sm:p-3 bg-black border-2 border-cyan-500 text-green-400 text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:border-pink-400"
                        />
                    </div>

                    {/* Mensaje largo */}
                    <div>
                        <label htmlFor="message" className="block text-[10px] sm:text-xs text-cyan-400 mb-2">MESSAGE</label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            placeholder="Write your message here..."
                            rows="4"
                            className="w-full p-2 sm:p-3 bg-black border-2 border-cyan-500 text-green-400 text-sm sm:text-base placeholder-gray-500 resize-none focus:outline-none focus:border-pink-400"
                        />
                    </div>

                    {/* Contacto: Usamos el name="_replyto" para el correo del remitente */}
                    <div>
                        <label htmlFor="_replyto" className="block text-[10px] sm:text-xs text-cyan-400 mb-2">CONTACT EMAIL</label>
                        <input
                            id="_replyto"
                            type="email"
                            name="_replyto"
                            required
                            placeholder="your@email.com"
                            className="w-full p-2 sm:p-3 bg-black border-2 border-cyan-500 text-green-400 text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:border-pink-400"
                        />
                    </div>

                    {/* Mensaje de Error (si existe) */}
                    {error && (
                        <p className="text-red-500 text-[8px] sm:text-[10px] mt-2 text-center p-2 border border-red-500 bg-red-900/30 rounded">
                            ERROR: {error}
                        </p>
                    )}

                    {/* Botón enviar: Desactivado si está enviando */}
                    <button
                        type="submit"
                        disabled={submitting}
                        className={`w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-cyan-400 text-cyan-400 text-xs sm:text-sm font-bold transition-all duration-200 ${submitting
                            ? 'bg-gray-700 cursor-not-allowed opacity-50'
                            : 'animate-pulse hover:bg-cyan-400 hover:text-black transform hover:scale-105 shadow-lg shadow-cyan-500/50'
                            }`}
                    >
                        {submitting ? '[ SENDING... ]' : '[ SEND ]'}
                    </button>
                </form>

                {/* INFO PERSONAL (en estado normal, ocupa la segunda columna) */}
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
                        <Link
                            href="https://github.com/adrianpyth"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-white"
                        >
                            github.com/adrianpyth
                        </Link>
                    </p>
                    <p className="text-gray-300 text-sm sm:text-base md:text-lg">
                        <span className="text-cyan-400">LinkedIn:</span>{" "}
                        <Link
                            href="https://www.linkedin.com/in/adri%C3%A1nzcastro/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-white"
                        >
                            adrinzcastro
                        </Link>
                    </p>
                </div>
            </div>

            {/* BOTÓN REGRESAR */}
            <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 flex justify-between font-tourney">
                <Link href="/Projects">
                    <button className="px-4 py-2 sm:px-6 sm:py-3 bg-green-500 text-black font-bold text-[10px] sm:text-xs animate-pulse hover:bg-violet-400 transition-all duration-200 transform hover:scale-105 shadow-lg shadow-green-500/50">
                        ← BACK
                    </button>
                </Link>
            </div>
        </div>
    );
}
