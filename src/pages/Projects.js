import React, { useState } from 'react';

export default function Projects() {
    const [open, setOpen] = useState(false);

    const projects = [
        {
            id: 1,
            title: "ArtesJAC E-Commerce Platform",
            description: "A specialized e-commerce platform connecting artists, creators, and artisans with buyers seeking unique, handmade products. An alternative to mass-produced items, featuring original art, handcrafted jewelry, decor, and more. A vibrant, user-friendly space where creativity takes center stage.",
            image: "./assets/artesjac.png",
            videoUrl: "https://www.youtube.com/embed/UNKiFpuXsTI",
            technologies: ["React", "Express.js", "Tailwind", "MongoDB", "Node.js"],
            techColors: {
                "React": "#61DAFB",
                "Express.js": "#83CD29",
                "Tailwind": "#06B6D4",
                "MongoDB": "#47A248",
                "Node.js": "#83CD29"
            },
            links: {
                frontend: "https://github.com/JoseP055/artesjac-frontend",
                backend: "https://github.com/JoseP055/artesjac-backend"
            }
        }
    ];

    return (
        <div className="space-y-12 sm:space-y-16 pb-24">

            {/* Custom CSS */}
            <style>{`
        @keyframes fadeInUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .delay-1 { animation-delay: 0.2s; opacity: 0; }
      `}</style>

            {/* HEADER */}
            <div className="text-center fade-in-up">
                <div className="flex items-center justify-center mb-4">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/70 animate-pulse mr-3"></div>
                    <span className="text-xs text-gray-500 font-mono tracking-wider uppercase">Portfolio</span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-mono mb-2">
                    Featured Projects
                </h1>
                <p className="text-sm text-gray-400 font-mono">Building innovative solutions with modern technologies</p>
            </div>

            {/* PROJECTS GRID */}
            <div className="max-w-6xl mx-auto space-y-8">
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-cyan-500/30 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-cyan-500/60 transition-all duration-300 fade-in-up delay-1"
                    >
                        <div className="grid lg:grid-cols-5 gap-6 p-6 sm:p-8">

                            {/* LEFT: Image & Video */}
                            <div className="lg:col-span-2 space-y-4">
                                <div
                                    className="relative group cursor-pointer rounded-xl overflow-hidden border-2 border-cyan-500/50 hover:border-cyan-400 transition-all duration-300"
                                    onClick={() => setOpen(true)}
                                >
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-64 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center">
                                                <span className="text-cyan-400 text-2xl">▶</span>
                                            </div>
                                            <p className="text-cyan-400 font-mono text-sm uppercase tracking-wider">Watch Demo</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Technologies */}
                                <div className="bg-black/30 border border-cyan-900/30 rounded-lg p-4">
                                    <p className="text-xs text-gray-500 font-mono uppercase tracking-wider mb-3">Tech Stack</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1.5 bg-gray-900/50 border border-gray-700/50 text-gray-300 text-xs font-mono rounded-md
                                 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300 cursor-default"
                                                style={{
                                                    boxShadow: `0 0 10px ${project.techColors[tech]}20`
                                                }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT: Description & Links */}
                            <div className="lg:col-span-3 flex flex-col justify-between space-y-6">

                                {/* Title & Description */}
                                <div>
                                    <h2 className="text-2xl sm:text-3xl font-bold text-white font-mono mb-4">
                                        {project.title}
                                    </h2>
                                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-mono">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Links */}
                                <div className="space-y-3">
                                    <p className="text-xs text-gray-500 font-mono uppercase tracking-wider">Repository Links</p>
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <a
                                            href={project.links.frontend}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center space-x-3 px-4 py-3 bg-black/30 border border-cyan-500/30 rounded-lg
                               hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
                                        >
                                            <svg className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                            </svg>
                                            <div className="flex-1">
                                                <p className="text-xs text-gray-500 font-mono">Frontend Repository</p>
                                                <p className="text-sm text-cyan-400 font-mono group-hover:text-cyan-300">View on GitHub →</p>
                                            </div>
                                        </a>

                                        <a
                                            href={project.links.backend}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center space-x-3 px-4 py-3 bg-black/30 border border-violet-500/30 rounded-lg
                               hover:border-violet-400 hover:bg-violet-500/10 transition-all duration-300"
                                        >
                                            <svg className="w-5 h-5 text-gray-400 group-hover:text-violet-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                            </svg>
                                            <div className="flex-1">
                                                <p className="text-xs text-gray-500 font-mono">Backend Repository</p>
                                                <p className="text-sm text-violet-400 font-mono group-hover:text-violet-300">View on GitHub →</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* VIDEO MODAL */}
            {open && (
                <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
                    <div className="relative w-full max-w-5xl">
                        <div className="relative aspect-video bg-black rounded-xl overflow-hidden border-2 border-cyan-500/50 shadow-2xl shadow-cyan-500/20">
                            <iframe
                                className="w-full h-full"
                                src={projects[0].videoUrl}
                                title="Project Demo"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <button
                            className="absolute -top-4 -right-4 w-12 h-12 bg-red-500 hover:bg-red-600 text-white rounded-full
                       transition-all duration-300 flex items-center justify-center font-bold shadow-lg hover:scale-110"
                            onClick={() => setOpen(false)}
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}

            {/* NAVIGATION */}
            <div className="flex justify-between items-center max-w-6xl mx-auto pt-8">
                <a href="/About">
                    <button className="px-6 py-3 border border-cyan-500/50 text-cyan-400 font-bold text-sm
                  hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300
                  rounded-lg uppercase tracking-wider font-mono backdrop-blur-sm">
                        ← Back
                    </button>
                </a>

                <a href="/Contact">
                    <button className="px-6 py-3 bg-cyan-500/90 text-black font-bold text-sm
                  hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105
                  shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50 rounded-lg uppercase tracking-wider font-mono">
                        Next →
                    </button>
                </a>
            </div>
        </div>
    );
}