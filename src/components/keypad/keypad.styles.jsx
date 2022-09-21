import styled from "styled-components";

export const KeypadContainer = styled.div`
  background-color: ${({ themeUsed }) => themeUsed.keypadBG};
  height: max-content;
  display: grid;
  grid-template-columns: repeat(4, 80px);
  grid-template-rows: repeat(5, 50px);
  gap: 20px;
  padding: 2rem 1rem;
  border-radius: 10px;

  @media only screen and (max-width: 500px) {
    & {
      grid-template-columns: repeat(4, 60px);
      grid-template-rows: repeat(5, 50px);
      gap: 20px;
    }
  }
`;
export const KeypadButton = styled.button`
  width: 80px;
  height: 50px;
  border-radius: 10px;
  border: none;
  font-size: 25px;
  text-align: center;
  background-color: ${({ themeUsed }) => themeUsed.keysColor};
  box-shadow: ${({ themeUsed }) => themeUsed.keysColorShadown} 0px -3px 0px inset;
  color: ${({ themeUsed }) => themeUsed.text};
  cursor: pointer;

  @media only screen and (max-width: 500px) {
    & {
      width: 60px;
      font-size: 20px;
    }
  }

  &:active {
    box-shadow: none;
    scale: 0.99;
    background-color: ${({ themeUsed }) => themeUsed.keysColorShadown};
  }

  &:nth-last-of-type(1),
  &:nth-last-of-type(2) {
    grid-column: span 2;
    width: 100%;
  }

  &:nth-last-of-type(1) {
    background-color: ${({ themeUsed }) => themeUsed.equalKey};
    box-shadow: ${({ themeUsed }) => themeUsed.equalKeyShadow} 0px -3px 0px inset;
    color: ${({ themeUsed, stylesList }) =>
      themeUsed !== stylesList ? themeUsed.delResetEqual : themeUsed.equalText};
  }

  &:nth-last-of-type(1):active {
    box-shadow: none;
    scale: 0.99;
    background-color: ${({ themeUsed }) => themeUsed.equalKeyShadow};
  }

  &:nth-last-of-type(2),
  &:nth-of-type(4) {
    background-color: ${({ themeUsed }) => themeUsed.delReset};
    box-shadow: ${({ themeUsed }) => themeUsed.delResetShadow} 0px -3px 0px inset;
    color: ${({ themeUsed }) => themeUsed.delResetEqual};
  }

  &:nth-last-of-type(2):active,
  &:nth-of-type(4):active {
    box-shadow: none;
    scale: 0.99;
    background-color: ${({ themeUsed }) => themeUsed.delResetShadow};
  }
`;
