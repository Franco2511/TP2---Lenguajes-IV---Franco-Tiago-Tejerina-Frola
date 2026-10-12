import { useEffect, useState } from "react"
import axios from "axios"

const API_URL =
  "https://api.github.com/search/repositories?q=stars:>100000&sort=stars&order=desc&per_page=8"

const formatear = (n) => new Intl.NumberFormat("es-AR", { notation: "compact" }).format(n)

export function Metricas() {
  const [repos, setRepos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios
      .get(API_URL)
      .then((respuesta) => setRepos(respuesta.data.items))
      .catch(() => setError("No se pudieron cargar las métricas. Intentá más tarde."))
      .finally(() => setCargando(false))
  }, [])

  if (cargando) {
    return (
      <div className="flex justify-center py-16">
        <div className="h-12 w-12 rounded-full border-4 border-purple-600 border-t-transparent animate-spin" />
      </div>
    )
  }

  if (error) {
    return <p className="text-center text-red-400 py-16">{error}</p>
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {repos.map((repo) => (
          <article
            key={repo.id}
            className="group flex flex-col bg-gray-900 border border-gray-800 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-600 hover:shadow-lg hover:shadow-purple-600/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <img
                src={repo.owner.avatar_url}
                alt={`Avatar de ${repo.owner.login}`}
                className="h-14 w-14 rounded-full border-2 border-gray-700 transition-transform duration-300 group-hover:scale-110"
              />
              <div className="min-w-0">
                <h2 className="text-lg font-bold text-white truncate">{repo.name}</h2>
                <p className="text-xs text-gray-400 truncate">{repo.owner.login}</p>
              </div>
            </div>

            {repo.language && (
              <span className="self-start text-xs font-semibold uppercase tracking-wide text-purple-300 bg-purple-600/20 px-2.5 py-1 rounded-full mb-3">
                {repo.language}
              </span>
            )}

            <p className="text-sm text-gray-400 flex-1 mb-4 line-clamp-3">
              {repo.description || "Sin descripción."}
            </p>

            <div className="grid grid-cols-3 gap-2 text-center mb-4">
              <div className="bg-gray-800/60 rounded-lg py-2">
                <p className="text-sm font-bold text-yellow-400">{formatear(repo.stargazers_count)}</p>
                <p className="text-[10px] uppercase text-gray-500">Estrellas</p>
              </div>
              <div className="bg-gray-800/60 rounded-lg py-2">
                <p className="text-sm font-bold text-sky-400">{formatear(repo.forks_count)}</p>
                <p className="text-[10px] uppercase text-gray-500">Forks</p>
              </div>
              <div className="bg-gray-800/60 rounded-lg py-2">
                <p className="text-sm font-bold text-rose-400">{formatear(repo.open_issues_count)}</p>
                <p className="text-[10px] uppercase text-gray-500">Issues</p>
              </div>
            </div>

            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-sm font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-lg py-2 transition-colors"
            >
              Ver en GitHub
            </a>
          </article>
        ))}
      </div>
    </div>
  )
}
