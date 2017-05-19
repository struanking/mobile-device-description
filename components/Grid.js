import React, { Component } from 'react'
import styled from 'styled-components'
import Tile from './Tile'
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer'
import List from 'react-virtualized/dist/commonjs/List'

const Grid = styled.ol`
  list-style: none
  padding: 0;
`
const _noRowsRenderer = () => {
  return (
    <div>
      No rows
    </div>
  )
}

const rowRenderer = (devices) => ({index, key}) => {
  console.log('devices', devices);
  console.log('index', index);
  console.log('key', key);
  // return <Tile item={ devices[index] } index={ index } key={ key } />;
  const item = devices[index];
  return (
      <div style={{ border: 'solid 1px #999' }} key={ key }>
        <h3>{item.DeviceName}</h3>
      </div>
  )
}

const BOX_WIDTH = 200
const BOX_HEIGHT = 300

const GridContainer = ({ devices }) => {

  function rowRenderer2 ({
    key,         // Unique key within array of rows
    index,       // Index of row within collection
    isScrolling, // The List is currently being scrolled
    isVisible,   // This row is visible within the List (eg it is not an overscanned row)
    style        // Style object to be applied to row (to position it)
  }) {
    return (
      <li
        key={key}
        style={style}
      >
        <Tile item={ devices[index] } />
      </li>
    )
  }

  return (
    <div style={{ display: 'flex', backgroundColor: 'red' }}>
      <h2>Results</h2>

      <div style={{ flex: '1' }}>
        <AutoSizer>
          {({ height, width }) => {
            const numberOfBoxesPerRow = Math.floor(width / BOX_WIDTH) || 1
            const numberOfBoxes = devices.length
            const rowCount = Math.ceil(numberOfBoxes / numberOfBoxesPerRow)

            return (
              <List
                width={width}
                height={height}
                rowCount={rowCount}
                rowHeight={200}
                rowRenderer={rowRenderer2}
              />
            )
          }}
        </AutoSizer>
      </div>

      <p>{devices.length} devices found</p>
      {/*
      <div style={{ flex: '1' }}>
        <AutoSizer>
          {({ height, width }) => {
            const numberOfBoxesPerRow = Math.floor(width / BOX_WIDTH) || 1
            const numberOfBoxes = devices.length
            const rowCount = Math.ceil(numberOfBoxes / numberOfBoxesPerRow)
            console.log('Height', height)
            console.log('numberOfBoxesPerRow', numberOfBoxesPerRow)
            console.log('numberOfBoxes', numberOfBoxes)
            console.log('rowCount', rowCount)

            return (
              <List
                height={height}
                noRowsRenderer={_noRowsRenderer}
                rowCount={rowCount}
                rowHeight={BOX_HEIGHT}
                rowRenderer={rowRenderer(devices)}
                width={width}
                overscanRowCount={3}
              />
            )
          }}
        </AutoSizer>
      </div>
      */}
      <div className="fukol">
        <Grid className="fukol-grid">
        {/*
          devices.map((device, index) => <Tile item={ device } index={ index } key={ index } />)
        */}
        </Grid>
      </div>
    </div>
  )
}

export default GridContainer
