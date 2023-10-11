import { SelectedPage } from "../../shared/type";
import "./home.css";
import useMediaQuery from "../../hooks/useMediaQuery";
import ActionButton from "../../shared/actionButton/ActionButton";
import HomePageText from "../../assets/HomePageText.png";
import HomePageGraphic from "../../assets/HomePageGraphic.png";
import SponsorForbes from "../../assets/SponsorForbes.png";
import SponsorRedBull from "../../assets/SponsorRedBull.png";
import SponsorFortune from "../../assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function Home({ setSelectedPage }: Props) {
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px");
  return (
    <section
      id="home"
      className={`home ${isAboveMediumScreen && "padding-wide-screen"}`}
    >
      <div className={`${isAboveMediumScreen && "flex"}`}>
        <div className="left-section">
          <div className="headers">
            <img src={HomePageText} alt="home-page-text" />
            <p>
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </div>
          <div className="actions">
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="link"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </div>
        </div>
        <div className="right-section">
          <img src={HomePageGraphic} alt="home-page-graphic" />
        </div>
      </div>
      {isAboveMediumScreen && (
        <div>
          <img src={SponsorRedBull} alt="red-bull" />
          <img src={SponsorForbes} alt="forbes" />
          <img src={SponsorFortune} alt="fortune" />
        </div>
      )}
    </section>
  );
}

export default Home;
