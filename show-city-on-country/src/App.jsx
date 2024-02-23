import { useState } from "react";
import "./App.css";

function App() {
  const regions = [
    { country: "India", city: ["Surat", "Anand"] },
    { country: "UAE", city: ["Dubai", "Alb"] },
    { country: "Canada", city: ["Toronto", "Vancuver"] },
  ];
  const [countryIndex, setCountryIndex] = useState(0);

  return (
    <>
      <select onChange={(e) => setCountryIndex(e.target.value)}>
        {regions.map((item, index, arr) => (
          <>
            <option key={item.country} value={index}>
              {item.country}
            </option>
          </>
        ))}
      </select>
      <br />

      <select>
        {regions[countryIndex].city.map((item, index) => (
          <>
            <option key={index}>{item}</option>
          </>
        ))}
      </select>
    </>
  );
}

export default App;
