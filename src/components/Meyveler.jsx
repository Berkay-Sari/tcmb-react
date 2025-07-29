import Meyve from "./Meyve";
import { useContext, useState } from "react";
import {
  TumMeyvelerContext,
  SetTumMeyvelerContext,
} from "./TumMeyvelerContext";

export default function Meyveler() {
  const tumMeyveler = useContext(TumMeyvelerContext);
  const setTumMeyveler = useContext(SetTumMeyvelerContext);

  const handleEkle = (e) => {
    e.preventDefault();
    const yeniMeyveObj = {
      id: Math.max(...tumMeyveler.map((m) => m.id), 0) + 1,
      isim: yeniMeyve,
      backColor: "gray",
      src: "./src/assets/apple.png",
      width: "20px",
      height: 30,
      cizili: false,
      gizli: false,
    };
    setTumMeyveler([...tumMeyveler, yeniMeyveObj]);
    setYeniMeyve("");
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setTumMeyveler(
      tumMeyveler.map((meyve) =>
        meyve.id === selected ? { ...meyve, isim: yeniMeyve } : meyve
      )
    );
    setYeniMeyve("");
  };

  const handleDelete = (id) => {
    setTumMeyveler(tumMeyveler.filter((meyve) => meyve.id !== id));
  };

  const [yeniMeyve, setYeniMeyve] = useState("");
  const [selected, setSelected] = useState(null);

  const meyveler = tumMeyveler.filter((item) => !item.gizli);

  return (
    <ol className="liste">
      {meyveler.map((item) => (
        <div key={item.id}>
          <input
            type="radio"
            checked={selected === item.id}
            onChange={() => setSelected(item.id)}
            name="abc"
          />
          <Meyve meyve={item} handleDelete={handleDelete} />
        </div>
      ))}
      <form>
        <input
          label="Eklenecek"
          value={yeniMeyve}
          onChange={(e) => setYeniMeyve(e.target.value)}
        />
        <button onClick={handleEkle}>Ekle</button>
        <button onClick={handleEdit}>Edit</button>
      </form>
    </ol>
  );
}
