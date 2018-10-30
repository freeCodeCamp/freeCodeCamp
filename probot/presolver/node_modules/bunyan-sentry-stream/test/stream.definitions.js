'use strict';

const bunyan = require('bunyan');
const sinon = require('sinon');
const should = require('chai').should();
const stream = require('../index.js');

module.exports = {
  givenLogger,
  givenClient,
  thenClientCapturesException,
  thenClientCapturesMessage
};

/**
 * Build a Bunyan logger
 * @param  {Object} client a Sentry client
 * @param  {String} [level] a Bunyan level
 * @return {Object}        the logger
 */
function givenLogger(client, level) {
  return bunyan.createLogger({
    name: 'test-logger',
    streams: [
      // /* DEBUG */
      // {
      //   level: 'debug',
      //   stream: process.stdout
      // },
      stream(client, level)
    ]
  });
}

/**
 * Create a mocked Sentry client
 * @return {Object} the client
 */
function givenClient() {
  const client = { captureException() { }, captureMessage() { } };

  sinon.spy(client, 'captureException');
  sinon.spy(client, 'captureMessage');

  return client;
}

/**
 * Assert the client when #captureException is called
 * @param  {Object} client        the Sentry mocked client
 * @param  {String} expectedLevel the final Sentry level (info, warning or error)
 * @param  {Error} expectedErr   the error throws
 * @param  {Object} expectedExtra  the expected extra sent in Sentry extra bundle
 * @param  {Object} expectedTags  the expected tags sent in Sentry extra bundle
 * @return {void}
 */
function thenClientCapturesException(client, expectedLevel, expectedErr, expectedExtra, expectedTags) {
  // Expected error must be provided
  should.exist(expectedErr);

  // Client must exist
  should.exist(client);
  client.should.be.an('object');

  // Client#captureException: must be a spy
  // Client#captureException: called once
  assertSpyCallCount(client.captureException, 1);

  const fnArgs = client.captureException.args[0];
  should.exist(fnArgs);
  fnArgs.should.have.length(2);

  // Client#captureException: assert error
  assertError(fnArgs[0], expectedErr);

  // Client#captureException: assert kwargs
  const args = fnArgs[1];
  should.exist(args);
  args.should.be.an('object');

  // Client#captureException: assert kwargs.level
  assertLevel(args.level, expectedLevel);

  // Client#captureException: assert sentry kwargs.extra
  assertExtra(args.extra, expectedExtra);
  should.exist(args.extra.msg);

  // Client#captureException: assert sentry kwargs.tags
  assertTags(args.tags, expectedTags);

  // Client#captureMessage must be a spy
  assertSpyCallCount(client.captureMessage, 0);
}

/**
 * Assert the client when #captureMessage is called
 * @param  {Object} client        the Sentry mocked client
 * @param  {String} expectedLevel the final Sentry level (info, warning or error)
 * @param  {String} exptectedMessage   the expected message sent to Sentry
 * @param  {Object} expectedExtra  the expected extra sent in Sentry extra bundle
 * @param  {Object} expectedTags the expected tags sent in Sentry extra bundle
 * @return {void}
 */
function thenClientCapturesMessage(client, expectedLevel, exptectedMessage, expectedExtra, expectedTags) {
  // Expected message must be provided
  should.exist(exptectedMessage);

  // Client must exist
  should.exist(client);
  client.should.be.an('object');

  // Client#captureMessage: must be a spy
  // Client#captureMessage: called once
  assertSpyCallCount(client.captureMessage, 1);

  const fnArgs = client.captureMessage.args[0];
  should.exist(fnArgs);
  fnArgs.should.have.length(2);

  // Client#captureMessage: assert message
  const message = fnArgs[0];
  should.exist(message);
  message.should.be.equal(exptectedMessage);

  // Client#captureMessage: assert sentry kwargs
  const args = fnArgs[1];
  should.exist(args);
  args.should.be.an('object');

  // Client#captureException: assert kwargs.level
  assertLevel(args.level, expectedLevel);

  // Client#captureMessage: assert sentry kwargs.extra
  assertExtra(args.extra, expectedExtra);

  // Client#captureMessage: assert sentry kwards.tags
  assertTags(args.tags, expectedTags);

  // Client#captureException: must be a spy
  assertSpyCallCount(client.captureException, 0);
}

/**
 * Assert the Sentry error sent
 * @param  {Error} actual   the error to assert
 * @param  {Error} expected the expected error
 * @return {void}
 */
function assertError(actual, expected) {
  actual.should.be.instanceOf(Error);
  should.exist(actual.message);
  actual.message.should.be.equal(expected.message);
  should.exist(actual.name);
  actual.name.should.be.equal(expected.name);
  should.exist(actual.stack);
  if (expected.signal) {
    should.exist(actual.signal);
    actual.signal.should.be.equal(expected.signal);
  }
  if (expected.code) {
    should.exist(actual.code);
    actual.code.should.be.equal(expected.code);
  }
}

/**
 * Assert the Sentry extra bundle
 * @param  {Object} actual   the bundle to assert
 * @param  {Object} expected the expected bundle
 * @return {void}
 */
function assertExtra(actual, expected) {
  should.exist(actual);
  actual.should.be.an('object');
  if (expected) {
    for (const key of Object.keys(expected)) {
      should.exist(actual[key]);
      actual[key].should.be.equal(expected[key]);
    }
  }
}

/**
 * Assert the Sentry tags bundle
 * @param  {Object} actual   the bundle to assert
 * @param  {Object} expected the expected bundle
 * @return {void}
 */
function assertTags(actual, expected) {
  if (expected) {
    should.exist(actual);
    actual.should.be.an('object');
    for (const key of Object.keys(expected)) {
      should.exist(actual[key]);
      actual[key].should.be.equal(expected[key]);
    }
  }
}

/**
 * Assert the Sentry level
 * @param  {String} actual   the level to assert
 * @param  {String} expected the expected level
 * @return {void}
 */
function assertLevel(actual, expected) {
  should.exist(actual);
  actual.should.be.equal(expected);
}

/**
 * Assert the number of call to the spied Function
 * @param  {Function} fn    the spied Function
 * @param  {Object}   count the number of calls
 * @return {void}
 */
function assertSpyCallCount(fn, count) {
  should.exist(fn);
  should.exist(fn.called);
  // Client#captureException: not called
  fn.callCount.should.be.equal(count);
}
