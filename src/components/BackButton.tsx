import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';
import { DrawerActions } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const BackButton = (navigation: DrawerNavigationHelpers) => {
    console.log('props', navigation)
  return (
    <TouchableOpacity  onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <Icon name="arrow-back" size={24} color="black" />
    </TouchableOpacity>
  );
};
