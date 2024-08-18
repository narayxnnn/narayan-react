import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(5);
  const addValue = function () {
    //let counter = counter + 1;
    if (count >= 20) {
      console.log(alert("limit exceed!"));
    } else {
      setCount(count + 1);
      console.log(count);
    }
  };
  const removeValue = function () {
    if (count <= 0) {
      console.log(alert("value is at lowest!"));
    } else {
      setCount(count - 1);
      console.log(count);
    }
  };
  return (
    // const count = 5; will give error coz it is in return
    <>
      <h1>Chai aur react</h1>
      <h2>count value: {count}</h2>
      <button onClick={addValue}>add</button>
      <br />
      <button onClick={removeValue}>remove</button>
    </>
  );
}

export default App;
