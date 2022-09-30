import React from "react";
import "../assets/styles/details.scss";
import oldlady from "../assets/images/old-lady.jpg";
import hands from "../assets/images/hands.jpeg";

export default function Detail() {
  return (
    <div>
      <div className="detail__container">
        <h1>
          Healthcare just got
          <br /> upgraded to first class.
        </h1>
        <span></span>
        <p>
          At Legent, we’re all about making healthcare better. And that doesn’t
          just mean that we focus on getting you the best possible treatment
          using the latest technology, but on all the little things too, from
          super-friendly service to comfortable rooms with food so good you’ll
          (almost) forget you’re in hospital.
        </p>
      </div>
      <div className="grid-container">
        <div className="left">
          <img src={oldlady} alt="" />
        </div>
        <div className="middle">
          <div>
            <p>Ready to live life to the fullest again? Get in touch!</p>
          </div>
          <div>
            <button>Start your conslutation</button>
          </div>
          <div>
            <p>092-904-1479</p>
          </div>
        </div>
        <div className="right">
          <img src={hands} alt="" />
        </div>
      </div>
    </div>
  );
}
