import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { TextField } from "../../components/TextField";
import { useState } from "react"

export const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = event => {
        event.preventDefault()
        console.log({ email, password })
    }
    return (
        <main className="bg-[url('./fundo-arq.png')] min-h-screen bg-center bg-no-repeat flex items-center justify-center">
            <div className="w-full max-w-2xl bg-neutral-50 p-8 rounded-lg">

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
                       
                        <Button>Acessar</Button>
                        <p className="text-center my-3">ou</p>

                        <Link to="/">
                            <Button type="button">Cadastre-se</Button>
                        </Link>
                    </form>
                </section>
            </div>
        </main>
    );
}