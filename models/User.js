var bcrypt = require('bcrypt-nodejs');
var crypto = require('crypto');
var mongoose = require('mongoose');
require('mongoose-long')(mongoose);

var Long = mongoose.Types.Long;
var userSchema = new mongoose.Schema({
    email: {
        type: String,
        lowercase: true,
        unique: true,
        trim: true,
        sparse: true
    },
    password: String,
    facebook: String,
    twitter: String,
    google: String,
    github: String,
    linkedin: String,
    tokens: Array,
    progressTimestamps: [],
    profile: {
        username: {
            type: String,
            unique: true,
            sparse: true,
            lowercase: true,
            trim: true
        },
        bio: {
            type: String,
            defaults: ''
        },
        name: {
            type: String,
            default: ''
        },
        gender: {
            type: String,
            default: ''
        },
        location: {
            type: String,
            default: ''
        },
        picture: {
            type: String,
            default: ''
        },
        linkedinProfile: {
            type: String,
            default: ''
        },
        githubProfile: {
            type: String,
            default: ''
        },
        codepenProfile: {
            type: String,
            default: ''
        },
        twitterHandle: {
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
    resetPasswordExpires: Date,
    uncompletedBonfires: Array,
    completedBonfires: [
      {
        _id: String,
        name: String,
        completedWith: String,
        completedDate: Long,
        solution: String
      }
    ],
    uncompletedCoursewares: Array,
    completedCoursewares: [
      {
        completedDate: Long,
        _id: String,
        name: String,
        completedWith: String,
        solution: String,
        githubLink: String,
        verified: Boolean
      }
    ],
    completedFieldGuides: [],
    uncompletedFieldGuides: [],
  currentStreak: {
    type: Number,
    default: 0
  },
  longestStreak: {
    type: Number,
    default: 0
  }
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

module.exports = mongoose.model('User', userSchema);
