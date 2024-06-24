import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import RoundedText from "./components/RoundedText";

function App() {
  const page1Colors = [
    { backgroundImage: "radial-gradient(#f1f1f1, #f15a5e, #ea303d)" },
    { backgroundImage: "radial-gradient(#f1f1f1, #f15a5e, #fff200)" },
    { backgroundImage: "radial-gradient(#f1f1f1, #f15a5e, #00ff40)" },
    { backgroundImage: "radial-gradient(#f1f1f1, #f15a5e, #0000ff)" },
  ];

  const page2Colors = [
    { backgroundImage: "linear-gradient(#f25b60, #d73c48, #d43643)" },
    { backgroundImage: "linear-gradient(#f25b60, #d73c48, #fff200)" },
    { backgroundImage: "linear-gradient(#f25b60, #d73c48, #00ff40)" },
    { backgroundImage: "linear-gradient(#f25b60, #d73c48, #0000ff)" },
  ];

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // function setColors(value) {
  //   setPage1(page1Colors[value]);
  //   setPage2(page2Colors[value]);
  // }

  const randomNumber = getRandomNumber(0, 3);

  const [page1, setPage1] = useState(page1Colors[randomNumber]);

  const [page2, setPage2] = useState(page2Colors[randomNumber]);

  const [page3, setPage3] = useState({
    backgroundImage: "linear-gradient(#f25b60, #d73c48, #d43643)",
  });

  const [page4, setPage4] = useState({
    backgroundImage: "linear-gradient(#f25b60, #d73c48, #d43643)",
  });

  console.log("Hello world");

  return (
    <>
      <div className="main">
        <Navbar />
        <RoundedText />
        <Page1 page1={page1} />
        <Page2 page2={page2} />
        <Page3 page3={page3} />
        <Page4 page4={page4} />
      </div>
    </>
  );
}

export default App;
