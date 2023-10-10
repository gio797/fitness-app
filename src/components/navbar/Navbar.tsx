import "./navbar.css";

import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "../../shared/type";
import useMediaQuery from "../../hooks/useMediaQuery";
import { useState } from "react";
import ActionButton from "../../shared/actionButton/ActionButton";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

function Navbar({ selectedPage, setSelectedPage }: Props) {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  return (
    <nav className="nav">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      {isAboveMediumScreen ? (
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
            <ActionButton setSelectedPage={setSelectedPage}>
              Become a Member
            </ActionButton>
          </div>
        </div>
      ) : (
        <button
          className="mobile-menu"
          onClick={() => setIsMenuToggled(!isMenuToggled)}
        >
          <FaBars size={20} />
        </button>
      )}
    </nav>
  );
}

export default Navbar;
