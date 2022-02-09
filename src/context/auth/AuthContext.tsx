import React, { createContext, useReducer } from "react"
import { AuthReducer } from "./AuthReducer";

// defines the state of my app
export interface AuthState {
    isLogged: boolean;
    userName?: string;
    userId?: string;
}

// initial state
export const authInitialState: AuthState = {
    isLogged: false,
}

// Interface of what the provider will expose
export interface AuthContextProps {
    authState: AuthState;
    logIn: () => void;
    logOut: (userId:string) => void;
}

// Create context
export const AuthContext = createContext({} as AuthContextProps);

// State provider component
export const AuthProvider = ({children}: any) => {
    const [authState, dispatch] = useReducer(AuthReducer, authInitialState);

    const logIn = () => {
        dispatch({type: 'logIn'})
    }
    const logOut = (userId: string) => {
        dispatch({type: 'logOut', payload: userId})
    }

    return (
        <AuthContext.Provider value={{
            authState,
            logIn,
            logOut
        }}>
            {children}
        </AuthContext.Provider>
    );
};


