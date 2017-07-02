const graphql = require('graphql');
const _ = require('lodash')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema
} = graphql

const users = [
    { id: '23', firstname: 'Kunanan', age: 20 },
    { id: '98', firstname: 'Someone', age: 21 }
]

const UserTyoe = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLString },
        firstname: { type: GraphQLString },
        age: { type: GraphQLInt }
    }
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
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