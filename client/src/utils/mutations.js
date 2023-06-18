import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_MOVIE = gql`
  mutation addMovie($movieText: String!, $poster: String!) {
    addMovie(movieText: $movieText, poster: $poster) { 
      _id
      movieText
      poster
      movieName
      createdAt
      reviews {
        _id
        reviewText
      }
    }
  }
`;

export const ADD_REVIEW = gql`
  mutation addReview($movieId: ID!, $reviewText: String!, $poster: String!) {
    addReview(movieId: $movieId, reviewText: $reviewText, poster: $poster) {
      _id
      movieText
      poster
      movieName
      createdAt
      reviews {
        _id
        reviewText
        createdAt
      }
    }
  }
`;