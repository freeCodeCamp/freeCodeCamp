/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type {ChildProcessByStdio} from 'node:child_process';
import {spawnSync, spawn, execFile} from 'node:child_process';
import {createReadStream} from 'node:fs';
import {mkdir, readdir} from 'node:fs/promises';
import * as path from 'node:path';
import type {Readable, Transform, Writable} from 'node:stream';
import {Stream} from 'node:stream';
import {promisify} from 'node:util';

import {debug} from './debug.js';

const execFileAsync = promisify(execFile);
const debugFileUtil = debug('puppeteer:browsers:fileUtil');

/**
 * @internal
 */
export async function unpackArchive(
  archivePath: string,
  folderPath: string,
): Promise<void> {
  if (!path.isAbsolute(folderPath)) {
    folderPath = path.resolve(process.cwd(), folderPath);
  }
  if (archivePath.endsWith('.zip')) {
    await mkdir(folderPath, {recursive: true});
    await extractZip(archivePath, folderPath);
  } else if (archivePath.endsWith('.tar.bz2')) {
    await extractTar(archivePath, folderPath, 'bzip2');
  } else if (archivePath.endsWith('.dmg')) {
    await mkdir(folderPath);
    await installDMG(archivePath, folderPath);
  } else if (archivePath.endsWith('.exe')) {
    // Firefox on Windows.
    const result = spawnSync(archivePath, [`/ExtractDir=${folderPath}`], {
      env: {
        __compat_layer: 'RunAsInvoker',
      },
    });
    if (result.status !== 0) {
      throw new Error(
        `Failed to extract ${archivePath} to ${folderPath}: ${result.output}`,
      );
    }
  } else if (archivePath.endsWith('.tar.xz')) {
    await extractTar(archivePath, folderPath, 'xz');
  } else {
    throw new Error(`Unsupported archive format: ${archivePath}`);
  }
}

function createTransformStream(
  child: ChildProcessByStdio<Writable, Readable, null>,
): Transform {
  const stream = new Stream.Transform({
    transform(chunk, encoding, callback) {
      if (!child.stdin.write(chunk, encoding)) {
        child.stdin.once('drain', callback);
      } else {
        callback();
      }
    },

    flush(callback) {
      if (child.stdout.destroyed) {
        callback();
      } else {
        child.stdin.end();
        child.stdout.on('close', callback);
      }
    },
  });

  child.stdin.on('error', e => {
    if ('code' in e && e.code === 'EPIPE') {
      // finished before reading the file finished (i.e. head)
      stream.emit('end');
    } else {
      stream.destroy(e);
    }
  });

  child.stdout
    .on('data', data => {
      return stream.push(data);
    })
    .on('error', e => {
      return stream.destroy(e);
    });

  child.once('close', () => {
    return stream.end();
  });

  return stream;
}

/**
 * @internal
 */
export const internalConstantsForTesting = {
  xz: 'xz',
  bzip2: 'bzip2',
};

/**
 * @internal
 */
async function extractTar(
  tarPath: string,
  folderPath: string,
  decompressUtilityName: keyof typeof internalConstantsForTesting,
): Promise<void> {
  const tarFs = await import('tar-fs');
  return await new Promise<void>((fulfill, reject) => {
    function handleError(utilityName: string) {
      return (error: Error) => {
        if ('code' in error && error.code === 'ENOENT') {
          error = new Error(
            `\`${utilityName}\` utility is required to unpack this archive`,
            {
              cause: error,
            },
          );
        }
        reject(error);
      };
    }
    const unpack = spawn(
      internalConstantsForTesting[decompressUtilityName],
      ['-d'],
      {
        stdio: ['pipe', 'pipe', 'inherit'],
      },
    )
      .once('error', handleError(decompressUtilityName))
      .once('exit', code => {
        debugFileUtil?.(`${decompressUtilityName} exited, code=${code}`);
      });

    const tar = tarFs.extract(folderPath);
    tar.once('error', handleError('tar'));
    tar.once('finish', fulfill);
    createReadStream(tarPath).pipe(createTransformStream(unpack)).pipe(tar);
  });
}

/**
 * @internal
 */
async function installDMG(dmgPath: string, folderPath: string): Promise<void> {
  const {stdout} = spawnSync(`hdiutil`, [
    'attach',
    '-nobrowse',
    '-noautoopen',
    dmgPath,
  ]);

  const volumes = stdout.toString('utf8').match(/\/Volumes\/(.*)/m);
  if (!volumes) {
    throw new Error(`Could not find volume path in ${stdout}`);
  }
  const mountPath = volumes[0]!;

  try {
    const fileNames = await readdir(mountPath);
    const appName = fileNames.find(item => {
      return typeof item === 'string' && item.endsWith('.app');
    });
    if (!appName) {
      throw new Error(`Cannot find app in ${mountPath}`);
    }
    const mountedPath = path.join(mountPath!, appName);

    spawnSync('cp', ['-R', mountedPath, folderPath]);
  } finally {
    spawnSync('hdiutil', ['detach', mountPath, '-quiet']);
  }
}

/**
 * @internal
 */
async function extractZip(
  archivePath: string,
  folderPath: string,
): Promise<void> {
  try {
    if (process.platform === 'win32') {
      // -x: extract files
      // -f: specify the archive file
      // -C: extract to the specified directory
      const systemRoot =
        process.env['SystemRoot'] ?? process.env['SYSTEMROOT'] ?? 'C:\\Windows';
      const systemTar = `${systemRoot}\\System32\\tar.exe`;
      await execFileAsync(systemTar, ['-xf', archivePath, '-C', folderPath]);
    } else {
      // -o: overwrite existing files without prompting
      // -d: extract files into the specified directory
      await execFileAsync('unzip', ['-o', archivePath, '-d', folderPath]);
    }
  } catch (error: any) {
    if (error?.code === 'ENOENT') {
      throw new Error(
        `Extraction failed: Required native binary ('tar.exe' or 'unzip') was not found in the system PATH.`,
      );
    }
    throw new Error(
      `Extraction failed: ${error?.stderr?.toString() || error?.message}`,
    );
  }
}
