import Formulario from "./Formulario"
import { Mapa } from "../../componentes/Mapa"

function Contacto() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white text-center mb-8">Contacto</h1>
      <p className="text-gray-400 text-center mb-8">
        Completá el formulario y nos pondremos en contacto con vos.
      </p>

      <div className="grid gap-8 lg:grid-cols-2 items-stretch">
        <Formulario />
        <Mapa />
      </div>
    </div>
  )
}

export default Contacto
