import { Button, Center, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";
export default function GoogleAuthLogin() {
  const Router = useRouter();
  const [signInWithGoogle, loading] = useSignInWithGoogle(auth);
  const handleLogin = async () => {
    try {
      await signInWithGoogle();
      toast({
        title: "Signed in successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      Router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  const toast = useToast();
  if (loading) return <div>Loading...</div>;

  return (
    <Button
      onClick={handleLogin}
      w={"full"}
      maxW={"md"}
      variant={"outline"}
      leftIcon={<FcGoogle />}
    >
      <Center>
        <Text>Sign in with Google</Text>
      </Center>
    </Button>
  );
}
