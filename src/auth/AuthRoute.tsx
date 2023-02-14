import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import { FC } from "react";
const AuthRoute: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const Router = useRouter();
  const { user } = useAuth();
  if (user) {
    return <>{children}</>;
  } else {
    Router.push("/login");
    return null;
  }
};

export default AuthRoute;
