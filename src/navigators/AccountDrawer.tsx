import { createDrawerNavigator } from '@react-navigation/drawer';
import { CommonActions } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useWindowDimensions } from 'react-native';
import { ContactPrefs } from '../screens/Account/ContactPrefs';
import { Details } from '../screens/Account/Details';
import { Notifications } from '../screens/Account/Notifications';

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

  return (
    <Drawer.Navigator
      defaultStatus="open"
      screenOptions={{
        drawerPosition: 'right',
        drawerType: width > 768 ? 'permanent' : 'front',
        drawerStyle: width > 768 ? {width: '40%'} : {width: '100%'},
        overlayColor: 'transparent'
      }}
      // drawerContent={props => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="My Details" component={Details} />
      <Drawer.Screen name="Notifications" component={Notifications} />
      <Drawer.Screen name="Contact Preferences" component={ContactPrefs} />
    </Drawer.Navigator>
  );
};

