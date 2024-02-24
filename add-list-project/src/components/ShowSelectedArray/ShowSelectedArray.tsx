import React from "react";
import type { SSAProps, SSAhandleDeleteEventPera } from "./ShowSelectArray.d";

const ShowSelectedArray: React.FC<SSAProps> = ({
  showArray,
  setShowArray,
  inputInArray,
  setInputInArray,
}) => {
  const handleDeleteEvent = (i: SSAhandleDeleteEventPera) => {
    setInputInArray([...inputInArray, i]);

    const newArray = showArray.filter((item) => item !== i);
    setShowArray(newArray);
  };

  return (
    <>
      {showArray.length > 0 && (
        <>
          <div
            style={{
              border: "1px solid black",
              borderRadius: "5",
            }}
          >
            {showArray.map((i) => (
              <button key={i} onClick={() => handleDeleteEvent(i)}>
                Item {i}
              </button>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default ShowSelectedArray;
