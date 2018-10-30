'use strict';

const definitions = require('./stream.definitions');

/*

TEST ALL FOLLOWING BUNYAN LOGGER FORMAT STYLES :

log.info();     // Returns a boolean: is the "info" level enabled?
                // This is equivalent to `log.isInfoEnabled()` or
                // `log.isEnabledFor(INFO)` in log4j.

log.info('hi');                     // Log a simple string message (or number).
log.info('hi %s', bob, anotherVar); // Uses `util.format` for msg formatting.

log.info({foo: 'bar'}, 'hi');
                // The first field can optionally be a "fields" object, which
                // is merged into the log record.

log.info(err);  // Special case to log an `Error` instance to the record.
                // This adds an "err" field with exception details
                // (including the stack) and sets "msg" to the exception
                // message.
log.info(err, 'more on this: %s', more);
                // ... or you can specify the "msg".

log.info({foo: 'bar', err: err}, 'some msg about this error');
                // To pass in an Error *and* other fields, use the `err`
                // field name for the Error instance.
*/

describe('SentrySteam class', () => {
  it('should log a message from logger#debug(message)', () => {
    const message = 'Hello';
    const client = definitions.givenClient();
    const logger = definitions.givenLogger(client, 'debug');
    logger.debug(message);

    definitions.thenClientCapturesMessage(client, 'info', message);
  });

  it('should log a message from logger#info(message, messageArgs)', () => {
    const client = definitions.givenClient();
    const logger = definitions.givenLogger(client, 'debug');
    logger.info('Hello %s', 'Joe Mocha', '!');
    definitions.thenClientCapturesMessage(client, 'info', 'Hello Joe Mocha !');
  });

  it('should log a message with tags from logger#info(extraWithTags, message)', () => {
    const message = 'Hello';
    const client = definitions.givenClient();
    const logger = definitions.givenLogger(client, 'debug');
    const tags = { foo: 'bar' };
    logger.debug({ tags }, message);

    definitions.thenClientCapturesMessage(client, 'info', message, null, tags);
  });

  it('should log a message from logger#warn(extra, message)', () => {
    const client = definitions.givenClient();
    const logger = definitions.givenLogger(client);
    logger.warn({ foo: 'bar' }, 'Hello');
    definitions.thenClientCapturesMessage(client, 'warning', 'Hello', { foo: 'bar' });
  });

  it('should log a message from logger#error(error)', () => {
    const client = definitions.givenClient();
    const logger = definitions.givenLogger(client);
    const err = new Error('Hello Error');
    err.code = 400;
    err.signal = 400;
    logger.error(err);

    definitions.thenClientCapturesException(client, 'error', err);
  });

  it('should log a message from logger#error(error, message, messageArgs)', () => {
    const client = definitions.givenClient();
    const logger = definitions.givenLogger(client);
    const err = new Error('Hello Error');

    logger.error(err, 'Hello %s', 'Joe Mocha', '!');

    definitions.thenClientCapturesException(client, 'error', err, { msg: 'Hello Joe Mocha !' });
  });

  it('should log a message from logger#debug(extraWithError, message)', () => {
    const client = definitions.givenClient();
    const logger = definitions.givenLogger(client, 'debug');
    const err = new Error('Hello Error');

    logger.debug({ foo: 'bar', err }, 'Hello');

    definitions.thenClientCapturesException(client, 'info', err, { msg: 'Hello', foo: 'bar' });
  });

  it('should log a message with tags from logger#debug(extraWithError, message)', () => {
    const client = definitions.givenClient();
    const logger = definitions.givenLogger(client, 'debug');
    const err = new Error('Hello Error');
    const tags = { foo: 'bar' };

    logger.debug({ foo: 'bar', err, tags }, 'Hello');

    definitions.thenClientCapturesException(client, 'info', err, { msg: 'Hello', foo: 'bar' }, tags);
  });
});
