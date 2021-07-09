import styled from 'styled-components'
import { DivContainer, Div, Heading, Para } from '../styled/common'

export default function Home() {
  return (
    <>
      <DivContainer forward='/projects' bg='#344E76' color='aliceblue'>
        <ImageCircle></ImageCircle>
        <Heading>Ajay Daniel Trevor</Heading>
        <Heading size='4'>MERN Stack Developer</Heading>
        <Para>
          I like to make websites. So I learned HTML, CSS, JS. And take my
          backend as NodeJS and learned Express JS. Later I learned React JS &
          Next JS to make Single Page Applications.
        </Para>
        <ImageContainer>
          <img src='https://img.icons8.com/windows/50/659a60/node-js.png' />
          <img src='https://img.icons8.com/color/50/000000/react-native.png' />
          <img src='https://img.icons8.com/color/50/000000/mongodb.png' />
          <img src='https://img.icons8.com/color/50/000000/javascript--v1.png' />
        </ImageContainer>
      </DivContainer>
    </>
  )
}

const ImageCircle = styled.div`
  width: 18rem;
  height: 18rem;
  border-radius: 100px;
  margin: 1rem auto 3rem auto;
  border: 3px solid #fff;
`

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2rem 0;
  & img {
    margin: 0 1rem;
  }
`
