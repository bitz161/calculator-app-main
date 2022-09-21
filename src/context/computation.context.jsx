import { createContext, useState } from "react";

export const ComputationContext = createContext({
  computation: "0",
  firstNumbers: "0",
  secondNumbers: "0",
  operator: "",
  ListOfFirstNumber: () => {},
  computeTotalNumber: () => {},
  resetComputation: () => {},
  deleteNumber: () => {},
});

export const ComputationProvider = ({ children }) => {
  const [computation, setComputation] = useState("0");
  const [firstNumbers, setFirstNumbers] = useState("0");
  const [secondNumbers, setSecondNumbers] = useState("0");
  const [operator, setOperator] = useState("");

  const ListOfFirstNumber = (data) => {
    //if operator is null firstnumber else if operator operator is not equal to null secondnumber
    if (operator === "") {
      if (firstNumbers === "0") {
        setFirstNumbers(data);
      } else if (firstNumbers !== "0") {
        setFirstNumbers(firstNumbers.toString() + data.toString());
      }
    } else if (operator !== "") {
      if (secondNumbers === "0") {
        setSecondNumbers(data);
      } else if (secondNumbers !== "0") {
        setSecondNumbers(secondNumbers.toString() + data.toString());
      }
    }
  };

  const computeTotalNumber = () => {
    if (operator !== "") {
      setComputation(eval(`${firstNumbers} ${operator} ${secondNumbers}`));
    }
  };

  const resetComputation = () => {
    setComputation("0");
    setFirstNumbers("0");
    setSecondNumbers("0");
    setOperator("");
  };

  const deleteNumber = () => {
    if (operator === "") {
      if (firstNumbers.length === 1) {
        setFirstNumbers("0");
      } else if (firstNumbers.length > 1) {
        setFirstNumbers(firstNumbers.slice(0, firstNumbers.length - 1));
      }
    } else if (operator !== "") {
      if (secondNumbers <= 0 && operator !== "") {
        setOperator("");
      } else {
        if (secondNumbers.length === 1) {
          setSecondNumbers("0");
        } else if (secondNumbers.length > 1) {
          setSecondNumbers(secondNumbers.slice(0, secondNumbers.length - 1));
        }
      }
    }
  };

  const value = {
    computeTotalNumber,
    computation,
    setComputation,
    firstNumbers,
    setFirstNumbers,
    secondNumbers,
    setSecondNumbers,
    operator,
    setOperator,
    ListOfFirstNumber,
    resetComputation,
    deleteNumber,
  };
  return (
    <ComputationContext.Provider value={value}>
      {children}
    </ComputationContext.Provider>
  );
};
