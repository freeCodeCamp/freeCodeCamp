require('dotenv').load();
// handle uncaught exceptions. Forever will restart process on shutdown
process.on('uncaughtException', function (err) {
  console.error(
    (new Date()).toUTCString() + ' uncaughtException:',
    err.message
  );
  console.error(err.stack);
  /* eslint-disable no-process-exit */
  process.exit(1);
  /* eslint-enable no-process-exit */
});

var express = require('express'),
  hpp = require('hpp'),
  accepts = require('accepts'),
  cookieParser = require('cookie-parser'),
  compress = require('compression'),
  session = require('express-session'),
  logger = require('morgan'),
  errorHandler = require('errorhandler'),
  methodOverride = require('method-override'),
  bodyParser = require('body-parser'),
  helmet = require('helmet'),
  frameguard = require('frameguard'),
  csp = require('helmet-csp'),
  MongoStore = require('connect-mongo')(session),
  flash = require('express-flash'),
  path = require('path'),
  mongoose = require('mongoose'),
  passport = require('passport'),
  expressValidator = require('express-validator'),
  request = require('request'),
  forceDomain = require('forcedomain'),
  lessMiddleware = require('less-middleware'),

  /**
   * Controllers (route handlers).
   */
  homeController = require('./controllers/home'),
  resourcesController = require('./controllers/resources'),
  userController = require('./controllers/user'),
  nonprofitController = require('./controllers/nonprofits'),
  fieldGuideController = require('./controllers/fieldGuide'),
  challengeMapController = require('./controllers/challengeMap'),
  challengeController = require('./controllers/challenge'),
  jobsController = require('./controllers/jobs'),

  /**
   *  Stories
   */
  storyController = require('./controllers/story'),

  /**
   * API keys and Passport configuration.
   */
  secrets = require('./config/secrets'),
  passportConf = require('./config/passport');

/**
 * Create Express server.
 */
var app = express();

/**
 * Connect to MongoDB.
 */
mongoose.connect(secrets.db);
mongoose.connection.on('error', function () {
  console.error(
    'MongoDB Connection Error. Please make sure that MongoDB is running.'
  );
});

/**
 * Express configuration.
 */


app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

