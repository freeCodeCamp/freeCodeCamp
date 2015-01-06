var bcrypt = require('bcrypt-nodejs');
var crypto = require('crypto');
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  email: {
    type: String,
    lowercase: true,
    unique: true,
    trim: true
  },
  password: String,
  facebook: String,
  twitter: String,
  google: String,
  github: String,
  linkedin: String,
  tokens: Array,
  points: {
    type: Number,
    default: 0
  },
  challengesCompleted: { type: Array, default: [] },
  challengesHash: {
    0: {
      type: Number,
      default: 0
    },
    1: {
      type: Number,
      default: 0
    },
    2: {
      type: Number,
      default: 0
    },
    3: {
      type: Number,
      default: 0
    },
    4: {
      type: Number,
      default: 0
    },
    5: {
      type: Number,
      default: 0
    },
    6: {
      type: Number,
      default: 0
    },
    7: {
      type: Number,
      default: 0
    },
    8: {
      type: Number,
      default: 0
    },
    9: {
      type: Number,
      default: 0
    },
    10: {
      type: Number,
      default: 0
    },
    11: {
      type: Number,
      default: 0
    },
    12: {
      type: Number,
      default: 0
    },
    13: {
      type: Number,
      default: 0
    },
    14: {
      type: Number,
      default: 0
    },
    15: {
      type: Number,
      default: 0
    },
    16: {
      type: Number,
      default: 0
    },
    17: {
      type: Number,
      default: 0
    },
    18: {
      type: Number,
      default: 0
    },
    19: {
      type: Number,
      default: 0
    },
    20: {
      type: Number,
      default: 0
    },
    21: {
      type: Number,
      default: 0
    },
    22: {
      type: Number,
      default: 0
    },
    23: {
      type: Number,
      default: 0
    },
    24: {
      type: Number,
      default: 0
    },
    25: {
      type: Number,
      default: 0
    },
    26: {
      type: Number,
      default: 0
    },
    27: {
      type: Number,
      default: 0
    },
    28: {
      type: Number,
      default: 0
    },
    29: {
      type: Number,
      default: 0
    },
    30: {
      type: Number,
      default: 0
    },
    31: {
      type: Number,
      default: 0
    },
    32: {
      type: Number,
      default: 0
    },
    33: {
      type: Number,
      default: 0
    },
    34: {
      type: Number,
      default: 0
    },
    35: {
      type: Number,
      default: 0
    },
    36: {
      type: Number,
      default: 0
    },
    37: {
      type: Number,
      default: 0
    },
    38: {
      type: Number,
      default: 0
    },
    39: {
      type: Number,
      default: 0
    },
    40: {
      type: Number,
      default: 0
    },
    41: {
      type: Number,
      default: 0
    },
    42: {
      type: Number,
      default: 0
    },
    43: {
      type: Number,
      default: 0
    },
    44: {
      type: Number,
      default: 0
    },
    45: {
      type: Number,
      default: 0
    },
    46: {
      type: Number,
      default: 0
    },
    47: {
      type: Number,
      default: 0
    },
    48: {
      type: Number,
      default: 0
    },
    49: {
      type: Number,
      default: 0
    },
    50: {
      type: Number,
      default: 0
    },
    51: {
      type: Number,
      default: 0
    },
    52: {
      type: Number,
      default: 0
    },
    53: {
      type: Number,
      default: 0
    },
    54: {
      type: Number,
      default: 0
    },
    55: {
      type: Number,
      default: 0
    },
    56: {
      type: Number,
      default: 0
    },
    57: {
      type: Number,
      default: 0
    },
    58: {
      type: Number,
      default: 0
    },
    59: {
      type: Number,
      default: 0
    }
  },
  profile: {
    username: {
      type: String,
      default: '',
      unique: true,
      lowercase: true,
      trim: true
    },
    name: {
      type: String, default: ''
    },
    gender: {
      type: String, default: ''
    },
    location: {
      type: String, default: ''
    },
    picture: {
      type: String,
      default: ''
    },
    linkedinProfile: {
      type: String, default: ''
    },
    githubProfile: {
      type: String, default: ''
    },
    coderbyteProfile: {
      type: String,
      default: ''
    }
  },
  portfolio: {
    website1Link: {
      type: String,
      default: ''
    },
    website1Title: {
      type: String,
      default: ''
    },
    website1Image: {
      type: String,
      default: ''
    },
    website2Link: {
      type: String,
      default: ''
    },
    website2Title: {
      type: String,
      default: ''
    },
    website2Image: {
      type: String,
      default: ''
    },
    website3Link: {
      type: String,
      default: ''
    },
    website3Title: {
      type: String,
      default: ''
    },
    website3Image: {
      type: String,
      default: ''
    }
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date
});

/**
 * Password hashing Mongoose middleware.
 */

userSchema.pre('save', function(next) {
  var user = this;

  if (!user.isModified('password')) { return next(); }

  bcrypt.genSalt(5, function(err, salt) {
    if (err) { return next(err); }

    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) { return next(err); }
      user.password = hash;
      next();
    });
  });
});

/**
 * Helper method for validationg user's password.
 */

userSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) { return cb(err); }
    cb(null, isMatch);
  });
};

/**
 * Helper method for getting user's gravatar.
 */

userSchema.methods.gravatar = function(size) {
  if (!size) { size = 200; }

  if (!this.email) {
    return 'https://gravatar.com/avatar/?s=' + size + '&d=retro';
  }

  var md5 = crypto
    .createHash('md5')
    .update(this.email)
    .digest('hex');

  return 'https://gravatar.com/avatar/' + md5 + '?s=' + size + '&d=retro';
};

module.exports = mongoose.model('User', userSchema);
