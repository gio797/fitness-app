import useMediaQuery from "../../hooks/useMediaQuery";

import "./footer.css";
import Logo from "../../assets/Logo.png";

function Footer() {
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px");
  return (
    <section
      className={
        isAboveMediumScreen ? "footer-section-wide-screen" : "footer-section"
      }
    >
      <footer className="footer">
        <div>
          <img alt="logo" src={Logo} />
          <p>
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div>
          <h4>Links</h4>
          <p>Massa orci senectus</p>
          <p>Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </div>
        <div>
          <h4>Contact Us</h4>
          <p>Tempus metus mattis risus volutpat egestas.</p>
          <p>(333)425-6825</p>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
