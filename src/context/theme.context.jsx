import { createContext, useState } from "react";

const GlobalStyle = {
  themeOne: {
    mainBG: "hsl(222, 26%, 31%)",
    keypadBG: "hsl(223, 31%, 20%)",
    screenBG: "hsl(224, 36%, 15%)",
    delReset: "hsl(225, 21%, 49%)",
    delResetShadow: "hsl(224, 28%, 35%)",
    equalKey: "hsl(6, 63%, 50%)",
    equalKeyShadow: "hsl(6, 70%, 34%)",
    keysColor: "hsl(30, 25%, 89%)",
    keysColorShadown: "hsl(28, 16%, 65%)",
    text: "hsl(221, 14%, 31%)",
    delResetEqual: "#fff",
  },
  themeTwo: {
    mainBG: "hsl(0, 0%, 90%)",
    keypadBG: "hsl(0, 5%, 81%)",
    screenBG: "hsl(0, 0%, 93%)",
    delReset: "hsl(185, 42%, 37%)",
    delResetShadow: "hsl(185, 58%, 25%)",
    equalKey: "hsl(25, 98%, 40%)",
    equalKeyShadow: "hsl(25, 99%, 27%)",
    keysColor: "hsl(45, 7%, 89%)",
    keysColorShadown: "hsl(35, 11%, 61%)",
    text: "hsl(60, 10%, 19%)",
    delResetEqual: "hsl(0, 0, 100%)",
  },
  themeThree: {
    mainBG: "hsl(268, 75%, 9%)",
    keypadBG: "hsl(268, 71%, 12%)",
    screenBG: "hsl(268, 71%, 12%)",
    delReset: "hsl(281, 89%, 26%)",
    delResetShadow: "hsl(285, 91%, 52%)",
    equalKey: "hsl(176, 100%, 44%)",
    equalKeyShadow: "hsl(177, 92%, 70%)",
    keysColor: "hsl(268, 47%, 21%)",
    keysColorShadown: "hsl(290, 70%, 36%)",
    text: "hsl(52, 100%, 62%)",
    delResetEqual: "hsl(52, 100%, 62%)",
    equalText: "hsl(198, 20%, 13%)",
    keypadText: "hsl(0, 0, 100%)",
  },
};

export const ThemeListContext = createContext({
  stylesList: {},
});

export const ThemeListProvider = ({ children }) => {
  const [stylesList, SetStylesList] = useState(GlobalStyle);

  const value = { stylesList };
  return (
    <ThemeListContext.Provider value={value}>
      {children}
    </ThemeListContext.Provider>
  );
};