if (process.env.NODE_ENV === 'production') {
  app.use(forceDomain({
    hostname: 'www.freecodecamp.com'
  }));
}
app.use(hpp());
app.use(compress());
app.use(lessMiddleware(__dirname + '/public'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator({
  customValidators: {
    matchRegex: function (param, regex) {
      return regex.test(param);
    }
  }
}));
app.use(methodOverride());
app.use(cookieParser());
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: secrets.sessionSecret,
  store: new MongoStore({
    url: secrets.db,
    'autoReconnect': true
  })
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.disable('x-powered-by');

app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(helmet.frameguard());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

var trusted = [
  "'self'",
  'blob:',
  '*.freecodecamp.com',
  'http://www.freecodecamp.com',
  'ws://freecodecamp.com/',
  'ws://www.freecodecamp.com/',
  '*.gstatic.com',
  '*.google-analytics.com',
  '*.googleapis.com',
  '*.google.com',
  '*.gstatic.com',
  '*.doubleclick.net',
  '*.twitter.com',
  '*.twitch.tv',
  '*.twimg.com',
  "'unsafe-eval'",
  "'unsafe-inline'",
  '*.bootstrapcdn.com',
  '*.cloudflare.com',
  'https://*.cloudflare.com',
  'localhost:3001',
  'ws://localhost:3001/',
  'http://localhost:3001',
  'localhost:3000',
  'ws://localhost:3000/',
  'http://localhost:3000',
  '*.ionicframework.com',
  'https://syndication.twitter.com',
  '*.youtube.com',
  '*.jsdelivr.net',
  'https://*.jsdelivr.net',
  '*.ytimg.com',
  '*.bitly.com',
  'http://cdn.inspectlet.com/',
  'wss://inspectletws.herokuapp.com/',
  'http://hn.inspectlet.com/'
];

app.use(helmet.csp({
  defaultSrc: trusted,
  scriptSrc: [
    '*.optimizely.com',
    '*.aspnetcdn.com',
    '*.d3js.org'
  ].concat(trusted),
  'connect-src': [
  ].concat(trusted),
  styleSrc: trusted,
  imgSrc: [
    /* allow all input since we have user submitted images for public profile*/
    '*'
  ].concat(trusted),
  fontSrc: ['*.googleapis.com'].concat(trusted),
  mediaSrc: [
    '*.amazonaws.com',
    '*.twitter.com'
  ].concat(trusted),
  frameSrc: [

    '*.gitter.im',
    '*.gitter.im https:',
    '*.vimeo.com',
    '*.twitter.com',
    '*.ghbtns.com'
  ].concat(trusted),
  reportOnly: false, // set to true if you only want to report errors
  setAllHeaders: false, // set to true if you want to set all headers
  safari5: false // set to true if you want to force buggy CSP in Safari 5
}));

app.use(function (req, res, next) {
  // Make user object available in templates.
  res.locals.user = req.user;
  next();
});

app.use(express.static(__dirname + '/public', {maxAge: 86400000 }));

app.use(function (req, res, next) {
  // Remember original destination before login.
  var path = req.path.split('/')[1];
  if (/auth|login|logout|signin|signup|fonts|favicon/i.test(path)) {
    return next();
  } else if (/\/stories\/comments\/\w+/i.test(req.path)) {
    return next();
  }
  req.session.returnTo = req.path;
  next();
});

/**
 * Main routes.
 */

app.get('/', homeController.index);

app.get('/nonprofit-project-instructions', function(req, res) {
  res.redirect(301, '/field-guide/how-do-free-code-camps-nonprofit-projects-work');
});

app.get('/linkedin', function(req, res) {
  res.redirect(301, '/field-guide/can-i-add-free-code-camp-to-my-linkedin-profile');
});

app.post('/get-help', resourcesController.getHelp);

app.post('/get-pair', resourcesController.getPair);

app.get('/chat', resourcesController.chat);

app.get('/twitch', resourcesController.twitch);

app.get('/coding-bootcamp-cost-calculator', resourcesController.bootcampCalculator);
app.get('/coding-bootcamp-cost-calculator.json', resourcesController.bootcampCalculatorJson);

app.get('/cats.json', function(req, res) {
  res.send(
    [
      {
        "name": "cute",
        "imageLink": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRaP1ecF2jerISkdhjr4R9yM9-8ClUy-TA36MnDiFBukd5IvEME0g"
      },
      {
        "name": "grumpy",
        "imageLink": "http://cdn.grumpycats.com/wp-content/uploads/2012/09/GC-Gravatar-copy.png"
      },
      {
        "name": "mischievous",
        "imageLink": "http://www.kittenspet.com/wp-content/uploads/2012/08/cat_with_funny_face_3-200x200.jpg"
      }
    ]
  )
});

// Agile Project Manager Onboarding

app.get('/pmi-acp-agile-project-managers',
  resourcesController.agileProjectManagers);

app.get('/agile', function(req, res) {
  res.redirect(301, '/pmi-acp-agile-project-managers');
});

app.get('/pmi-acp-agile-project-managers-form',
  resourcesController.agileProjectManagersForm);

// Nonprofit Onboarding

app.get('/nonprofits', resourcesController.nonprofits);

app.get('/nonprofits-form', resourcesController.nonprofitsForm);

app.get('/map',
  userController.userMigration,
  challengeMapController.challengeMap
);

app.get('/live-pair-programming', function(req, res) {
  res.redirect(301, '/twitch');
});

app.get('/learn-to-code', challengeMapController.challengeMap);
app.get('/about', function(req, res) {
  res.redirect(301, '/map');
});
app.get('/signin', userController.getSignin);

app.get('/login', function(req, res) {
  res.redirect(301, '/signin');
});

app.post('/signin', userController.postSignin);

app.get('/signout', userController.signout);

app.get('/logout', function(req, res) {
  res.redirect(301, '/signout');
});

app.get('/forgot', userController.getForgot);

app.post('/forgot', userController.postForgot);

app.get('/reset/:token', userController.getReset);

app.post('/reset/:token', userController.postReset);

app.get('/email-signup', userController.getEmailSignup);

app.get('/email-signin', userController.getEmailSignin);

app.post('/email-signup', userController.postEmailSignup);

app.post('/email-signin', userController.postSignin);

/**
 * Nonprofit Project routes.
 */

app.get('/nonprofits/directory', nonprofitController.nonprofitsDirectory);

app.get(
  '/nonprofits/:nonprofitName',
  nonprofitController.returnIndividualNonprofit
);

app.get(
  '/jobs',
  jobsController.jobsDirectory
);

app.get(
  '/jobs-form',
  resourcesController.jobsForm
);

app.get('/privacy', function(req, res) {
  res.redirect(301, '/field-guide/what-is-the-free-code-camp-privacy-policy');
});

app.get('/submit-cat-photo', resourcesController.catPhotoSubmit);

app.get('/api/slack', function(req, res) {
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
        url: 'https://freecodecamp.slack.com/api/users.admin.invite',
        method: 'POST',
        headers: headers,
        form: invite
      };

      request(options, function (error, response, body) {
        if (!error && response.statusCode === 200) {
          req.flash('success', {
            msg: "We've successfully requested an invite for you. Please check your email and follow the instructions from Slack."
          });
          req.user.sentSlackInvite = true;
          req.user.save(function(err, user) {
            if (err) {
              next(err);
            }
            return res.redirect('back');
          });
        } else {
          req.flash('errors', {
            msg: "The invitation email did not go through for some reason. Please try again or <a href='mailto:team@freecodecamp.com?subject=slack%20invite%20failed%20to%20send>email us</a>."
          });
          return res.redirect('back');
        }
      });
    } else {
      req.flash('notice', {
        msg: "Before we can send your Slack invite, we need your email address. Please update your profile information here."
      });
      return res.redirect('/account');
    }
  } else {
    req.flash('notice', {
      msg: "You need to sign in to Free Code Camp before we can send you a Slack invite."
    });
    return res.redirect('/account');
  }
});

