const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const _ = require('lodash');
const Rx = require('rx');
const loopback = require('loopback');
const boot = require('loopback-boot');
const expressState = require('express-state');
const createDebugger = require('debug');

const { setupPassport } = require('./component-passport');

const log = createDebugger('fcc:server');
// force logger to always output
// this may be brittle
log.enabled = true;

Rx.config.longStackSupport = process.env.NODE_DEBUG !== 'production';
const app = loopback();

expressState.extend(app);
app.set('state namespace', '__fcc__');
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(loopback.token());
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
    // rethrowing the error here bacause any error thrown in the boot stage
    // is silent
    logOnce('The below error was thrown in the boot stage');
    throw err;
  }
});

setupPassport(app);

const { db } = app.datasources;
db.on('connected', _.once(() => log('db connected')));
app.start = _.once(function() {
  const server = app.listen(app.get('port'), function() {
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

module.exports = app;

// start the server if `$ node server.js`
// in production use `$npm start-production`
// or `$node server/production` to start the server
// and wait for DB handshake
if (require.main === module) {
  app.start();
}
