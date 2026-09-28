import { useState } from "react"
import Inicio from "./pages/Inicio"
import Servicios from "./pages/Servicios"
import Contacto from "./pages/Contacto"

function App() {
  const [pagina, setPagina] = useState("inicio")

  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-white">
      <nav className="flex gap-3 p-5 bg-gray-900/80 border-b border-gray-800">
        <button
          onClick={() => setPagina("inicio")}
          className={`text-xl font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 cursor-pointer ${
            pagina === "inicio"
              ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30"
              : "text-gray-400 hover:text-white hover:bg-gray-800"
          }`}
        >
          Inicio
        </button>
        <button
          onClick={() => setPagina("servicios")}
          className={`text-xl font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 cursor-pointer ${
            pagina === "servicios"
              ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30"
              : "text-gray-400 hover:text-white hover:bg-gray-800"
          }`}
        >
          Servicios
        </button>
        <button
          onClick={() => setPagina("contacto")}
          className={`text-xl font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 cursor-pointer ${
            pagina === "contacto"
              ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30"
              : "text-gray-400 hover:text-white hover:bg-gray-800"
          }`}
        >
          Contacto
        </button>
      </nav>

      <main className="flex-1 flex items-center justify-center p-4">
        {pagina === "inicio" && <Inicio />}
        {pagina === "servicios" && <Servicios />}
        {pagina === "contacto" && <Contacto />}
      </main>
    </div>
  )
}

export default App
