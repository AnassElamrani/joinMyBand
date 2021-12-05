import { Welcome } from "../components/Welcome";
import SocketContext  from "../SocketContext"
import { io } from "socket.io-client";
import { useEffect } from "react";

const test = 'p'
const socket = io("http://localhost:3300");

export const Home = () => {
   useEffect(() => {
    // socket.emit("msg", {
    //     text: 's',
    //   });
   })
    return (
        <SocketContext.Provider value={socket}>
            <Welcome/>
        </SocketContext.Provider>
    )
}
