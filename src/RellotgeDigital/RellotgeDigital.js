import { useState, useEffect } from "react";
import "./RellotgeDigital.css";

export default function RellotgeDigital() {
  const [hora, setHora] = useState("");
  const [data, setData] = useState("");
  const [veureData, setVeureData] = useState("DataVisible");

  useEffect(() => {
    setInterval(() => {
      console.log("alah!");
      setHora(new Date().toLocaleTimeString());
      setData(new Date().toDateString());
    }, 1000);
  }, []);

  const ocultaData = () => {
    veureData === "DataVisible"
      ? setVeureData("DataNoVisible")
      : setVeureData("DataVisible");
  };

  return (
    <div className="Rellotge">
      {hora}
      <br />
      <span className={veureData}>{data}</span>
      <button onClick={ocultaData}>
        {veureData === "DataVisible" ? "Ocultar" : "Mostrar"}
      </button>
    </div>
  );
}
