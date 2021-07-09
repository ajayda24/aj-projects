
import { DivContainer, Div } from '../styled/common'

export default function Home() {
  return (
    <DivContainer bg='#344E76' forward='/about' backward='/'>
      <Div>Project Page</Div>
    </DivContainer>
  )
}
