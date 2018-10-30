'use strict';

const omit = require('lodash.omit');

// // //

/**
 * Sentry stream for Bunyan
 */
class SentryStream {

  /**
   * SentryStream constructor
   * @param  {Object} client the Sentry client
   * @return {void}
   */
  constructor(client) {
    this.client = client;
  }

  /**
   * Method call by Bunyan to save log record
   * @param  {Object} record log properties
   * @return {Boolean}        true
   */
  write(record) {
    const err = record.err;
    const tags = record.tags;
    const level = this.getSentryLevel(record);

    if (err) {
      const extra = omit(record, 'err', 'tags');
      this.client.captureException(this.deserializeError(err), { extra, level, tags });
    } else {
      const extra = omit(record, 'msg', 'tags');
      this.client.captureMessage(record.msg, { extra, level, tags });
    }
    return (true);
  }

  /**
   * Convert Bunyan level number to Sentry level label.
   * Rule : >50=error ; 40=warning ; info otherwise
   * @param  {Object} record Bunyan log record
   * @return {String}        Sentry level
   */
  getSentryLevel(record) {
    const level = record.level;

    if (level >= 50) return 'error';
    if (level === 40) return 'warning';

    return 'info';
  }

  /**
   * Error deserialiazing function. Bunyan serialize the error to object : https://github.com/trentm/node-bunyan/blob/master/lib/bunyan.js#L1089
   * @param  {object} data serialized Bunyan
   * @return {Error}      the deserialiazed error
   */
  deserializeError(data) {
    if (data instanceof Error) return data;

    const error = new Error(data.message);
    error.name = data.name;
    error.stack = data.stack;
    error.code = data.code;
    error.signal = data.signal;
    return error;
  }
}

module.exports = SentryStream;
