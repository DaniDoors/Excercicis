import { useState } from "react";
import "./TipCalculator.css";

export default function TipCalculator() {
  const [preu, setPreu] = useState(0);
  const [propina, setPropina] = useState(0);
  const [total, setTotal] = useState(0);
  const [comensals, setComensals] = useState(0);
  const [totalComensal, setTotalComensal] = useState();

  const calcula = () => {
    setTotal(Number(preu) + (Number(propina) * Number(preu)) / 100);
  };
  const incrementa = () => {
    if (comensals < 10) setComensals(comensals + 1);
  };

  const decrementa = () => {
    if (comensals > 0) setComensals(comensals - 1);
  };

  const calculaComensal = () => {
    setTotalComensal(total / comensals);
  };

  return (
    <div className="TipCalculator">
      <div className="Prue">
        Preu:
        <input value={preu} onChange={(event) => setPreu(event.target.value)} />
      </div>
      <div className="Propina">
        Propina:
        <input
          value={propina}
          onChange={(event) => setPropina(event.target.value)}
        />
        %
      </div>
      <br />
      Total: {total}
      <br />
      <button onClick={calcula}>calcular</button>
      <br />
      <input type="checkbox" /> redondeig
      <br />
      Comensals:{comensals}
      <button onClick={incrementa}>+</button>
      <button onClick={decrementa}>-</button>
      <br />
      Total per Comensal:{totalComensal}{" "}
      <button onClick={calculaComensal}>calcula</button>
    </div>
  );
}
