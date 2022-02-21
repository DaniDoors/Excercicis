import { useState } from "react";
import "./ToggleButton.css";

export default function ToggleButton() {
  const [estatButo, setEstatBoto] = useState("NoClick");

  const pitjaButo = () => {
    estatButo === "NoClick" ? setEstatBoto("Click") : setEstatBoto("NoClick");
  };

  return (
    <div>
      <button className={estatButo} onClick={pitjaButo}>
        buto
      </button>
      <br />
      <span>{estatButo}</span>
    </div>
  );
}
