import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Add } from '../screens/Add';
import { Edit } from '../screens/Edit';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Tab = createMaterialTopTabNavigator();

export const AddTopTab = () => {
    const insets = useSafeAreaInsets();
    return (
        <Tab.Navigator style={{marginTop: insets.top}}>
          <Tab.Screen name="Add" component={Add} />
          <Tab.Screen name="Edit" component={Edit} />
        </Tab.Navigator>
    );
};
