import { motion } from "framer-motion";
import { Button, chakra, shouldForwardProp } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import { Flex, Box, Grid, IconButton } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useState } from "react";
import {
    Editable,
    EditableInput,
    EditableTextarea,
    EditablePreview,
} from "@chakra-ui/react";
const StyledDiv = chakra(motion.div, {
    shouldForwardProp: (prop) => {
        return shouldForwardProp(prop) || prop === "transition";
    },
});

const Note = ({ children, bg, color, data, list, colSch }) => {
    const [isClicked, setIsClicked] = useState(false);
    const [titleCont, setTitleCont] = useState(data.title);
    const [bodyCont, setBodyCont] = useState(data.body);
    return (
        <StyledDiv
            // whileHover={{ scale: 1.1 }}
            // whileTap={{ scale: 0.95 }}
            drag
            minH={300}
            minW={300}
            maxW={300}
            p={2}
            borderRadius="10px"
            border="1px"
            borderColor={useColorModeValue("black", "white")}
            bg={useColorModeValue(bg.light, bg.dark)}
            color={useColorModeValue(color.light, color.dark)}
            dragElastic={0}
            dragMomentum={false}
            zIndex={isClicked ? 1 : 0}
            position="absolute"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                ease: [0, 0.71, 0.2, 1.01],
            }}
            onMouseDown={() => {
                setIsClicked(true);
            }}
            onMouseUp={() => {
                setIsClicked(false);
            }}
        >
            <Flex w="100%" minH={300} direction="column" justify="space-around">
                <Flex justify="right" flex={1}>
                    <IconButton
                        aria-label="close"
                        icon={<AddIcon transform="rotateZ(45deg)" />}
                        bg="red"
                        colorScheme="red"
                        color="white"
                        onClick={() => {
                            list((prev) => prev.filter((n) => n !== data));
                        }}
                    />
                </Flex>
                <Flex w="100%" direction="column" flex={10}>
                    <Flex
                        justify="center"
                        borderBottom="1px"
                        borderBottomColor={useColorModeValue(
                            color.light,
                            color.dark,
                        )}
                    >
                        <Editable defaultValue={titleCont}>
                            <EditablePreview value={titleCont} />
                            <EditableInput
                                // value={titleCont}
                                onChange={(e) => {
                                    if (e.target.value.length >= 2) {
                                        setTitleCont(e.target.value);
                                    } else {
                                        setTitleCont("Untitled");
                                    }
                                    console.log(titleCont);
                                }}
                            />
                        </Editable>
                    </Flex>
                    <Box>
                        <Editable defaultValue={bodyCont}>
                            <EditablePreview />
                            <EditableTextarea
                                // value={bodyCont}
                                onChange={(e) => {
                                    if (bodyCont.length > 0) {
                                        setBodyCont(e.target.value);
                                    } else {
                                        setBodyCont("-No Content-");
                                    }
                                }}
                            />
                        </Editable>
                    </Box>
                </Flex>
                <Flex alignSelf="flex-end" flex={1}>
                    <Button
                        color={useColorModeValue("white", "black")}
                        colorScheme={colSch}
                        border="1px"
                    >
                        Edit
                    </Button>
                </Flex>
            </Flex>
        </StyledDiv>
    );
};

export default Note;
