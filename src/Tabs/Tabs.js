import { useState } from "react";
import "./Tabs.css";

export default function Tabs() {
  const [buto, setButo] = useState(1);
  const array = [
    {},
    { titol: "1", contingut: "aquest es l'1" },
    { titol: "2", contingut: "aquest es el2" },
  ];

  const canvi = (clicat) => {
    console.log("hey Bubu!" + clicat);
    setButo(clicat);
  };

  return (
    <div>
      <button
        className={buto === 1 ? "Alterat" : "Normal"}
        onClick={() => {
          canvi(1);
        }}
      >
        {array[1].titol}
      </button>
      <button
        className={buto === 2 ? "Alterat" : "Normal"}
        onClick={() => {
          canvi(2);
        }}
      >
        {array[2].titol}
      </button>
      <br />
      {array[buto].contingut}
    </div>
  );
}
