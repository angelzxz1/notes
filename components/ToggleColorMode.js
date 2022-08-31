import { useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ToggleColorMode = () => {
    const { toggleColorMode } = useColorMode();
    return (
        <IconButton
            onClick={toggleColorMode}
            aria-label="Toggle Color Mode"
            icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
            colorScheme={useColorModeValue("purple", "orange")}
            borderRadius="full"
        />
    );
};
export default ToggleColorMode;
