// @flow strict-local

import type {PackageInstaller, InstallerOptions} from './types';

import commandExists from 'command-exists';
import spawn from 'cross-spawn';
import logger from '@parcel/logger';
import split from 'split2';
import JSONParseStream from './JSONParseStream';
import promiseFromProcess from './promiseFromProcess';
import {registerSerializableClass} from '@parcel/core';
import {npmSpecifierFromModuleRequest} from './utils';

// $FlowFixMe
import pkg from '../package.json';

const PNPM_CMD = 'pnpm';

type LogLevel = 'error' | 'warn' | 'info' | 'debug';

type ErrorLog = {|
  err: {|
    message: string,
    code: string,
    stack: string,
  |},
|};

type PNPMLog =
  | {|
      +name: 'pnpm:progress',
      packageId: string,
      status: 'fetched' | 'found_in_store' | 'resolved',
    |}
  | {|
      +name: 'pnpm:root',
      added?: {|
        id?: string,
        name: string,
        realName: string,
        version?: string,
        dependencyType?: 'prod' | 'dev' | 'optional',
        latest?: string,
        linkedFrom?: string,
      |},
      removed?: {|
        name: string,
        version?: string,
        dependencyType?: 'prod' | 'dev' | 'optional',
      |},
    |}
  | {|+name: 'pnpm:importing', from: string, method: string, to: string|}
  | {|+name: 'pnpm:link', target: string, link: string|}
  | {|+name: 'pnpm:stats', prefix: string, removed?: number, added?: number|};

type PNPMResults = {|
  level: LogLevel,
  prefix?: string,
  message?: string,
  ...ErrorLog,
  ...PNPMLog,
|};

let hasPnpm: ?boolean;
export class Pnpm implements PackageInstaller {
  static async exists(): Promise<boolean> {
    if (hasPnpm != null) {
      return hasPnpm;
    }

    try {
      hasPnpm = Boolean(await commandExists('pnpm'));
    } catch (err) {
      hasPnpm = false;
    }

    return hasPnpm;
  }

  async install({
    modules,
    cwd,
    saveDev = true,
  }: InstallerOptions): Promise<void> {
    let args = ['add', '--reporter', 'ndjson'];
    if (saveDev) {
      args.push('-D', '-W');
    }
    args = args.concat(modules.map(npmSpecifierFromModuleRequest));

    let env = {};
    for (let key in process.env) {
      if (!key.startsWith('npm_') && key !== 'INIT_CWD' && key !== 'NODE_ENV') {
        env[key] = process.env[key];
      }
    }

    let addedCount = 0,
      removedCount = 0;

    let installProcess = spawn(PNPM_CMD, args, {
      cwd,
      env,
    });
    installProcess.stdout
      .pipe(split())
      .pipe(new JSONParseStream())
      .on('error', e => {
        logger.warn({
          origin: '@parcel/package-manager',
          message: e.chunk,
          stack: e.stack,
        });
      })
      .on('data', (json: PNPMResults) => {
        if (json.level === 'error') {
          logger.error({
            origin: '@parcel/package-manager',
            message: json.err.message,
            stack: json.err.stack,
          });
        } else if (json.level === 'info' && typeof json.message === 'string') {
          logger.info({
            origin: '@parcel/package-manager',
            message: prefix(json.message),
          });
        } else if (json.name === 'pnpm:stats') {
          addedCount += json.added ?? 0;
          removedCount += json.removed ?? 0;
        }
      });

    let stderr = [];
    installProcess.stderr
      .on('data', str => {
        stderr.push(str.toString());
      })
      .on('error', e => {
        logger.warn({
          origin: '@parcel/package-manager',
          message: e.message,
        });
      });

    try {
      await promiseFromProcess(installProcess);

      if (addedCount > 0 || removedCount > 0) {
        logger.log({
          origin: '@parcel/package-manager',
          message: `Added ${addedCount} and ${
            removedCount > 0 ? `removed ${removedCount}` : ''
          } packages via pnpm`,
        });
      }

      // Since we succeeded, stderr might have useful information not included
      // in the json written to stdout. It's also not necessary to log these as
      // errors as they often aren't.
      for (let message of stderr) {
        logger.log({
          origin: '@parcel/package-manager',
          message,
        });
      }
    } catch (e) {
      throw new Error('pnpm failed to install modules');
    }
  }
}

function prefix(message: string): string {
  return 'pnpm: ' + message;
}

registerSerializableClass(`${pkg.version}:Pnpm`, Pnpm);
