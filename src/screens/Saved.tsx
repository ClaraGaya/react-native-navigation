import React from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const Saved = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{marginTop: insets.top}}>
        <Text>Saved</Text>
    </View>
  );
};
