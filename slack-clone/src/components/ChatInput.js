import { Button } from "@mui/material";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import { db } from "../firebase";
import firebase from "firebase/compat/app";

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault(); //prevents refresh

    if (!channelId) {
      return false;
    }

    //go to the rooms, find the selected channelId and add a message corresponding to whatever is in
    //the input field
    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: "Justin Fuller",
      userImage: "https://pngimg.com/uploads/cow/cow_PNG50632.png",
    });

    setInput("");
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
        />
        {/* hidden button so that we can press enter to send a chat message */}
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;
  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    /* important because we sometimes need to override the styles for materialUI buttons */
    display: none !important;
  }
`;