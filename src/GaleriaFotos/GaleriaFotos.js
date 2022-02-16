import "./GaleriaFotos.css";

const fotos = [
  "https:\\placeimg.com/100/100",
  "https:\\placeimg.com/100/100",
  "https:\\placeimg.com/100/100",
  "https:\\placeimg.com/100/100",
  "https:\\placeimg.com/100/100",
  "https:\\placeimg.com/100/100",
  "https:\\placeimg.com/100/100",
  "https:\\placeimg.com/100/100",
  "https:\\placeimg.com/100/100",
  "https:\\placeimg.com/100/100",
  "https:\\placeimg.com/100/100",
  "https:\\placeimg.com/100/100",
  "https:\\placeimg.com/100/100",
  "https:\\placeimg.com/100/100",
  "https:\\placeimg.com/100/100",
  "https:\\placeimg.com/100/100",
  "https:\\placeimg.com/100/100",
  "https:\\placeimg.com/100/100",
  "https:\\placeimg.com/100/100",
  "https:\\placeimg.com/100/100",
  "https:\\placeimg.com/100/100",
  "https:\\placeimg.com/100/100",
  "https:\\placeimg.com/100/100",
  "https:\\placeimg.com/100/100",
  "https:\\placeimg.com/100/100",
  "https:\\placeimg.com/100/100",
  "https:\\placeimg.com/100/100",
  "https:\\placeimg.com/100/100",
  "https:\\placeimg.com/100/100",
];

const ei = "foto";
const Maximitza = () => {
  <img className="FotoGran" src="https:\\placeimg.com/100/100" alt={ei} />;
  console.log("has clicat una foto");
};

export default function App() {
  return (
    <div className="Album">
      <div className="Fotos">
        {fotos.map((foto, i) => (
          <img
            className="Foto"
            key={i}
            src={foto}
            alt={ei}
            onClick={Maximitza}
          />
        ))}
      </div>
    </div>
  );
}
