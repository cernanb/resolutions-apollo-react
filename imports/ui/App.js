import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const App = ({ data: { hi } }) => <h1>{hi}</h1>

const hiQuery = gql`
  {
    hi
  }
`

export default graphql(hiQuery)(App)
