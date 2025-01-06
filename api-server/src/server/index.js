const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') });

const Sentry = require('@sentry/node');
// const Tracing = require('@sentry/tracing');
const createDebugger = require('debug');
const _ = require('lodash');
const loopback = require('loopback');
const boot = require('loopback-boot');
const morgan = require('morgan');

const { sentry } = require('../../config/secrets');
const { setupPassport } = require('./component-passport');
const { getRedirectParams } = require('./utils/redirection.js');

const log = createDebugger('fcc:server');
const reqLogFormat = ':date[iso] :status :method :response-time ms - :url';

const app = loopback();

app.set('state namespace', '__fcc__');
app.set('port', process.env.API_PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.use(loopback.token());
app.use(
  morgan(reqLogFormat, { stream: { write: msg => log(_.split(msg, '\n')[0]) } })
);
app.disable('x-powered-by');

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

boot(app, __dirname, err => {
  if (err) {
    // rethrowing the error here because any error thrown in the boot stage
    // is silent
    logOnce('The below error was thrown in the boot stage');
    throw err;
  }
});

setupPassport(app);

const { db } = app.datasources;
db.on(
  'connected',
  _.once(() => log('db connected'))
);

app.start = _.once(function () {
  const server = app.listen(app.get('port'), function () {
    app.emit('started');
    log(
      'freeCodeCamp server listening on port %d in %s',
      app.get('port'),
      app.get('env')
    );
    log(`connecting to db at ${db.settings.url}`);
  });

  process.on('SIGINT', () => {
    log('Shutting down server');
    server.close(() => {
      log('Server is closed');
    });
    log('closing db connection');
    db.disconnect().then(() => {
      log('DB connection closed');
      // exit process
      // this may close kept alive sockets
      // eslint-disable-next-line no-process-exit
      process.exit(0);
    });
  });
});

if (process.env.FREECODECAMP_NODE_ENV === 'development') {
  app.get('/', (req, res) => {
    log('Mounting dev root redirect...');
    const { origin } = getRedirectParams(req);
    res.redirect(origin);
  });
}

if (sentry.dsn === 'dsn_from_sentry_dashboard') {
  log('Sentry reporting disabled unless DSN is provided.');
} else {
  Sentry.init({
    dsn: sentry.dsn
    // integrations: [
    //   new Sentry.Integrations.Http({ tracing: true }),
    //   new Tracing.Integrations.Express({
    //     app
    //   })
    // ],
    // // Capture 20% of transactions to avoid
    // // overwhelming Sentry and remain within
    // // the usage quota
    // tracesSampleRate: 0.2
  });
  log('Sentry initialized');
}

module.exports = app;

if (require.main === module) {
  app.start();
}
