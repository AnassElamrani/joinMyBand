import styled from "styled-components";

export const StyledChatRoom = styled.div`
height: 100vh;
width: 80%;
align-items: center;
justify-content: center;
margin: 5% auto;
`

export const RoomName = styled.h2`
color: purple;
`

export const ChatWindow = styled.div`
background: aliceblue;
border-radius: 11px;
display: flex;
flex-direction: column;
border: 1px #dfdfdf solid;
height: 80vh;
width: 60%;
margin: 20px auto;
max-height: 800px;
`

export const WriteTextDiv = styled.div`
display: flex;
flex-direction: column;
overflow-y : scroll;
height: 100%;
`

export const MessageBox = styled.div`
display: flex;
border-bottom: 1px solid gray;
align-items: center;
gap: 10px;
& > img {
    width: 30px;
    height: 30px;
    margin-left: 5px;
}
`

export const BottomDiv = styled.div`
display: flex;
`