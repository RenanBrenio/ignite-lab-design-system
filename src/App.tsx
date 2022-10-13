import './styles/global.css'
import Logo from "./Logo";
import {Heading} from "./components/Heading";
import {Text} from "./components/Text";
import {Input} from "./components/Input";
import {Envelope, Lock} from "phosphor-react";
import {Checkbox} from "./components/Checkbox";
import {Button} from "./components/Button";

export function App() {

  return (
    <div className="w-screen min-h-screen py-12 bg-gray-900 flex flex-col items-center justify-center text-gray-100 gap-8">
        <header className="flex flex-col items-center">
            <Logo />
            <Heading size="lg" className="mt-2">
                Ignite Lab
            </Heading>
            <Text className="text-gray-500">
                Faça login e comece a usar
            </Text>
        </header>
        <form action="" className="flex flex-col items-stretch gap-5">
            <div className="flex flex-col gap-1">
                <label htmlFor="email">
                    <Text>Seu e-mail</Text>
                </label>
                <Input.Group>
                    <Input.Icon>
                        <Envelope />
                    </Input.Icon>
                    <Input.Input id="email"
                                 type="email"
                                 placeholder="email@example.com"
                                 required
                    />
                </Input.Group>
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="password">
                    <Text>Sua senha</Text>
                </label>
                <Input.Group>
                    <Input.Icon>
                        <Lock />
                    </Input.Icon>
                    <Input.Input id="password"
                                 type="password"
                                 placeholder="Digite sua senha"
                                 required
                    />
                </Input.Group>
            </div>

            <label className="flex items-center gap-2 cursor-pointer">
                <Checkbox></Checkbox>
                <Text size="sm">Lembrar-se de mim por 30 dias</Text>
            </label>

            <Button className="">
                Entrar na plataforma
            </Button>
        </form>

        <footer className="flex flex-col items-center gap-4">
            <Text size="sm" asChild>
                <a href="#" className="underline transition-colors text-gray-500 hover:text-gray-200">
                    Esqueci minha senha
                </a>
            </Text>
            <Text size="sm" className="text-gray-500">
                Não possui uma conta? 
                <a href="#" className="underline transition-colors hover:text-gray-200">
                    Crie uma agora
                </a>
            </Text>
        </footer>
    </div>
  )
}
