import React, { useContext } from "react";
import {
  TumMeyvelerContext,
  SetTumMeyvelerContext,
} from "./TumMeyvelerContext";

function Meyve({ meyve, handleDelete }) {
  const tumMeyveler = useContext(TumMeyvelerContext);
  const setTumMeyveler = useContext(SetTumMeyvelerContext);

  const toggleCizili = () => {
    setTumMeyveler(
      tumMeyveler.map((m) =>
        m.id === meyve.id ? { ...m, cizili: !m.cizili } : m
      )
    );
  };

  const { width, height, src, cizili, backColor } = meyve;

  const comp = (
    <li
      onClick={toggleCizili}
      style={{
        backgroundColor: backColor,
        fontSize: 20,
        cursor: "pointer",
      }}
    >
      <img
        src={src}
        width={width}
        height={height}
        style={{
          borderWidth: "2px",
          borderColor: "black",
          borderStyle: "solid",
        }}
      />
      {meyve.isim}
      <div
        onClick={(e) => {
          e.stopPropagation();
          handleDelete(meyve.id);
        }}
      >
        X
      </div>
    </li>
  );

  return cizili ? <del>{comp}</del> : comp;
}

export default Meyve;
