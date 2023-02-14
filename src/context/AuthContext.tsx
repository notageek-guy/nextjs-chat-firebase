import { useContext, createContext, useState, FC } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";
interface AuthContextProps {
  user: any | null;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, loading, error] = useAuthState(auth);
  if (loading) return <div>Loading...</div>;
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
