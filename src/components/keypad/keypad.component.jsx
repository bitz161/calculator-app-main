import { useState, useContext } from "react";
import { KeypadContainer, KeypadButton } from "./keypad.styles.jsx";
import { ComputationContext } from "../../context/computation.context.jsx";

const Keypad = ({ themeUsed, stylesList }) => {
  const {
    ListOfFirstNumber,
    setOperator,
    computeTotalNumber,
    resetComputation,
    deleteNumber,
  } = useContext(ComputationContext);

  const handleOperator = (ops) => {
    setOperator(ops);
  };

  const handleTotal = () => {
    computeTotalNumber();
  };

  const handleReset = () => {
    resetComputation();
  };

  const handleDelete = () => {
    deleteNumber();
  };

  return (
    <KeypadContainer themeUsed={themeUsed}>
      {/* {keysArray.map((data, idx) => (
        <KeypadButton key={idx}>{data}</KeypadButton>
      ))} */}

      <KeypadButton
        onClick={() => ListOfFirstNumber("7")}
        themeUsed={themeUsed}
      >
        7
      </KeypadButton>
      <KeypadButton
        themeUsed={themeUsed}
        onClick={() => ListOfFirstNumber("8")}
      >
        8
      </KeypadButton>
      <KeypadButton
        themeUsed={themeUsed}
        onClick={() => ListOfFirstNumber("9")}
      >
        9
      </KeypadButton>
      <KeypadButton themeUsed={themeUsed} onClick={handleDelete}>
        DEL
      </KeypadButton>
      <KeypadButton
        themeUsed={themeUsed}
        onClick={() => ListOfFirstNumber("4")}
      >
        4
      </KeypadButton>
      <KeypadButton
        themeUsed={themeUsed}
        onClick={() => ListOfFirstNumber("5")}
      >
        5
      </KeypadButton>
      <KeypadButton
        themeUsed={themeUsed}
        onClick={() => ListOfFirstNumber("6")}
      >
        6
      </KeypadButton>
      <KeypadButton themeUsed={themeUsed} onClick={() => handleOperator("+")}>
        +
      </KeypadButton>
      <KeypadButton
        themeUsed={themeUsed}
        onClick={() => ListOfFirstNumber("1")}
      >
        1
      </KeypadButton>
      <KeypadButton
        themeUsed={themeUsed}
        onClick={() => ListOfFirstNumber("2")}
      >
        2
      </KeypadButton>
      <KeypadButton
        themeUsed={themeUsed}
        onClick={() => ListOfFirstNumber("3")}
      >
        3
      </KeypadButton>
      <KeypadButton themeUsed={themeUsed} onClick={() => handleOperator("-")}>
        -
      </KeypadButton>
      <KeypadButton
        themeUsed={themeUsed}
        onClick={() => ListOfFirstNumber(".")}
      >
        .
      </KeypadButton>
      <KeypadButton
        themeUsed={themeUsed}
        onClick={() => ListOfFirstNumber("0")}
      >
        0
      </KeypadButton>
      <KeypadButton themeUsed={themeUsed} onClick={() => handleOperator("/")}>
        /
      </KeypadButton>
      <KeypadButton themeUsed={themeUsed} onClick={() => handleOperator("*")}>
        x
      </KeypadButton>
      <KeypadButton themeUsed={themeUsed} onClick={handleReset}>
        RESET
      </KeypadButton>
      <KeypadButton
        themeUsed={themeUsed}
        stylesList={stylesList.themeThree}
        onClick={handleTotal}
      >
        =
      </KeypadButton>
    </KeypadContainer>
  );
};

export default Keypad;
