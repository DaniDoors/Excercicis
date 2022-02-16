import { useState } from "react";
import "./Acordio.css";

const Contingut = [
  {
    titol: "No ho creuas",
    text: "tinc pels al nas",
  },
  {
    titol: "Pero es cert",
    text: "i en tinc molts",
  },
  {
    titol: "No ho diguis",
    text: "i son molt llargs i negres",
  },
  {
    titol: "A ningu",
    text: "i s'omplen de mocs",
  },
  {
    titol: "Que no es pot saber",
    text: "pq es marranot",
  },
];

export default function Acordio() {
  const [veure0, setVeure0] = useState("VeureNo");
  const [veure1, setVeure1] = useState("VeureNo");
  const [veure2, setVeure2] = useState("VeureNo");
  const [veure3, setVeure3] = useState("VeureNo");
  const [veure4, setVeure4] = useState("VeureNo");

  const show0 = () => {
    veure0 === "VeureNo" ? setVeure0("VeureSi") : setVeure0("VeureNo");
    setVeure1("VeureNo");
    setVeure2("VeureNo");
    setVeure3("VeureNo");
    setVeure4("VeureNo");
  };
  const show1 = () => {
    veure1 === "VeureNo" ? setVeure1("VeureSi") : setVeure1("VeureNo");
    setVeure0("VeureNo");
    setVeure2("VeureNo");
    setVeure3("VeureNo");
    setVeure4("VeureNo");
  };
  const show2 = () => {
    veure2 === "VeureNo" ? setVeure2("VeureSi") : setVeure2("VeureNo");
    setVeure0("VeureNo");
    setVeure1("VeureNo");
    setVeure3("VeureNo");
    setVeure4("VeureNo");
  };
  const show3 = () => {
    veure3 === "VeureNo" ? setVeure3("VeureSi") : setVeure3("VeureNo");
    setVeure0("VeureNo");
    setVeure1("VeureNo");
    setVeure2("VeureNo");
    setVeure4("VeureNo");
  };
  const show4 = () => {
    veure4 === "VeureNo" ? setVeure4("VeureSi") : setVeure4("VeureNo");
    setVeure0("VeureNo");
    setVeure1("VeureNo");
    setVeure2("VeureNo");
    setVeure3("VeureNo");
  };
  return (
    <div>
      <h1 onClick={show0}>{Contingut[0].titol}</h1>
      <div className={veure0}>{Contingut[0].text}</div>
      <h1 onClick={show1}>{Contingut[1].titol}</h1>
      <div className={veure1}>{Contingut[1].text}</div>
      <h1 onClick={show2}>{Contingut[2].titol}</h1>
      <div className={veure2}>{Contingut[2].text}</div>
      <h1 onClick={show3}>{Contingut[3].titol}</h1>
      <div className={veure3}>{Contingut[3].text}</div>
      <h1 onClick={show4}>{Contingut[4].titol}</h1>
      <div className={veure4}>{Contingut[4].text}</div>
    </div>
  );
}
