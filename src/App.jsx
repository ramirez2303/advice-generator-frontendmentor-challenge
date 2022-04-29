import { Heading, Image, Stack, Text } from "@chakra-ui/react";
import dividerDesk from "./images/pattern-divider-desktop.svg";
import dividerMob from "./images/pattern-divider-mobile.svg";
import diceIcon from "./images/icon-dice.svg";

function App() {
  return (
    <div className="App">
      <Stack
        w={{ base: "90%", sm: "450px", md: "500px" }}
        h={{ base: "320px", sm: "300px" }}
        bgColor="secondary.200"
        borderRadius="2xl"
        boxShadow="rgba(0, 0, 0, 0.56) 0px 22px 70px 4px"
        justifyContent="flex-start"
        alignItems="center"
        gap={8}
        pt={{ base: 12, md: 16 }}
        px={{ base: 6, sm: 12 }}
        position="relative"
        m="auto"
      >
        <Stack alignItems="center" gap={5}>
          <Text
            fontSize="x-small"
            letterSpacing={3.5}
            fontWeight="600"
            color="primary.200"
          >
            ADVICE #117
          </Text>
          <Heading textAlign="center" color="primary.100" fontSize="xl">
            "Frase random Frase random Frase random Frase random Frase random
            Frase random Frase random Frase random".
          </Heading>
        </Stack>
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
        <Stack
          position="absolute"
          bottom="-28px"
          p={4}
          bgColor="primary.200"
          borderRadius="full"
        >
          <Image src={diceIcon} alt="dice icon button" />
        </Stack>
      </Stack>
    </div>
  );
}

export default App;
