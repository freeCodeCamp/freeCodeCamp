process.env.NODE_ENV = 'test';

var User = require('../../models/User');

var mocha = require('mocha');
var chai = require('chai');
var should = chai.should();
var expect = chai.expect;
var mongoose = require('mongoose');

var user;

describe('User attributes', function() {
  before(function(done) {
    user = createUser();
    done();
  });

  it('_id is a mongoDB ObjectId', function() {
    user._id.should.be.an.instanceOf(mongoose.Types.ObjectId);
  });

  it('email should be a string', function() {
    user.email.should.be.a('string');
  });

  it('password should be a string', function() {
    expect(user.password).to.be.a('string');
  });
})

function createUser() {
  var user = new User({
    email: getEmail(),
    password: '__password__',
  });
  user.save();
  return user;
}

// create unique email address
// 
// TODO - use an implementation that guarantees string uniqueness
function getEmail() {
  return new Date().getTime() + '@example.com';
}
