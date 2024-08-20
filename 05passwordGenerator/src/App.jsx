import { useCallback, useState, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  // useRef
  const passwordRef = useRef(null);

  const pwd = useCallback(() => {
    let pass = "";
    let string = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";

    if (numbersAllowed) string += "1234567890";
    if (charAllowed) string += "!@#$%^&*(){}_+-=";

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * string.length + 1);

      pass += string.charAt(char);
    }
    setPassword(pass);
  }, [length, numbersAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    pwd();
  }, [length, numbersAllowed, charAllowed, pwd]);
  // pwd();
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-500">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-8">
          <input
            type="text"
            value={password}
            className="outline-none w-full px-3 py-1"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1 ">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="curser-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numbersAllowed}
              id="Number Input"
              onChange={() => {
                setNumbersAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="Number Input">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="Character Input"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="Character Input">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}
//App();

export default App;
