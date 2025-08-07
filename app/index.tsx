import CalculatorButton from "@/components/CalculatorButton";
import ThemeText from "@/components/ThemeText";
import { Colors } from "@/constants/Colors";

import { globalStyles } from "@/styles/global-styles";
import { View } from "react-native";


const index = () => {
    return (

        // // Resultados

        <View style={globalStyles.calculatorContainer}>
            <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
                <ThemeText variant='h1'>50 x 50</ThemeText>
                <ThemeText variant='h2'>250</ThemeText>
            </View>

            {/* // Botones
        // Filas de botones */}

            <View style={globalStyles.row}>

                <CalculatorButton
                    label="C"
                    isTextBlack
                    onPress={
                        () => {
                            console.log("C")
                        }}
                    color={Colors.lightGray}>

                </CalculatorButton>

                <CalculatorButton
                    label="+/-"
                    isTextBlack
                    onPress={() => {
                        console.log("+/-")
                    }}

                    color={Colors.lightGray}>

                </CalculatorButton>

                <CalculatorButton
                    label="del"
                    isTextBlack
                    onPress={() => {
                        console.log("del")
                    }}
                    color={Colors.lightGray}>

                </CalculatorButton>

                <CalculatorButton
                    label="÷"
                    onPress={() => {
                        console.log("÷")
                    }}
                    color={Colors.orange}
                ></CalculatorButton>
            </View>




            <View style={globalStyles.row}>

                <CalculatorButton
                    label="7"
                    onPress={
                        () => {
                            console.log("7")
                        }}
                >

                </CalculatorButton>

                <CalculatorButton
                    label="8"
                    onPress={() => {
                        console.log("8")
                    }}>

                </CalculatorButton>

                <CalculatorButton
                    label="9"
                    onPress={() => {
                        console.log("9")
                    }}
                >

                </CalculatorButton>

                <CalculatorButton
                    label="x"
                    onPress={() => {
                        console.log("x")
                    }}
                    color={Colors.orange}
                ></CalculatorButton>
            </View>

            <View style={globalStyles.row}>

                <CalculatorButton
                    label="4"

                    onPress={
                        () => {
                            console.log("4")
                        }}>

                </CalculatorButton>

                <CalculatorButton
                    label="5"
                    onPress={() => {
                        console.log("5")
                    }}>

                </CalculatorButton>

                <CalculatorButton
                    label="6"
                    onPress={() => {
                        console.log("6")
                    }}>

                </CalculatorButton>

                <CalculatorButton
                    label="-"
                    onPress={() => {
                        console.log("-")
                    }}
                    color={Colors.orange}
                ></CalculatorButton>
            </View>



            <View style={globalStyles.row}>

                <CalculatorButton
                    label="1"

                    onPress={
                        () => {
                            console.log("1")
                        }}
                >

                </CalculatorButton>

                <CalculatorButton
                    label="2"
                    onPress={() => {
                        console.log("2")
                    }}>

                </CalculatorButton>

                <CalculatorButton
                    label="3"
                    onPress={() => {
                        console.log("3")
                    }}
                >

                </CalculatorButton>

                <CalculatorButton
                    label="+"
                    onPress={() => {
                        console.log("+")
                    }}
                    color={Colors.orange}
                ></CalculatorButton>
            </View>




            <View style={globalStyles.row}>

                <CalculatorButton
                    label="0"

                    onPress={
                        () => {
                            console.log("0")
                        }}

                    doubleSized
                >

                </CalculatorButton>

                <CalculatorButton
                    label="."
                    onPress={() => {
                        console.log(".")
                    }}>

                </CalculatorButton>

                <CalculatorButton
                    label="="
                    onPress={() => {
                        console.log("=")
                    }}
                    color={Colors.orange}
                ></CalculatorButton>
            </View>
        </View>
    );
};

export default index;