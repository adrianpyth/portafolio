import React from 'react';

const trainings = [
    {
        title: 'JAVA WEB: CREA APLICACIONES UTILIZANDO SPRING BOOT - ONE',
        provider: 'Oracle ONE - Alura Latam',
        date: 'August 2025',
        skills: ['Java', 'Spring Boot', 'Backend Development', 'Rest APIS'],
        credentialId: 'b88b6089-baeb-480e-8453-77cf0f8f1a5d',
        link: 'https://app.aluracursos.com/degree/certificate/b88b6089-baeb-480e-8453-77cf0f8f1a5d?lang',
        image: './assets/Adrián-Zúñiga-Castro-Formación-Java-Web_-crea-aplicaciones-utilizando-Spring-Boot-Alura.webp'
    },
    {
        title: 'FORMACIÓN DESARROLLO PERSONAL - ONE',
        provider: 'Oracle ONE - Alura Latam',
        date: 'January 2025',
        skills: ['Professional Skills', 'Leadership', 'Communication', 'Personal Development'],
        credentialId: '5f0ceb79-a106-448b-a176-066369598680',
        link: 'https://app.aluracursos.com/degree/certificate/5f0ceb79-a106-448b-a176-066369598680?lang',
        image: './assets/Adrián-Zúñiga-Castro-Formación-Alura.webp' // pon una imagen aquí
    },
    {
        title: 'FORMACIÓN LÓGICA DE PROGRAMACIÓN - ONE',
        provider: 'Oracle ONE - Alura Latam',
        date: 'February 2025',
        skills: ['Programming Fundamentals', 'Logic', 'Problem Solving', 'Algorithms'],
        credentialId: '0ec24d92-57f5-4832-93f1-09f8f8ffadda',
        link: 'https://app.aluracursos.com/degree/certificate/0ec24d92-57f5-4832-93f1-09f8f8ffadda?lang',
        image: './assets/Adrián-Zúñiga-Castro-Formación-Lógica-de-programación-con-JavaScript-Alura.webp' // pon una imagen aquí
    },
    {
        title: 'PRINCIPIANTE EN PROGRAMACIÓN - ONE',
        provider: 'Oracle ONE - Alura Latam',
        date: 'February 2025',
        skills: ['HTML', 'CSS', 'Responsive Design', 'GIT & GiTHuB'],
        credentialId: 'b1a027c0-8356-4110-803f-651f94be9701',
        link: 'https://app.aluracursos.com/degree/certificate/b1a027c0-8356-4110-803f-651f94be9701?lang',
        image: './assets/Adrián-Zúñiga-Castro-Formación-Principiante-Alura.webp' // pon una imagen aquí
    },
    {
        title: 'PROGRAMACIÓN ORIENTADA A OBJETOS - ONE',
        provider: 'Oracle ONE - Alura Latam',
        date: 'June 2025',
        skills: ['Object-Oriented Programming', 'OOP Principles', 'Java', 'Design Patterns'],
        credentialId: 'be6f473c-0baa-4c57-b235-d249c8320544',
        link: 'https://app.aluracursos.com/degree/certificate/be6f473c-0baa-4c57-b235-d249c8320544?lang',
        image: './assets/Adrián-Zúñiga-Castro-Formación-Aprende-a-programar-en-Java-con-Orientación-a-Objetos-Alura.webp' // pon una imagen aquí
    },
    {
        title: 'JAVA Y SPRING BOOT - ONE',
        provider: 'Oracle ONE - Alura Latam',
        date: 'Agust 2025',
        skills: ['Developed RESTful APIs', 'Best Practices', 'Documented, tested, and prepared REST APIs for production deployment', 'Spring Boot'],
        credentialId: '1da8b165-5034-4819-9510-1325070cfbbb',
        link: 'https://app.aluracursos.com/degree/certificate/1da8b165-5034-4819-9510-1325070cfbbb?lang',
        image: './assets/Adrián-Zúñiga-Castro-Formación-Java-y-Spring-Boot-Alura.webp' // pon una imagen aquí
    },
    {
        title: 'FORMACIÓN JAVA & SPRING FRAMEWORK - ONE',
        provider: 'Oracle ONE - Alura Latam',
        date: 'June 2025',
        skills: ['Java lambdas and streams,', 'Spring Data JPA', 'Designed and implemented RESTful APIs', 'Spring Security'],
        credentialId: '502dae6a-6283-470b-9636-0c3cc2c4d552',
        link: 'https://app.aluracursos.com/degree/certificate/502dae6a-6283-470b-9636-0c3cc2c4d552?lang',
        image: './assets/Adrián-Zúñiga-Castro-SpringFramework-Alura.webp' // pon una imagen aquí
    },
    {
        title: 'INTELIGENCIA ARTIFICIAL - ONE',
        provider: 'Oracle ONE - Alura Latam',
        date: 'JUNE 2025',
        skills: ['Spring IA', 'Automatization', 'Integration', 'Productivity ', 'AI Tools'],
        credentialId: '731e2a14-1b1b-4130-b55c-4841e38ab4e6',
        link: 'https://app.aluracursos.com/degree/certificate/731e2a14-1b1b-4130-b55c-4841e38ab4e6?lang',
        image: './assets/Adrián-Zúñiga-Castro-IA-Alura.webp' // pon una imagen aquí
    },

];

