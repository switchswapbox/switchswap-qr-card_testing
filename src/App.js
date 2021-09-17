import "./App.css";
import { QRNormal } from "react-qrbtf";
import CardFormSvg from "./cardFormSvg/CardFormSvg";

function App() {
  return (
    <div className="App">
      <CardFormSvg>
        <QRNormal
          value="react-qrbtf"
          className="my-qrcode"
          styles={{ svg: { width: "200px" } }}
          type="round"
          size={50}
          opacity={80}
          posType="planet"
          otherColor="#33CCCC"
          posColor="#009999"
        />
      </CardFormSvg>
    </div>
  );
}

export default App;
