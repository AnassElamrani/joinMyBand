import guitar from "../assets/icons/electric-guitar.png"
import piano from "../assets/icons/piano.png"
import drums from "../assets/icons/drum-set.png"
import { StyledChooseRoom, StyledRoom } from "../styled/StyledChooseRoom.styled";
import { useState, useEffect } from "react";
import { io } from "socket.io-client";

const rooms = [{name:'Guitar', logo: guitar}, {name:'Piano', logo: piano}, {name:'Drums', logo: drums}];

const socket = io("ws://localhost:3300");

export const ChooseRoom = () =>  {
const [selectedRoom, setSelectedRoom] = useState();

useEffect(() => {
 console.log('~~', selectedRoom);
 if(ChooseRoom)
 {

    socket.on("connect", () => {
        alert('hello')
      socket.send("Hello!");
    
    });
 } 
})

    return (
        <StyledChooseRoom>
            <h2>Choose a room</h2>
       {
           rooms.map((room, index) => {
               return(
                   <StyledRoom key={index} onClick={() => {setSelectedRoom(room.name)}}>
                   <img src={room.logo} />
                   <h2>{room.name}</h2>
                    </StyledRoom>
                   )
                })
            }
    </StyledChooseRoom>
    )
}