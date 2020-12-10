const debug = require('debug')('probot:presolver');
const Presolver = require('./server/presolver');
const config = require('../config');
// config should be imported before importing any other file
const mongoose = require('mongoose');
const path = require('path');
const rateLimit = require("express-rate-limit");

async function probotPlugin(robot) {
  const events = [
    'pull_request.opened',
    'pull_request.edited',
    'pull_request.synchronize',
    'pull_request.reopened',
    'pull_request.labeled',
    'pull_request.closed'
  ];

  robot.on(events, presolve.bind(null, robot));

  // const prOpened = require('./test/payloads/events/pullRequests.opened');
  // robot.receive({
  //   name: 'pull_request.opened',
  //   payload: prOpened
  // });
  const redirect = robot.route('/');
  redirect.get('/', (req, res) => res.redirect('/home'));
  const landingPage = robot.route('/home');
  landingPage.use(require('express').static('public'));
  const app = robot.route('/dashboard');
  // May need to uncomment the following to get rateLimit to work properly since we are using reverse-proxy
  // app.set('trust proxy', 1);

  const { pareto, pr, search, info, boilerplates } = require('./server/routes');

  const staticPath = path.join(__dirname, '.', 'client', 'build');
  app.use(require('express').static(staticPath));

  app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    response.header('Access-Control-Allow-Methods', 'GET');
    next();
  });

  const landingHtml = path.join(__dirname, './public/index.html');
  landingPage.get('/', (req, res) => res.sendFile(landingHtml));

  const htmlpath = path.join(__dirname, './client/build/index.html');
  app.get('/', (request, response) => response.sendFile(htmlpath));

  const rateLimitOptions = {
    windowMs: 160 * 1000, // 10 seconds
    max: 10,
    message: { message: 'You are rate limited'},
    handler: (req, res, next) => {
      res.status(429).send('hi')
    }
  };

  const reqLimiter = rateLimit(rateLimitOptions);
  app.use(reqLimiter)

  app.use('/pr', pr);
  app.use('/search', search);
  app.use('/pareto',  pareto);
  app.use('/info',  info);
  app.use('/boilerplates', boilerplates);

  app.use(function(err, req, res) {
    res.status(err.status || 500).send('this one');
  });
  if (mongoose.connection.readyState === 0) {
    // connect to mongo db
    const mongoUri = config.mongo.host;

    const promise = mongoose.connect(
      mongoUri, { useNewUrlParser: true }
    );
    promise
      .then(() => {
        console.log('MongoDB is connected');
      })
      .catch(err => {
        console.log(err);
        console.log('MongoDB connection unsuccessful');
      });
  }
}

async function presolve(app, context) {
  const presolver = forRepository(context);
  const pullRequest = getPullRequest(context);
  return presolver.presolve(pullRequest);
}

function forRepository(context) {
  const config = { ...context.repo({ logger: debug }) };
  return new Presolver(context, config);
}

function getPullRequest(context) {
  return context.payload.pull_request || context.payload.review.pull_request;
}

module.exports = probotPlugin;
