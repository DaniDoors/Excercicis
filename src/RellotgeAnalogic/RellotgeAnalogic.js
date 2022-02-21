import { useEffect, useState } from "react";
import "./RellotgeAnalogic.css";

export default function RellotgeAnalogic() {
  const [hora, setHora] = useState("");

  useEffect(() => {
    setInterval(() => {
      let segons = "";
      setHora(new Date().toLocaleTimeString());
      segons = new Date().getSeconds() * 6;
      segons = "rotate(" + segons + "deg)";
      console.log(segons);
    }, 1000);
  }, []);

  return (
    <div>
      <div className="Rellotge">
        {hora}
        <br />
        <div className="Analogic">
          <div id="CaixaSegons">
            <div className="Segons"></div>
            <div id="num3">3</div>
          </div>
        </div>
      </div>
    </div>
  );
}
