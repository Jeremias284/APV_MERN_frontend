
import { Outlet } from "react-router-dom"
const AuthLayout = () => {
  return (
    <>
        <h1>Administrador de Pacientes de Veterinarios</h1>
        <main className="container mx-auto md:grid md:grid-cols-2 mt-12 gap-10 p-5 items-center">
        <Outlet/>
        </main>
    </>
  )
}

export default AuthLayout