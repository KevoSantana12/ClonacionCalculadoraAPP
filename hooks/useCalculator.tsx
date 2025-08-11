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
        if (lastOperation.current) {
            const firstFormulaPart = formula.split(' ').at(0);
            setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`);
        } else {
            setFormula(number);
        }
    }, [number]);

    useEffect(() => {
        const subResult = calculateSubResult();
        setPrevNumber(`${subResult}`);
    }, [formula]);


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

    const deleteLastEntry = () => {

        if (number.length <= 1 || number.includes('-') && number.length === 2) {
            setNumber("0");
        } else {
            setNumber(number.slice(0, -1));
        }

    }

    const setLastNumber = () => {

        if (number.endsWith('.')) {
            setNumber(number.slice(0, -1));
        }

        setPrevNumber(number);
        setNumber("0");
    }

    const divideOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.Divide;
    }

    const multiplyOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.Multiply;
    }

    const addOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.Add;
    }

    const subtractOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.Subtract;
    }


    const calculateResult = () => {
        const result = calculateSubResult();
        setFormula(`${result}`);

        lastOperation.current = undefined;
        setPrevNumber('0');
    };

    const calculateSubResult = () => {
        const [firstValue, operation, secondValue] = formula.split(' ');

        const num1 = Number(firstValue);
        const num2 = Number(secondValue); // NaN

        if (isNaN(num2)) return num1;

        switch (operation) {
            case Operator.Add:
                return num1 + num2;

            case Operator.Subtract:
                return num1 - num2;

            case Operator.Multiply:
                return num1 * num2;

            case Operator.Divide:
                return num1 / num2;

            default:
                throw new Error(`Operation ${operation} not implemented`);
        }
    };


    return {
        formula,
        number,
        prevNumber,

        clean,
        buildNumber,
        toggleSign,
        deleteLastEntry,
        divideOperation,
        addOperation,
        multiplyOperation,
        subtractOperation,
        calculateSubResult,
        calculateResult,
    };
}