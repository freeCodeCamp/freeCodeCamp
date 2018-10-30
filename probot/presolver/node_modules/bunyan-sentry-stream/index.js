'use strict';

const SentryStream = require('./lib/SentryStream');

module.exports = defaultSetup;
module.exports.SentryStream = SentryStream;

// // //

/**
 * Default module function
 * @param  {Object} client Sentry client
 * @param  {String} level Bunyan level
 * @return {Object}        Bunyan stream with embedded Sentry steam
 */
function defaultSetup(client, level) {
  return {
    stream: new SentryStream(client),
    type: 'raw',
    level: level || 'warn'
  };
}
