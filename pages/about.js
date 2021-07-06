import { handleTouchStart, handleTouchMove, handleWheel } from '../navEvents'
import { DivContainer, Div } from '../styled/common'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  return (
    <DivContainer
      bg='#2C061F'
      onWheel={(e) => handleWheel(e, router, 'project', 'about')}
      onTouchStart={handleTouchStart}
      onTouchMove={(e) => handleTouchMove(e, router, 'project', 'about')}
    >
      <Div>About Page</Div>
    </DivContainer>
  )
}
