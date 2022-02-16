import { useState } from "react";
import "./TresEnRatlla.css";

export default function TresEnRatlla() {
  const [array, setArray] = useState([
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
  ]);
  const [guanyador, setGuanyador] = useState("ningu");
  const arraybuit = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];

  const canvia = (ix) => {
    let copia = [...array];
    copia[ix] === "-"
      ? (copia[ix] = "O")
      : copia[ix] === "O"
      ? (copia[ix] = "X")
      : (copia[ix] = "O");
    setArray(copia);
    avaluaPartida(copia);
  };

  const avaluaPartida = (avualuat) => {
    (avualuat[0] === avualuat[1] && avualuat[0] === avualuat[2]) ||
    (avualuat[0] === avualuat[4] && avualuat[0] === avualuat[8]) ||
    (avualuat[0] === avualuat[3] && avualuat[0] === avualuat[6])
      ? avualuat[0] === "-"
        ? setGuanyador("ningu")
        : avualuat[0] === "X"
        ? setGuanyador("X")
        : setGuanyador("O")
      : (avualuat[6] === avualuat[4] && avualuat[6] === avualuat[2]) ||
        (avualuat[6] === avualuat[7] && avualuat[6] === avualuat[8])
      ? avualuat[6] === "-"
        ? setGuanyador("ningu")
        : avualuat[6] === "X"
        ? setGuanyador("X")
        : setGuanyador("O")
      : avualuat[1] === avualuat[4] && avualuat[1] === avualuat[7]
      ? avualuat[1] === "-"
        ? setGuanyador("ningu")
        : avualuat[1] === "X"
        ? setGuanyador("X")
        : setGuanyador("O")
      : avualuat[2] === avualuat[5] && avualuat[2] === avualuat[8]
      ? avualuat[2] === "-"
        ? setGuanyador("ningu")
        : avualuat[2] === "X"
        ? setGuanyador("X")
        : setGuanyador("O")
      : avualuat[3] === avualuat[4] && avualuat[3] === avualuat[5]
      ? avualuat[3] === "-"
        ? setGuanyador("ningu")
        : avualuat[3] === "X"
        ? setGuanyador("X")
        : setGuanyador("O")
      : setGuanyador("ningu");
  };

  const reiniciaPartida = () => {
    setArray(arraybuit);
    setGuanyador("ningu");
  };
  return (
    <div className="Caixa">
      <div className="Butons">
        {array.map((check, i) => (
          <button
            key={i}
            onClick={guanyador === "ningu" ? () => canvia(i) : null}
          >
            {check}
          </button>
        ))}
      </div>
      <div
        className={
          guanyador === "X" || guanyador === "O" ? "FiPartidaSi" : "FiPartidaNo"
        }
      >
        Ha guanyat {guanyador}
      </div>
      <button
        className={
          guanyador === "X" || guanyador === "O" ? "FiPartidaSi" : "FiPartidaNo"
        }
        onClick={reiniciaPartida}
      >
        Reiniciar partida
      </button>
    </div>
  );
}
