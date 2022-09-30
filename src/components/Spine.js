import React from "react";
import { motion } from "framer-motion";
import spine from "../assets/images/spine.svg";
import back from "../assets/images/back.jpeg";
import "../assets/styles/spine.scss";
export default function Spine() {
  return (
    <div className="spine">
      <div className="spine__container">
        <div className="spine__container--left">
          <motion.div
            className="main"
            initial={{ opacity: 0.3, y: 250 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Whether you’re struggling with neck pain or your back is making life
            difficult, we’re here to help.
          </motion.div>
          <div className="list">
            <div className="list__left">
              <img src={spine} alt="" />
            </div>
            <div className="list__right">
              <ul>
                <li>Treatment and surgery for your neck or spine</li>
                <li>Ongoing management for chronic pain</li>
                <li>
                  State-of-the-art, minimally-invasive treatments to get you
                  living your life to the fullest again
                </li>
              </ul>
            </div>
          </div>
          <div>
            <button>How can we help</button>
          </div>
        </div>
        <div className="spine__container--right">
          <p>01</p>
          <img src={back} alt="" />
        </div>
      </div>
    </div>
  );
}
