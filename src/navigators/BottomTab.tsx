import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import React from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { appStyles } from '../appTheme/appTheme';
import { TabIcon } from '../components/TabIcon';
import { Categories } from '../screens/Categories';
import { Home } from '../screens/Home';
import { Saved } from '../screens/Saved';
import { AccountDrawer } from './AccountDrawer';
import { AddTopTab } from './AddTopTab';

const Tab = createBottomTabNavigator();

const tabScreenOptions = ({
    route
}: {
    route: RouteProp<ParamListBase, string>;
}): BottomTabNavigationOptions => ({
    headerShown: false,
    tabBarShowLabel: false,
    tabBarActiveTintColor: Colors.primary,
    tabBarInactiveTintColor: Colors.gray,
    headerStyle: {
        elevation: 0,
        shadowColor: 'transparent',
    },
    tabBarIcon: ({color}) => <TabIcon route={route.name} />
});

export const BottomTab = () => {
  return (
    <Tab.Navigator sceneContainerStyle={appStyles.bgScreen} screenOptions={tabScreenOptions}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Categories" component={Categories} />
    <Tab.Screen name="AddEdit" component={AddTopTab} />
    <Tab.Screen name="Saved" component={Saved} />
    <Tab.Screen name="Account" component={AccountDrawer} />
    </Tab.Navigator>
  );
};
