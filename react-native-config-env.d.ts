declare module 'react-native-config' {
    const BuildConfig: {
        readonly API_URL_BASE: string;
        readonly API_ID: string;
        readonly API_KEY: string;
        readonly IOS_BUNDLE_IDENTIFIER: string;
        readonly ANDROID_APP_PACKAGE_NAME: string;
        readonly AUTH0_DOMAIN: string;
        readonly AUTH0_CLIENT_ID: string;
        readonly AUTHO_SCOPE: string;
        readonly AUTH0_AUDIENCE: string;
        readonly IOS_LOGIN_CALLBACK: string;
        readonly ANDROID_LOGIN_CALLBACK: string;
    }

    export default BuildConfig
}