const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const movieSchema = new Schema({
  movieText: {
    type: String,
    required: 'Leave a review',
    minlength: 1,
    maxlength: 999,
    trim: true,
  },
  movieName: {
    type: String,
    required: true,
    trim: true,
  },
  poster: {
    type: String,
    // required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  reviews: [
    {
        reviewText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 999,
      },
      reviewName: {
        type: String,
        required: true,
      },
      reviewAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Movie = model('Movie', movieSchema);

module.exports = Movie;
