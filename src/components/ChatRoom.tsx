import React, { Fragment } from "react";
import { formatRelative } from "date-fns";
import { Avatar, Box, Center, Divider, Flex, Text } from "@chakra-ui/react";
interface ChatRoomProps {
  btmListRef: React.MutableRefObject<HTMLDivElement | null>;
  messageData: {
    id: string;
    text: string;
    createdAt: {
      seconds: number;
      nanoseconds: number;
    };
    uid: string;
    displayName: string;
    photoURL: string;
  }[];
}
export default function ChatRoom({ btmListRef, messageData }: ChatRoomProps) {
  return (
    <Box>
      <div ref={btmListRef}></div>
      <Center my="4">
        <Text fontSize={"4xl"} fontWeight={"bold"} mb="2">
          Chat Room
          <span role="img" aria-label="chat">
            💬
          </span>
        </Text>
      </Center>

      {messageData.map((message) => {
        return (
          <Fragment key={message.id}>
            <Box px="4" py="2" rounded="md" display="flex" flexDir={"column"}>
              <Flex justifyContent="flex-start" gap="2" flexDir="column">
                <Avatar src={message.photoURL} />
                <Text fontSize="sm" mr="2">
                  <span>{message.displayName}</span>
                </Text>
                <Flex justifyContent="flex-end">
                  <Box bg="purple.500" p="2" rounded="md" shadow="md">
                    <Text fontSize="sm" mr="2">
                      {message.text}
                    </Text>
                  </Box>
                </Flex>
                <Text fontSize="xs" color="gray.500" mt="2">
                  {formatRelative(
                    new Date(message.createdAt.seconds * 1000),
                    new Date()
                  )}
                </Text>
              </Flex>
              <Divider orientation="horizontal" mt="2" mb="2" />
            </Box>
          </Fragment>
        );
      })}
    </Box>
  );
}
