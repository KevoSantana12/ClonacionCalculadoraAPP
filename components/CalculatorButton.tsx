import { Colors } from '@/constants/Colors';
import { globalStyles } from '@/styles/global-styles';
import * as Haptics from 'expo-haptics';
import React from 'react';
import { Pressable, Text } from 'react-native';


interface Props {
    label: string,
    color?: string,
    doubleSized?: boolean,
    isTextBlack?: boolean,
    onPress: () => void
}

const CalculatorButton = ({
    label,
    color = Colors.darkGray,
    isTextBlack = false,
    doubleSized = false,


    onPress }: Props) => {


    return (
        <Pressable
            style={({ pressed }) => ({
                ...globalStyles.button,
                backgroundColor: color,
                opacity: pressed ? 0.7 : 1,
                width: doubleSized ? 180 : 80,
            })}
            onPress={() => {
                onPress();
                Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
            }}
        >
            <Text style={{
                ...globalStyles.buttonText,
                color: isTextBlack ? 'black' : 'white',
            }}>
                {label}
            </Text>
        </Pressable>
    )
}

export default CalculatorButton