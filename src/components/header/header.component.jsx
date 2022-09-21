import {
  HeaderContainer,
  ToggleContainer,
  SecondToggleDiv,
  ThirdToggleDiv,
  FourthToggleDiv,
  ToggleButton,
} from "./header.styles.jsx";

const Header = ({ setThemeUsed, stylesList, themeUsed }) => {
  const { themeOne, themeTwo, themeThree } = stylesList;
  return (
    <HeaderContainer themeUsed={themeUsed} stylesList={stylesList} as="header">
      <h1>calc</h1>
      <ToggleContainer>
        <div />
        <SecondToggleDiv>
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </SecondToggleDiv>
        <ThirdToggleDiv>
          <p>THEME</p>
        </ThirdToggleDiv>
        <FourthToggleDiv keypadBG={themeUsed.keypadBG}>
          <ToggleButton
            classesName={"themeOne"}
            activeTheme={themeOne}
            themeUsed={themeUsed}
            onClick={() => setThemeUsed(themeOne)}
          />
          <ToggleButton
            classesName={"themeTwo"}
            activeTheme={themeTwo}
            themeUsed={themeUsed}
            onClick={() => setThemeUsed(themeTwo)}
          />
          <ToggleButton
            classesName={"themeThree"}
            activeTheme={themeThree}
            themeUsed={themeUsed}
            onClick={() => setThemeUsed(themeThree)}
          />
        </FourthToggleDiv>
      </ToggleContainer>
    </HeaderContainer>
  );
};

export default Header;
