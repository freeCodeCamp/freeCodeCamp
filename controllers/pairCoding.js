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
    console.log(req.user.profile);
    req.flash('errors', {
      msg: 'Add a Slack handle to submit a pair request.'
    });
    return res.redirect('/account');
  } else {
    PairUser.find().populate('user', 'email profile').exec(function(err, pairUsers) {

      return res.render('paircode/index.jade', {
        title: "Team up and Pair code",
        page: "pair-coding",
        slackHandle: req.user.profile.slackHandle,
        onlineUsers: pairUsers || []
      });
    });
  }
};

var newPairRequest = function(userid, username, comment, slack, details) {
  var pairCode = new PairUser({});
    pairCode.user = userid;
    pairCode.username = username;
    pairCode.details = details;
    pairCode.timeOnline = new Date();
    // save the comments from the form
    if (comment === ""){
        pairCode.comment = "Pair with me";
      } else {
        pairCode.comment = comment;
      }
    pairCode.userSlack = slack;

    pairCode.save(function(err) {
      if (err) {
        return res.sendStatus(400);
      }
    });

};

exports.setOnline = function(req, res, next) {
  req.user.pair.timeOnline = Date.now();
  if (!req.user.pair.onlineStatus) {
    // set the online status to true
    User.findById(req.user._id, function(err, user) {
      if (err) {
        return next(err);
      }
      user.pair.onlineStatus = true;
      user.pair.timeOnline = new Date();
      user.save(function(err) {
        if (err) {
          return next(err);
        }
      });
    });
    //var gitSplit = req.user.profile.githubProfile.split("/");
    //var gitUser = gitSplit[gitSplit.length-1];
    //var slackUser = req.user.profile.slackHandle;

    newPairRequest(req.user._id, req.user.profile.username, req.body.comment, req.body.slackUser, req.body.details);
  }
  res.redirect('/pair-coding');
};



exports.editPairRequest = function(req, res, next) {
  // search for the user's pair request
  PairUser.findOne({user: req.user._id}, function(err, pairuser) {
    if (err) {
      return next(err);
    }
    if (!pairuser) {
      // set their online status to false
      User.findById(req.user._id, function(err, user) {
        user.pair.onlineStatus = false;
        user.save(function(err) {
          if (err) {
            return next(err);
          }
        });
      });
      // redirect to the index page

      console.log("No pair requests found, add a new one.");
      res.redirect('/pair-coding');
    } else {
      if (req.body.comment === ""){
        pairuser.comment = "Pair with me";
      } else {
        pairuser.comment = req.body.comment;
        pairuser.details = req.body.details;
      }
      pairuser.timeOnline = new Date();
      pairuser.save(function(err) {
        if (err) {
          return next(err);
        }
        else {
          res.redirect('/pair-coding');
        }
      });
    }
  });
};

exports.removeStalePosts = function() {

  // this is the oldest possible time to keep
  var cutoff = Date.now() - 10000;  // 30 minutes

  // get all old pairusers and remove them.
  PairUser.find().where('timeOnline').lt(cutoff).exec(function(err, pairs) {
    if (err) {
      console.log("There was an error finding pair requests: "+err);
    }
    // remove all of the pairs
    pairs.forEach(function(pair, index) {
      // set that user to be offline
      User.findById(pair.user, function(err, user) {
        user.pair.onlineStatus = false;
        user.save(function(err) {
          if (err) {
            console.log("error saving user with new online status.");
          }
        });
      });


      pair.remove(function(err) {
        if (err) {
          console.log("There was an error removing this pair user: "+pair);
        }
        return;
      });

    });
    console.log("about to remove stale slack users");
    removeStaleSlackUsers();
  });





  // now check the remaining users and if they're idle in slack, take them out
  // get list of Slack users
  
  // if each person is not in the list, take them offline


};

function removeStaleSlackUsers() {
  https.get('https://slack.com/api/users.list?token='+secrets.slack.token, function(res) {
    res.setEncoding('utf-8');
    var obj = '';
    

    res.on('data', function(data) {
      obj += data;
    });

    res.on('end', function() {
      var responseObject = JSON.parse(obj);
      var myObj = {};
      
      myObj = responseObject.members;

      var members = [];
      var person = {};
      if (myObj !== undefined){
        myObj.forEach(function(ele) {
          if (!ele.deleted) {
            person = {
              name: ele.name,
              id: ele.id,
            };
            members.push(person);
          }
        });
      
        PairUser.find().exec(function(err, pairs){
          pairs.forEach(function(pair){
            members.forEach(function(membersEle){
              if (membersEle.name === pair.slackHandle) {
                // check the id and user status
                https.get('https://slack.com/api/users.getPresence?token='+secrets.slack.token + '&user=' + membersEle.id, function(res) {
                  res.setEncoding('utf-8');
                  var obj = '';

                  res.on('data', function(data) {
                    obj += data;
                  });

                  res.on('end', function() {
                    var responseObject = JSON.parse(obj);
                    var myObj = {};
                    myObj = responseObject;
                    if (!myObj.presence === 'active') {
                      pair.remove(function(err) {
                        if (err) {
                          return console.log("There was an error saving to the database.");
                        }
                        
                      });
                    }

                  });
                });
                return;
              }
            });
          });

        });
      }

      // go through the list of pair users and get their presence
      //   if they have an ID, use that
      // if not, go through the array returned from the server, get their ID nad then save it to their profile
      // if they are away/offline, take them offline



    });

    
  });
};


exports.setOffline = function(req, res, next){
  // change the user's online status
  User.findById(req.user._id, function(err, user) {
    if (err) {
      return next(err);
    }
    user.pair.onlineStatus = false;
    user.pair.timeOnline = new Date();
    user.save(function(err) {
      if (err) {
        return next(err);
      }
    });
  });
  // remove the pair requests from that user
  PairUser.findOne({user: req.user._id}, function(err, pair) {
    if (err) {
      return next(err);
    }
    if (pair !== null){
      pair.remove(function(err) {
        if (err) {
          return next(err);
        }
      });
    }
  });
  res.redirect('/pair-coding');
};

exports.returnPair = function(req, res, next){
  var usernameToPair = req.params.onlinePostuserName;

  PairUser.findOne({username: usernameToPair}, function(err, pair) {
    if (err) {
      return next(err);
    }
    if (!pair) {
      res.redirect('/pair-coding');
    } else {
    // get comment information to port to template
    var comment = pair.comment;
      res.render('paircode/index.jade', {
        title: "Chat with "+usernameToPair+" about "+comment,
        page: "pairWithUser",
        pairWithUser: pair.username,
        comment: comment,
        details: pair.details,
        userSlack: pair.userSlack
      });
    }
    });
};


