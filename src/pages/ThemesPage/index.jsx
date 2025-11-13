const THEMES = [
    {
        label: "Folclores",
        img: "./serpente.png"
    },
    {
        label: "Time da ferroviária",
        img: "./ferroviaria.png"
    },
    {
        label: "Boulevard dos oitis",
        img: "./oitis.png"
    },
    {
        label: "Museu ferroviário",
        img: "./museu.png"
    },
    {
        label: "História da cidade",
        img: "./historia-cidade.png"
    }
]


export const ThemesPage = () => {
    return (
        <main className="bg-[url('./matriz.png')] min-h-screen bg-center bg-no-repeat flex items-center justify-center">
            <div className="w-full max-w-2xl bg-yellow-100 p-8 rounded-lg">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-slate-800 mb-8">Escolha um tema!</h2>

                    <section className="flex flex-wrap w-full max-w-lg mx-auto space-x-4 space-y-4 justify-center">
                       {THEMES.map((item,index) => (
                        <button
                            key={index}
                            className="bg-green-200 w-full md:max-w-[150px] h-full min-h-[200px] p-4 cursor-pointer space-y-2 text-lg font-medium hover:bg-emerald-200 transition-all"
                        >
                            {item.label}

                            <img src={item.img} alt={item.label}  className="w-20 h-20 mx-auto object-contain" />
                        </button>
                       ))}
                    </section>

                </div>
            </div>
        </main>
    );
}