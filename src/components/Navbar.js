import React, { useState } from "react";
import { Cross as Hamburger } from "hamburger-react";
import "../assets/styles/navbar.scss";
import logo from "../assets/images/logo.svg";
import star from "../assets/images/star.png";
export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="navbar__container">
      <div className="navbar__logo">
        <img src={logo} alt="" />
      </div>
      <div
        className={
          isOpen ? "navbar__links dsp-block" : "navbar__links dsp-none"
        }
      >
        <a href="#">Experience </a>
        <a href="#">Locations </a>
        <a href="#">About </a>
        <a href="#">News </a>
        <a href="#">Get Started </a>
        <div className="navbar__links--img">
          <img src={star} alt="" />
        </div>
      </div>
      <div className={isOpen ? "navbar__call" : "navbar__call"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.901 13.901 0 0 0 4 1.205c.139.02.322.042.55.064a.5.5 0 0 1 .449.498z"
            fill="rgba(255,255,255,1)"
          />
        </svg>
        092-904-1479
      </div>
      <div className="navbar__menu">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          onToggle={(toggled) => {
            if (toggled) {
              setOpen(true);
              console.log(isOpen);
            } else {
              setOpen(false);
              console.log(isOpen);
            }
          }}
        />
      </div>
    </div>
  );
}
