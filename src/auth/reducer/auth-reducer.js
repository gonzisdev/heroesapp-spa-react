import { types } from "../types"

export const initialState = {
    logged: false,
    user: ''
}

export const authReducer = (state = {}, action) => {
    if (action.type === types.login) {
        return {
            ...state,
            user: action.payload,
            logged: true
        }
    }
    if (action.type === types.logout) {
        return {
            initialState
        }
    }

    return state
}