/**
 * Camper News routes.
 */
app.get(
  '/stories/hotStories',
  storyController.hotJSON
);

app.get(
  '/stories/recentStories',
  storyController.recentJSON
);

app.get(
  '/stories/comments/:id',
  storyController.comments
);

app.post(
  '/stories/comment/',
  storyController.commentSubmit
);

app.post(
  '/stories/comment/:id/comment',
  storyController.commentOnCommentSubmit
);

app.put(
  '/stories/comment/:id/edit',
  storyController.commentEdit
);

app.get(
  '/stories/submit',
  storyController.submitNew
);

app.get(
  '/stories/submit/new-story',
  storyController.preSubmit
);

app.post(
  '/stories/preliminary',
  storyController.newStory
);

app.post(
  '/stories/',
  storyController.storySubmission
);

app.get(
  '/news/',
  storyController.hot
);

app.post(
  '/stories/search',
  storyController.getStories
);

app.get(
  '/news/:storyName',
  storyController.returnIndividualStory
);

app.post(
  '/stories/upvote/',
  storyController.upvote
);

app.get(
  '/unsubscribe/:email',
  resourcesController.unsubscribe
);

app.get(
  '/unsubscribed',
  resourcesController.unsubscribed
);

app.all('/account', passportConf.isAuthenticated);

app.get('/account/api', userController.getAccountAngular);

/**
 * API routes
 */

app.get('/api/github', resourcesController.githubCalls);

app.get('/api/blogger', resourcesController.bloggerCalls);

app.get('/api/trello', resourcesController.trelloCalls);

app.get('/api/codepen/twitter/:screenName', resourcesController.codepenResources.twitter);

/**
 * Field Guide related routes
 */
app.get('/field-guide/all-articles', fieldGuideController.showAllFieldGuides);

app.get('/field-guide/:fieldGuideName',
  fieldGuideController.returnIndividualFieldGuide
);

