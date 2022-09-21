import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  & > h1 {
    font-size: 30px;
  }
  color: ${({ themeUsed }) => themeUsed.delResetEqual};
`;

export const ToggleContainer = styled.div`
  width: max-content;
  display: grid;
  grid-template-columns: repeat(2, 60px);
  grid-template-rows: 15px 16px;
`;

export const SecondToggleDiv = styled.div`
  font-size: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 4px;
`;

export const ThirdToggleDiv = styled.div`
  font-size: 10px;
  width: 100%;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
  letter-spacing: 1px;
`;
export const FourthToggleDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  padding: 0 4px;
  background-color: ${({ keypadBG }) => keypadBG};
`;

export const ToggleButton = styled.button`
    cursor: pointer;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  outline: none;
  border: none;
  background-color: ${({ activeTheme }) => activeTheme.equalKey};

  & {
    opacity: ${({ activeTheme, themeUsed }) => activeTheme !== themeUsed && 0};
  }
`;
