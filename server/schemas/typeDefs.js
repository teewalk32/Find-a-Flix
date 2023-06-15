const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    movies: [Movie]!
  }

  type Movie {
    _id: ID
    movieText: String
    movieName: String
    createdAt: String
    reviews: [Review]!
  }

  type Review {
    _id: ID
    reviewText: String
    reviewName: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    reviews(username: String): [Review]
    review(reviewId: ID!): Review
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addMovie(movieText: String!): Movie
    addReview(movieId: ID!, ReviewText: String!): Movie
    removeMovie(movieId: ID!): Movie
    removeReview(movieId: ID!, reviewId: ID!): Movie
  }
`;

module.exports = typeDefs;
