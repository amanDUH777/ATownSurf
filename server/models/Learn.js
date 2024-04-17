const mongoose = require('mongoose');

const LearnSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },
  people: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  message: {
    type: String,
    required: false
  },
  workshops: {
    type: String,
  }



});

module.exports = Learn = mongoose.model('learn', LearnSchema);
