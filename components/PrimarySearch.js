import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { searchByBrandAndDevice } from '../actions/searchActions'

const Input = styled.input`
  border: solid 1px #ccc;
`

class PrimarySearch extends Component {
  constructor() {
    super()
    this.state = {
      brand: '',
      device: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSearch() {
    this.props.searchByBrandAndDevice({ ...this.state })
  }

  render() {
    return (
      <form>
        <label htmlFor="brand">Brand:</label>
        <Input
          type="text"
          id="brand"
          name="brand"
          value={ this.state.brand }
          onChange={ this.handleChange }
        />
        <br />

        <label htmlFor="brand">Device*:</label>
        <Input
          type="text"
          id="device"
          name="device"
          value={ this.state.device }
          onChange={ this.handleChange }
        />

        <br />
        <label htmlFor="brand">Limit:</label>
        <Input
          type="text"
          id="limit"
          name="limit"
          value={ this.state.limit }
          onChange={ this.handleChange }
        />
      <button type="button" onClick={ this.handleSearch }>Search</button>
      </form>
    )
  }
}

export default connect(
  () => ({}),
  { searchByBrandAndDevice }
)(PrimarySearch)
