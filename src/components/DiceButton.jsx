import { IconButton } from "@chakra-ui/react";
import React from "react";
import { FaDiceFive } from "react-icons/fa";

const DiceButton = ({handleRandomAdvice}) => {
  return (
    <IconButton
      icon={<FaDiceFive />}
      position="absolute"
      bottom="-28px"
      w="60px"
      h="60px"
      fontSize="2xl"
      bgColor="primary.200"
      _hover={{
        filter: "brightness(110%)",
        boxShadow: "0 0 30px 16px hsla(150, 100%, 66%,30%)",
      }}
      _focus={{ border: "none" }}
      isRound="true"
      onClick={handleRandomAdvice}
      cursor="pointer"
    />
  );
};

export default DiceButton;
