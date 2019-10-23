import _ from 'lodash';
import debug from 'debug';
import dedent from 'dedent';
import fs from 'fs';
import { google } from 'googleapis';
import { Observable } from 'rx';

import { timeCache, observeMethod } from './rx';

// one million!
const upperBound = 1000 * 1000;
const scope = 'https://www.googleapis.com/auth/analytics.readonly';
const pathToCred = process.env.GOOGLE_APPLICATION_CREDENTIALS;

const log = debug('fcc:server:utils:about');
const analytics = google.analytics('v3');
const makeRequest = observeMethod(analytics.data.realtime, 'get');
export const toBoundInt = _.flow(
  // first convert string to integer
  _.toInteger,
  // then we bound the integer to prevent weird things like Infinity
  // and negative numbers
  // can't wait to the day we need to update this!
  _.partialRight(_.clamp, 0, upperBound)
);

export function createActiveUsers() {
  const zero = Observable.of(0);
  let credentials;
  if (!pathToCred) {
    // if no path to credentials set to zero;
    log(dedent`
      no google applications credentials environmental variable found
      'GOOGLE_APPLICATION_CREDENTIALS'
      'activeUser' api will always return 0
      this can safely be ignored during development
    `);
    return zero;
  }
  try {
    credentials = require(fs.realpathSync(pathToCred));
  } catch (err) {
    log('google applications credentials file failed to require');
    console.error(err);
    // if we can't require credentials set to zero;
    return zero;
  }
  if (
    !credentials.private_key ||
    !credentials.client_email ||
    !credentials.viewId
  ) {
    log(dedent`
      google applications credentials json should have a
      * private_key
      * client_email
      * viewId
      but none were found
    `);
    return zero;
  }

  const client = new google.auth.JWT(
    credentials['client_email'],
    null,
    credentials['private_key'],
    [scope]
  );
  const authorize = observeMethod(client, 'authorize');
  const options = {
    ids: `ga:${credentials.viewId}`,
    auth: client,
    metrics: 'rt:activeUsers'
  };
  return Observable.defer(
    // we wait for authorize to complete before attempting to make request
    // this ensures our token is initialized and valid
    // we defer here to make sure the actual request is done per subscription
    // instead of once at startup
    () => authorize().flatMap(() => makeRequest(options))
  )
    // data: Array[body|Object, request: Request]
    .map(data => data[0])
    .map(
      ({ totalsForAllResults } = {}) => totalsForAllResults['rt:activeUsers']
    )
    .map(toBoundInt)
    // print errors to error log for logging, duh
    .do(null, err => console.error(err))
    // always send a number down
    .catch(() => Observable.of(0))
    ::timeCache(2, 'seconds');
}
