import React from "react";
import { motion } from "framer-motion";
import "../assets/styles/contact.scss";
import person from "../assets/images/person.png";
import message from "../assets/images/message.svg";
import female from "../assets/images/female-doc.png";
export default function Contact() {
  return (
    <div className="contact">
      <div className="contact__container">
        <div className="contact__img">
          <img src={person} alt="" />
        </div>
        <div className="contact__text">
          <div>
            <img src={message} alt="" />
          </div>
          <p>You don’t need to wait to get treatment. Talk to our team 24/7.</p>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.901 13.901 0 0 0 4 1.205c.139.02.322.042.55.064a.5.5 0 0 1 .449.498z"
                fill="rgb(4, 19, 103)"
              />
            </svg>
            092-904-1479
          </button>
        </div>
        <motion.div
          className="content__absolute"
          initial={{
            y: 300,
            opacity: 0.8,
          }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src={female} alt="" />
        </motion.div>
      </div>
    </div>
  );
}
