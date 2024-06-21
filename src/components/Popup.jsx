import React, { useState } from "react";

const images = [
  { src: "./fireback.jpg", alt: "Main Image" },
  { src: "./fire1.jpg", alt: "Small Image 1" },
  { src: "./fire2.jpg", alt: "Small Image 2" },
  { src: "./fire3.jpg", alt: "Small Image 3" },
];

function Popup(props) {
  const [currImg, setCurrImg] = useState(images[0].src);

  const handleImage = (src) => {
    setCurrImg(src);
  };

  return (
    <>
    <div class="blur-overlay"></div>
      <div className="mainpop">
        <div className="pop1">
          <img src={currImg} alt="imgg" className="mainimg" />
          <div className="pop1sub">
            {images.map((imgg, index) => (
              <img
                key={index}
                src={imgg.src}
                alt={imgg.alt}
                className="subims"
                onClick={() => handleImage(imgg.src)}
              />
            ))}
          </div>
        </div>
        <div className="pop2">
          <div className="pop2fsub">
            <h1>Raju Rassibomb</h1>
            <i
              class="fa-regular fa-circle-xmark cros"
              onClick={props.onClosepop}
            ></i>
          </div>
          <p className="pop2subp">MRP:</p>
          <h1 className="pop2subh">{props.name}</h1>
          <div className="hrm"></div>
          <p className="secp">Product description:</p>
          <p className="secp1">
            This product packs an extra punch. Thanks to the literal sweat,
            tears and blood of a young boy.
          </p>
          <div className="hrm"></div>
          <p className="secp">Product contents:</p>
          <p>🌟 10 Hand-hurting pieces of rassi bomb.</p>
          <p>🌟 Jilled with great pain.</p>
          <p>🌟 Raju's hopes.</p>
          <div className="hrm shrm"></div>
          <p className="secp">Shipping time: </p>
          <p>Before raju understands his dreams do not matter.</p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            <button type="button" className="btn btn-danger btnagain2">
              Choose Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Popup;
