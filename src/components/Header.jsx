import React from "react";

const Header = () => {
  return (
    <nav>
      <NavContent />
    </nav>
  );
};

const NavContent = () => (
  <>
    <h2>MUZAMMIL AHMED KHATIB.</h2>
    <div>
      <a href="#home">Home</a>
      <a href="#work">Work</a>
      <a href="#timeline">Experience</a>
      <a href="#services">Skills</a>
      <a href="#testimonial">All Studies</a>
      <a href="#contact">Contact</a>
    </div>
    <a href="mailto:princekhatib123@gmail.com">
      <button>Email</button>
    </a>
  </>
);

export default Header;
