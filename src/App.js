import { AppContainer } from "./App.styles.jsx";
import { useContext, useState } from "react";
import { ThemeListContext } from "./context/theme.context";
import Header from "./components/header/header.component.jsx";
import ScreenCom from "./components/screen/screen.component.jsx";
import Keypad from "./components/keypad/keypad.component.jsx";

function App() {
  const { stylesList } = useContext(ThemeListContext);
  const { themeOne } = stylesList;
  const [themeUsed, setThemeUsed] = useState(themeOne);

  return (
    <AppContainer backgroundColor={themeUsed.mainBG}>
      <div>
        <Header
          setThemeUsed={setThemeUsed}
          themeUsed={themeUsed}
          stylesList={stylesList}
        />
        <ScreenCom themeUsed={themeUsed} stylesList={stylesList} />
        <Keypad themeUsed={themeUsed} stylesList={stylesList} />
      </div>
    </AppContainer>
  );
}

export default App;
