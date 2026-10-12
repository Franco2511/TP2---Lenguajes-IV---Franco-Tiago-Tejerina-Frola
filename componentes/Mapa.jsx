const UBICACION = "Universidad Católica de Salta, Campo Castañares, Salta, Argentina"

const MAPA_URL = `https://maps.google.com/maps?q=${encodeURIComponent(UBICACION)}&z=16&output=embed`

export function Mapa() {
  return (
    <div className="flex flex-col h-full bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
      <iframe
        title="Mapa de la Universidad Católica de Salta"
        src={MAPA_URL}
        className="w-full flex-1 min-h-[350px] border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <div className="p-4 border-t border-gray-800">
        <h2 className="text-lg font-bold text-white">Universidad Católica de Salta</h2>
        <p className="text-sm text-gray-400">Campo Castañares, Salta, Argentina</p>
      </div>
    </div>
  )
}
