import styled from "styled-components";

export const ScreenContainer = styled.div`
  height: 5rem;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  margin: 1rem 0;
  padding: 0 1rem;
  color: ${({ themeUsed }) => themeUsed.delResetEqual};
  background-color: ${({ themeUsed }) => themeUsed.screenBG};
`;
