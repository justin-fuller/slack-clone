import { StarBorderOutlined } from "@mui/icons-material";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useSelector } from "react-redux";
import { selectRoomId } from "../features/appSlice";
import ChatInput from "./ChatInput";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import Message from "./Message";

function Chat() {
  const chatRef = useRef(null);
  const roomId = useSelector(selectRoomId);
  const [roomDetails] = useDocument(
    //if there is a roomId present, query the firebase database, go into rooms, and get the document with the room id
    roomId && db.collection("rooms").doc(roomId)
  );

  const [roomMessages, loading] = useCollection(
    roomId &&
      db
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
  );

  //effect for scrolling the lastest sent message to the bottom of the screen
  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [roomId, loading]);

  return (
    <ChatContainer>
      {roomDetails &&
        roomMessages && ( //load the page only if there is a room selected and there is messages
          <>
            <Header>
              <HeaderLeft>
                <h4>
                  <strong>#{roomDetails?.data().name}</strong>
                </h4>
                <StarBorderOutlined></StarBorderOutlined>
              </HeaderLeft>
              <HeaderRight>
                <p>
                  <InfoOutlinedIcon /> Details
                </p>
              </HeaderRight>
            </Header>
            <ChatMessages>
              {roomMessages?.docs.map((doc) => {
                const { message, timestamp, user, userImage } = doc.data();

                return (
                  <Message
                    key={doc.id}
                    message={message}
                    timestamp={timestamp}
                    user={user}
                    userImage={userImage}
                  />
                );
              })}
              <ChatBottom ref={chatRef} />
            </ChatMessages>
            <ChatInput
              chatRef={chatRef}
              channelName={roomDetails?.data().name}
              channelId={roomId}
            />
          </>
        )}
      {/* wrapping in a fragment so that we the ChatMessages component next to the Header Component */}
    </ChatContainer>
  );
}

export default Chat;

const ChatBottom = styled.div`
  padding-bottom: 200px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;

const ChatMessages = styled.div``;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 10px;
  }

  > h4 > .MuiSvgIcon-root {
    margin-left: 20px;
    font-size: 10px;
  }
`;

const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  > p > .MuiSvgIcon-root {
  }
`;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;
