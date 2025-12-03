import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { TextField } from "../../components/TextField";
import { useState } from "react"
import axios from "axios";
import { toast } from "react-toastify";

export const LoginPage = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async event => {
        event.preventDefault()

        try {
            const payload = {
                email,
                password
            }

            const response = await axios.post("/auth/login",
                payload,
                {
                    baseURL: import.meta.env.VITE_API_URL
                }
            )

            const token = response.data.accessToken

            localStorage.setItem("@arara-quiz/token", token)

            navigate("/temas")
        } catch (error) {
            console.error({ handleSubmit: error })

            toast.error("Ocorreu um erro! Tente novamente em instantes")
        }

    }
    return (
        <main className="bg-[url('https://arara-quiz.vercel.app/fundo-arq.png')] min-h-screen bg-center bg-no-repeat flex items-center justify-center">
            <div className="w-full max-w-2xl bg-yellow-100 p-8 rounded-lg border">

                <section className="p-6 bg-green-200 rounded-lg">
                    <article className="text-center">

                        <h2 className="text-3xl font-bold text-slate-800">
                            Vamos começar!
                        </h2>

                        <h1>Informe logo abaixo o seu Login!</h1>
                    </article>

                    <form className="w-full max-w-xs mx-auto" onSubmit={handleSubmit}>

                        <TextField
                            label="Digite seu email"
                            id="email"
                            name="email"
                            type="email"
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                        />
                        <TextField
                            label="Digite sua senha"
                            id="password"
                            name="password"
                            type="password"
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                        />

                        <Button type="submit">Acessar</Button>
                        <p className="text-center my-3">ou</p>

                        <Link to="/cadastro">
                            <Button type="button">Cadastre-se</Button>
                        </Link>
                    </form>
                </section>
            </div>
        </main>
    );
}