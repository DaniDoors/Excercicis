import { useState } from "react";
import "./Carrusel.css";

const fotos = ["CB125.jpg", "Gladius.jpg", "H2.jpg", "Ninja.jpg", "XSR.jpg"];
const punts = ["·", "·", "·", "·", "·"];

export default function Carrusel() {
  const [seleccio, setSeleccio] = useState(0);

  const ames = () => {
    seleccio + 2 <= fotos.length
      ? setSeleccio(seleccio + 1)
      : setSeleccio(seleccio);
    console.log(seleccio);
  };

  const amenys = () => {
    if (seleccio > 0) setSeleccio(seleccio - 1);
    console.log(87);
  };

  return (
    <div className="Pantalla">
      <div className="Vista">
        <button onClick={amenys}>a</button>
        <img src={fotos[seleccio]} alt="none" />
        <button onClick={ames}>b</button>
      </div>
      <div className="Barra">
        {punts.map((aquest) => (
          <div>{punts[aquest]}</div>
        ))}
      </div>
    </div>
  );
}
