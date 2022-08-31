import { ChakraProvider } from "@chakra-ui/react";
import theme from "../lib/theme";
import Main from "../components/layouts/main";
function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <Main>
                <Component {...pageProps} />
            </Main>
        </ChakraProvider>
    );
}

export default MyApp;
