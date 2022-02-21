import { useState } from "react";
import "./GroupButton.css";

export default function GroupButton() {
  const [text, setText] = useState("cap");

  const canviaText = (textButo) => {
    setText(textButo);
  };
  return (
    <div>
      <button
        className={text === "primer" ? "Alterat" : "Normal"}
        onClick={() => {
          canviaText("primer");
        }}
      >
        primer
      </button>

      <button
        className={text === "segon" ? "Alterat" : "Normal"}
        onClick={() => {
          canviaText("segon");
        }}
      >
        segon
      </button>

      <button
        className={text === "tercer" ? "Alterat" : "Normal"}
        onClick={() => {
          canviaText("tercer");
        }}
      >
        tercer
      </button>

      <br />
      <div className="Text">{text}</div>
    </div>
  );
}
