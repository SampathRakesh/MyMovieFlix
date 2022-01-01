import React, { useEffect, useState } from "react";
import "./nav.css";
// import { useNavigate } from "react-router-dom";
function Navbar() {
  const [show, handleshow] = useState(false);
  // const navigate = useNavigate();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleshow(true);
      } else {
        handleshow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`navbar ${show && "navblack"}`}>
      <img
        className="navlogo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="netflix logo"
      ></img>

      <img
        className="navavatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="netflix profile logo"
      ></img>
      {/* <button
        className="button"
        // onClick={() => {
        //   navigate("/Search.jsx");
        // }}
      >
        BUTTON
      </button> */}
    </div>
  );
}

export default Navbar;
