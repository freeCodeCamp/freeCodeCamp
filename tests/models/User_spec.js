process.env.NODE_ENV = 'test';

var User = require('../../models/User');

var mocha = require('mocha')
  , chai = require('chai')
  , expect = chai.expect
  , mongoose = require('mongoose');

var user;

describe('User attributes', function() {
  before(function(done){
    user = createUser();
    done();
  });
  
  it('_id is a mongoDB ObjectId', function() {
    expect( user._id ).to.be.an.instanceOf(mongoose.Types.ObjectId);
  });
  
  it('email should be a string', function() {
    expect( user.email ).to.be.a( 'string' );
  });
})

function createUser(){
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
function getEmail(){
  return new Date().getTime() + '@example.com';
}
