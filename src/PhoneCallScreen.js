import React from 'react';
import { View, Text } from 'react-native';

const PhoneCallScreen = ({ callData }) => {
    return (
        <View>
            <Text>Phone Call Received!</Text>
            <Text>Caller: {callData.caller}</Text>
            <Text>Number: {callData.number}</Text>
        </View>
    );
};

export default PhoneCallScreen;
