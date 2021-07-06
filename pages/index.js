import { useRouter } from 'next/router'
import {handleTouchStart,handleTouchMove,handleWheel} from '../navEvents'
import {DivContainer,Div} from '../styled/common'


export default function Home() {
  const router = useRouter()
  return (
    <>
      <DivContainer
        onWheel={(e) => handleWheel(e, router, '', 'project')}
        onTouchStart={handleTouchStart}
        onTouchMove={(e) => handleTouchMove(e, router, '', 'project')}
      >
        <Div>Home Page</Div>
      </DivContainer>
    </>
  )
}

