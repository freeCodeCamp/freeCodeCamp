/*eslint-disable block-scoped-var */
require('dotenv').load();
var User = require('../models/User.js'),
    secrets = require('../config/secrets'),
    mongoose = require('mongoose'),
    R = require('ramda');

mongoose.connect(secrets.db);

function userModelAssurity(cb) {
  console.log('userModelAssurity');
  var i = 1;
  var stream = User.find({}).skip(0).limit(0).batchSize(20000).stream();

  stream.on('data', function (user) {
    console.log(i++);
    this.pause();
    user.needsMigration = true;
    user.save(function (err) {
      if (err) {
        console.log('woops');
      }
      this.resume();
    }.bind(this));
  })
    .on('error', function (err) {
      console.log(err);
    }).on('close', function () {
      console.log('done with set');
      stream.destroy();
      cb();
    });
}

function migrateIt() {
  console.log('migrateIt');
  var dones = 0;
  var done = function() {
    dones++;
    if (dones === 2) {
      process.exit(0);
    }
    if (dones === 1) {
      userModelMigration(done);
    }
  };
  console.log('calling userModelAssurity');
  userModelAssurity(done);
}

function userModelMigration(cb) {

  var i = 1;

  var stream = User.find({needsMigration: true}).skip(0).limit(0)
    .batchSize(20000).stream();

  stream.on('data', function (user) {
    console.log(i++);
    /*
    if (user.challengesHash) {
      this.pause();
      user.needsMigration = false;
      var oldChallenges = Object.keys(user.challengesHash).filter(function (key) {
        if (user.challengesHash[key]) {
          user.progressTimestamps.push(user.challengesHash[key] * 1000);
        }
        return user.challengesHash[key];
      });

      newChallenges.forEach(function (challenge) {
        if (oldChallenges.indexOf(challenge.oldNumber) !== -1 && challenge.newId) {
          user.completedCoursewares.push({
            _id: challenge.newId,
            completedDate: user.challengesHash[challenge.oldNumber] * 1000
          });
        }
      });

      user.completedCoursewares.forEach(function (course) {
        var indexOfCourse = user.uncompletedCoursewares.indexOf(course._id) !== -1;
        if (indexOfCourse !== -1) {
          user.uncompletedCoursewares.splice(indexOfCourse, 1);
        }
      });

      user.completedBonfires.forEach(function (bonfire) {
        bonfire.completedDate = bonfire.completedDate * 1000;
        user.progressTimestamps.push(bonfire.completedDate);
      });
    }
    */
    user.needsMigration = false;
    user.completedChallenges = R.filter(function(elem) {
      return elem; // getting rid of undefined
    }, R.concat(
      user.completedCoursewares,
      user.completedBonfires.map(function(bonfire) {
        return ({
          completedDate: bonfire.completedDate,
          _id: bonfire._id,
          name: bonfire.name,
          completedWith: bonfire.completedWith,
          solution: bonfire.solution,
          githubLink: '',
          verified: false,
          challengeType: 5
        });
      })
    ));

    var self = this;
    user.save(function (err) {
      if (err) {
        console.log('woops');
      }
      self.resume();
    });
  }).on('error', function (err) {
    console.log(err);
  }).on('close', function () {
    console.log('done with set');
    stream.destroy();
    cb();
  });
}

migrateIt();
