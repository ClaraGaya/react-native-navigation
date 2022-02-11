import { AuthState } from "./AuthContext";

export type AuthAction = 
| { type: 'LOGIN_REQUEST', payload: string } // credentials
| { type: 'LOGIN_SUCCESS', payload: string } // accessToken
| { type: 'LOGIN_ERROR', payload: string }  // error
| { type: 'LOGOUT_REQUEST', payload: string } // userId
| { type: 'LOGOUT_SUCCESS' } 
| { type: 'LOGOUT_ERROR', payload: string } // error

// a reducer is a function that recieves a state and returns a new state
export const AuthReducer = (prevState: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            // never mutate, return new state
            return {
                ...prevState,
                isLogged: true,
                userName: 'Clara',
                userId: '1234',
                accessToken: action.payload,
                error: undefined
            }
            break;
        case 'LOGIN_ERROR':
            // never mutate, return new state
            return {
                ...prevState,
                isLogged: true,
                userName: undefined,
                userId: undefined,
                accessToken: undefined,
                error: action.payload
            }
            break;
        case 'LOGOUT_SUCCESS':
            // never mutate, return new state
            return {
                ...prevState,
                isLogged: false,
                userName: undefined,
                userId: undefined,
                accessToken: undefined,
                error: undefined
            }
            break;
        case 'LOGOUT_ERROR':
            // never mutate, return new state
            return {
                ...prevState,
                isLogged: false,
                userName: undefined,
                userId: undefined,
                accessToken: undefined,
                error: action.payload
            }
            break;
        default:
            return prevState
            break;
    }
}