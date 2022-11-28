import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";
import me1 from "../assets/me1.png";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={me1} alt="Founder" />
        <h2>Muzammil Ahmed Khatib</h2>
        <p>Motivation Is Temporary,But Discipline Last Forever.</p>
      </div>
      <aside>
        <h2>Social Media</h2>
        <article>
          <a
            href="https://www.youtube.com/channel/UCu3VQ0I-hXI_Jj1-9q6J8LA"
            target={"blank"}
          >
            <AiFillYoutube /><h6>Youtube</h6>
          </a>
          <a
            href="https://www.instagram.com/muzammil_khatib13/"
            target={"blank"}
          >
            <AiFillInstagram /><h6>Instagram</h6>
          </a>
          <a href="https://github.com/Muzammilkahtib" target={"blank"}>
            <AiFillGithub /><h6>Github.</h6>
          </a>
          <a href="https://www.linkedin.com/in/muzammil-ahmed-khatib-034572225/" target={"blank"}>
            <AiFillLinkedin /><h6>LinkedIn.</h6>
          </a>

        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
