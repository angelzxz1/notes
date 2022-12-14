import Head from "next/head";
// import NavBar from "../navBar";
import { Box, Container } from "@chakra-ui/react";
const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <link
                    rel="shortcut icon"
                    href="/favicon.ico"
                    type="image/x-icon"
                />
                <title>Notes - Homepage</title>
            </Head>
            {/* <NavBar path={router.asPath} /> */}
            <Box maxW="100%">{children}</Box>
        </Box>
    );
};

export default Main;
