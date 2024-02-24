import type { Props } from "./SelectArray.d";

const SelectArray: React.FC<Props> = ({ inputInArray, setInputInArray }) => {
  const handleSelectButton = (item: number) => {
    const newArray = inputInArray.filter((i) => i !== item);
    setInputInArray(newArray);
  };

  return (
    <>
      {inputInArray.length > 0 && (
        <div
          style={{
            width: "300px",
            background: "grey",
            border: "2px solid black",
          }}
        >
          {inputInArray.map((item, index) => (
            <button onClick={() => handleSelectButton(item)} key={index}>
              Item {item}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default SelectArray;
