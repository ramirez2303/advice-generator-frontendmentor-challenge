import { Image } from "@chakra-ui/react";
import React from "react";
import dividerDesk from "../images/pattern-divider-desktop.svg";
import dividerMob from "../images/pattern-divider-mobile.svg";

const Divider = () => {
  return (
    <>
      <Image
        src={dividerDesk}
        alt="card divider"
        display={{ base: "none", md: "flex" }}
      />
      <Image
        src={dividerMob}
        alt="card divider"
        display={{ base: "flex", md: "none" }}
      />
    </>
  );
};

export default Divider;
