import "./App.css";
import { QRNormal as QRCode } from "react-qrbtf";
import CardFormSvg from "./cardFormSvg/CardFormSvg";

function App() {
  return (
    <div className="App">
      <CardFormSvg>
        <QRCode
          value="https://github.com/ciaochaos/qrbtf/tree/master/src/components/svg"
          className="my-qrcode"
          styles={{
            svg: { width: "370", height: "370", viewBox: "0 0 50 50" },
          }}
          type="rand"
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
