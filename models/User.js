const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Username is required.']
  },
  password: {
    type: String,
    required: [true, 'Password is required.']
  },
  questions: [
    {
      question: { type: Schema.Types.ObjectId, ref: 'question' },
      answer: { type: Schema.Types.ObjectId, ref: 'answer' },
      answered: {
        type: Boolean,
        default: false
      },
      lastUpdated: Date
    }
  ]
});

UserSchema.path('username').validate(username => {
  return User.findOne({ username }).then(user => user != undefined);
}, 'Sorry! Username `{VALUE}` is already taken.');

const User = mongoose.model('user', UserSchema);

module.exports = User;
