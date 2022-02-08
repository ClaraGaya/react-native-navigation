import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AuthContext } from '../../context/auth/AuthContext';

export const Details = () => {
    const insets = useSafeAreaInsets();
    const {authState} = useContext(AuthContext);
    return (
        <View style={{marginTop: insets.top}}>
            <Text>My Details</Text>
            <Text>{JSON.stringify(authState, null, 4)}</Text>
        </View>
    );
};
