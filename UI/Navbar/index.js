import styled from 'styled-components'
import Link from 'next/link'

const Navbar = (props) => {
  const activeLinkHandler = (e) => {
    const current = document.getElementsByClassName('activeLink')[0]
    if (current) {
      current.classList.remove('activeLink')
      e.target.classList.add('activeLink')
    } else {
      e.target.classList.add('activeLink')
    }
  }
  return (
    <Container>
      <Nav>
        <div className='left'>
          <li
            onClick={(e) => {
              if (document.getElementsByClassName('activeLink')[0]) {
                document
                  .getElementsByClassName('activeLink')[0]
                  .classList.remove('activeLink')
              }
            }}
          >
            <StyledLink href='/'>
              <a>AJ</a>
            </StyledLink>
          </li>
        </div>
        <div className='right'>
          <li onClick={activeLinkHandler}>
            <StyledLink href='/projects'>
              <a>Projects</a>
            </StyledLink>
          </li>
          <li onClick={activeLinkHandler}>
            <StyledLink href='/about'>
              <a>Contact</a>
            </StyledLink>
          </li>
        </div>
      </Nav>
    </Container>
  )
}

export default Navbar

const Container = styled.div`
  width: 100%;
  height: 10vh;
  background-color: #344E76;
  color: aliceblue;
`
const Nav = styled.nav`
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
  padding: 1em 2em;
  & li {
    list-style: none;
    margin: 0 1.5rem;
  }
  & .right {
    display: flex;
    & li:focus,
    li:hover,
    .activeLink {
      outline: none;
      border-bottom: 2px solid aliceblue;
    }
  }
`

const StyledLink = styled(Link)`
  outline: none;
`
