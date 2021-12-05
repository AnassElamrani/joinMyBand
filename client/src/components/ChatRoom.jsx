import {
  StyledChatRoom,
  RoomName,
  ChatWindow,
  WriteTextDiv,
  MessageBox,
  BottomDiv,
} from "../styled/StyledChatRoom.styled";
import userLogo from "../assets/icons/user.png";
import { useEffect, useContext, useRef, useState } from "react";
import SocketContext from "../SocketContext";
import UsernameContext from "../UsernameContext";

export const ChatRoom = (props) => {
  const { roomName, resetRoom } = props;
  const socket = useContext(SocketContext);
  const username = useContext(UsernameContext);
  const textRef = useRef();
  const [chat, setChat] = useState([]);

  const addChat = (data) => {
    setChat([...chat, { msg: data.message, from: data.sender }]);
  };
  useEffect(() => {
    console.log(" chat", chat);
    if (roomName) {
      socket.emit("join", {
        room: roomName,
      });
    }
    return () => {
      socket.emit("leave", { room: roomName });
    };
  }, [roomName]);

  useEffect(() => {
    socket.on("message", (data) => {
      addChat(data);
    });
  }, [chat]);

  const sendText = (textRef) => {
    if (textRef.current && textRef.current.value) {
      socket.emit("text", {
        room: roomName,
        text: textRef.current.value,
        from: username,
      });
      textRef.current.value = "";
    }
  };
  const quitRoom = () => {
    resetRoom();
    socket.emit("leave", { room: roomName });
  };
  return (
    <StyledChatRoom>
      <RoomName>{roomName} room</RoomName>
      <ChatWindow>
        <WriteTextDiv>
          {chat.map((el, index) => {
            return (
              <MessageBox key={index}>
                <img src={userLogo} alt="user logo" />
                {el.from == username ? <h4>me</h4> : <h4>{el.from}</h4>}
                <p>{el.msg}</p>
              </MessageBox>
            );
          })}
        </WriteTextDiv>
        <BottomDiv>
          <input ref={textRef} />
          <button
            onClick={() => {
              sendText(textRef);
            }}
          >
            send
          </button>
        </BottomDiv>
      </ChatWindow>
      <h4
        onClick={() => {
          quitRoom();
        }}
      >
        Quit Room
      </h4>
    </StyledChatRoom>
  );
};
