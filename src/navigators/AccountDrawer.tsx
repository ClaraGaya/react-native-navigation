import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { CommonActions } from '@react-navigation/native';
import React, { useContext, useEffect } from 'react';
import { useWindowDimensions } from 'react-native';
import { ContactPrefs } from '../screens/Account/ContactPrefs';
import { Details } from '../screens/Account/Details';
import { Notifications } from '../screens/Account/Notifications';
import { DrawerContentComponentProps, DrawerNavigationOptions } from '@react-navigation/drawer/lib/typescript/src/types';
import { BackButton } from '../components/BackButton';
import { AuthContext } from '../context/auth/AuthContext';

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
      drawerContent={props => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="My Details" component={Details} />
      <Drawer.Screen name="Notifications" component={Notifications} />
      <Drawer.Screen name="Contact Preferences" component={ContactPrefs} />
    </Drawer.Navigator>
  );
};

const DrawerContent = (props: DrawerContentComponentProps) => {
  const { authState: {userId, isLogged}, logIn, logOut } = useContext(AuthContext);
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {!isLogged ? 
      (<DrawerItem label="Log Out" onPress={logIn} />)
      :(<DrawerItem label="Log In" onPress={() => logOut(userId as string)} />)
      }
    </DrawerContentScrollView>
  )
}

