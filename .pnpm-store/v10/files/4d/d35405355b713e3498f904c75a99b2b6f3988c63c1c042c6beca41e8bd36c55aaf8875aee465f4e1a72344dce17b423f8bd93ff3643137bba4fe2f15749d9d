// @flow strict-local

import type {JSONObject} from '@parcel/types';

import logger from '@parcel/logger';
import {Transform} from 'stream';

// Transforms chunks of json strings to parsed objects.
// Pair with split2 to parse stream of newline-delimited text.
export default class JSONParseStream extends Transform {
  constructor(options: mixed) {
    super({...options, objectMode: true});
  }

  // $FlowFixMe We are in object mode, so we emit objects, not strings
  _transform(
    chunk: Buffer | string,
    encoding: string,
    callback: (err: ?Error, parsed: ?JSONObject) => mixed,
  ) {
    try {
      let parsed;
      try {
        parsed = JSON.parse(chunk.toString());
      } catch (e) {
        // Be permissive and ignoreJSON parse errors in case there was
        // a non-JSON line in the package manager's stdout.
        logger.verbose({
          message: 'Ignored invalid JSON message: ' + chunk.toString(),
          origin: '@parcel/package-manager',
        });
        return;
      }
      callback(null, parsed);
    } catch (err) {
      callback(err);
    }
  }
}
