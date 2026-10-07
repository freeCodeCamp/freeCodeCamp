// @flow strict-local

import type {Blob} from '@parcel/types';

import {Buffer} from 'buffer';
import {bufferStream} from './';
import {Readable} from 'stream';

export function blobToBuffer(blob: Blob): Promise<Buffer> {
  if (blob instanceof Readable) {
    return bufferStream(blob);
  } else if (blob instanceof Buffer) {
    return Promise.resolve(Buffer.from(blob));
  } else {
    return Promise.resolve(Buffer.from(blob, 'utf8'));
  }
}

export async function blobToString(blob: Blob): Promise<string> {
  if (blob instanceof Readable) {
    return (await bufferStream(blob)).toString();
  } else if (blob instanceof Buffer) {
    return blob.toString();
  } else {
    return blob;
  }
}
