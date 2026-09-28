import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"

const SERVICE_ID = "service_s68omek"
const TEMPLATE_ID = "template_u6r3des"
const PUBLIC_KEY = "BktRKBFg0s2N9atFh"

function Formulario() {
    const formRef = useRef()
    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        email: "",
        mensaje: "",
    })

    const [errores, setErrores] = useState({})
    const [enviado, setEnviado] = useState(false)
    const [enviando, setEnviando] = useState(false)

    function validar() {
        const nuevosErrores = {}

        if (!formData.nombre.trim()) {
            nuevosErrores.nombre = "El nombre es obligatorio"
        } else if (formData.nombre.trim().length < 2) {
            nuevosErrores.nombre = "El nombre debe tener al menos 2 caracteres"
        } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/.test(formData.nombre)) {
            nuevosErrores.nombre = "El nombre solo puede contener letras"
        }

        if (!formData.apellido.trim()) {
            nuevosErrores.apellido = "El apellido es obligatorio"
        } else if (formData.apellido.trim().length < 2) {
            nuevosErrores.apellido = "El apellido debe tener al menos 2 caracteres"
        } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/.test(formData.apellido)) {
            nuevosErrores.apellido = "El apellido solo puede contener letras"
        }

        if (!formData.email.trim()) {
            nuevosErrores.email = "El correo electrónico es obligatorio"
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            nuevosErrores.email = "Ingrese un correo electrónico válido (ej: usuario@dominio.com)"
        }

        if (!formData.mensaje.trim()) {
            nuevosErrores.mensaje = "El mensaje es obligatorio"
        } else if (formData.mensaje.length > 300) {
            nuevosErrores.mensaje = "El mensaje no puede superar los 300 caracteres"
        } else if (formData.mensaje.trim().length < 10) {
            nuevosErrores.mensaje = "El mensaje debe tener al menos 10 caracteres"
        }

        setErrores(nuevosErrores)
        return Object.keys(nuevosErrores).length === 0
    }

    function handleChange(e) {
        const { name, value } = e.target

        if (name === "mensaje" && value.length > 300) return

        setFormData({ ...formData, [name]: value })

        if (errores[name]) {
            setErrores({ ...errores, [name]: "" })
        }
    }

    async function handleSubmit(e) {
        e.preventDefault()

        if (validar()) {
            setEnviando(true)

            try {
                await emailjs.send(
                    SERVICE_ID,
                    TEMPLATE_ID,
                    {
                        name: `${formData.nombre} ${formData.apellido}`,
                        email: formData.email,
                        message: formData.mensaje,
                    },
                    PUBLIC_KEY
                )

                setEnviado(true)
                setFormData({ nombre: "", apellido: "", email: "", mensaje: "" })
            } catch {
                setErrores({ general: "Hubo un error al enviar el mensaje. Intentá de nuevo." })
            } finally {
                setEnviando(false)
            }
        }
    }

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto space-y-5">

            <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-300 mb-1">
                    Nombre
                </label>
                <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Ingresá tu nombre"
                    className={`w-full px-4 py-2.5 rounded-lg bg-gray-800 border text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-colors ${errores.nombre
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-600 focus:ring-purple-500 focus:border-purple-500"
                        }`}
                />
                {errores.nombre && (
                    <p className="mt-1 text-sm text-red-400">{errores.nombre}</p>
                )}
            </div>

            <div>
                <label htmlFor="apellido" className="block text-sm font-medium text-gray-300 mb-1">
                    Apellido
                </label>
                <input
                    type="text"
                    id="apellido"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    placeholder="Ingresá tu apellido"
                    className={`w-full px-4 py-2.5 rounded-lg bg-gray-800 border text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-colors ${errores.apellido
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-600 focus:ring-purple-500 focus:border-purple-500"
                        }`}
                />
                {errores.apellido && (
                    <p className="mt-1 text-sm text-red-400">{errores.apellido}</p>
                )}
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Correo Electrónico
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ejemplo@correo.com"
                    className={`w-full px-4 py-2.5 rounded-lg bg-gray-800 border text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-colors ${errores.email
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-600 focus:ring-purple-500 focus:border-purple-500"
                        }`}
                />
                {errores.email && (
                    <p className="mt-1 text-sm text-red-400">{errores.email}</p>
                )}
            </div>

            <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-300 mb-1">
                    Mensaje
                </label>
                <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Escribí tu mensaje aquí..."
                    rows={4}
                    className={`w-full px-4 py-2.5 rounded-lg bg-gray-800 border text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-colors resize-none ${errores.mensaje
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-600 focus:ring-purple-500 focus:border-purple-500"
                        }`}
                />
                <div className="flex justify-between mt-1">
                    {errores.mensaje ? (
                        <p className="text-sm text-red-400">{errores.mensaje}</p>
                    ) : (
                        <span />
                    )}
                    <span className={`text-sm ${formData.mensaje.length > 280 ? "text-yellow-400" : "text-gray-500"}`}>
                        {formData.mensaje.length}/300
                    </span>
                </div>
            </div>

            {errores.general && (
                <div className="p-4 rounded-lg bg-red-900/50 border border-red-600 text-red-400 text-center">
                    {errores.general}
                </div>
            )}

            <button
                type="submit"
                disabled={enviando}
                className={`w-full py-3 px-6 text-white font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 cursor-pointer ${enviando
                    ? "bg-purple-800 cursor-not-allowed opacity-70"
                    : "bg-purple-600 hover:bg-purple-700"
                    }`}
            >
                {enviando ? "Enviando..." : "Enviar Mensaje"}
            </button>


            {enviado && (
                <div className="p-4 rounded-lg bg-green-900/50 border border-green-600 text-green-400 text-center">
                    ¡Mensaje enviado correctamente! Te responderemos a la brevedad.
                </div>
            )}
        </form>
    )
}

export default Formulario
