import "./navbar.css";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../assets/Logo.png";
import Link from "./Link";

type Props = {
  selectedPage: string;
  setSelectedPage: (value: string) => void;
};

function Navbar({ selectedPage, setSelectedPage }: Props) {
  return (
    <nav className="nav">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="desk-menu">
        <div className="links">
          <Link
            page="Home"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link
            page="Benefits"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link
            page="Our Classes"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link
            page="Contact us"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        </div>
        <div className="sign-in">
          <p>Sign In</p>
          <button>Become a Member</button>
        </div>
      </div>
      {/* <div className="mobile-menu">
        <FaBars size={20} />
      </div> */}
    </nav>
  );
}

export default Navbar;
