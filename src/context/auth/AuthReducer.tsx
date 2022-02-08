import { AuthState } from "./AuthContext";

type AuthAction = { type: 'signIn'}

// a reducer is a function that recieves a state and returns a new state
export const AuthReducer = (prevState: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'signIn':
            return {
                ...prevState,
                isLogged: true,
                userName: 'Clara'
            }
            break;
        default:
            return prevState
            break;
    }
}