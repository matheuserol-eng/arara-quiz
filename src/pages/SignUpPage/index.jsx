import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { TextField } from "../../components/TextField";
import { useState } from "react"
import axios from "axios";
import { toast } from "react-toastify";

export const SignUpPage = () => {
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [nickname, setNickname] = useState("")

    const handleSubmit = async event => {
        event.preventDefault()

        try {
            const payload = { name, email, password, nickname }

            const response = await axios.post("/auth/register",
                payload,
                {
                    baseURL: import.meta.env.VITE_API_URL
                }
            )

            toast.success("Usuário cadastrado com sucesso")

            navigate("/")
        } catch (error) {
            console.error({ handleSubmit: error })

            toast.error("Ocorreu um erro! Tente novamente em instantes")

        }
    }

    return (
        <main className="bg-[url('./fundo-arq.png')] min-h-screen bg-center bg-no-repeat flex items-center justify-center">
            <div className="w-full max-w-2xl bg-yellow-100 p-8 rounded-lg">

                <section className="p-6 bg-green-200 rounded-lg">
                    <article className="text-center">

                        <h2 className="text-3xl font-bold text-slate-800">
                            Vamos começar!
                        </h2>

                        <h1>Informe logo abaixo quem você é para podemos iniciar o quiz sobre a cidade de Araraquara.</h1>
                    </article>

                    <form className="w-full max-w-xs mx-auto" onSubmit={handleSubmit}>
                        <TextField
                            label="Digite seu nome completo"
                            id="name"
                            name="name"
                            type="text"
                            value={name}
                            onChange={event => setName(event.target.value)}
                        />
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
                        <TextField
                            label="Digite seu apelido"
                            id="nickname"
                            name="nickname"
                            type="text"
                            value={nickname}
                            onChange={event => setNickname(event.target.value)}
                        />
                        <Button type="submit">Criar conta</Button>


                        <p className="text-center my-3">ou</p>

                        <Link to="/">
                            <Button type="button">Já tenho cadastro</Button>
                        </Link>
                    </form>
                </section>
            </div>
        </main>
    );
}
