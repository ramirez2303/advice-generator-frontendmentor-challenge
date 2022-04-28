import { extendTheme } from "@chakra-ui/react";

const styles = {
  global: {
    "html, body": {
      fontFamily: "'Manrope', sans-serif",
      backgroundColor: "secondary.300",
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
};

const colors = {
  primary: {
    100: "hsl(193, 38%, 86%)",
    200: "hsl(150, 100%, 66%)",
  },
  secondary: {
    100: "hsl(217, 19%, 38%)",
    200: "hsl(217, 19%, 24%)",
    300: "hsl(218, 23%, 16%)",
  },
};

export default extendTheme({ styles, colors });
