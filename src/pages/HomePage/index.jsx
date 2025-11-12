import { Button } from "../../components/Button";
import { TextField } from "../../components/TextField";

export const HomePage = () => {
    return (
        <main className="bg-[url('./fundo-arq.png')] min-h-screen bg-center bg-no-repeat flex items-center justify-center">
            <div className="w-full max-w-2xl bg-neutral-50 p-8 rounded-lg">

                <section className="p-6 bg-green-200">
                    <article className="text-center">

                        <h2 className="text-3xl font-bold text-slate-800">
                            Vamos começar!
                        </h2>

                        <h1>Informe logo abaixo quem você é para podemos iniciar o quiz sobre a cidade de Araraquara.</h1>
                    </article>

                    <form className="w-full max-w-xs mx-auto">
                        <TextField
                            label="Digite seu nome completo"
                            id="name"
                            name="name"
                            type="text"
                        />
                        <TextField
                            label="Digite seu email"
                            id="email"
                            name="email"
                            type="email"
                        />
                        <TextField
                            label="Digite sua senha"
                            id="password"
                            name="password"
                            type="password"
                        />
                        <TextField
                            label="Digite seu apelido"
                            id="nickname"
                            name="nickname"
                            type="text"
                        />
                        <Button >Criar conta</Button>
                    </form>
                </section>
            </div>
        </main>
    );
}
