var express = require('express'),
    async = require('async'),
    moment = require('moment'),
    Twit = require('twit'),
    Slack = require('node-slack'),
    request = require('request'),
    debug = require('debug')('freecc:cntr:resources'),
    constantStrings = require('./constantStrings.json'),

    User = require('../../models/User'),
    Challenge = require('./../../models/Challenge'),
    Story = require('./../../models/Story'),
    FieldGuide = require('./../../models/FieldGuide'),
    Nonprofit = require('./../../models/Nonprofit'),
    secrets = require('./../../config/secrets');

var slack = new Slack(secrets.slackHook);
var router = express.Router();

router.get('/api/github', githubCalls);
router.get('/api/blogger', bloggerCalls);
router.get('/api/trello', trelloCalls);
router.get('/api/codepen/twitter/:screenName', twitter);
router.get('/sitemap.xml', sitemap);
router.post('/get-help', getHelp);
router.post('/get-pair', getPair);
router.get('/chat', chat);
router.get('/twitch', twitch);
router.get('/pmi-acp-agile-project-managers', agileProjectManagers);
router.get('/pmi-acp-agile-project-managers-form', agileProjectManagersForm);
router.get('/nonprofits', nonprofits);
router.get('/nonprofits-form', nonprofitsForm);
router.get('/jobs-form', jobsForm);
router.get('/submit-cat-photo', catPhotoSubmit);
router.get('/unsubscribe/:email', unsubscribe);
router.get('/unsubscribed', unsubscribed);
router.get('/cats.json', getCats);

router.get('/api/slack', slackInvite);

function slackInvite(req, res, next) {
  if (req.user) {
    if (req.user.email) {
      var invite = {
        'email': req.user.email,
        'token': process.env.SLACK_KEY,
        'set_active': true
      };

      var headers = {
        'User-Agent': 'Node Browser/0.0.1',
        'Content-Type': 'application/x-www-form-urlencoded'
      };

      var options = {
        url: 'https://freecode.slack.com/api/users.admin.invite',
        method: 'POST',
        headers: headers,
        form: invite
      };

      request(options, function (error, response) {
        if (!error && response.statusCode === 200) {
          req.flash('success', {
            msg: 'We\'ve successfully requested an invite for you.' +
              ' Please check your email and follow the instructions from Slack.'
          });
          req.user.sentSlackInvite = true;
          req.user.save(function(err) {
            if (err) {
              return next(err);
            }
            return res.redirect('back');
          });
        } else {
          req.flash('errors', {
            msg: 'The invitation email did not go through for some reason.' +
              ' Please try again or <a href=\'mailto:team@' +
              'freecodecamp.com?subject=' +
              'slack%20invite%20failed%20to%20send\'>' +
              'email us</a>.'
          });
          return res.redirect('back');
        }
      });
    } else {
      req.flash('notice', {
        msg: 'Before we can send your Slack invite, we need your email ' +
          'address. Please update your profile information here.'
      });
      return res.redirect('/account');
    }
  } else {
    req.flash('notice', {
      msg: 'You need to sign in to Free Code Camp before ' +
        'we can send you a Slack invite.'
    });
    return res.redirect('/account');
  }
}

function twitter(req, res, next) {
  // sends out random tweets about javascript
  var T = new Twit({
    'consumer_key': secrets.twitter.consumerKey,
    'consumer_secret': secrets.twitter.consumerSecret,
    'access_token': secrets.twitter.token,
    'access_token_secret': secrets.twitter.tokenSecret
  });

  var screenName;
  if (req.params.screenName) {
    screenName = req.params.screenName;
  } else {
    screenName = 'freecodecamp';
  }

  T.get(
    'statuses/user_timeline',
    {
      'screen_name': screenName,
      count: 10
    },
    function(err, data) {
      if (err) { return next(err); }
      return res.json(data);
    }
  );
}


