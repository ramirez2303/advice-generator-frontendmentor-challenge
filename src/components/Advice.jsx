import { Heading, Text } from "@chakra-ui/react";
import React from "react";

const Advice = ({ advice }) => {
  return (
    <>
      <Text
        fontSize="x-small"
        letterSpacing={3.5}
        fontWeight="600"
        color="primary.200"
      >
        {`ADVICE #${advice.id}`}
      </Text>
      <Heading textAlign="center" color="primary.100" fontSize="xl">
        {`"${advice.advice}"`}
      </Heading>
    </>
  );
};

export default Advice;
