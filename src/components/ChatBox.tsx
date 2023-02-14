import { Box, Flex, IconButton, Input, Text } from "@chakra-ui/react";
interface ChatBoxProps {
  inputRef: React.RefObject<HTMLInputElement>;
  btmListRef: React.RefObject<HTMLDivElement>;
  messages: any[];
  newMessage: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

import { BiSend, BiImageAdd } from "react-icons/bi";
export default function ChatBox({
  inputRef,
  newMessage,
  handleChange,
  handleSubmit,
}: ChatBoxProps) {
  return (
    <Box
      position={"fixed"}
      bottom={"14"}
      left={0}
      right={0}
      height={"60px"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <form onSubmit={handleSubmit}>
        <Flex
          w={"full"}
          maxW={"md"}
          p="4"
          gap="4"
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Input
            ref={inputRef}
            value={newMessage}
            onChange={handleChange}
            type="text"
            placeholder="Type your message here"
          />

          <IconButton
            type="submit"
            aria-label="Send message"
            icon={<BiSend />}
            bg="purple.500"
            textColor="white"
            _hover={{
              bg: "purple.600",
            }}
            _active={{
              bg: "purple.700",
              transform: "scale(0.95)",
            }}
          />
        </Flex>
      </form>
    </Box>
  );
}
