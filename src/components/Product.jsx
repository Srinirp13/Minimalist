import React from "react";

function Product(props) {
  return (
    <div className="sec3sub">
      <div className="sec3subimg">
        <img src="./fireback.jpg" alt="fire" className="sec3img" />
      </div>
      <div className="sec3desc">
        <h1>{props.name}</h1>
        <button type="button" className="btn btn-danger btnagain1" onClick={props.onQuickView}>
          Quick View
        </button>
      </div>
    </div>
  );
}

export default Product;
