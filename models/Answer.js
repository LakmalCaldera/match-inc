const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
  question: {
    type: Schema.Types.ObjectId,
    ref: 'question'
  },
  text: {
    type: String,
    required: [true, 'No possible answer provided!']
  }
});

const Answer = mongoose.model('answer', AnswerSchema);

module.exports = Answer;
