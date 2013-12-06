var mongoose = require('mongoose'),
    bcrypt = require('bcrypt');

var userSchema = new mongoose.Schema({
  username: { type: String, index: true, unique: true },
  email: String,
  name: String,
  password: String,
  tokens: {
    google: String,
    facebook: String,
    foursquare: String,
    twitter: String,
    github: String
  },
  provider: String,
  facebook: String,
  google: String,
  isAdmin: Boolean
});

userSchema.path('password').validate(function(password) {
  if (this.provider) return true;
  return password.length;
}, 'Password cannot be blank');

userSchema.path('username').validate(function(username) {
  if (this.provider) return true;
  return username.length;
}, 'Username cannot be blank');


userSchema.pre('save', function(next) {
  var user = this;
  var SALT_FACTOR = 5;

  if (!user.isModified('password')) return next();

  bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if(err) return cb(err);
    cb(null, isMatch);
  });
};

module.exports = mongoose.model('User', userSchema);
