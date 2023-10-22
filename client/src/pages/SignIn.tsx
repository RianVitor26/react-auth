import { Link } from "react-router-dom"
import { FormEventHandler, useContext, useState } from "react"
import { AuthContext } from "../contexts/AuthContext"

export const SignIn = () => {

  const { login } = useContext(AuthContext)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event): void => {
    event.preventDefault();
    login(email, password)
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <span className="text-center text-2xl text-rose-500 font-black">SignIn</span>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

          <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input
                  onChange={(event) => setEmail(event.target.value)}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Senha
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-rose-500 hover:text-rose-500">
                    Esqueçeu a senha?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  onChange={(event) => setPassword(event.target.value)}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-rose-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-rose-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500"
              >
                Entrar
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Não possui uma conta?{' '}
            <Link to="/signup" className="font-semibold leading-6 text-rose-500 hover:text-rose-500">
              Cadastre-se aqui
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
