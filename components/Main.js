import styled from 'styled-components'

const Main = styled.main`
  box-sizing: border-box;
  margin: 0 auto;
  padding: 2em;
  width: 100%;
`

export default ({ children }) => (
  <Main role="main" id="main">
    { children }
  </Main>
)
