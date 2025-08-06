import { Colors } from '@/constants/Colors'
import { globalStyles } from '@/styles/global-styles'
import React from 'react'
import { Pressable, Text } from 'react-native'


interface Props {
    label: string,
    color?: string,
    isTextBlack?: boolean,
    onPress: () => void
}

const CalculatorButton = ({
    label,
    color = Colors.darkGray,
    isTextBlack = false,
    onPress }: Props) => {
    return (
        <Pressable
            style={globalStyles.button}
            onPress={onPress}
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