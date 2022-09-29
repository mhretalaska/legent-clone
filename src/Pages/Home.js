import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import "../assets/styles/Home.scss";
import girl from "../assets/images/girl.png";
import line from "../assets/images/line.svg";
import Spine from "../components/Spine";
import Contact from "../components/Contact";
import Detail from "../components/Detail";
export default function Home() {
  return (
    <div>
      <div className="container">
        <Navbar />
        <div className="image">
          <img src={girl} alt="" />
        </div>
        <motion.div className="content">
          <motion.p>
            <motion.span
              initial={{
                y: 2000,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1.2,
              }}
            >
              Live your life to the
            </motion.span>
            <motion.span
              initial={{
                y: 2000,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1.5,
              }}
            >
              fullest again.
              <img src={line} alt="" />
            </motion.span>
          </motion.p>
          <motion.button
            initial={{
              y: 2000,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1.8,
            }}
          >
            Start your visit
          </motion.button>
        </motion.div>
      </div>
      <Spine />
      <div>
        <Contact />
      </div>
      <Detail />
    </div>
  );
}
