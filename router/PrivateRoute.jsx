import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "../src/auth/hooks/useAuth"

export const PrivateRoute = ({children}) => {

    const { logged } = useAuth()
    const { pathname, search} = useLocation()

    const lastPath = pathname + search
    localStorage.setItem('lastPath', lastPath)

  return (logged) ? children : <Navigate to='/marvel' />
}
