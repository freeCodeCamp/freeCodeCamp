// this ensures node understands the future
require('babel-register');
const _ = require('lodash');

const startTime = Date.now();
// this is where server starts booting up
const app = require('./server');

let timeoutHandler;
let killTime = 15;

const onConnect = _.once(() => {
  console.log('db connected in: %s', Date.now() - startTime);
  if (timeoutHandler) {
    clearTimeout(timeoutHandler);
  }
  app.start();
});

timeoutHandler = setTimeout(() => {
  const message = `db did not connect after ${killTime}s -- crashing hard`;
  // purposely shutdown server
  // pm2 should restart this in production
  throw new Error(message);
}, killTime * 1000);

app.dataSources.db.on('connected', onConnect);
