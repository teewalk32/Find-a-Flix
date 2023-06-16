import React from 'react';
import { useQuery } from '@apollo/client';

import MovieList from '../components/MovieList';
import MovieForm from '../components/MovieForm';

import { QUERY_MOVIES } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_MOVIES);
  const movies = data?.movies || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <MovieForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <MovieList
              movies={movies}
              title="Some Feed for Movie(s)..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;