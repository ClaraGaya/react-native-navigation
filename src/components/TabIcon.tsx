import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
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
    case 'Add':
      name = 'pencil';
      break;
    case 'Saved':
      name = 'bookmark';
    case 'Account':
      name = 'user';
      break;
    default:
      name = 'home';
  }
  
  return <Icon name={name} size={size} color={color} />;
};
