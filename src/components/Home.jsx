import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me2 from "../assets/me2.png";

const Home = () => {
  const clientCount = useRef(null);
  const projectCount = useRef(null);


  const animationClientsCount = () =>
    animate(0, 25, {
      duration: 2.5,
      onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
    });
    
  const animationProjectsCount = () =>
  animate(0, 30, {
    duration: 2.5,
    onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
  });

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };

  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Muzammil Ahmed Khatib
          </motion.h1>
          <Typewriter
            options={{
              strings: ["A Developer", "A Designer", "A Cricketer"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />
          <div>
            <a href="mailto:muzammilahmedkhaib@gmail.com">Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />{" "}
            </a>
          </div>
          <article>
            <p>
              +
              <motion.span
                whileInView={animationClientsCount}
                ref={clientCount}
              >
                25
              </motion.span>
            </p>
            <span>Templates</span>
          </article>
          <aside>
            <article>
              <p>
                +<motion.span  whileInView={animationProjectsCount} ref={projectCount} >30</motion.span>
              </p>
              <span>Project Done</span>
            </article>
            <article data-special>
              <p>Contact</p>
              <span>muzammilahmedkhaib@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img className="circular--square" src={me2} alt="Muzammil" />
      </section>
      <a href="#work"><BsChevronDown /></a>
      
    </div>
  );
};

export default Home;
