import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const THEMES = [
    {
        label: "Folclore",
        img: "./serpente.png"
    },
    {
        label: "Time da Ferroviária",
        img: "./ferroviaria.png"
    },
    {
        label: "Boulevard dos Oitis",
        img: "./oitis.png"
    },
    {
        label: "Museu ferroviário",
        img: "./museu.png"
    },
    {
        label: "História de Araraquara",
        img: "./historia-cidade.png"
    }
]


export const ThemesPage = () => {
    const [themes, setThemes] = useState([])

    useEffect(() => {
        axios.get("/themes",
            {
                baseURL: import.meta.env.VITE_API_URL
            }
        ).then(response => {
            // 1. Criar um mapa (objeto) para fácil acesso às URLs das imagens
            const imageMap = THEMES.reduce((acc, theme) => {
                // Usa o label (nome do tema) como chave e a img como valor
                acc[theme.label.toLowerCase()] = theme.img;
                return acc;
            }, {});

            // 2. Mapear os dados da API para adicionar a URL da imagem
            const themesWithImages = response.data.map((apiItem) => {
                // Normaliza o nome da API para a chave do mapa (por segurança, use toLowerCase() e trim() )
                const normalizedName = apiItem.name.toLowerCase().trim();

                // Encontra a URL da imagem no mapa. Se não encontrar, define como undefined ou um placeholder.
                const imageSrc = imageMap[normalizedName];

                return {
                    ...apiItem,
                    img: imageSrc, // Adiciona a propriedade 'img' ao objeto do tema
                    // Se o nome no seu `THEMES` e o `name` da API forem diferentes (como era),
                    // você pode adicionar o 'label' de volta se precisar:
                    // label: apiItem.name, 
                };
            });

            // 3. Atualizar o estado com os dados combinados
            setThemes(themesWithImages);
        }).catch(error => console.error({ getThemesError: error }))
    }, [])

    return (
        <main className="bg-[url('/matriz.png')] min-h-screen bg-center bg-no-repeat flex items-center justify-center">
            <div className="w-full max-w-2xl bg-yellow-100 p-8 rounded-lg border">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-slate-800 mb-8">Escolha um tema!</h2>

                    <section className="flex flex-wrap w-full max-w-lg mx-auto space-x-4 space-y-4 justify-center">
                        {themes.map((item) => (
                            <Link
                                key={item.id}
                                to={`/temas/${item.id}/questoes`}
                                className="bg-green-200 w-full md:max-w-[150px] h-full min-h-[200px] p-4 cursor-pointer space-y-2 text-lg font-medium hover:bg-emerald-200 transition-all"
                            >
                                {item.name}

                                <img src={item.img} alt={item.name} className="w-20 h-20 mx-auto object-contain" />
                            </Link>
                        ))}
                    </section>

                </div>
            </div>
        </main>
    );
}