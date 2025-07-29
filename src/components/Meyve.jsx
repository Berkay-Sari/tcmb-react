import { useContext } from "react";
import { DispatchContext } from "./DispatchContext";

function Meyve({ meyve, handleDelete }) {
  const dispatch = useContext(DispatchContext);

  const toggleCizili = () => {
    dispatch({ type: "toggleCizili", payload: { id: meyve.id } });
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
