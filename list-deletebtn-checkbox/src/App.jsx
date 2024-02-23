import { useEffect, useState } from "react";

function App() {
  const elements = ["Play game", "Use phone", "Take bath"];

  const [arr, setArr] = useState(elements);

  const [checkBox, setCheckBox] = useState({});

  const handleDelete = (i) => {
    const newArr = arr.filter((item, index, arr) => item !== i);
    newArr !== arr && setArr(newArr);
  };

  const handleCheckBox = (item) => {
    setCheckBox({ ...checkBox, [item]: !checkBox[item] });
  };

  return (
    <>
      <div>
        <ul>
          {arr &&
            arr.map((item, index, arr) => (
              <li key={index} style={{ margin: "20px" }}>
                <input
                  type="checkbox"
                  checked={checkBox[item]}
                  onChange={() => handleCheckBox(item)}
                />
                {`${item} || `}
                {checkBox[item] && (
                  <button
                    value={item}
                    onClick={(e) => handleDelete(e.target.value)}
                  >
                    Delete
                  </button>
                )}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default App;
