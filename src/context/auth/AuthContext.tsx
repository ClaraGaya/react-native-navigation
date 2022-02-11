import React, { createContext, useReducer } from "react"
import { AuthReducer } from "./AuthReducer";
import Auth0, { ClearSessionParams } from 'react-native-auth0';
import BuildConfig from 'react-native-config';

// Initialize the Auth0 library
const auth0 = new Auth0({ 
    domain: BuildConfig.AUTH0_DOMAIN, 
    clientId: BuildConfig.AUTH0_CLIENT_ID
});

// defines the state of my app
export interface AuthState {
    isLogged: boolean;
    userName?: string;
    userId?: string;
    accessToken?: string;
    error?: string;
}

// initial state
export const authInitialState: AuthState = {
    isLogged: false,
}

// Interface of what the provider will expose
export interface AuthContextProps {
    authState: AuthState;
    onLogin: (credentials:any) => void;
    onLogout: (userId:string) => void;
}

// Create context
export const AuthContext = createContext({} as AuthContextProps);

// State provider component
export const AuthProvider = ({children}: any) => {
    const [authState, dispatch] = useReducer(AuthReducer, authInitialState);


    const onLogin = (creds: any) => {
        auth0
        .webAuth
        // .authorize({scope: 'openid profile email'})
        .authorize({
            // scope: BuildConfig.AUTHO_SCOPE,
            scope: 'openid profile email',
            // audience: `https://${BuildConfig.AUTH0_DOMAIN}/userinfo`,
            // device: DeviceInfo.getUniqueID(),
            // prompt: "login" 
        })
        .then(credentials => {
            // Successfully authenticated
            // Store the accessToken
            console.log('LOGIN_SUCCESS', credentials);
            dispatch({type: 'LOGIN_SUCCESS', payload: credentials.accessToken})
        })
        .catch(error => {
          console.log('LOGIN_ERROR', error);
          dispatch({type: 'LOGIN_ERROR', payload: error})
        });
    }

    const onLogout = () => {
        auth0.webAuth
            .clearSession({} as ClearSessionParams)
            .then(success => {
                console.log('Logged out!');
                dispatch({type: 'LOGOUT_SUCCESS'})
            })
            .catch(error => {
                console.log('Log out cancelled', error);
                dispatch({type: 'LOGOUT_ERROR', payload: error})
            });
    };

    return (
        <AuthContext.Provider value={{
            authState,
            onLogin,
            onLogout
        }}>
            {children}
        </AuthContext.Provider>
    );
};


