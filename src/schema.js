const { gql } = require('apollo-server');

const typeDefs = gql`

enum AvailableSize{
    S
    M
    L
    XL
    XXL
}

type Query {
    cloths : [Cloth],
    cloth (id : String) : Cloth
}

type User {
    matchingProducts : [Cloth]
}

type Cloth {
    id : String,
    name : String,
    sku : String,
    availableSize : [AvailableSize],
    isAvailable : Boolean,
    price : Float
    matchingProducts : [Cloth]
}

type Mutation {
    login(email: String, password : String): Boolean
}

`;

module.exports = typeDefs;
