import { useState } from "react";
import "./RellotgeDigital.css";

export default function RellotgeDigital() {
  let avui = new Date().toDateString();
  let ara = new Date().toLocaleTimeString();
  const [hora, setHora] = useState("");
  const [data, setData] = useState("");
  const [veureData, setVeureData] = useState("DataVisible");
  const [textButo, setTextButo] = useState("Ocultar");

  const segon = () => {
    ara = new Date().toLocaleTimeString();
    setHora(ara);
    if (data !== new Date().toDateString()) {
      avui = new Date().toDateString();
      setData(avui);
    }
  };
  setInterval(segon, 1000);

  const ocultaData = () => {
    veureData === "DataVisible"
      ? setVeureData("DataNoVisible")
      : setVeureData("DataVisible");
    textButo === "Ocultar" ? setTextButo("Mostrar") : setTextButo("Ocultar");
  };

  return (
    <div>
      {hora}
      <br />
      <span className={veureData}>{data}</span>
      <button onClick={ocultaData}>{textButo}</button>
    </div>
  );
}
