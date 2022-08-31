import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
    config: {
        useSystemColorMode: false,
        defaultColorMode: "dark",
        initialColorMode: "dark",
        disableTransitionOnChange: false,
    },
    colors: {},
});

export default theme;
