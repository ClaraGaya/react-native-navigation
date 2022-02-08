import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { ContactPrefs } from '../screens/Account/ContactPrefs';
import { Details } from '../screens/Account/Details';
import { Notifications } from '../screens/Account/Notifications';

const Drawer = createDrawerNavigator();

export const AccountDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Details" component={Details} />
      <Drawer.Screen name="Notifications" component={Notifications} />
      <Drawer.Screen name="ContactPrefs" component={ContactPrefs} />
    </Drawer.Navigator>
  );
};
