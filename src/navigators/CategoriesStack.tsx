import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Categories } from '../screens/Categories';
import { Category } from '../screens/Category';
import { Item } from '../screens/Item';

const Stack = createNativeStackNavigator();


export const CategoriesStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="Item" component={Item} />
    </Stack.Navigator>
  );
};
