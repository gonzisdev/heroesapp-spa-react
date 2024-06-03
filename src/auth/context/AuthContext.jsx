import { createContext, useReducer } from "react"
import { authReducer } from "../reducer/auth-reducer"
import { initialState } from "../reducer/auth-reducer"
import { types } from "../types"

export const AuthContext = createContext()


export const AuthProvider = ({children}) => {

    const init = () => {
        const user = JSON.parse(localStorage.getItem('user'))
        return{
            logged: !!user,
            user
        }
    }

    const [state, dispatch] = useReducer(authReducer, initialState, init)

    const login = (name = '') => {
        const user = {id: 'ABC', name}
        dispatch({
            type: types.login,
            payload: user
        })
        localStorage.setItem('user', JSON.stringify(user))
    }

    const logout = () => {
        dispatch({
            type: types.logout
        })
        localStorage.removeItem('user')
    }

    return (
        <AuthContext.Provider value={{
            ...state,
            login,
            logout
        }}>   
            {children}      
        </AuthContext.Provider> 
    )
}
