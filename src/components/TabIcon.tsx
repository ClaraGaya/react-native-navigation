import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { appTheme } from '../appTheme/appTheme';


interface Props {
    route: string;
    size?: number;
    color?: string;
}
export const TabIcon = ({route, size=30, color=appTheme.colors.primary}: Props) => {
  let name: string = 'home';
  switch(route) {
    case 'Categories':
      name = 'search';
      break;
    case 'AddEdit':
      name = 'edit';
      break;
    case 'Saved':
      name = 'bookmark';
      break;
    case 'Account':
      name = 'person';
      break;
    default:
      name = 'home';
  }
  
  return <Icon name={name} size={size} color={color} />;
};
