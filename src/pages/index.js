import React from 'react';

export default function Home() {
  return (
    <div className="space-y-12 sm:space-y-16">

      {/* Custom CSS para animaciones sutiles */}
      <style>{`
        @keyframes subtleGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(34, 211, 238, 0.1); }
          50% { box-shadow: 0 0 30px rgba(34, 211, 238, 0.2); }
        }
        .subtle-glow {
          animation: subtleGlow 3s ease-in-out infinite;
        }
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
      `}</style>

      {/* HERO SECTION - Refinado y profesional */}
      <div className="text-center py-12 sm:py-20">
        <div className="border border-cyan-500/30 bg-gradient-to-b from-gray-900/50 to-black/50 p-8 sm:p-16 rounded-2xl backdrop-blur-md subtle-glow max-w-5xl mx-auto">

          {/* Indicador de estado - Más sutil */}
          <div className="flex items-center justify-center mb-8 fade-in-up">
            <div className="w-2 h-2 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/70 animate-pulse mr-3"></div>
            <span className="text-xs text-gray-400 font-mono tracking-wider uppercase">System Online</span>
          </div>

          {/* Nombre - Prioridad visual */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white font-mono fade-in-up delay-1">
            ADRIÁN ZÚÑIGA CASTRO
          </h1>

          {/* Rol/Título - Secundario pero elegante */}
          <div className="text-xl sm:text-2xl lg:text-3xl text-cyan-400 mb-12 font-mono tracking-wide fade-in-up delay-2">
            <span className="text-gray-500">&gt;</span> FULLSTACK DEVELOPER
          </div>

          {/* Descripción breve y profesional */}
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto mb-12 font-mono fade-in-up delay-3">
            Crafting elegant solutions through code.<br />
            Specialized in full-stack development and modern web technologies.
          </p>

          {/* CTAs - Más limpios */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 fade-in-up delay-3">
            <a href="./About">
              <button className="group relative w-full sm:w-auto px-10 py-4 bg-cyan-500/90 text-black font-bold text-sm
                      hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105
                      shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50 rounded-lg uppercase tracking-wider font-mono
                      overflow-hidden">
                <span className="relative z-10">View Profile</span>
                <div className="absolute inset-0 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </button>
            </a>
            <a href="./Projects">
              <button className="group relative w-full sm:w-auto px-10 py-4 border border-cyan-500/50 text-cyan-400 font-bold text-sm
                      hover:border-cyan-400 transition-all duration-300 transform hover:scale-105
                      rounded-lg uppercase tracking-wider font-mono backdrop-blur-sm
                      hover:bg-cyan-500/10">
                <span className="relative z-10">Explore Work</span>
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* METRICS - Profesionales y relevantes */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {[
          {
            label: 'EXPERIENCE',
            value: '3+',
            unit: 'YEARS',
            color: 'text-cyan-400',
            border: 'border-cyan-500/30',
            glow: 'hover:shadow-cyan-500/20'
          },
          {
            label: 'PROJECTS',
            value: '25+',
            unit: 'COMPLETED',
            color: 'text-violet-400',
            border: 'border-violet-500/30',
            glow: 'hover:shadow-violet-500/20'
          },
          {
            label: 'TECHNOLOGIES',
            value: '15+',
            unit: 'MASTERED',
            color: 'text-green-400',
            border: 'border-green-500/30',
            glow: 'hover:shadow-green-500/20'
          }
        ].map((item, index) => (
          <div
            key={index}
            className={`group bg-black/30 border ${item.border} hover:border-opacity-60 p-8 rounded-xl 
                       transition-all duration-300 hover:shadow-lg ${item.glow} backdrop-blur-sm
                       hover:bg-black/50 cursor-default`}
          >
            <div className="text-center">
              <div className={`${item.color} text-4xl sm:text-5xl font-bold mb-2 font-mono group-hover:scale-110 transition-transform duration-300`}>
                {item.value}
              </div>
              <div className="text-gray-500 text-xs uppercase tracking-wider font-mono mb-1">
                {item.unit}
              </div>
              <div className="text-gray-400 text-sm font-mono tracking-wide">
                {item.label}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tech Stack Preview - Opcional pero elegante */}
      <div className="max-w-5xl mx-auto">
        <div className="border border-cyan-900/30 bg-black/20 rounded-xl p-8 backdrop-blur-sm">
          <div className="flex items-center mb-6">
            <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase">Core Stack</span>
            <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/50 to-transparent ml-4"></div>
          </div>

          <div className="flex flex-wrap gap-3">
            {['React', 'Node.js', 'TypeScript', 'Next.js', 'PostgreSQL', 'Java', 'SpringBoot', 'TailwindCSS', 'C#', '.Net Framework'].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-900/50 border border-gray-700/50 text-gray-300 text-xs font-mono rounded-lg
                         hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Terminal Output - Sutil y profesional */}
      <div className="max-w-5xl mx-auto">
        <div className="bg-black/40 border border-cyan-900/20 rounded-lg p-6 font-mono text-xs text-gray-500 backdrop-blur-sm">
          <div className="flex items-center mb-4">
            <div className="flex space-x-2 mr-4">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>
            <span className="text-gray-600">~/portfolio</span>
          </div>
          <p className="mb-2"><span className="text-cyan-400">$</span> status --check</p>
          <p className="mb-2 text-green-400">✓ All systems operational</p>
          <p className="mb-2"><span className="text-cyan-400">$</span> ready --for-collaboration</p>
          <p className="text-green-400">✓ Available for new opportunities<span className="animate-pulse ml-1">_</span></p>
        </div>
      </div>
    </div>
  );
}