export default function Training() {
    return (
        <div className="space-y-12 sm:space-y-16">

            {/* Animaciones */}
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
      `}</style>

            {/* HEADER */}
            <div className="max-w-6xl mx-auto fade-in-up">
                <div className="flex items-center mb-4">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/70 animate-pulse mr-3"></div>
                    <span className="text-xs text-gray-500 font-mono tracking-wider uppercase">
                        Training
                    </span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-mono">
                    Certifications & Learning Path
                </h1>
            </div>

            {/* GRID */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {trainings.map((item, index) => (
                    <div
                        key={index}
                        className="
              group
              bg-black/30
              border border-cyan-500/30
              p-6
              rounded-xl
              backdrop-blur-sm
              transition-all duration-500 ease-out
              hover:border-cyan-400/80
              hover:scale-105
              fade-in-up
            "
                    >
                        {/* IMAGE */}
                        <div className="relative mb-6 overflow-hidden rounded-xl border border-cyan-500/20">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"></div>

                            <img
                                src={item.image}
                                alt={item.title}
                                className="
                  w-full
                  h-44
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-110
                "
                            />
                        </div>

                        {/* CONTENT */}
                        <h2 className="text-lg text-cyan-400 font-mono mb-1">
                            {item.title}
                        </h2>

                        <p className="text-sm text-gray-400 font-mono mb-4">
                            {item.provider}
                        </p>

                        <p className="text-xs text-gray-500 font-mono mb-4">
                            {item.date}
                        </p>

                        <div className="mb-4">
                            <span className="text-xs text-gray-400 font-mono uppercase tracking-wider">
                                Skills Validated
                            </span>

                            <ul className="mt-2 space-y-1">
                                {item.skills.map((skill, i) => (
                                    <li
                                        key={i}
                                        className="text-sm text-gray-300 font-mono"
                                    >
                                        • {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="text-xs text-gray-500 font-mono mb-4 break-all">
                            Credential ID: {item.credentialId}
                        </p>

                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <button
                                className="
                  w-full
                  px-4 py-2
                  border border-cyan-500/50
                  text-cyan-400
                  font-bold
                  text-xs
                  rounded-lg
                  uppercase
                  tracking-wider
                  font-mono
                  transition-all duration-300
                  hover:bg-cyan-500/10
                  hover:border-cyan-400
                "
                            >
                                Verify
                            </button>
                        </a>
                    </div>
                ))}
            </div>

            {/* NAV */}
            <div className="flex justify-between items-center max-w-6xl mx-auto pt-8 fade-in-up">
                <a href="/About">
                    <button
                        className="
              px-6 py-3
              border border-cyan-500/50
              text-cyan-400
              font-bold text-sm
              rounded-lg
              uppercase tracking-wider
              font-mono
              transition-all duration-300
              hover:bg-cyan-500/10
              hover:border-cyan-400
            "
                    >
                        ← Back
                    </button>
                </a>

                <a href="/Contact">
                    <button
                        className="
              px-6 py-3
              bg-cyan-500/90
              text-black
              font-bold text-sm
              rounded-lg
              uppercase tracking-wider
              font-mono
              transition-all duration-300
              transform hover:scale-105
              shadow-lg shadow-cyan-500/30
              hover:bg-cyan-400
            "
                    >
                        Next →
                    </button>
                </a>
            </div>
        </div>
    );
}
