// @flow strict-local

import {Readable, PassThrough} from 'stream';
import type {Blob} from '@parcel/types';

export function measureStreamLength(stream: Readable): Promise<number> {
  return new Promise((resolve, reject) => {
    let length = 0;
    stream.on('data', chunk => {
      length += chunk;
    });
    stream.on('end', () => resolve(length));
    stream.on('error', reject);
  });
}

export function readableFromStringOrBuffer(str: string | Buffer): Readable {
  // https://stackoverflow.com/questions/12755997/how-to-create-streams-from-string-in-node-js
  const stream = new Readable();
  stream.push(str);
  stream.push(null);
  return stream;
}

export function bufferStream(stream: Readable): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    let buf = Buffer.from([]);
    stream.on('data', data => {
      buf = Buffer.concat([buf, data]);
    });
    stream.on('end', () => {
      resolve(buf);
    });
    stream.on('error', reject);
  });
}

export function blobToStream(blob: Blob): Readable {
  if (blob instanceof Readable) {
    return blob;
  }

  return readableFromStringOrBuffer(blob);
}

export function streamFromPromise(promise: Promise<Blob>): Readable {
  const stream = new PassThrough();
  promise.then(blob => {
    if (blob instanceof Readable) {
      blob.pipe(stream);
    } else {
      stream.end(blob);
    }
  });

  return stream;
}

export function fallbackStream(
  stream: Readable,
  fallback: () => Readable,
): Readable {
  const res = new PassThrough();
  stream.on('error', err => {
    if (err.code === 'ENOENT') {
      fallback().pipe(res);
    } else {
      res.emit('error', err);
    }
  });

  stream.pipe(res);
  return res;
}
