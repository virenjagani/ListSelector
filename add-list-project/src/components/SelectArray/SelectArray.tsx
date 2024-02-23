import type { Props } from "./SelectArray.d";

const SelectArray: React.FC<Props> = ({ inputInArray, setInputInArray }) => {
  const handleSelectButton = (item: number) => {};

  return (
    <div
      style={{
        width: "300px",
        background: "grey",
        border: "2px solid black",
      }}
    >
      {inputInArray.length > 0
        ? inputInArray.map((item, index) => (
            <button onClick={() => handleSelectButton(item)} key={index}>
              Item {item}
            </button>
          ))
        : null}
    </div>
  );
};

export default SelectArray;