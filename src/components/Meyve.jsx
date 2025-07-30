import React from "react";
import { useDispatch } from "react-redux";
import { deleteMeyve, toggleCizili } from "../meyvelerslice";

function Meyve({ meyve }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteMeyve({ id }));
  };

  const handleCiz = (id, cizili) => {
    dispatch(
      toggleCizili({
        id,
        cizili,
      })
    );
  };

  const { width, height, src, cizili, backColor } = meyve;
  const comp = (
    <li
      style={{
        backgroundColor: backColor,
        fontSize: 20,
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
      <div onClick={() => handleCiz(meyve.id, !meyve.cizili)}>{meyve.isim}</div>
      <div onClick={() => handleDelete(meyve.id)}>X</div>
    </li>
  );

  return cizili ? <del>{comp}</del> : comp;
}

export default Meyve;
