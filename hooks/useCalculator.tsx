import { useEffect, useRef, useState } from "react";

enum Operator {
    Add = '+',
    Subtract = '-',
    Multiply = '*',
    Divide = '/',
}

export const useCalculator = () => {

    const [formula, setFormula] = useState("0");

    const [number, setNumber] = useState("0");

    const [prevNumber, setPrevNumber] = useState("0");


    const lastOperation = useRef<Operator | undefined>(undefined);

    useEffect(() => {

        setFormula(number);

    }, [number]);

    const buildNumber = (numberString: string) => {

        if (number.includes('.') && numberString === '.') return;

        if (number.startsWith('0') || number.startsWith('-0')) {
            if (numberString === '.') {
                return setNumber(number + numberString);
            }

            // Evaluar si es otro cero y no hay punto
            if (numberString === '0' && number.includes('.')) {
                return setNumber(number + numberString);
            }

            // Evaluar si es diferente de cero, no hay punto y es el primer número
            if (numberString !== '0' && !number.includes('.')) {
                return setNumber(numberString);
            }

            // Evitar el 0000000.00
            if (numberString === '0' && !number.includes('.')) {
                return;
            }
        }

        setNumber(number + numberString);
    }

    const clean = () => {
        setNumber("0");
        setPrevNumber("0");
        setFormula("0");
        lastOperation.current = undefined;
    }

    const toggleSign = () => {

        if (number.startsWith('-')) {
            setNumber(number.substring(1));
        } else {
            setNumber('-' + number);
        }
    }


    return {
        formula,
        number,
        prevNumber,

        clean,
        buildNumber,
        toggleSign
    };
}