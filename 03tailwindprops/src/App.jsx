import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./componants/Card.jsx";

function App() {
  const [count, setCount] = useState(0);

  const myObj = {
    //in same way we can pass array
    name: "namaraya",
    kaam: "engineer",
  };

  return (
    <>
      <h1 className="bg-green-300 text-black p-4 rounded-xl mb-4">
        tailwind test
      </h1>
      <Card username="chaiaurcode" btnText="click" />
      <Card username="nilanjana" btnText="visit" />
    </>
  );
}

export default App;
