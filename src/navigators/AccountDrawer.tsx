import { createDrawerNavigator } from '@react-navigation/drawer';
import { CommonActions } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useWindowDimensions } from 'react-native';
import { ContactPrefs } from '../screens/Account/ContactPrefs';
import { Details } from '../screens/Account/Details';
import { Notifications } from '../screens/Account/Notifications';
import { DrawerNavigationOptions } from '@react-navigation/drawer/lib/typescript/src/types';
import { BackButton } from '../components/BackButton';

const Drawer = createDrawerNavigator();


export const AccountDrawer = ({navigation}: any) => {
  const {width} = useWindowDimensions();
  // Reset state to 'open' when user clicks on the account tab
  const unsubscribe = navigation.addListener('focus', () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          {name: 'My Details'},
          {name: 'Notifications'},
          {name: 'Contact Preferences'},
        ]
      })
    )
  })

  useEffect(() => {
    unsubscribe();
  }, [navigation])

  const screenOptions: DrawerNavigationOptions = {
    drawerPosition: 'right',
    drawerType: width > 768 ? 'permanent' : 'front',
    drawerStyle: width > 768 ? {width: '40%'} : {width: '100%'},
    overlayColor: 'transparent',
    headerLeft: () =>  <BackButton {...navigation}/>,
    headerTitle: 'Account',
    sceneContainerStyle: {
      backgroundColor: 'white'
    }
  }

  return (
    <Drawer.Navigator
      defaultStatus="open"
      screenOptions={screenOptions}
    >
      <Drawer.Screen name="My Details" component={Details} />
      <Drawer.Screen name="Notifications" component={Notifications} />
      <Drawer.Screen name="Contact Preferences" component={ContactPrefs} />
    </Drawer.Navigator>
  );
};

