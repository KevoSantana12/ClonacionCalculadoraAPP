import CalculatorButton from "@/components/CalculatorButton";
import ThemeText from "@/components/ThemeText";
import { Colors } from "@/constants/Colors";
import { useCalculator } from "@/hooks/useCalculator";

import { globalStyles } from "@/styles/global-styles";
import { View } from "react-native";


const index = () => {

    const {
        formula,
        buildNumber,
        clean,
        toggleSign,
        prevNumber,
        deleteLastEntry,
        divideOperation,
        addOperation,
        subtractOperation,
        multiplyOperation,
        calculateSubResult,
        calculateResult,

    } = useCalculator();

    return (

        // // Resultados

        <View style={globalStyles.calculatorContainer}>
            <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>

                <ThemeText variant='h1'>{formula}</ThemeText>

                {formula === prevNumber ? null : (
                    <ThemeText variant="h2">{prevNumber}</ThemeText>
                )}

            </View>

            {/* // Botones
        // Filas de botones */}

            <View style={globalStyles.row}>

                <CalculatorButton
                    label="C"
                    isTextBlack
                    onPress={
                        () => {
                            clean()
                        }}
                    color={Colors.lightGray}>

                </CalculatorButton>

                <CalculatorButton
                    label="+/-"
                    isTextBlack
                    onPress={() => {
                        toggleSign()
                    }}

                    color={Colors.lightGray}>

                </CalculatorButton>

                <CalculatorButton
                    label="del"
                    isTextBlack
                    onPress={() => {
                        deleteLastEntry()
                    }}
                    color={Colors.lightGray}>

                </CalculatorButton>

                <CalculatorButton
                    label="÷"
                    onPress={() => {
                        divideOperation()
                    }}
                    color={Colors.orange}
                ></CalculatorButton>
            </View>




            <View style={globalStyles.row}>

                <CalculatorButton
                    label="7"
                    onPress={
                        () => {
                            buildNumber("7")
                        }}
                >

                </CalculatorButton>

                <CalculatorButton
                    label="8"
                    onPress={() => {
                        buildNumber("8")
                    }}>

                </CalculatorButton>

                <CalculatorButton
                    label="9"
                    onPress={() => {
                        buildNumber("9")
                    }}
                >

                </CalculatorButton>

                <CalculatorButton
                    label="x"
                    onPress={() => {
                        multiplyOperation()
                    }}
                    color={Colors.orange}
                ></CalculatorButton>
            </View>

            <View style={globalStyles.row}>

                <CalculatorButton
                    label="4"

                    onPress={
                        () => {
                            buildNumber("4")
                        }}>

                </CalculatorButton>

                <CalculatorButton
                    label="5"
                    onPress={() => {
                        buildNumber("5")
                    }}>

                </CalculatorButton>

                <CalculatorButton
                    label="6"
                    onPress={() => {
                        buildNumber("6")
                    }}>

                </CalculatorButton>

                <CalculatorButton
                    label="-"
                    onPress={() => {
                        subtractOperation()
                    }}
                    color={Colors.orange}
                ></CalculatorButton>
            </View>



            <View style={globalStyles.row}>

                <CalculatorButton
                    label="1"

                    onPress={
                        () => {
                            buildNumber("1")
                        }}
                >

                </CalculatorButton>

                <CalculatorButton
                    label="2"
                    onPress={() => {
                        buildNumber("2")
                    }}>

                </CalculatorButton>

                <CalculatorButton
                    label="3"
                    onPress={() => {
                        buildNumber("3")
                    }}
                >

                </CalculatorButton>

                <CalculatorButton
                    label="+"
                    onPress={() => {
                        addOperation()
                    }}
                    color={Colors.orange}
                ></CalculatorButton>
            </View>




            <View style={globalStyles.row}>

                <CalculatorButton
                    label="0"

                    onPress={
                        () => {
                            buildNumber("0")
                        }}

                    doubleSized
                >

                </CalculatorButton>

                <CalculatorButton
                    label="."
                    onPress={() => {
                        buildNumber(".")
                    }}>

                </CalculatorButton>

                <CalculatorButton
                    label="="
                    onPress={() => {
                        calculateResult()
                    }}
                    color={Colors.orange}
                ></CalculatorButton>
            </View>
        </View>
    );
};

export default index;