import Link from "next/link";
export default function Home() {
  return (
    // Reducimos el espacio vertical en móvil
    <div className="space-y-6 sm:space-y-8" style={{ fontFamily: 'Press Start 2P, monospace' }}>

      {/* HERO SECTION */}
      <div className="text-center py-6 sm:py-12">
        {/* Reducimos el padding del contenedor en móvil */}
        <div className="border-2 border-green-500 bg-gray-900/70 p-4 sm:p-6 rounded-lg">

          {/* H1: Título principal (Reducido en móvil) */}
          <h1 className="text-xl sm:text-3xl font-bold mb-4 sm:mb-6 text-green-400 border-2 border-animated inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-gray-800/70">
            <span className="text-white/100 animate-pulse">&gt;</span>
            <span className="animate-pulse font-tourney"> SOFTWARE</span>
            <span className="text-white mx-1 sm:mx-2"></span>
            <br className="sm:hidden" /> {/* Salto de línea forzado en móvil */}
            <span className="text-violet-400 animate-pulse font-tourney">DEVELOPER</span>
          </h1>

          {/* Información de Jugador (Reducido en móvil) */}
          <div className="text-2xl sm:text-4xl text-green-300 mb-4 sm:mb-6 font-handjet">
            <div className="mb-2 ">PLAYER: <span className="text-white break-words inline-block">[ ADRIÁN ZÚÑIGA CASTRO... ]</span></div>
            <div className="mb-2">CLASS: <span className="text-amber-300">[ FULLSTACK DEVELOPER ]</span></div>
            <div>LEVEL: <span className="text-violet-400">[ MAGICIAN ]</span></div>
          </div>

          {/* Mensajes de Consola (Ajuste menor del texto) */}
          <p className="text-gray-300 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-handjet">
            <span className="text-pink-400">&gt;</span > INICIANDO SESION...<br />
            <span className="text-cyan-400">&gt;</span> CARGANDO PROYECTOS...<br />
            <span className="text-green-400">&gt;</span> LISTO PARA JUGAR!
          </p>

          {/* Botones (Ajustamos el espacio y padding en móvil) */}
          <div className="flex justify-center space-x-2 sm:space-x-4 font-tourney">
            <Link href="./About">
              <button className="px-4 py-2 sm:px-6 sm:py-3 bg-green-500 text-black font-bold text-[10px] sm:text-xs
                      hover:bg-cyan-400 transition-all duration-200 transform hover:scale-105
                      shadow-lg shadow-green-500/30">
                [A] START
              </button>
            </Link>
            <Link href="./Projects">
              <button className="px-4 py-2 sm:px-6 sm:py-3 border-1 border-pink-500 text-pink-400 font-bold text-[10px] sm:text-xs
                      hover:bg-pink-500 hover:text-black transition-all duration-200">
                [B] PROJECTS
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* STATS COMO VIDEOJUEGO: La clase md:grid-cols-3 ya es responsive */}
      <div className="grid md:grid-cols-3 gap-4 font-tourney">
        {[
          { stat: 'HP', value: '100%', color: 'text-green-400', bar: 'bg-green-500' },
          { stat: 'Mana', value: '85%', color: 'text-blue-400', bar: 'bg-blue-500' },
          { stat: 'XP', value: '1337', color: 'text-pink-400', bar: 'bg-pink-500' }
        ].map((item, index) => (
          <div key={index} className="bg-gray-900/70 border border-gray-700 p-4 text-xs">
            <div className={`${item.color} mb-2 font-bold`}>
              {item.stat}: {item.value}
            </div>
            <div className="w-full bg-gray-700 h-2 rounded">
              <div className={`${item.bar} h-2 rounded`} style={{ width: item.value }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}