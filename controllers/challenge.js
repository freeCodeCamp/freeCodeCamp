/*eslint-disable no-unused-vars */

/**
 * Created by nathanleniz on 5/15/15.
 * Copyright (c) 2015, Free Code Camp
 All rights reserved.

 Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

 3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var debug = require('debug')('freecc:cntr:courseware'),
    Challenge = require('./../models/Challenge'),
    User = require('./../models/User'),
    resources = require('./resources'),
    R = require('ramda'),
    moment = require('moment');

exports.showAllChallenges = function(req, res) {
  var completedList = [];
  if (req.user) {
    completedList = req.user.completedCoursewares.map(function (elem) {
      return elem._id;
    });
  }
  var noDuplicatedCoursewares = R.uniq(completedList);
  var data = {};
  data.coursewareList = resources.allCoursewareNames();
  data.completedList = noDuplicatedCoursewares;
  res.send(data);
};

exports.returnNextChallenge = function(req, res, next) {
  if (!req.user) {
   return res.redirect('../challenges/learn-how-free-code-camp-works');
  }
  // find the user's current challenge and block
  // look in that block and find the index of their current challenge
  // if index + 1 <= block.challenges.length - 1
  // serve index + 1 challenge
  // otherwise increment block key and serve the first challenge in that block
  var nextChallengeName;
  var challengeMapWithNames = resources.getChallengeMapWithNames();
  var challengeMapWithIds = resources.getChallengeMapWithIds();
  var challengeId = req.user.currentChallenge.challengeId;
  var challengeBlock = req.user.currentChallenge.challengeBlock;
  var indexOfChallenge = challengeMapWithIds[challengeBlock]
    .indexOf(challengeId);

  if (indexOfChallenge
    <= challengeMapWithIds[challengeBlock].length - 1) {
    nextChallengeName =
      challengeMapWithNames[challengeBlock][indexOfChallenge + 1];
  } else if (typeof challengeMapWithIds[challengeBlock + 1] !== 'undefined') {
    nextChallengeName = R.head(challengeMapWithNames[challengeBlock + 1]);
  } else {
    req.flash('errors', {
      msg: 'It looks like you have finished all of our challenges.' +
      ' Great job! Now on to helping nonprofits!'
    });
    nextChallengeName = R.head(challengeMapWithNames['0'].challenges);
  }
  var nameString = nextChallengeName.toLowerCase().replace(/\s/g, '-');
  return res.redirect('../challenges' + nameString);
};

exports.returnIndividualChallenge = function(req, res, next) {
  var dashedName = req.params.challengeName;

  var challengeName = dashedName.replace(/\-/g, ' ');

  Challenge.find({'name': new RegExp(challengeName, 'i')},
    function(err, challengeFromMongo) {
      if (err) {
        next(err);
      }
      // Handle not found
      if (challengeFromMongo.length < 1) {
        req.flash('errors', {
          msg: '404: We couldn\'t find a challenge with that name. ' +
          'Please double check the name.'
        });
        return res.redirect('/challenges');
      }
      var challenge = challengeFromMongo.pop();

      // Redirect to full name if the user only entered a partial
      var dashedNameFull = challenge.name.toLowerCase().replace(/\s/g, '-');
      if (dashedNameFull !== dashedName) {
        return res.redirect('../challenges/' + dashedNameFull);
      }

      var challengeType = {
        0: function() {
          res.render('coursewares/showHTML', {
            title: challenge.name,
            dashedName: dashedName,
            name: challenge.name,
            brief: challenge.description[0],
            details: challenge.description.slice(1),
            tests: challenge.tests,
            challengeSeed: challenge.challengeSeed,
            verb: resources.randomVerb(),
            phrase: resources.randomPhrase(),
            compliment: resources.randomCompliment(),
            coursewareHash: challenge._id,
            environment: resources.whichEnvironment(),
            challengeType: challenge.challengeType
          });
        },

        1: function() {
          res.render('coursewares/showJS', {
            title: challenge.name,
            dashedName: dashedName,
            name: challenge.name,
            brief: challenge.description[0],
            details: challenge.description.slice(1),
            tests: challenge.tests,
            challengeSeed: challenge.challengeSeed,
            verb: resources.randomVerb(),
            phrase: resources.randomPhrase(),
            compliment: resources.randomCompliment(),
            coursewareHash: challenge._id,
            challengeType: challenge.challengeType
          });
        },

        2: function() {
          res.render('coursewares/showVideo', {
            title: challenge.name,
            dashedName: dashedName,
            name: challenge.name,
            details: challenge.description,
            tests: challenge.tests,
            video: challenge.challengeSeed[0],
            verb: resources.randomVerb(),
            phrase: resources.randomPhrase(),
            compliment: resources.randomCompliment(),
            coursewareHash: challenge._id,
            challengeType: challenge.challengeType
          });
        },

        3: function() {
          res.render('coursewares/showZiplineOrBasejump', {
            title: challenge.name,
            dashedName: dashedName,
            name: challenge.name,
            details: challenge.description,
            video: challenge.challengeSeed[0],
            verb: resources.randomVerb(),
            phrase: resources.randomPhrase(),
            compliment: resources.randomCompliment(),
            coursewareHash: challenge._id,
            challengeType: challenge.challengeType
          });
        },

        4: function() {
          res.render('coursewares/showZiplineOrBasejump', {
            title: challenge.name,
            dashedName: dashedName,
            name: challenge.name,
            details: challenge.description,
            video: challenge.challengeSeed[0],
            verb: resources.randomVerb(),
            phrase: resources.randomPhrase(),
            compliment: resources.randomCompliment(),
            coursewareHash: challenge._id,
            challengeType: challenge.challengeType
          });
        }
      };

      return challengeType[challenge.challengeType]();

    });
};

/*
challengeBlock {
  0: {
    "name": "basic_html,
    "challenges: [],
  }
}

userCurrentChallenge {
  "challengeBlock": number,
  "challengeId": _id
}
 */

