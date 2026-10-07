// @flow strict-local
import type {Blob, FilePath} from '@parcel/types';
import type {FileSystem} from '@parcel/fs';

import {hashStream} from '@parcel/utils';
import path from 'path';
import {hashString, hashBuffer} from '@parcel/hash';

const NODE_MODULES = `${path.sep}node_modules${path.sep}`;

const BUFFER_LIMIT = 5000000; // 5mb

export default async function summarizeRequest(
  fs: FileSystem,
  req: {|filePath: FilePath, code?: string|},
): Promise<{|content: Blob, hash: string, size: number, isSource: boolean|}> {
  let {content, hash, size} = await summarizeDiskRequest(fs, req);
  let isSource = isFilePathSource(fs, req.filePath);
  return {content, hash, size, isSource};
}

function isFilePathSource(fs: FileSystem, filePath: FilePath) {
  return !filePath.includes(NODE_MODULES);
}

async function summarizeDiskRequest(
  fs: FileSystem,
  req: {|filePath: FilePath, code?: string|},
): Promise<{|content: Blob, hash: string, size: number|}> {
  let code = req.code;
  let content: Blob;
  let hash: string;
  let size: number;
  if (code == null) {
    // Get the filesize. If greater than BUFFER_LIMIT, use a stream to
    // compute the hash. In the common case, it's faster to just read the entire
    // file first and do the hash all at once without the overhead of streams.
    size = (await fs.stat(req.filePath)).size;
    if (size > BUFFER_LIMIT) {
      return new Promise((resolve, reject) => {
        let stream = fs.createReadStream(req.filePath);
        stream.on('error', reject);
        hashStream(stream).then(
          hash =>
            resolve({
              content: fs.createReadStream(req.filePath),
              hash,
              size,
            }),
          reject,
        );
      });
    } else {
      content = await fs.readFile(req.filePath);
      hash = hashBuffer(content);
    }
  } else {
    content = code;
    hash = hashString(code);
    size = Buffer.byteLength(code);
  }

  return {content, hash, size};
}
