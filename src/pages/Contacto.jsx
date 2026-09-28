import Formulario from "./Formulario"

function Contacto() {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white text-center mb-8">Contacto</h1>
      <p className="text-gray-400 text-center mb-8">
        Completá el formulario y nos pondremos en contacto con vos.
      </p>
      <Formulario />
    </div>
  )
}

export default Contacto
