import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { IoLogoVercel } from "react-icons/io5";
export default function Footer() {
  return (
    <Box as="footer" position={"fixed"} bottom={0} right="16" py="4">
      <Button
        px="4"
        py="2"
        rounded="md"
        shadow="md"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="blue.500"
        gap="2"
        fontSize={"bold"}
        textColor="white"
        _hover={{
          bg: "blue.600",
        }}
        _active={{
          bg: "blue.700",
          transform: "scale(0.95)",
        }}
      >
        <IoLogoVercel size={20} />
        Powered by Vercel
      </Button>
    </Box>
  );
}
