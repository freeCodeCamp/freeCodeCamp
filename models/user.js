var mongoose = require('mongoose'),
    bcrypt = require('bcrypt');

var userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  admin: { type: Boolean, default: false },
  firstName: String,
  lastName: String,
  password: String,
  provider: String,
  facebook: String,
  google: String
});

userSchema.path('password').validate(function(password) {
  if (this.provider) return true;
  return password.length;
}, 'Password cannot be blank');

userSchema.path('email').validate(function(email) {
  if (this.provider) return true;
  return email.length;
}, 'Email cannot be blank');

userSchema.path('firstName').validate(function(firstName) {
  if (this.provider) return true;
  return firstName.length;
}, 'First Name cannot be blank');

userSchema.path('lastName').validate(function(lastName) {
  if (this.provider) return true;
  return lastName.length;
}, 'Last Name cannot be blank');

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