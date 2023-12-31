import { gql } from '@apollo/client';
export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      movies {
        _id
        movieText
        createdAt
      }
    }
  }
`;
export const QUERY_MOVIES = gql`
  query getMovies {
    movies {
      _id
      movieText
      poster
      movieName
      createdAt
    }
  }
`;
export const QUERY_SINGLE_MOVIE = gql`
  query getSingleMovie($movieId: ID!) {
    movie(movieId: $movieId) {
      _id
      movieText
      poster
      movieName
      createdAt
      reviews {
        _id
        reviewText
        reviewName
        createdAt
      }
    }
  }
`;
export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      movies {
        _id
        movieText
        poster
        movieName
        createdAt
      }
    }
  }
`;











