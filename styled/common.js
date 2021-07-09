import styled from 'styled-components'
import { useRouter } from 'next/router'
import { handleTouchStart, handleTouchMove, handleWheel } from '../navEvents'
import { useState } from 'react'

export const DivContainer = (props) => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  return (
    <DivContainerStyled
      onWheel={(e) =>
        handleWheel(e, router, props.backward, props.forward, setIsLoading)
      }
      onTouchStart={handleTouchStart}
      onTouchMove={(e) =>
        handleTouchMove(e, router, props.backward, props.forward, setIsLoading)
      }
      {...props}
    >
      {props.children}
      {isLoading ? <LoadingSpinner>Loading ...</LoadingSpinner> : null}
    </DivContainerStyled>
  )
}

const DivContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.bg ? props.bg : '#404756')};
  color: ${(props) => (props.color ? props.color : '#000')};
  height: 90vh;
  animation: slide-down 0.5s;
`

const LoadingSpinner = styled.p`
  position: absolute;
  bottom: 5px;
  font-size: 1.5rem;
  color: aliceblue;
`

export const Div = styled.div`
  width: 30rem;
  height: 30rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  color: black;
  justify-content: center;
  font-size: 4rem;
  margin: 2rem auto;
  opacity: 0.6;
`

export const Heading = styled.h1`
  font-family: 'Merienda', cursive;
  font-weight: 700;
  font-size: ${(props) => (props.size ? `${props.size}rem` : '3rem')};
  margin: 0.5rem auto;
`

export const Para = styled.p`
  font-family: 'Merienda', cursive;
  font-weight: 100;
  font-size: ${(props) => (props.size ? `${props.size}rem` : '2rem')};
  margin: 0.5rem auto;
  width: 50%;
  max-width: 700px;
  min-width: 300px;
`
