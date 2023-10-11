import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../../shared/type";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

function Link({ page, selectedPage, setSelectedPage }: Props) {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      className={`link ${selectedPage === lowerCasePage} ? 'text-active' : ''`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
}

export default Link;
