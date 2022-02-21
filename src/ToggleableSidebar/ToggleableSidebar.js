import { useState } from "react";
import "./TogglebleSidebar.css";

export default function TogglebleSidebar() {
  const [visible, setVisible] = useState("Visible");

  const visibilitat = () => {
    visible === "Visible" ? setVisible("NoVisible") : setVisible("Visible");
  };
  return (
    <div>
      <button onClick={visibilitat}>=</button>
      <div id="Sidebar" className={visible}>
        Sidebar
      </div>
    </div>
  );
}
