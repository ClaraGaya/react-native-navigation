import React, { createContext } from "react"

// define which info 
export interface AuthState {
    isLogged: boolean;
    userName?: string;
    userId?: string;
}

export const authInitialState: AuthState = {
    isLogged: false
}

// interface of what the context exposes
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);

// State provider component
export const AuthProvider = ({children}: any) => {
  return (
    <AuthContext.Provider value={{
        authState: authInitialState,
        signIn: () => {}
    }}>
        {children}
    </AuthContext.Provider>
  );
};


