import { handleTouchStart, handleTouchMove, handleWheel } from '../navEvents'
import { DivContainer, Div } from '../styled/common'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  return (
    <DivContainer
      onWheel={(e) => handleWheel(e, router, 'project', '')}
      onTouchStart={handleTouchStart}
      onTouchMove={(e) => handleTouchMove(e, router,'project','')}
    >
      <Div>About Page</Div>
    </DivContainer>
  )
}
