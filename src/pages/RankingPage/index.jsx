export const RankingPage = () => {
    return (
        <main className="bg-[url('./araraquaraantiga.png')] min-h-screen bg-center bg-no-repeat flex items-center justify-center">
            <div className="w-full max-w-2xl bg-amber-500 p-8 rounded-lg opacity-60">
                <div className="flex justify-center items-center mb-12 space-x-8">
                    <section className="flex items-center justify-center">
                        <figure className="w-28 max-w-30">
                            <img src="./trofeu.png" alt="Trofeu" />
                        </figure>
                        <article><h3 className="text-4xl font-semibold text-center mb-2">Ranking Geral</h3></article>
                        <figure className="w-28 max-w-30"><img src="./medalha.png" alt="Medalha" /></figure>
                    </section>
                </div>

                <div className="grid grid-cols-2">
                    <section>

                        <p className="font-black text-left mb-2">Sua posição:</p>
                        <p className="font-black text-left mb-2">1º - Matheus</p>
                        <p className="font-extrabold w-40 text-3xl text-center mb-2">5 pontos</p>
                    </section>

                    <section>

                        <h2 className="text-right">Top melhores jogadores:</h2>
                        <figure className="flex w-full justify-end"><img src="./trofeu.png" alt="Trofeu" className="w-10" /></figure>
                        <p className="font-extrabold text-4xl text-right mb-2">MATHEUS</p>
                        <p className="font-light text-right">5 pontos</p>
                    </section>
                </div>
                <div className="w-full flex items-center justify-center">
                    <button className="w-44 rounded-4xl cursor-pointer justify-center bg-sky-300 mx-auto px-4 py-2  border items-center">Voltar para temas</button>
                    <button className="w-44 rounded-4xl cursor-pointer justify-center bg-pink-500 mx-auto px-4 py-2  border items-center">Voltar para página anterior</button>
                </div>
            </div>
        </main >
    )
} 