import React from "react";
import { FiLogOut } from "react-icons/fi";
import { Flex, IconButton } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
export default function Header() {
  const Router = useRouter();
  const [signOut] = useSignOut(auth);
  const { user } = useAuth();
  const { colorMode, toggleColorMode } = useColorMode();
  const handleLogout = async () => {
    try {
      await signOut();
      Router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Flex justifyContent="flex-end" p={4} align="center" gap="4">
      <IconButton
        aria-label="Toggle dark mode"
        onClick={toggleColorMode}
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      />
      {user ? (
        <>
          <IconButton
            aria-label="Logout"
            icon={<FiLogOut size={20} />}
            onClick={handleLogout}
          />
        </>
      ) : null}
    </Flex>
  );
}
