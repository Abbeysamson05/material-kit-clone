// import { useState } from "react";

import "./App.css";
import EightPage from "./eightPage/eightPage";
import FifthPage from "./fifthPage/fifthPage";
import FirstPage from "./firstPage/firstPage";
import FourthPage from "./fourthPage/fourthPage";
import "./index.css";
import SecondPageFirst from "./secondPage/secondPage-1";
import SecondPageSecond from "./secondPage/secondPage-2";
import SeventhPage from "./seventhPage/seventhPage";
import SixthPage from "./sixthPage/sixthPage";
import ThirdPage from "./thirdPage/thirdPage-1";

function App() {
  return(
    <div>
      <FirstPage />
      <SecondPageFirst />
      <SecondPageSecond />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
      <SixthPage />
      <SeventhPage />
      <EightPage />
    </div>
  )
}

export default App;
