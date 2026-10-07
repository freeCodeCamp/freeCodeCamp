// @flow strict-local

import type {Readable} from 'stream';
import type {FileSystem} from '@parcel/fs';

import {objectSortedEntriesDeep} from './collection';
import {hashString, Hash} from '@parcel/hash';

export function hashStream(stream: Readable): Promise<string> {
  let hash = new Hash();
  return new Promise((resolve, reject) => {
    stream.on('error', err => {
      reject(err);
    });
    stream
      .on('data', chunk => {
        hash.writeBuffer(chunk);
      })
      .on('end', function () {
        resolve(hash.finish());
      })
      .on('error', err => {
        reject(err);
      });
  });
}

export function hashObject(obj: {+[string]: mixed, ...}): string {
  return hashString(JSON.stringify(objectSortedEntriesDeep(obj)));
}

export function hashFile(fs: FileSystem, filePath: string): Promise<string> {
  return hashStream(fs.createReadStream(filePath));
}
