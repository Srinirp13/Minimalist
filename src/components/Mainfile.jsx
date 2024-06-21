import React, { useState } from "react";
import Navbar from "./Navbar";
import Product from "./Product";
import BottomBar from "./BottomBar";
import Popup from "./Popup";

function Mainfile() {
    const [openPop, setOpenPop] = useState(false)

    const openPopup = () => {
        setOpenPop(true)
    }

    const closePopup = () => {
        setOpenPop(false)
    }

  return (
    <div className="main">
      <div className="sec1">
        <Navbar />
        <div className="sec1sub">
          <h1>
            The choice is yours.
            <br />
            Because they dont have one.
          </h1>
          <div>
            <button type="button" className="btn btn-light btnagain">
              Quick View
            </button>
          </div>
        </div>
      </div>
      <div className="sec2">
        <div className="sec2div mb-4">
          <div className="hrm"></div>
          <h1 className="sec2h1">About</h1>
          <div className="hrm"></div>
        </div>
        <div className="sec2secdiv">
          <img src="./cracker.jpg" alt="cra" className="crac" />
          <p>
            Our products are crafted exclusively from the dreams and screams of
            young kids who wanted to show their mastery in their chosen fields,
            but were directed towards a factory for daily wages. Each cracker
            bursts brighter than their lost smiles, and can be heard louder than
            their cries for miles. Buy them, burst them, brag about them.
            <br />
            <b>The choice is yours. Because they don’t have one.</b>
          </p>
          <img src="./cracker.jpg" alt="cra" className="crac" />
        </div>
      </div>
      <div className="sec3">
        <div className="sec2div mb-4">
          <div className="hrm"></div>
          <h1 className="sec2h1">Products</h1>
          <div className="hrm"></div>
        </div>
        <div className="sec3subdiv">
          <Product name="Raju Rassibomb" onQuickView={openPopup} />
          <Product name="Ladiyon ki Rani Chani" onQuickView={openPopup} />
        </div>
        <div className="hrm mt-5"></div>
      </div>
      <BottomBar />
      {openPop && <Popup onClosepop={closePopup} />}
    </div>
  );
}

export default Mainfile;
