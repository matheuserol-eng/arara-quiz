export const ResultsPage = () => {
    return (
        <main className="bg-[url('./araraquaraantiga.png')] min-h-screen bg-center bg-no-repeat flex items-center justify-center">
            <div className="w-full max-w-2xl bg-amber-500 p-8 rounded-lg opacity-60">
                <div className="flex justify-center items-center mb-12 space-x-8">
                    <section className="flex items-center justify-center">
                        <figure className="w-28 max-w-30">
                            <img src="./trofeu.png" alt="Trofeu" />
                        </figure>
                        <article><h3 className="text-4xl font-semibold text-center mb-2">Quiz concluído</h3></article>
                        <figure className="w-28 max-w-30"><img src="./medalha.png" alt="Medalha" /></figure>
                    </section>
                </div>
                <p className="font-black text-center mb-2">Parabéns! Você completou com sucesso o quiz <br></br> sobre Araraquara.</p>
                <p className="font-black text-center mb-2">O seu total de pontos foi de:</p>
                <p className="font-extrabold w-150 text-7xl text-center mb-2">5</p>
                <p className="font-black text-center mb-2">ganhos!</p> 
                <div className="text-right">*Total de 5 pontos acumulados.</div>
            <div className="w-full flex items-center justify-center">
            <button className="w-44 rounded-4xl cursor-pointer justify-center bg-sky-300 mx-auto px-4 py-2  border items-center">Voltar para temas</button>
            <button className="w-44 rounded-4xl cursor-pointer justify-center bg-pink-500 mx-auto px-4 py-2  border items-center">Ver Ranking</button>
        </div>
            </div>
        </main >
    )
}