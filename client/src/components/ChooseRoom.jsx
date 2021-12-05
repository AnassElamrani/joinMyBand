import guitar from "../assets/icons/electric-guitar.png";
import piano from "../assets/icons/piano.png";
import drums from "../assets/icons/drum-set.png";
import {
  StyledChooseRoom,
  StyledRoom,
} from "../styled/StyledChooseRoom.styled";
import { useState, useEffect } from "react";

import {ChatRoom} from "./ChatRoom";

const rooms = [
  { name: "Guitar", logo: guitar },
  { name: "Piano", logo: piano },
  { name: "Drums", logo: drums },
];

export const ChooseRoom = () => {
  const [selectedRoom, setSelectedRoom] = useState();

  const resetRoom = () => {
      setSelectedRoom(null);
  }

  return (
    <>
      {!selectedRoom ? (
        <StyledChooseRoom>
          <h2>Choose a room</h2>
          {rooms.map((room, index) => {
            return (
              <StyledRoom
                key={index}
                onClick={() => {
                  setSelectedRoom(room.name);
                }}
              >
                <img src={room.logo} />
                <h2>{room.name} room</h2>
              </StyledRoom>
            );
          })}
        </StyledChooseRoom>
      ) : (
        <ChatRoom resetRoom={resetRoom} roomName={selectedRoom} />
      )}
    </>
  );
};
