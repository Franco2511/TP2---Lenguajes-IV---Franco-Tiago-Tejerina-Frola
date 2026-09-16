import { useState } from "react"
import Inicio from "./pages/Inicio"
import Servicios from "./pages/Servicios"
import Contacto from "./pages/Contacto"

function App() {
  const [pagina, setPagina] = useState("inicio")

  return (
    <>
      <nav>
        <button onClick={() => setPagina("inicio")}>Inicio</button>
        <button onClick={() => setPagina("servicios")}>Servicios</button>
        <button onClick={() => setPagina("contacto")}>Contacto</button>
      </nav>
      {pagina === "inicio" && <Inicio />}
      {pagina === "servicios" && <Servicios />}
      {pagina === "contacto" && <Contacto />}
    </>
  )
}

export default App
