import { connect } from 'react-redux'
import Grid from '../components/Grid'

export default connect(state => state)(({ devices }) => {
  return (
    <div>
      <h1>Search Results</h1>
      <Grid devices={devices} />
    </div>
  )
})
