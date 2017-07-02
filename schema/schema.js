const graphql = require('graphql');
const _ = require('lodash')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema
} = graphql

const users = [
    { id: '23', firstName: 'Kunanan', age: 20 },
    { id: '98', firstName: 'Someone', age: 21 }
]

const UserTyoe = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt }
    }
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserTyoe,
            args: { id: { type: GraphQLString } },
            resolve(parentValue, args) {
                return _.find(users, { id: args.id })
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})