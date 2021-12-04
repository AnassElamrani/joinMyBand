import {StyledWelcome, LeftDiv, RightDiv, UsernameError, Logout} from "../styled/StyledWelcome.styled";
import {useState, useEffect, useRef} from "react";
import { useCookies } from "react-cookie";
import { ChooseRoom } from "./ChooseRoom";

export const Welcome = ()  => {
    const [username, setUsername] = useState();
    const [usernameErr, setUserNameErr] = useState();
    const [cookies, setCookie, removeCookie] = useCookies(['username']);
    const [loggedin, setLoggedin] = useState(false);
    const inputRef = useRef()
    
    useEffect(() => {
        cookies.username ? setLoggedin(true) : setLoggedin(false);
    })
    const logout = () => {
        removeCookie('username');
        setUsername();
    }
    const submitUsername = (username) =>  {
        // validation ==> to many cases to treat (repeated username ...) , this is just a demo
        if(!username)
        {
            setUserNameErr('username must not be empty');
        }
        else if(username.length < 5)
        {
            setUserNameErr('username must contain 5 characters at least');
        }
        else {
            console.log('true');
            setUserNameErr();
            setUsername(username);
            setCookie('username', username);
        }
    }
    return (
            <>
        {
            !loggedin ?
            <StyledWelcome>
            <LeftDiv>
            <h2>Welcome to Join My Band</h2>
            <p>Make it easy to chat with people that share the music love with , you can make friends here and more just by choosing your username and a room to enter</p>
            </LeftDiv>
            <RightDiv>
            <h3>Choose a username</h3>
            <input ref={inputRef}></input>
            {
                usernameErr ? <UsernameError>{usernameErr}</UsernameError> : ''
            }
            <button onClick={() => {submitUsername(inputRef.current.value)}}>Enter</button>
            </RightDiv>
            </StyledWelcome>
            :
            <>
            <Logout onClick={() => {logout()}}>logout</Logout>
            <ChooseRoom/>
            </>
        }
        </>
            )
}
