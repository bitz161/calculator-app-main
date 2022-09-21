import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100;
  height: 100vh;
  border: 1px solid black;
  background-color: ${({ backgroundColor }) => `${backgroundColor}`};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > div {
    width: max-content;
    height: max-content;

    @media only screen and (max-width: 400px) {
      & {
        width: 90%;
      }
    }
  }
`;
