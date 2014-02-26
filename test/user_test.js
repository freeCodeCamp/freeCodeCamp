var chai = require('chai');
var should = chai.should();
var User = require('../models/User');

describe('User attributes', function() {
  before(function(done) {
    user = new User({
      email: 'janedoe@gmail.com',
      password: 'password'
    });
    done();
  });

  it('email should be a string', function() {
    user.email.should.be.a('string');
  });

  it('password should be a string', function() {
    user.password.should.be.a('string');
  });

  it('should save a user', function(done) {
    user.save();
    done();
  });

  it('should find our newly created user', function(done) {
    User.findOne({ email: user.email }, function(err, user) {
      should.exist(user);
      user.email.should.equal('janedoe@gmail.com');
      done();
    });
  });

  it('should not allow users with duplicate emails', function(done) {
    user.save(function(err) {
      if (err) {
        err.code.should.equal(11000);
      }
      done();
    });
  });
});
