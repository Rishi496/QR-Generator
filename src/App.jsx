import React, { useState } from "react";
const App = () => {
  const [img, setImg] = useState();
  const [qrdata, setQrdata] = useState();
  const [qrsize, setQrsize] = useState("150");
  function handChange(e) {
    setQrdata(e.target.value);
  }
  function handSize(e) {
    setQrsize(e.target.value);
  }
  function genrateQr() {
    if (qrdata) {
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrsize}x150&data=${encodeURIComponent(
        qrdata
      )}`;
      setImg(url);
    } else {
      alert("Enter your Text");
    }
  }
  function genratedow() {
    const link = document.createElement("a");
    link.href = img;
    link.download = "qrdownload.png";
    link.click();
  }
  return (
    <div className="main">
      <div className="container">
        <h1>Qr Code Generate</h1>
        <div className="image">{img && <img src={img} alt="" />}</div>
        <div className="box1">
          <label htmlFor="qrinput">Enter Your url Link </label>
          <input
            type="text"
            value={qrdata}
            onChange={handChange}
            placeholder="Enter Your url "
          />
        </div>
        <div className="box2">
          <label htmlFor="qrsize">Enter Your Size </label>
          <input
            type="number"
            placeholder="Enter Your Size "
            onChange={handSize}
            value={qrsize}
          />
        </div>
        <div className="but">
          <button onClick={genrateQr}>QR code Generate</button>
          <button onClick={genratedow}>Download QR</button>
        </div>
      </div>
    </div>
  );
};

export default App;
