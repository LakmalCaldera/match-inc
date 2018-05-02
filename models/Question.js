const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PointSchema = new Schema({
  type: { type: String, default: 'Point' },
  coordinates: { type: [Number], index: '2dsphere' }
});

const QuestionSchema = new Schema({
  answers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'answer'
    }
  ],
  text: {
    type: String,
    required: [true, 'No question provided.']
  },
  loc: PointSchema
});

const Question = mongoose.model('question', QuestionSchema);

module.exports = Question;
