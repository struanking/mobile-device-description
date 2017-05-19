import React, { Component } from 'react'
import withRedux from 'next-redux-wrapper'

// import API from '../config';
// import fetch from '../fetch';

import { initStore } from '../store'
import Layout from '../components/Layout'
import PrimarySearch from '../components/PrimarySearch'
import SearchResults from '../components/SearchResults'

class Index extends Component {
  static getInitialProps ({ store, isServer }) {
    // const res = await fetch(`${API.ENDPOINT}getdevice?token=${API.TOKEN}&brand=apple&device=iphone`)
    // const devices = await res.json()
    // return {
    //   devices: mockdata
    // }
    // store.dispatch({ type: 'TICK', light: !isServer, ts: Date.now() })
    return { isServer }
  }

  render() {
    return (
      <Layout>
        <div>
          <p>Home</p>
          <PrimarySearch />
          <SearchResults />
        </div>
      </Layout>
    )
  }
}

export default withRedux(initStore)(Index)