function getHelp(req, res) {
  var userName = req.user.profile.username;
  var code = req.body.payload.code ? '\n```\n' +
  req.body.payload.code + '\n```\n'
    : '';
  var challenge = req.body.payload.challenge;

  slack.send({
    text: '*@' + userName + '* wants help with ' + challenge + '. ' +
      code + 'Hey, *@' + userName + '*, if no one helps you right ' +
      'away, try typing out your problem in detail to me. Like this: ' +
      'http://en.wikipedia.org/wiki/Rubber_duck_debugging',
    channel: '#help',
    username: 'Debuggy the Rubber Duck',
    'icon_url': 'https://pbs.twimg.com/profile_images/' +
    '3609875545/569237541c920fa78d78902069615caf.jpeg'
  });
  return res.sendStatus(200);
}

function getPair(req, res) {
  var userName = req.user.profile.username;
  var challenge = req.body.payload.challenge;
  slack.send({
    text: [
      'Anyone want to pair with *@',
      userName,
      '* on ',
      challenge,
      '?\nMake sure you install Screen Hero here: ',
      'http://freecodecamp.com/field-guide/how-do-i-install-screenhero\n',
      'Then start your pair program session with *@',
      userName,
      '* by typing \"/hero @',
      userName,
      '\" into Slack.\n And *@',
      userName,
      '*, be sure to launch Screen Hero, then keep coding. ',
      'Another camper may pair with you soon.'
    ].join(''),
    channel: '#letspair',
    username: 'Companion Cube',
    'icon_url': 'https://lh3.googleusercontent.com/-f6xDPDV2rPE/AAAAAAAAAAI/' +
      'AAAAAAAAAAA/mdlESXQu11Q/photo.jpg'
  });
  return res.sendStatus(200);
}

function sitemap(req, res, next) {
  var appUrl = 'http://www.freecodecamp.com';
  var now = moment(new Date()).format('YYYY-MM-DD');


  async.parallel({
      users: function(callback) {
        User.aggregate()
          .group({_id: 1, usernames: { $addToSet: '$profile.username'}})
          .match({'profile.username': { $ne: ''}})
          .exec(function(err, users) {
            if (err) {
              debug('User err: ', err);
              callback(err);
            } else {
              callback(null, users[0].usernames);
            }
          });
      },

      challenges: function (callback) {
        Challenge.aggregate()
          .group({_id: 1, names: { $addToSet: '$name'}})
          .exec(function (err, challenges) {
            if (err) {
              debug('Challenge err: ', err);
              callback(err);
            } else {
              callback(null, challenges[0].names);
            }
          });
      },
      stories: function (callback) {
        Story.aggregate()
          .group({_id: 1, links: {$addToSet: '$link'}})
          .exec(function (err, stories) {
            if (err) {
              debug('Story err: ', err);
              callback(err);
            } else {
              callback(null, stories[0].links);
            }
          });
      },
      nonprofits: function (callback) {
        Nonprofit.aggregate()
          .group({_id: 1, names: { $addToSet: '$name'}})
          .exec(function (err, nonprofits) {
            if (err) {
              debug('User err: ', err);
              callback(err);
            } else {
              callback(null, nonprofits[0].names);
            }
          });
      },
      fieldGuides: function (callback) {
        FieldGuide.aggregate()
          .group({_id: 1, names: { $addToSet: '$name'}})
          .exec(function (err, fieldGuides) {
            if (err) {
              debug('User err: ', err);
              callback(err);
            } else {
              callback(null, fieldGuides[0].names);
            }
          });
      }
    }, function (err, results) {
      if (err) {
        return next(err);
      } else {
        setTimeout(function() {
          res.header('Content-Type', 'application/xml');
          res.render('resources/sitemap', {
            appUrl: appUrl,
            now: now,
            users: results.users,
            challenges: results.challenges,
            stories: results.stories,
            nonprofits: results.nonprofits,
            fieldGuides: results.fieldGuides
          });
        }, 0);
      }
    }
  );
}

function chat(req, res) {
  if (req.user && req.user.progressTimestamps.length > 5) {
    res.redirect('http://freecode.slack.com');
  } else {
    res.render('resources/chat', {
      title: 'Watch us code live on Twitch.tv'
    });
  }
}

function jobsForm(req, res) {
  res.render('resources/jobs-form', {
    title: 'Employer Partnership Form for Job Postings,' +
      ' Recruitment and Corporate Sponsorships'
  });
}

function catPhotoSubmit(req, res) {
  res.send(
    'Success! You have submitted your cat photo. Return to your website ' +
    'by typing any letter into your code editor.'
  );
}

