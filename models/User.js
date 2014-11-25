var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var crypto = require('crypto');

var userSchema = new mongoose.Schema({
  email: { type: String, unique: true, lowercase: true },
//  password: String,

  linkedin: String,
  facebook: String,
  github: String,
  twitter: String,
  google: String,
  instagram: String,
  tokens: Array,
  challengesCompleted: { type: Array, default: [] },
  challengesHash: {
    0: {
      type: Number,
      default: 0,
    },
    1: {
      type: Number,
      default: 0,
    },
    2: {
      type: Number,
      default: 0,
    },
    3: {
      type: Number,
      default: 0,
    },
    4: {
      type: Number,
      default: 0,
    },
    5: {
      type: Number,
      default: 0,
    },
    6: {
      type: Number,
      default: 0,
    },
    7: {
      type: Number,
      default: 0,
    },
    8: {
      type: Number,
      default: 0,
    },
    9: {
      type: Number,
      default: 0,
    },
    10: {
      type: Number,
      default: 0,
    },
    11: {
      type: Number,
      default: 0,
    },
    12: {
      type: Number,
      default: 0,
    },
    13: {
      type: Number,
      default: 0,
    },
    14: {
      type: Number,
      default: 0,
    },
    15: {
      type: Number,
      default: 0,
    },
    16: {
      type: Number,
      default: 0,
    },
    17: {
      type: Number,
      default: 0,
    },
    18: {
      type: Number,
      default: 0,
    },
    19: {
      type: Number,
      default: 0,
    },
    20: {
      type: Number,
      default: 0,
    },
    21: {
      type: Number,
      default: 0,
    },
    22: {
      type: Number,
      default: 0,
    },
    23: {
      type: Number,
      default: 0,
    },
    24: {
      type: Number,
      default: 0,
    },
    25: {
      type: Number,
      default: 0,
    },
    26: {
      type: Number,
      default: 0,
    },
    27: {
      type: Number,
      default: 0,
    },
    28: {
      type: Number,
      default: 0,
    },
    29: {
      type: Number,
      default: 0,
    },
    30: {
      type: Number,
      default: 0,
    },
    31: {
      type: Number,
      default: 0,
    },
    32: {
      type: Number,
      default: 0,
    },
    33: {
      type: Number,
      default: 0,
    },
    34: {
      type: Number,
      default: 0,
    },
    35: {
      type: Number,
      default: 0,
    },
    36: {
      type: Number,
      default: 0,
    },
    37: {
      type: Number,
      default: 0,
    },
    38: {
      type: Number,
      default: 0,
    },
    39: {
      type: Number,
      default: 0,
    },
    40: {
      type: Number,
      default: 0,
    },
    41: {
      type: Number,
      default: 0,
    },
    42: {
      type: Number,
      default: 0,
    },
    43: {
      type: Number,
      default: 0,
    },
    44: {
      type: Number,
      default: 0,
    },
    45: {
      type: Number,
      default: 0,
    },
    46: {
      type: Number,
      default: 0,
    },
    47: {
      type: Number,
      default: 0,
    },
    48: {
      type: Number,
      default: 0,
    },
    49: {
      type: Number,
      default: 0,
    }
  },
  profile: {
    name: { type: String, default: '' },
    gender: { type: String, default: '' },
    location: { type: String, default: '' },
    website: { type: String, default: '' },
    picture: { type: String, default: '' },
    username: { type: String, default: '' }
  },

  resetPasswordToken: String,
  resetPasswordExpires: Date
});

/**
 * Hash the password for security.
 * "Pre" is a Mongoose middleware that executes before each user.save() call.
 */

userSchema.pre('save', function(next) {
  var user = this;

  if (!user.isModified('password')) return next();

  bcrypt.genSalt(5, function(err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

/**
 * Validate user's password.
 * Used by Passport-Local Strategy for password validation.
 */

userSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

/**
 * Get URL to a user's gravatar.
 * Used in Navbar and Account Management page.
 */

userSchema.methods.gravatar = function(size) {
  if (!size) size = 200;

  if (!this.email) {
    return 'https://gravatar.com/avatar/?s=' + size + '&d=retro';
  }

  var md5 = crypto.createHash('md5').update(this.email).digest('hex');
  return 'https://gravatar.com/avatar/' + md5 + '?s=' + size + '&d=retro';
};

module.exports = mongoose.model('User', userSchema);