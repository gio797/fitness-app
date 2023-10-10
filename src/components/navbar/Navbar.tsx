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
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

function Navbar({ isTopOfPage, selectedPage, setSelectedPage }: Props) {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  return (
    <nav className={`nav ${!isTopOfPage && "nav-not-top"}`}>
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
          className="mobile-menu-open-btn"
          onClick={() => setIsMenuToggled(!isMenuToggled)}
        >
          <FaBars size={20} />
        </button>
      )}
      {/* mobile menu modal */}
      {!isAboveMediumScreen && isMenuToggled && (
        <div className="menu-modal">
          <div className="but-wrapper">
            <button
              onClick={() => setIsMenuToggled(!isMenuToggled)}
              className="close-menu-btn"
            >
              <AiOutlineClose size={25} />
            </button>
          </div>

          <div className="mob-menu-links">
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
        </div>
      )}
    </nav>
  );
}

export default Navbar;
