import AuthRoute from "@/auth/AuthRoute";
import ChatBox from "@/components/ChatBox";
import ChatRoom from "@/components/ChatRoom";
import Layout from "@/components/Layout";
import { Timestamp } from "firebase/firestore";
import { Container } from "@chakra-ui/react";
import { query, orderBy, limit } from "firebase/firestore";
import React, { useState, useRef, useEffect } from "react";
import { db } from "@/firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import useData from "@/hooks/useData";
export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);
  const btmListRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const messageRef = collection(db, "messages");
  const { uid, displayName, photoURL } = useData();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.target.value);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimedMessage = newMessage.trim();
    if (trimedMessage === "") return;
    try {
      await addDoc(messageRef, {
        text: trimedMessage,
        createdAt: Timestamp.now(),
        uid,
        displayName,
        photoURL,
      });
      setNewMessage("");
      btmListRef.current?.scrollIntoView({ behavior: "smooth" });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);
  const q = query(messageRef, orderBy("createdAt"), limit(25));
  const [value] = useCollection(q, {
    snapshotListenOptions: { includeMetadataChanges: true },
  });
  useEffect(() => {
    if (value) {
      const data = value.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMessages(data);
    }
    return () => {
      setMessages([]);
    };
  }, [value]);

  return (
    <AuthRoute>
      <Layout>
        <Container maxW="container.xl">
          <ChatRoom btmListRef={btmListRef} messageData={messages} />
          <ChatBox
            inputRef={inputRef}
            btmListRef={btmListRef}
            messages={messages}
            newMessage={newMessage}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </Container>
      </Layout>
    </AuthRoute>
  );
}
