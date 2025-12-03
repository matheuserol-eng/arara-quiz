import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { Link, useParams } from "react-router-dom"

export const ResultsPage = () => {
    const { id: themeId } = useParams();

    const token = localStorage.getItem("@arara-quiz/token")

    const [points, setPoints] = useState(0)

    useEffect(() => {
        axios.get(`/results/theme/${themeId}`, {
            baseURL: import.meta.env.VITE_API_URL,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            setPoints(response.data.totalScore)
        }).catch(error => console.error({ getScoreByTheme: error }))

        axios.get(`/results/`, {
            baseURL: import.meta.env.VITE_API_URL,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).catch(error => console.error({ getScoreByTheme: error }))
    }, [])

    return (
        <main className="bg-[url('https://arara-quiz.vercel.app/araraquaraantiga.png')] min-h-screen bg-center bg-no-repeat flex items-center justify-center">
            <div className="w-full max-w-2xl bg-amber-500 p-8 rounded-lg opacity-60">
                <div className="flex justify-center items-center mb-12 space-x-8">
                    <section className="flex items-center justify-center">
                        <figure className="w-28 max-w-30">
                            <img src="/trofeu.png" alt="Trofeu" />
                        </figure>
                        <article><h3 className="text-4xl font-semibold text-center mb-2">Quiz concluído</h3></article>
                        <figure className="w-28 max-w-30"><img src="/medalha.png" alt="Medalha" /></figure>
                    </section>
                </div>
                <p className="font-black text-center mb-2">Parabéns! Você completou com sucesso o quiz <br></br> sobre Araraquara.</p>
                <p className="font-black text-center mb-2">O seu total de pontos foi de:</p>
                <p className="font-extrabold w-150 text-7xl text-center mb-2">{points}</p>
                <p className="font-black text-center mb-2">ganhos!</p>
                <div className="w-full flex items-center justify-center">
                    <Link to="/temas"
                        className="w-44 rounded-4xl cursor-pointer justify-center bg-sky-300 mx-auto px-4 py-2  border items-center">
                        Voltar para temas
                    </Link>
                    <Link to="/ranking" className="w-44 rounded-4xl cursor-pointer justify-center bg-pink-500 mx-auto px-4 py-2  border items-center">
                        Ver Ranking
                    </Link>
                </div>
            </div>
        </main >
    )
}