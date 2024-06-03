import { useNavigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

export const LoginPage = () => {

  const { login } = useAuth()

  const navigate = useNavigate()

  const handleLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '/'
    login('Gonzalo Vasco')
    navigate(lastPath,{
      replace: true
    })
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button 
        className="btn btn-primary"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  )
}
