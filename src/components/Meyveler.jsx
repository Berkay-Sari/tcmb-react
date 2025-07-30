import Meyve from "./Meyve";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMeyve, editMeyve, selectVisibleMeyveler } from "../meyvelerslice";

export default function Meyveler() {
  const meyveler = useSelector(selectVisibleMeyveler);
  const dispatch = useDispatch();

  const handleEkle = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(
      addMeyve({
        isim: yeniMeyve,
        backColor: "grey",
        src: "./src/assets/apple.png",
        width: "20px",
        height: 30,
        cizili: false,
        gizli: false,
      })
    );
    setYeniMeyve("");
  };

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(
      editMeyve({
        id: selected,
        yeniMeyve,
      })
    );
    setYeniMeyve("");
  };

  const [yeniMeyve, setYeniMeyve] = useState("");
  const [selected, setSelected] = useState("");

  const inputRef = useRef(null);

  return (
    <ol className="liste">
      {meyveler.map((item) => (
        <>
          <input
            type="radio"
            value={selected}
            onClick={() => setSelected(item.id)}
            name="abc"
          />
          <Meyve meyve={item} key={item.id} />
        </>
      ))}
      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        Focus
      </button>

      <form>
        <input
          ref={inputRef}
          label="Eklenecek"
          value={yeniMeyve}
          onChange={(e) => setYeniMeyve(e.target.value)}
        />
        <button type="submit" onClick={handleEkle}>
          Ekle
        </button>
        <button type="submit" onClick={handleEdit}>
          Edit
        </button>
      </form>
    </ol>
  );
}
