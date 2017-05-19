import styled from 'styled-components'

const Header = styled.header`
  background-color: #35322A;
  border-bottom: solid 4px #D6C47D;
  text-align: center;
`

const Title = styled.h1`
  color: #FFFDF2;
  font-size: 2.5em;
  font-weight: normal;
  padding: 0.5em 0;
  margin: 0;
  text-shadow: 2px 2px #1b1b1b;
  width: auto;
`

export default () => (
  <Header role="banner">
    <Title>Mobile Device Description</Title>
  </Header>
)
