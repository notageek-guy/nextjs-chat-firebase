import { useAuth } from "@/context/AuthContext";

export default function useData() {
  const { user } = useAuth();
  const { displayName, email, photoURL, uid } = user;
  return {
    displayName,
    email,
    photoURL,
    uid,
  };
}
