import styled from "styled-components";

export const StyledChooseRoom = styled.div`
position: relative;
height: 100vh;
width: 80%;
display: flex;
justify-content: center;
align-items: center;
gap: 40px;
margin: 0 auto;
flex-direction: column;
& > h2 {
    color: purple;
}
`

export const StyledRoom = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
& > h2 {
    color: #505050;
}
& > img {
    width: 80px;
    aspect-ratio: 1;
}
&:hover {
    & > h2 {
        color: green;
        cursor: default;
    }
}
`

