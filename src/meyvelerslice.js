import { createSlice } from "@reduxjs/toolkit";
import { createNewID } from "./components/utils";

const initialState = {
  meyveler: [
    {
      id: 0,
      backColor: "grey",
      src: "./src/assets/apple.png",
      width: "20px",
      height: 30,
      isim: "Elma",
      cizili: true,
      gizli: false,
    },
    {
      id: 1,
      backColor: "green",
      src: "./src/assets/pear.png",
      width: "20px",
      height: 30,
      isim: "Armut",
      cizili: false,
      gizli: false,
    },
    {
      id: 2,
      backColor: "red",
      src: "./src/assets/banana.png",
      width: "20px",
      height: 30,
      isim: "Muz",
      cizili: false,
      gizli: false,
    },
    {
      id: 3,
      backColor: "magenta",
      src: "./src/assets/cherries.png",
      width: "20px",
      height: 30,
      isim: "Kiraz",
      cizili: false,
      gizli: false,
    },
  ],
};

const meyvelerSlice = createSlice({
  name: "meyveler",
  initialState,
  reducers: {
    addMeyve: (state, action) => {
      const id = createNewID(state.meyveler);
      state.meyveler.push({ 
        ...action.payload, 
        id: id 
      });
    },
    deleteMeyve: (state, action) => {
      state.meyveler = state.meyveler.filter(
        (meyve) => meyve.id !== action.payload.id
      );
    },
    editMeyve: (state, action) => {
      const meyve = state.meyveler.find(
        (meyve) => meyve.id === action.payload.id
      );
      if (meyve) {
        meyve.isim = action.payload.yeniMeyve;
      }
    },
    toggleCizili: (state, action) => {
      const meyve = state.meyveler.find(
        (meyve) => meyve.id === action.payload.id
      );
      if (meyve) {
        meyve.cizili = action.payload.cizili;
      }
    },
  },
});

export const { addMeyve, deleteMeyve, editMeyve, toggleCizili } = meyvelerSlice.actions;

export const meyvelerReducer = meyvelerSlice.reducer;

export const selectMeyveler = (state) => state.meyveler.meyveler;
export const selectVisibleMeyveler = (state) => 
  state.meyveler.meyveler.filter((meyve) => !meyve.gizli);
