import { DefaultTheme } from "@react-navigation/native";

const appTheme = {
    ...DefaultTheme,
    dark: false,
    colors: {
        primary: 'rgb(255,45,85)',
        background: 'rgb(242,242,242)',
        card: 'rgb(255,255,255)',
        text: 'rgb(28,28,30)',
        border: 'rgb(199,199,204)',
        notification: 'rgb(255,69,58)',
    }
}

const appStyles = {
    bgScreen: {
        backgroundColor: appTheme.colors.background
    },
    screen: {
        backgroundColor: appTheme.colors.background,
        flex: 1,
        padding: 14,
    }
}

export {
    appTheme,
    appStyles
}