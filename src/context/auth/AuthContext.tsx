import React, { createContext, useReducer } from "react"

// defines the state of my app
export interface AuthState {
    isLogged: boolean;
    userName?: string;
    userId?: string;
}

// initial state
export const authInitialState: AuthState = {
    isLogged: false
}

// Interface of what the provider will expose
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
}

// Create context
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


