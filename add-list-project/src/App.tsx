import { useEffect, useState } from "react";
import "./App.css";
import SelectArray from "./components/SelectArray/SelectArray";
import ShowSelectedArray from "./components/ShowSelectedArray/ShowSelectedArray";
import type { InputArray } from "./constants/inputArray/inputArray.d";
import { inputArray } from "./constants/inputArray/InputArray";

function App() {
  const [inputInArray, setInputInArray] = useState<InputArray>([]);
  const [showArray, setShowArray] = useState<InputArray>([]);

  useEffect(() => {
    setInputInArray(inputArray);
  }, []);

  useEffect(() => {
    const newArray = inputArray.filter((i) => !inputInArray.includes(i));
    setShowArray(newArray);
  }, [inputInArray]);

  useEffect(() => {}, [showArray]);

  return (
    <>
      <SelectArray
        inputInArray={inputInArray}
        setInputInArray={setInputInArray}
      />
      <br />
      <br />
      <br />
      <ShowSelectedArray showArray={showArray} />
    </>
  );
}

export default App;
