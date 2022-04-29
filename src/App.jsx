import { Spinner, Stack } from "@chakra-ui/react";

import useAdvice from "./hooks/useAdvice";
import { useState } from "react";

import Advice from "./components/Advice";
import Divider from "./components/Divider";
import DiceButton from "./components/DiceButton";

function App() {
  const [click, setClick] = useState(0);

  const handleRandomAdvice = () => {
    setClick(Math.random);
  };

  const { advice, isLoading } = useAdvice(click);

  return (
    <div className="App">
      <Stack
        w={{ base: "90%", sm: "450px", md: "500px" }}
        h={{ base: "320px", sm: "300px" }}
        bgColor="secondary.200"
        borderRadius="2xl"
        boxShadow="rgba(0, 0, 0, 0.56) 0px 22px 70px 4px"
        alignItems="center"
        gap={8}
        pt={{ base: 12, md: 16 }}
        px={{ base: 6, sm: 12 }}
        position="relative"
        m="auto"
      >
        <Stack alignItems="center" gap={5}>
          {isLoading ? <Spinner color="#fff" /> : <Advice advice={advice} />}
        </Stack>
        <Divider />
        <DiceButton handleRandomAdvice={handleRandomAdvice} />
      </Stack>
    </div>
  );
}

export default App;
