import { Metricas } from "../../componentes/Metricas"

function Inicio() {
  return (
    <div className="w-full">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white">Inicio</h1>
        <p className="text-gray-400 mt-4">
          Métricas en tiempo real de los repositorios más populares de GitHub.
        </p>
      </div>

      <Metricas />
    </div>
  )
}

export default Inicio
