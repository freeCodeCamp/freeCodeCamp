// @flow strict-local

import {Transform} from 'stream';

/*
 * "Taps" into the contents of a flowing stream, yielding chunks to the passed
 * callback. Continues to pass data chunks down the stream.
 */
export default class TapStream extends Transform {
  _tap: Buffer => mixed;
  constructor(tap: Buffer => mixed, options: mixed) {
    super({...options});
    this._tap = tap;
  }

  _transform(
    chunk: Buffer | string,
    encoding: string,
    callback: (err: ?Error, chunk?: Buffer | string) => mixed,
  ) {
    try {
      this._tap(Buffer.from(chunk));
      callback(null, chunk);
    } catch (err) {
      callback(err);
    }
  }
}
