import GoogleAuthLogin from "@/components/GoogleAuthLogin";
import Layout from "@/components/Layout";
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BsFillChatDotsFill } from "react-icons/bs";
export default function Login() {
  return (
    <Layout>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        h={"100vh"}
      >
        <Box w={"full"} maxW={"md"} p="4">
          <Flex justifyContent="center" alignItems="center" gap="2" my='4'>
            <BsFillChatDotsFill size={40} />
            <Text fontSize="4xl" fontWeight="bold">
              Chat App
            </Text>
          </Flex>
          <GoogleAuthLogin />
        </Box>
      </Box>
    </Layout>
  );
}
