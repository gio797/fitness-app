import { motion } from "framer-motion";
import { BenefitType, SelectedPage } from "../../shared/type";
import "./benefits.css";
import HText from "../../shared/hText/HText";
import { HiAcademicCap, HiOutlineUserGroup } from "react-icons/hi";
import { AiOutlineHome } from "react-icons/ai";
import Benefit from "../benefit/benefit";
import useMediaQuery from "../../hooks/useMediaQuery";

const benefits: Array<BenefitType> = [
  {
    icon: <AiOutlineHome size={25} />,
    title: "State of the Art Facilities",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
  },
  {
    icon: <HiOutlineUserGroup size={25} />,
    title: "100's of Diverse Classes",
    description:
      "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
  },
  {
    icon: <HiAcademicCap size={25} />,
    title: "Expert and Pro Trainers",
    description:
      "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function Benefits({ setSelectedPage }: Props) {
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px");
  return (
    <section
      id="#benefits"
      className={isAboveMediumScreen ? "benefits-wide-screen" : "benefits"}
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <div className="benefits-header">
          <HText>MORE THAN JUST GYM.</HText>
          <p className="benefits-desc">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Benefits;
