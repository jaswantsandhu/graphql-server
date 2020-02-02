const { gql } = require('apollo-server');

const typeDefs = gql`

type Query {
    resturants : String
}

type Mutation {
    login(email: String, password : String): Boolean
}

`;

module.exports = typeDefs;
