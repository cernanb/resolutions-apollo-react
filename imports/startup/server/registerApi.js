import { createApolloServer } from 'meteor/apollo'
import { makeExecutableSchema } from 'graphql-tools'

import ResolutionSchema from '../../api/resolutions/Resolution.graphql'

const testSchema = `
  type Query {
    hi: String
    resolutions: [Resolution]
  }
`

const typeDefs = [testSchema, ResolutionSchema]

const resolvers = {
  Query: {
    hi(root, args, context) {
      return 'hello world'
    },
    resolutions() {
      return [{ _id: 'sfsdfsdfds', name: 'Get stuff done' }]
    },
  },
}

const schema = makeExecutableSchema({ typeDefs, resolvers })
createApolloServer({ schema })
