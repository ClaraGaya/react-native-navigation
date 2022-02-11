import { useReducer } from 'react';
// import Auth0 from 'react-native-auth0';
import BuildConfig from 'react-native-config';
import { authInitialState } from '../AuthContext';
import { AuthReducer } from '../AuthReducer';

const [authState, dispatch] = useReducer(AuthReducer, authInitialState);

// const auth0 = new Auth0({ 
//     domain: BuildConfig.AUTH0_DOMAIN, 
//     clientId: BuildConfig.AUTH0_CLIENT
// });

export const Auth0Login = async(creds: any) => {
    
    // dispatch({type: 'LOGIN_REQUEST', payload: creds});
    // auth0
    // .webAuth
    // .authorize({scope: 'openid profile email'})
    // .then(credentials =>
    //   // Successfully authenticated
    //   // Store the accessToken
    //   dispatch({type: 'LOGIN_SUCCESS', payload: credentials.accessToken})
    // )
    // .catch(error => {
    //   console.log(error);
    //   dispatch({type: 'LOGIN_ERROR', payload: error})
    // });
}


