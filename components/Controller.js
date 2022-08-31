import { Flex, Box, Grid, Button } from "@chakra-ui/react";
import ToggleColorMode from "./ToggleColorMode";
import { useColorModeValue } from "@chakra-ui/react";

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Input,
    Textarea,
} from "@chakra-ui/react";

import { useState } from "react";

const ColorPicker = ({ setColor }) => {
    const style = {
        backgroundColor: "red",
        height: "50px",
        borderRadius: "10px",
        cursor: "pointer",
        justifyContent: "center",
        alignItems: "center",
    };
    const Colors = [
        { name: "red", isSelected: false },
        { name: "green", isSelected: false },
        { name: "blue", isSelected: false },
        { name: "yellow", isSelected: false },
        { name: "orange", isSelected: false },
        { name: "purple", isSelected: false },
        { name: "pink", isSelected: false },
        { name: "teal", isSelected: false },
        { name: "cyan", isSelected: false },
    ];

    return (
        <Grid templateColumns="repeat(5, 1fr)" gap={5}>
            {Colors.map((color, index) => (
                <Flex
                    {...style}
                    bg={useColorModeValue(
                        `${color.name}.500`,
                        `${color.name}.200`,
                    )}
                    color={useColorModeValue("white", "black")}
                    onClick={() => {
                        setColor(color.name);
                    }}
                    _hover={{
                        bg: useColorModeValue(
                            `${color.name}.700`,
                            `${color.name}.300`,
                        ),
                    }}
                >
                    {color.name.charAt(0).toUpperCase() + color.name.slice(1)}
                </Flex>
            ))}
        </Grid>
    );
};

const Editor = ({ isOpen, onClose, notesList }) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [color, setColor] = useState("teal");
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Add new note</ModalHeader>
                <ModalCloseButton
                    onClick={() => {
                        setTitle("");
                        setBody("");
                        onClose();
                    }}
                />
                <ModalBody>
                    <Input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <Textarea
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        placeholder="Body"
                    />
                    <Box mt={4}>Select a color</Box>
                    <ColorPicker setColor={setColor} />
                </ModalBody>
                <ModalFooter>
                    <Button
                        colorScheme="blue"
                        mr={3}
                        onClick={() => {
                            notesList((prev) => [
                                ...prev,
                                {
                                    title: title,
                                    body: body,
                                    color: color,
                                },
                            ]);
                            setTitle("");
                            setBody("");
                            onClose();
                        }}
                    >
                        Add note
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

const Controller = ({ addNote }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Flex
            w="100%"
            flex={1}
            borderBottom="1px"
            p={2}
            borderBottomColor={useColorModeValue("black", "white")}
            position="relative"
        >
            <Grid
                w="100%"
                h="100%"
                templateColumns="repeat(auto-fit, minmax(50px, 50px))"
                gap={2}
            >
                <Button
                    onClick={() => {
                        onOpen();
                        // addNote((prev) => [...prev, "new note"]);
                    }}
                >
                    +
                </Button>
                <Button
                    onClick={() => {
                        addNote((prev) => prev.slice(0, -1));
                    }}
                >
                    -
                </Button>
                <Button
                    onClick={() => {
                        addNote([]);
                    }}
                >
                    Clear
                </Button>
            </Grid>
            <Box flex={1} align="right">
                <ToggleColorMode />
            </Box>
            <Editor isOpen={isOpen} onClose={onClose} notesList={addNote} />
        </Flex>
    );
};

export default Controller;
