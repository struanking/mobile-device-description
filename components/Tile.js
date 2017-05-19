import React, { Component } from 'react'
import styled from 'styled-components'
import tachyons from '../tachyons.js'

const Li = styled.li`
  background-color: #eee;
  min-width: 260px;
  padding: 0.5rem;
`

const Tile = styled.div`
  ${tachyons}
`

export default ({item}) => (
  <Tile mw5 center bg_white br3 pa3 pa4_ns mv3 ba b__black_10>
    <h3>{item.DeviceName}</h3>
    <ul>
      <li>Brand: {item.Brand}</li>
      <li>OS: {item.os}</li>
    </ul>
    <p>
      <button type="button">Add To Compare</button>
    </p>
    <p>
      <button type="button">All Details</button>
    </p>
  </Tile>
)
