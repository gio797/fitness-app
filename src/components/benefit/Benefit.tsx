import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../../shared/type";
import "./benefit.css";

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

function Benefit({ icon, title, description, setSelectedPage }: Props) {
  return (
    <div className="benefit">
      <div className="benefit-circle">{icon}</div>
      <h4>{title}</h4>
      <p>{description}</p>
      <AnchorLink
        className="link"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
      >
        <p>Learn More</p>
      </AnchorLink>
    </div>
  );
}

export default Benefit;
