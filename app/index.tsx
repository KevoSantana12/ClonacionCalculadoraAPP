import CalculatorButton from "@/components/CalculatorButton";
import ThemeText from "@/components/ThemeText";

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
                <CalculatorButton label="C"  ></CalculatorButton>
                <CalculatorButton label="+/-"  ></CalculatorButton>
                <CalculatorButton label="del"  ></CalculatorButton>
                <CalculatorButton label="÷"  ></CalculatorButton>
            </View>


        </View>
    );
};

export default index;