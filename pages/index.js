import Note from "../components/Note";
import { useState } from "react";
import { Flex, Box, Grid, Button } from "@chakra-ui/react";
import Controller from "../components/Controller";
const Page = () => {
    const [notes, setNotes] = useState([]);
    return (
        <Flex direction="column">
            <Controller addNote={setNotes} />
            <Flex flex={1} wrap="wrap" justify="center" position="relative">
                {notes.map((note, index) => {
                    console.log(note);
                    return (
                        <Note
                            key={index}
                            colSch={note.color}
                            bg={{
                                light: `${note.color}.500`,
                                dark: `${note.color}.200`,
                            }}
                            color={{ light: "white", dark: "black" }}
                            data={note}
                            list={setNotes}
                        />
                    );
                })}
            </Flex>
        </Flex>
    );
};

export default Page;
