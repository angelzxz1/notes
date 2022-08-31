import { motion } from "framer-motion";
import { CloseIcon, EditIcon } from "@chakra-ui/icons";
import { useState } from "react";
import {
	IconButton,
	Flex,
	useColorModeValue,
	chakra,
	shouldForwardProp,
	Heading,
	Text,
	Switch,
} from "@chakra-ui/react";
const StyledDiv = chakra(motion.div, {
	shouldForwardProp: prop => {
		return shouldForwardProp(prop) || prop === "transition";
	},
});

const Note = ({ children, bg, color, data, list, colSch }) => {
	const [isClicked, setIsClicked] = useState(false);
	const [titleCont, setTitleCont] = useState(data.title);
	const [bodyCont, setBodyCont] = useState(data.body);
	const [isDrag, setIsDrag] = useState(true);
	return (
		<StyledDiv
			// whileHover={{ scale: 1.1 }}
			// whileTap={{ scale: 0.95 }}
			drag={isDrag}
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
						icon={<CloseIcon />}
						colorScheme={colSch}
						onClick={() => {
							list(prev => prev.filter(n => n !== data));
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
						<Heading fontSize="xl" fontWeight="bold">
							{titleCont}
						</Heading>
					</Flex>
					<Flex h="100%" w="100%" flex={1}>
						<Text fontSize="lg">{bodyCont}</Text>
					</Flex>
				</Flex>
				<Flex alignSelf="flex-end" flex={1} align="center">
					<Switch
						size="lg"
						onChange={() => {
							if (isDrag) {
								setIsDrag(false);
							} else {
								setIsDrag(true);
							}
						}}
						isChecked={isDrag}
					/>
					<IconButton
						color={useColorModeValue("white", "black")}
						colorScheme={colSch}
						border="1px"
						icon={<EditIcon />}
					/>
				</Flex>
			</Flex>
		</StyledDiv>
	);
};

export default Note;
