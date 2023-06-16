import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import ReviewList from '../components/ReviewList';
import ReviewForm from '../components/ReviewForm';

import { QUERY_SINGLE_MOVIE } from '../utils/queries';

const SingleMovie = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { movieId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_MOVIE, {
    // pass URL parameter
    variables: { movieId: movieId },
  });

  const movie = data?.movie || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3">
      <h3 className="card-header bg-dark text-light p-2 m-0">
        {movie.movieName} <br />
        <span style={{ fontSize: '1rem' }}>
          had this movie on {movie.createdAt}
        </span>
      </h3>
      <div className="bg-light py-4">
        <blockquote
          className="p-4"
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            border: '2px dotted #1a1a1a',
            lineHeight: '1.5',
          }}
        >
          {movie.movieText}
        </blockquote>
      </div>

      <div className="my-5">
        <ReviewList reviews={movie.reviews} />
      </div>
      <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <ReviewForm movieId={movie._id} />
      </div>
    </div>
  );
};

export default SingleMovie;
