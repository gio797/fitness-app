import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../../shared/type";
import "./benefit.css";
import { motion } from "framer-motion";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

function Benefit({ icon, title, description, setSelectedPage }: Props) {
  return (
    <motion.div variants={childVariant} className="benefit">
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
    </motion.div>
  );
}

export default Benefit;
