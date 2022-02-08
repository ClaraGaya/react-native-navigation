import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { appTheme } from './src/appTheme/appTheme';
import { BottomTab } from './src/navigators/BottomTab';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer theme={isDarkMode ? DarkTheme : appTheme}>
      <BottomTab />
    </NavigationContainer>
  );
};


export default App;
