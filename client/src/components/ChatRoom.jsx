import {
  StyledChatRoom,
  RoomName,
  ChatWindow,
  WriteTextDiv,
} from "../styled/StyledChatRoom.styled";

import {useEffect, useContext, useRef, useState} from "react";
import SocketContext from "../SocketContext";

export const ChatRoom = (props) => {
    const { roomName, resetRoom } = props;
    const socket = useContext(SocketContext)
    const textRef = useRef();
    const [chat, setChat] = useState([]);
    
    const addChat = (data) => {
        setChat([...chat, {msg: data.message, from: data.sender}]);
    }
    useEffect(() => {
        console.log(' chat', chat)
        if(roomName)
        {
            socket.emit("join", {
                room: roomName,
            });
        }
        
        socket.on('message', (data) => {
            addChat(data)
        })
    })

    const sendText = (textRef) => {
        if(textRef.current)
        {
            socket.emit("text", {
                text: textRef.current.value,
                from : 'xx',
            })
        }
    }
    const quitRoom = () => {
        resetRoom();
        socket.emit('leave', {room: roomName})
    }
  return (
    <StyledChatRoom>
      <RoomName>{roomName} room</RoomName>
      <ChatWindow>
        <WriteTextDiv>
          <input ref={textRef} />
          <button onClick={() => {sendText(textRef)}}>send</button>
        </WriteTextDiv>
      </ChatWindow>
        <h4 onClick={() => {quitRoom()}}>Quit Room</h4>
    </StyledChatRoom>
  );
};
