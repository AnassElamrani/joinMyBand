import { Welcome } from "../components/Welcome";
import SocketContext  from "../SocketContext"
import { io } from "socket.io-client";
import { useEffect } from "react";
const backendUrl = "http://localhost:3300";
const socket = io(backendUrl);

export const Home = () => {
   useEffect(() => {
   })
    return (
        <SocketContext.Provider value={socket}>
            <Welcome/>
        </SocketContext.Provider>
    )
}
