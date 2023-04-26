import styled from 'styled-components'

export const StartContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
max-width: 900px;
min-height: 75vh;
gap: 5px;
padding: 20px;
background-color: grey;
margin: 0 auto;
overflow-x: hidden;
`

export const SubmitBtn = styled.button`
  background-color: #A7BDAC;
  width: 4em;
  margin: 10px;
  font-size: 1.3rem;
  font-family: 'Special Elite';
  border-color: lightgrey;
  border-radius: 1px;
  box-shadow: 1px 1px 1px grey;
  color: black;
  padding: 6%;
  text-align: center;
  cursor: pointer;
`

export const TextH1 = styled.h1`
font-family: 'VT323', monospace;
font-size: 1.9em;
color: red;
`
export const TextP = styled.p`
font-family: 'VT323', monospace;
font-size: 1.5em;
color: black;
`