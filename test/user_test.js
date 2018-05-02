const expect = require('expect');
const User = require('./../models/User');

describe('Creating Users', () => {
  it('Cannot save user without username', done => {
    const joe = new User();
    joe.save().catch(err => {
      const { message } = err.errors.username;
      expect(message).toBe('Username is required.');
      done();
    });
  });

  it('Cannot save user without password', done => {
    const joe = new User({ username: 'joe' });
    joe.save().catch(err => {
      const { message } = err.errors.password;
      expect(message).toBe('Password is required.');
      done();
    });
  });

  it('Can save with username and password', done => {
    const joe = new User({ username: 'joe', password: 'joe' });
    joe
      .save()
      .then(user => {
        expect(user).toEqual(joe);
        done();
      })
      .catch(err => {
        console.log(err);
        done();
      });
  });
});
