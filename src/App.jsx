import "./App.css";
import React, { useState } from "react";
import Meyveler from "./components/Meyveler";
import Frame from "./components/Frame";
import {
  TumMeyvelerContext,
  SetTumMeyvelerContext,
} from "./components/TumMeyvelerContext";

function App() {
  const [tumMeyveler, setTumMeyveler] = useState([
    {
      id: 0,
      backColor: "purple",
      src: "./src/assets/apple.png",
      width: "20px",
      height: 30,
      isim: "Elma",
      cizili: false,
      gizli: false,
    },
    {
      id: 1,
      backColor: "darkgreen",
      src: "./src/assets/pear.png",
      width: "20px",
      height: 30,
      isim: "Armut",
      cizili: false,
      gizli: false,
    },
    {
      id: 2,
      backColor: "darkblue",
      src: "./src/assets/banana.png",
      width: "20px",
      height: 30,
      isim: "Muz",
      cizili: false,
      gizli: false,
    },
    {
      id: 3,
      backColor: "darkred",
      src: "./src/assets/cherries.png",
      width: "20px",
      height: 30,
      isim: "Kiraz",
      cizili: false,
      gizli: false,
    },
  ]);

  return (
    <Frame>
      <TumMeyvelerContext.Provider value={tumMeyveler}>
        <SetTumMeyvelerContext.Provider value={setTumMeyveler}>
          <Meyveler />
        </SetTumMeyvelerContext.Provider>
      </TumMeyvelerContext.Provider>
    </Frame>
  );
}

export default App;
