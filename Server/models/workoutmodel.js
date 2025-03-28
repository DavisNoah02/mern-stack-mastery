const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// define the schema for a workout
const workoutSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  load: {
    type: Number,
    required: true,
  },
  reps: {
    type: Number,
    required: true,
  },
}, { timestamps: true });


// create a model from the schema
module.exports = mongoose.model('workout', workoutSchema);