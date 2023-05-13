const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') });
const Sentry = require('@sentry/node');
const createDebugger = require('debug');
const _ = require('lodash');
const loopback = require('loopback');
const boot = require('loopback-boot');
const morgan = require('morgan');
const { sentry } = require('../../../config/secrets');
const { setupPassport } = require('./component-passport');

const log = createDebugger('fcc:server');
const reqLogFormat = ':date[iso] :status :method :response-time ms - :url';

const app = loopback();

// Set app configuration options
app.set('state namespace', '__fcc__');
app.set('port', process.env.API_PORT || 3000);
app.set('views', path.join(__dirname, 'views'));

// Use middleware
app.use(loopback.token());
app.use(morgan(reqLogFormat, { 
  stream: { 
    write: msg => log(_.split(msg, '\n')[0])
  } 
}));
app.disable('x-powered-by');

// Helper function to log only once
const createLogOnce = () => {
  let called = false;
  return str => {
    if (called) {
      return null;
    }
    called = true;
    return log(str);
  };
};
const logOnce = createLogOnce();

// Boot LoopBack app
boot(app, __dirname, err => {
  if (err) {
    // Rethrow error because any error thrown in the boot stage is silent
    logOnce('The below error was thrown in the boot stage');
    throw err;
  }
});

// Setup passport middleware
setupPassport(app);

// Log when database is connected
const { db } = app.datasources;
db.on('connected', _.once(() => log('db connected')));

// Start the app
app.start = _.once(function () {
  const server = app.listen(app.get('port'), function () {
    // Emit event when app is started
    app.emit('started');
    // Log app info
    log(
      'freeCodeCamp server listening on port %d in %s',
      app.get('port'),
      app.get('env')
    );
    log(`connecting to db at ${db.settings.url}`);
  });

  // Handle SIGINT signal to gracefully shut down the server
  process.on('SIGINT', () => {
    log('Shutting down server');
    server.close(() => {
      log('Server is closed');
    });
    log('closing db connection');
    db.disconnect().then(() => {
      log('DB connection closed');
      // Exit process
      process.exit(0);
    });
  });
});

// Initialize Sentry error tracking
if (sentry.dsn === 'dsn_from_sentry_dashboard') {
  log('Sentry reporting disabled unless DSN is provided.');
} else {
  Sentry.init({
    dsn: sentry.dsn
    // Add integrations and set tracesSampleRate here if needed
  });
  log('Sentry initialized');
}

// Export the app
module.exports = app;

// Start the app if this module is the main module
if (require.main === module) {
  app.start();
}

