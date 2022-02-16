import { useState } from "react";
import "./Comptador.css";

export default function Comptador() {
  const [display, setDisplay] = useState(0);

  const incrementa = () => {
    if (display < 10) setDisplay(display + 1);
  };

  const decrementa = () => {
    if (display > 0) setDisplay(display - 1);
  };

  const incrementa5 = () => {
    if (display < 6) setDisplay(display + 5);
  };

  return (
    <div className="Comptador">
      <div className="Display">{display}</div>
      <div className="Butons">
        <button className="Buto1" onClick={incrementa}>
          +1
        </button>
        <button className="Buto1" onClick={decrementa}>
          -1
        </button>
        <br />
        <button className="Buto5" onClick={incrementa5}>
          +5
        </button>
      </div>
    </div>
  );
}
