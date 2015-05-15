var User = require('./../models/User'),
  mongodb = require('mongodb'),
  User = require('./../models/User');
  PairUser = require('./../models/pairUser');
  var https = require('https');
  var secrets = require('./../config/secrets')


exports.index = function(req, res){
  if (!req.user){
    res.render('account/signin', {
      title: "Login",
      page: "Login"});

  } else if (!req.user.profile.slackHandle) {
    req.flash('errors', {
      msg: 'Add a Slack handle to submit a pair request.'
    });
    return res.redirect('/account');

  } else {
    PairUser.find().exec(function(err, pairUsers) {
      var page = 'page';
      if (req.session.pair.start) {
        page = 'request-submitted';
      }
      return res.render('paircode/index.jade', {
        title: "Team up and Pair code",
        page: page,
        slackHandle: req.user.profile.slackHandle,
        onlineUsers: pairUsers || []
      });
    });
  }
};

var newPairRequest = function(user) {
  var pairCode = new PairUser({});
    pairCode.username = user.profile.username;
    pairCode.userPic = user.profile.picture;
    pairCode.userSlack = user.profile.slackHandle;
    pairCode.bonfire = "bonfire test for now";
    pairCode.challenge = "challenge test for now";
    pairCode.timeOnline = Date.now();
    pairCode.fiveMinuteWarning = false;

    pairCode.save(function(err) {
      if (err) {
        return res.sendStatus(400);
      }
    });

};

exports.setOnline = function(req, res, next) {
  // information in the session is for the client
  // lets the client warn online users
  req.session.pair = {
    start: Date.now(),
    flaggedForRemoval: false,
    removed: false
  }
  
  // add new request to the database here
  newPairRequest(req.user);

  res.redirect('/pair-coding');
};

// Refresh pair request function - API endpoint for popup modal
exports.refreshPairRequest = function(req, res, next) {
  // edits a pair request by resetting the date
  // find the request
  req.session.pair = {
    start: Date.now(),
    flaggedForRemoval: false
  }

  // should also get the current challenge and bonfire

  PairUser.findOne({user: req.user._id}, function(err, pairuser) {
    if (err) {
      return next(err);
    }
    if (!pairuser) {
      // already expired
      console.log("Couldn't find a pair request for you.");
      req.send('Your request could not be found. Please try again.');
      return next();
    } else {
      // edit the request timeOnline
      pairuser.timeOnline = new Date();
      pairuser.save(function(err) {
        if (err) {
          return next(err);
        } else {
          // acts as middleware to keep the user on the page.
          console.log("Your request was successfully refreshed.");
          return res.send(200);
        }

      });
    }
  });

}


exports.removeStalePosts = function() {
  // accessed from app.js, once an hour
  // this is the oldest possible time to keep
  var cutoff = Date.now() - 60000;  // one hour

  // get all old pairusers and remove them.
  PairUser.find().where('timeOnline').lt(cutoff).exec(function(err, pairs) {
    if (err) {
      res.sendStatus(500);
    }
    // remove all of the pairs
    pairs.forEach(function(pair, index) {

      pair.remove(function(err) {
        if (err) {
          console.log("There was an error removing this pair user: "+pair);
        }
        return;
      });

    });
  });




};

exports.removeStaleSlackUsers = function() {

  var slackReq = https.get('https://slack.com/api/users.list?token='+secrets.slack.token, function(response) {
    response.setEncoding('utf-8');

    var obj = '';
    

    response.on('data', function(data) {
      obj += data;
    });

    response.on('end', function() {
      var responseObject = JSON.parse(obj);
      var members = {};
      members = responseObject.members;

      // make a lookup table to get slack IDs
      var memberLookup = {};

      members.filter(function(user){
        return (!user.deleted);
      }).forEach(function(user) {
        memberLookup[user.name] = user.id;
      });

      // compare the users online right now with the members of slack
      PairUser.find().exec(function(err, requests) {
        if (err) return console.log("Error");
        if (!requests) return;

        requests.forEach(function(request) {
          // check if that user is still online
          var slackId = memberLookup[request.userSlack];

            var req = https.get('https://slack.com/api/users.getPresence?token='+secrets.slack.token + '&user=' + slackId, function(response) {
              response.setEncoding('utf-8');
              response.on('data', function(data) {
                  data = JSON.parse(data);
                  var presence = data["presence"];
                  if (presence !== 'active') {
                    request.remove(function(err) {
                      if (err) console.error(err);
                    });
                  }
                
              });

            });
            req.end();
            req.on('error', function(e) {
              return console.error(e);
            });


        });
      });

    });


  });
  slackReq.end();
  slackReq.on('error', function(e) {
    return console.error(e);
  });
}

function takeUserOffline(user) {
  // remove the pair requests from that user
  
  PairUser.findOne({username: user.profile.username}, function(err, pair) {
    if (err) {
      return err;
    }
    if (pair !== null){
      pair.remove(function(err) {
        if (err) {
          return err;
        }
      });
    }
  });
};



exports.setOffline = function(req, res, next){
  // change the user's online status
  req.session.pair = {
    start: null,
    flaggedForRemoval: false,
    removed: true
  }

  takeUserOffline(req.user);

  return res.redirect('/pair-coding');

};




