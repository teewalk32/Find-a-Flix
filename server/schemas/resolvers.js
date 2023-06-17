const { AuthenticationError } = require('apollo-server-express');
const { User, Movie } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('movies');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('movies');
    },
    movies: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Movie.find(params).sort({ createdAt: -1 });
    },
    movie: async (parent, { movieId }) => {
      return Movie.findOne({ _id: movieId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('movies');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addMovie: async (parent, { movieText }, context) => {
      if (context.user) {
        const movie = await Movie.create({
          movieText,
          movieName: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { movies: movie._id } }
        );

        return movie;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addReview: async (parent, { MovieId, ReviewText }, context) => {
      if (context.user) {
        return Movie.findOneAndUpdate(
          { _id: movieId },
          {
            $addToSet: {
              reviews: { reviewText, reviewName: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeMovie: async (parent, { movieId }, context) => {
      if (context.user) {
        const movie = await Movie.findOneAndDelete({
          _id: movieId,
          movieName: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { movies: movie._id } }
        );

        return movie;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeReview: async (parent, { movieId, reviewId }, context) => {
      if (context.user) {
        return Movie.findOneAndUpdate(
          { _id: movieId },
          {
            $pull: {
              reviews: {
                _id: reviewId,
                movieName: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