function nonprofits(req, res) {
  res.render('resources/nonprofits', {
    title: 'A guide to our Nonprofit Projects'
  });
}

function nonprofitsForm(req, res) {
  res.render('resources/nonprofits-form', {
    title: 'Nonprofit Projects Proposal Form'
  });
}

function agileProjectManagers(req, res) {
  res.render('resources/pmi-acp-agile-project-managers', {
    title: 'Get Agile Project Management Experience for the PMI-ACP'
  });
}

function agileProjectManagersForm(req, res) {
  res.render('resources/pmi-acp-agile-project-managers-form', {
    title: 'Agile Project Management Program Application Form'
  });
}

function twitch(req, res) {
  res.render('resources/twitch', {
    title: 'Enter Free Code Camp\'s Chat Rooms'
  });
}

function unsubscribe(req, res, next) {
  User.findOne({ email: req.params.email }, function(err, user) {
    if (user) {
      if (err) {
        return next(err);
      }
      user.sendMonthlyEmail = false;
      user.save(function () {
        if (err) {
          return next(err);
        }
        res.redirect('/unsubscribed');
      });
    } else {
      res.redirect('/unsubscribed');
    }
  });
}

function unsubscribed(req, res) {
  res.render('resources/unsubscribed', {
    title: 'You have been unsubscribed'
  });
}

function githubCalls(req, res, next) {
  var githubHeaders = {
    headers: {
      'User-Agent': constantStrings.gitHubUserAgent
    },
    port: 80
  };
  request(
    [
      'https://api.github.com/repos/freecodecamp/',
      'freecodecamp/pulls?client_id=',
      secrets.github.clientID,
      '&client_secret=',
      secrets.github.clientSecret
    ].join(''),
    githubHeaders,
    function(err, status1, pulls) {
      if (err) { return next(err); }
      pulls = pulls ?
        Object.keys(JSON.parse(pulls)).length :
        'Can\'t connect to github';

      request(
        [
          'https://api.github.com/repos/freecodecamp/',
          'freecodecamp/issues?client_id=',
          secrets.github.clientID,
          '&client_secret=',
          secrets.github.clientSecret
        ].join(''),
        githubHeaders,
        function (err, status2, issues) {
          if (err) { return next(err); }
          issues = ((pulls === parseInt(pulls, 10)) && issues) ?
          Object.keys(JSON.parse(issues)).length - pulls :
            "Can't connect to GitHub";
          res.send({
            issues: issues,
            pulls: pulls
          });
        }
      );
    }
  );
}

function trelloCalls(req, res, next) {
  request(
    'https://trello.com/1/boards/BA3xVpz9/cards?key=' +
    secrets.trello.key,
    function(err, status, trello) {
      if (err) { return next(err); }
      trello = (status && status.statusCode === 200) ?
        (JSON.parse(trello)) :
        'Can\'t connect to to Trello';

      res.end(JSON.stringify(trello));
    });
}

function bloggerCalls(req, res, next) {
  request(
    'https://www.googleapis.com/blogger/v3/blogs/2421288658305323950/' +
      'posts?key=' +
    secrets.blogger.key,
    function (err, status, blog) {
      if (err) { return next(err); }

      blog = (status && status.statusCode === 200) ?
        JSON.parse(blog) :
        'Can\'t connect to Blogger';
      res.end(JSON.stringify(blog));
    }
  );
}

function getCats(req, res) {
  res.send(
    [
      {
        'name': 'cute',
        'imageLink': 'https://encrypted-tbn3.gstatic.com/images' +
          '?q=tbn:ANd9GcRaP1ecF2jerISkdhjr4R9yM9-8ClUy-TA36MnDiFBukd5IvEME0g'
      },
      {
        'name': 'grumpy',
        'imageLink': 'http://cdn.grumpycats.com/wp-content/uploads/' +
          '2012/09/GC-Gravatar-copy.png'
      },
      {
        'name': 'mischievous',
        'imageLink': 'http://www.kittenspet.com/wp-content' +
          '/uploads/2012/08/cat_with_funny_face_3-200x200.jpg'
      }
    ]
  );
}

module.exports = router;