app.get('/field-guide/', fieldGuideController.returnNextFieldGuide);

app.post('/completed-field-guide/', fieldGuideController.completedFieldGuide);


/**
 * Challenge related routes
 */

app.get('/challenges/next-challenge',
  userController.userMigration,
  challengeController.returnNextChallenge
);

app.get(
  '/challenges/:challengeName',
  userController.userMigration,
  challengeController.returnIndividualChallenge
);

app.get('/challenges/',
  userController.userMigration,
  challengeController.returnCurrentChallenge);
// todo refactor these routes
app.post('/completed-challenge/', challengeController.completedChallenge);

app.post('/completed-zipline-or-basejump',
  challengeController.completedZiplineOrBasejump);

app.post('/completed-bonfire', challengeController.completedBonfire);

// Unique Check API route
app.get('/api/checkUniqueUsername/:username',
  userController.checkUniqueUsername
);

app.get('/api/checkExistingUsername/:username',
  userController.checkExistingUsername
);

app.get('/api/checkUniqueEmail/:email', userController.checkUniqueEmail);

app.get('/account', userController.getAccount);

app.post('/account/profile', userController.postUpdateProfile);

app.post('/account/password', userController.postUpdatePassword);

app.post('/account/delete', userController.postDeleteAccount);

app.get('/account/unlink/:provider', userController.getOauthUnlink);

app.get('/sitemap.xml', resourcesController.sitemap);

/**
 * OAuth sign-in routes.
 */

var passportOptions = {
  successRedirect: '/',
  failureRedirect: '/login'
};

app.get('/auth/twitter', passport.authenticate('twitter'));

app.get(
  '/auth/twitter/callback',
  passport.authenticate('twitter', {
    successRedirect: '/',
    failureRedirect: '/login'
  })
);

app.get(
  '/auth/linkedin',
  passport.authenticate('linkedin', {
    state: 'SOME STATE'
  })
);

app.get(
  '/auth/linkedin/callback',
  passport.authenticate('linkedin', passportOptions)
);

app.get(
  '/auth/facebook',
  passport.authenticate('facebook', {scope: ['email', 'user_location']})
);

app.get(
  '/auth/facebook/callback',
  passport.authenticate('facebook', passportOptions), function (req, res) {
    res.redirect(req.session.returnTo || '/');
  }
);

app.get('/auth/github', passport.authenticate('github'));

app.get(
  '/auth/github/callback',
  passport.authenticate('github', passportOptions), function (req, res) {
    res.redirect(req.session.returnTo || '/');
  }
);

app.get(
  '/auth/google',
  passport.authenticate('google', {scope: 'profile email'})
);

app.get(
  '/auth/google/callback',
  passport.authenticate('google', passportOptions), function (req, res) {
    res.redirect(req.session.returnTo || '/');
  }
);

// put this route last
app.get(
  '/:username',
  userController.returnUser
);

/**
 * 500 Error Handler.
 */
if (process.env.NODE_ENV === 'development') {
  app.use(errorHandler({ log: true }));
} else {
  // error handling in production
  app.use(function(err, req, res, next) {

    // respect err.status
    if (err.status) {
      res.statusCode = err.status;
    }

    // default status code to 500
    if (res.statusCode < 400) {
      res.statusCode = 500;
    }

    // parse res type
    var accept = accepts(req);
    var type = accept.type('html', 'json', 'text');

    var message = 'opps! Something went wrong. Please try again later';
    if (type === 'html') {
      req.flash('errors', { msg: message });
      return res.redirect('/');
      // json
    } else if (type === 'json') {
      res.setHeader('Content-Type', 'application/json');
      return res.send({ message: message });
      // plain text
    } else {
      res.setHeader('Content-Type', 'text/plain');
      return res.send(message);
    }
  });
}

/**
 * Start Express server.
 */

app.listen(app.get('port'), function () {
  console.log(
    'FreeCodeCamp server listening on port %d in %s mode',
    app.get('port'),
    app.get('env')
  );
});

module.exports = app;
