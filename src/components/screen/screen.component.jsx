import { ScreenContainer } from "./screen.styles.jsx";
import { useContext } from "react";
import { ComputationContext } from "../../context/computation.context";

const ScreenCom = ({ themeUsed }) => {
  const { computation, firstNumbers, secondNumbers, operator } =
    useContext(ComputationContext);
  return (
    <ScreenContainer themeUsed={themeUsed}>
      <p>
        {computation === "0"
          ? firstNumbers >= "0" &&
            `${firstNumbers.toLocaleString()} ${
              operator !== "" ? operator : ""
            } ${secondNumbers !== "0" ? secondNumbers.toLocaleString() : ""}`
          : computation.toLocaleString()}
      </p>
    </ScreenContainer>
  );
};

export default ScreenCom;
