import { useState } from "react";
import Navbar from "./components/Navbar";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import RoundedText from "./components/RoundedText";
import Page5 from "./components/Page5";
import Page6 from "./components/Page6";

function App() {
  const themeColors = ["#f7931a", "#7ecf86", "#f9a730", "#019735", "#9A5D2A"];

  const canImages = [
    "Images/BERRY.png",
    "Images/cherry.png",
    "Images/grape.png",
    "Images/orange.png",
    "Images/pineapple.png",
  ];

  const page1Colors = [
    { backgroundImage: "radial-gradient(#f1f1f1, #69a0da, #1169c5)" },
    { backgroundImage: "radial-gradient(#f1f1f1, #f15a5e, #ea303d)" },
    { backgroundImage: "radial-gradient(#f1f1f1, #ab86e7, #533189)" },
    { backgroundImage: "radial-gradient(#f1f1f1, #ff8a54, #E57133)" },
    { backgroundImage: "radial-gradient(#f1f1f1, #cfa677, #D39F62)" },
  ];

  const page2Colors = [
    { backgroundImage: "linear-gradient(#328beb, #1474db, #1169c5)" },
    { backgroundImage: "linear-gradient(#f25b60, #d73c48, #d43643)" },
    { backgroundImage: "linear-gradient(#8a54e1, #9469da, #533189)" },
    { backgroundImage: "linear-gradient(#e4824d, #e78d5d, #E57133)" },
    { backgroundImage: "linear-gradient(#cea87d, #bd986d, #D39F62)" },
  ];

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const randomNumber = getRandomNumber(0, 4);

  const [page1, setPage1] = useState(page1Colors[randomNumber]);

  const [page2, setPage2] = useState(page2Colors[randomNumber]);

  const [theme, setTheme] = useState(themeColors[randomNumber]);

  const [can, setCan] = useState(canImages[randomNumber]);

  const nextTheme = (value) => {
    setTheme(themeColors[value]);
    setPage1(page1Colors[value]);
    setPage2(page2Colors[value]);
    setCan(canImages[value]);
  };

  return (
    <>
      <div className="main">
        <Navbar theme={theme} />
        <RoundedText />
        <Page1 page1={page1} theme={theme} can={can} />
        <Page2
          page2={page2}
          theme={theme}
          can={can}
          number={randomNumber}
          nextTheme={nextTheme}
        />
        <Page3 page3={page2} theme={theme} />
        <Page4 page4={page2} theme={theme} />
        <Page5 page5={page2} theme={theme} />
        <Page6 page6={page2} theme={theme} />
      </div>
    </>
  );
}

export default App;
