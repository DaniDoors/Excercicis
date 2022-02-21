import { useState } from "react";
import "./Sumador.css";

export default function Sumador() {
  const [valor, setValor] = useState(0);
  const [total, setTotal] = useState(0);

  const suma = () => {
    setTotal(total + Number(valor));
  };

  return (
    <div className="Sumador">
      <div className="Valor">
        Valor:
        <input
          value={valor}
          onChange={(event) => setValor(event.target.value)}
        />
      </div>
      <br />
      Total: {total}
      <br />
      <button onClick={suma}>sumar</button>
    </div>
  );
}
