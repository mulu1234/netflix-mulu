import React, { useEffect, useState } from "react";
import "./Nav.css";
import logo from "../assets/netflix.png"
function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return (e) => {
      window.removeEventListener("scroll",e);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src={logo} alt="Netflix Logo" />
      <img
        className="nav__avater"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Avatar Logo"
      />
    </div>
  );
}

export default Nav;
//   const [show, handleShow] = useState(false);
//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       if (window.scrollY > 100) {
//         handleShow(true);
//       } else handleShow(false);
//     });
//     return () => {
//       window.removeEventListener("scroll");
//     };
//   }, []);
