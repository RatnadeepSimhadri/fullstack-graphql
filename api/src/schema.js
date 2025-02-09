const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
   type User {
        id: ID!
        username: String!
   }

   type Pet {
        id: ID!
        createdAt: String!
        name: String!
        type: String!
        img: String!
   }

   input PetInput {
        name: String
        type: String
   }

   type Query {
        pets(input: PetInput): [Pet]!
   }

   input NewPetInput {
     name: String
     type: String
   }   

   type Mutation {
          pet(input: NewPetInput!): Pet!
   }

`;

module.exports = typeDefs
