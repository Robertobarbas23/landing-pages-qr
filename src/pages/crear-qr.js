import * as React from "react";
import { useState, useRef } from "react";
import Layout from "../components/layout";
import Collapse2 from "../components/crearqr-componentes/collapse2";
import MyComponent from "../components/crearqr-componentes/componente1";
import QRCode from 'qrcode.react';
import { toPng, toJpeg, toSvg } from 'html-to-image';
import download from 'downloadjs';
import TabsTandem from "../components/tabstandem";
import CenteredTabs from "../components/tabstandem";


function Crearqr() {
  const [inputValue, setInputValue] = useState('');
  const [latLng, setLatLng] = useState({ lat: 40.030501, lng: -3.604052 });
  const [inputType, setInputType] = useState('url');
  const [qrColor, setQrColor] = useState('black');
  const [qrSize, setQrSize] = useState(100);
  const qrRef = useRef(null);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleColorChange = (color) => {
    setQrColor(color);
  };
  const handleSizeChange = (size) => {
    setQrSize(parseInt(size, 10));
  };
  const handleDownload = async () => {
    if (qrRef.current) {
      const dataUrl = await toPng(qrRef.current);
      download(dataUrl, 'qr-code.png');
    }
  };

  const handleDownload2 = async () => {
    if (qrRef.current) {
      const dataUrl = await toJpeg(qrRef.current);
      download(dataUrl, 'qr-code.jpeg');
    }
  };

  const handleDownload3 = async () => {
    if (qrRef.current) {
      const dataUrl = await toSvg(qrRef.current);
      download(dataUrl, 'qr-code.svg');
    }
  };



  const containerStyle = {
    backgroundColor: "beige",
    border: "2px solid black",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
  };
  const colorOptions = ['black', 'blue', 'red', 'green', 'yellow', 'purple', 'orange', 'pink', 'magenta']; // Colores ampliados
  return (

    <Layout>
<div style={containerStyle}>

        <h1>GENERADOR DE QR</h1>
        <CenteredTabs
            inputValue={inputValue}
            setInputValue={setInputValue}
            latLng={latLng}
            setLatLng={setLatLng}
            setInputType={setInputType}
          />
        <Collapse2></Collapse2>
        <br />
       <div className="black">
        <MyComponent
          onColorChange={handleColorChange}
          onSizeChange={handleSizeChange}
          colorOptions={colorOptions}
        />
        </div>
        <br /> 
        <div className="qr-contenido">
        <div ref={qrRef} className="black">
        
          <p>Este es tu QR generado</p>
        <QRCode
              value={inputType === 'coordinates' ? `${latLng.lat},${latLng.lng}` : inputValue}
              size={qrSize}
              fgColor={qrColor}
            />
        </div>
        <br />
       <br />
         {/* <TandemButton enlace="#">Generar QR</TandemButton> */}
        
        <p>{inputValue}</p>
        </div>
        <br />
        <div className="black">
        <p>Descargar QR:</p>
        <button onClick={handleDownload} className="button22">Png</button>
        <button onClick={handleDownload2} className="button22">Jpeg</button>
        <button onClick={handleDownload3} className="button22">Svg</button>
        </div>
      </div>

    </Layout>
  );
}
export default Crearqr;