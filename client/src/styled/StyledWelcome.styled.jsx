import styled from 'styled-components'

export const StyledWelcome = styled.div`
height: 100vh;
width: 80%;
display: flex;
justify-content: center;
align-items: center;
margin: 0 auto;
gap: 4vw;
`

export const LeftDiv = styled.div`

& > p {
    max-width: 400px;
}

& > h2 {
    color: purple;
}

`

export const RightDiv = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
justify-content: center;
align-items: center;
`
export const UsernameError = styled.p`
color: red;
`

export const Logout = styled.p `
position: absolute;
top: 10px;
left: 10px;
`