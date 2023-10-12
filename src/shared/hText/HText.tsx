import React from "react";
import "./hText.css";
type Props = {
  children: React.ReactNode;
};

function HText({ children }: Props) {
  return <h1>{children}</h1>;
}

export default HText;
