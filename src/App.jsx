import "./App.css";
import React from "react";
import Meyveler from "./components/Meyveler";
import Frame from "./components/Frame";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementOne, increment, incrementOne, selector } from "./slice";
function Counter(props) {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <div>{props.name}</div>
      <div>{counter}</div>
      <div onClick={() => setCounter(counter + 1)}>Arttır</div>
    </div>
  );
}

function Component() {
  const [isPlayerA, setIsPlayerA] = useState(true);
  return (
    <div>
      {isPlayerA ? (
        <Counter name="Alice" key="Alice" />
      ) : (
        <Counter name="Taylor" key="Taylor" />
      )}
      <div onClick={() => setIsPlayerA(!isPlayerA)}>Set New Player</div>
    </div>
  );
}

function App() {
  const { value } = useSelector(selector);
  const dispatch = useDispatch();

  //const isOnline = useOnlineStatus();

  const [number, setNumber] = useState(0);

  return (
    <Frame>
      <div>{value}</div>
      <button onClick={() => dispatch(incrementOne())}>Increment one</button>
      <button onClick={() => dispatch(decrementOne())}>Decrement one</button>
      <input
        type="number"
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(increment(number))}>Increment</button>
      <Meyveler />
    </Frame>
  );
}

export default App;
