import tecnologias from "../src/data/tecnologias"

export function Lenguajes() {
    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-8">

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {tecnologias.map((tec) => (
                    <article
                        key={tec.id}
                        className="group flex flex-col bg-gray-900 border border-gray-800 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-600 hover:shadow-lg hover:shadow-purple-600/20"
                    >
                        <div className="flex items-center justify-center h-24 mb-4">
                            <img
                                src={tec.imagen}
                                alt={`Logo de ${tec.nombre}`}
                                className="h-20 w-20 object-contain transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>

                        <span className="self-start text-xs font-semibold uppercase tracking-wide text-purple-300 bg-purple-600/20 px-2.5 py-1 rounded-full mb-3">
                            {tec.categoria}
                        </span>

                        <h2 className="text-xl font-bold text-white mb-2">{tec.nombre}</h2>
                        <p className="text-sm text-gray-400 flex-1 mb-4">{tec.descripcion}</p>

                    </article>
                ))}
            </div>
        </div>
    )
}