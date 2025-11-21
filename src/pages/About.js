import React from 'react';

export default function About() {
    return (
        <div className="space-y-12 sm:space-y-16">

            {/* Custom CSS para animaciones */}
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
        .delay-2 { animation-delay: 0.4s; opacity: 0; }
        .delay-3 { animation-delay: 0.6s; opacity: 0; }
        .delay-4 { animation-delay: 0.8s; opacity: 0; }
      `}</style>

            {/* HERO SECTION - Perfil */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">

                {/* INFO */}
                <div className="order-2 lg:order-1 fade-in-up">
                    <div className="mb-6">
                        <div className="flex items-center mb-4">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/70 animate-pulse mr-3"></div>
                            <span className="text-xs text-gray-500 font-mono tracking-wider uppercase">About Me</span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-mono mb-4">
                            Developer Profile
                        </h1>
                    </div>

                    <div className="border border-cyan-500/30 bg-gradient-to-br from-gray-900/50 to-black/50 p-6 sm:p-8 rounded-xl backdrop-blur-sm">
                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-mono">
                            Junior developer with hands-on experience in web development using{" "}
                            <span className="text-violet-400 font-semibold">.NET Core</span>,{" "}
                            <span className="text-cyan-400 font-semibold">C#</span>, and{" "}
                            <span className="text-amber-400 font-semibold">Java</span>. Skilled in{" "}
                            <span className="text-cyan-400">object-oriented programming</span>,{" "}
                            <span className="text-green-400">layered architecture</span>, and{" "}
                            <span className="text-yellow-400">SQL</span> database management.
                        </p>
                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-mono mt-4">
                            Actively enhancing technical skills through{" "}
                            <span className="text-red-400 font-semibold">Oracle Next Education</span> in{" "}
                            <span className="text-violet-400">AI</span>,{" "}
                            <span className="text-amber-400">Java</span>, and{" "}
                            <span className="text-green-400">Spring Boot</span>. Strong communicator,
                            problem-solver, and passionate about building scalable, maintainable
                            software solutions.
                        </p>
                    </div>
                </div>

                {/* AVATAR */}
                <div className="order-1 lg:order-2 flex justify-center lg:justify-end fade-in-up delay-1">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                        <div className="relative border-2 border-cyan-500/50 rounded-2xl bg-gray-900/90 p-2 backdrop-blur-sm overflow-hidden">
                            <img
                                src="./assets/FotoPerfil.png"
                                alt="Profile"
                                className="w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-xl"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* TECH STACK GRID */}
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center mb-8">
                    <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase">Technical Skills</span>
                    <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/50 to-transparent ml-4"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {/* FRONTEND */}
                    <div className="bg-black/30 border border-cyan-500/30 p-6 rounded-xl backdrop-blur-sm hover:border-cyan-500/60 transition-all duration-300 fade-in-up delay-2">
                        <h2 className="text-cyan-400 text-lg font-mono mb-6 text-center uppercase tracking-wider">Frontend</h2>
                        <div className="space-y-4">
                            {[
                                { name: 'HTML5', color: '#E34F26' },
                                { name: 'CSS3', color: '#663399' },
                                { name: 'React', color: '#61DAFB' },
                                { name: 'Tailwind', color: '#06B6D4' },
                                { name: 'TypeScript', color: '#3178C6' },
                                { name: 'JavaScript', color: '#F7DF1E' }
                            ].map((tech, index) => (
                                <div key={index} className="flex items-center space-x-3 group cursor-default">
                                    <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: tech.color, boxShadow: `0 0 10px ${tech.color}50` }}></div>
                                    <span className="text-sm text-gray-300 font-mono group-hover:text-white transition-colors">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* BACKEND */}
                    <div className="bg-black/30 border border-violet-500/30 p-6 rounded-xl backdrop-blur-sm hover:border-violet-500/60 transition-all duration-300 fade-in-up delay-2">
                        <h2 className="text-violet-400 text-lg font-mono mb-6 text-center uppercase tracking-wider">Backend</h2>
                        <div className="space-y-4">
                            {[
                                { name: 'Spring Boot', color: '#6DB33F' },
                                { name: 'Java', color: '#ED8B00' },
                                { name: 'Python', color: '#3776AB' },
                                { name: 'Spring', color: '#6DB33F' },
                                { name: 'C#', color: '#9B4F96' },
                                { name: 'Maven', color: '#C71A36' },
                                { name: 'npm', color: '#CB3837' },
                                { name: 'Node.js', color: '#83CD29' },
                                { name: 'Django', color: '#093E29' }
                            ].map((tech, index) => (
                                <div key={index} className="flex items-center space-x-3 group cursor-default">
                                    <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: tech.color, boxShadow: `0 0 10px ${tech.color}50` }}></div>
                                    <span className="text-sm text-gray-300 font-mono group-hover:text-white transition-colors">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* DATABASE & CLOUD */}
                    <div className="bg-black/30 border border-green-500/30 p-6 rounded-xl backdrop-blur-sm hover:border-green-500/60 transition-all duration-300 fade-in-up delay-3">
                        <h2 className="text-green-400 text-lg font-mono mb-6 text-center uppercase tracking-wider">Database</h2>
                        <div className="space-y-4">
                            {[
                                { name: 'MongoDB', color: '#47A248' },
                                { name: 'PostgreSQL', color: '#4169E1' },
                                { name: 'MySQL', color: '#4479A1' },
                                { name: 'Oracle Cloud', color: '#F80000' }
                            ].map((tech, index) => (
                                <div key={index} className="flex items-center space-x-3 group cursor-default">
                                    <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: tech.color, boxShadow: `0 0 10px ${tech.color}50` }}></div>
                                    <span className="text-sm text-gray-300 font-mono group-hover:text-white transition-colors">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* TOOLS */}
                    <div className="bg-black/30 border border-amber-500/30 p-6 rounded-xl backdrop-blur-sm hover:border-amber-500/60 transition-all duration-300 fade-in-up delay-3">
                        <h2 className="text-amber-400 text-lg font-mono mb-6 text-center uppercase tracking-wider">Tools</h2>
                        <div className="space-y-4">
                            {[
                                { name: 'Git', color: '#E34F26' },
                                { name: 'Figma', color: '#1572B6' },
                                { name: 'Selenium', color: '#43B02A' },
                                { name: 'Postman', color: '#FF6C37' },
                                { name: 'GitHub', color: '#FFFFFF' },
                                { name: 'Linux', color: '#FCC624' }
                            ].map((tech, index) => (
                                <div key={index} className="flex items-center space-x-3 group cursor-default">
                                    <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: tech.color, boxShadow: `0 0 10px ${tech.color}50` }}></div>
                                    <span className="text-sm text-gray-300 font-mono group-hover:text-white transition-colors">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* NAVIGATION */}
            <div className="flex justify-between items-center max-w-6xl mx-auto pt-8 fade-in-up delay-4">
                <a href="/">
                    <button className="px-6 py-3 border border-cyan-500/50 text-cyan-400 font-bold text-sm
                  hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300
                  rounded-lg uppercase tracking-wider font-mono backdrop-blur-sm">
                        ← Back
                    </button>
                </a>

                <a href="/Projects">
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