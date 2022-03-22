//import memeimg from "../images/memeimg.png";
import React, { useState } from "react";
import MemeData from "./memeData";

const Form = () => {
  const [showRandomImage, setRandomImage] = useState("");
  const memeonClickHandler = () => {
    const RandomData = Math.floor(Math.random() * MemeData.length);
    const RandomImageUrl = MemeData[RandomData].url;
    setRandomImage(RandomImageUrl);
  };
  return (
    <main>
      <div className="form-input">
        <input type="text" placeholder="top text" />
        <input type="text" placeholder="buttom text" />
        <button className="button-1" onClick={memeonClickHandler}>
          Get new meme image
        </button>
        <img
          src={showRandomImage}
          alt="randomImage"
          className="random--image"
        />
      </div>

      {/* <div className="main-image">
        <img src={memeimg} alt="mainimg" className="image-main" />
        <h1 className="place-holder-name">SHUT UP</h1>
        <h1 className="Place-holder-name-2"> AND TAKE MY MONEY</h1>
      </div> */}
    </main>
  );
};
export default Form;
