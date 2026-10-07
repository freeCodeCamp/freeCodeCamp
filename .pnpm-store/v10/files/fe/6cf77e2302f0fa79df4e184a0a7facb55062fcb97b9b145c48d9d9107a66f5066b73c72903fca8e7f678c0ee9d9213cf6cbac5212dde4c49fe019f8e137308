// @flow strict-local

import type {PackageInstaller, InstallerOptions} from './types';

import commandExists from 'command-exists';
import spawn from 'cross-spawn';
import {exec as _exec} from 'child_process';
import {promisify} from 'util';
import logger from '@parcel/logger';
import split from 'split2';
import JSONParseStream from './JSONParseStream';
import promiseFromProcess from './promiseFromProcess';
import {registerSerializableClass} from '@parcel/core';
import {npmSpecifierFromModuleRequest} from './utils';

// $FlowFixMe
import pkg from '../package.json';

const YARN_CMD = 'yarn';
const exec = promisify(_exec);

type YarnStdOutMessage =
  | {|
      +type: 'step',
      data: {|
        message: string,
        current: number,
        total: number,
      |},
    |}
  | {|+type: 'success', data: string|}
  | {|+type: 'info', data: string|}
  | {|+type: 'tree' | 'progressStart' | 'progressTick'|};

type YarnStdErrMessage = {|
  +type: 'error' | 'warning',
  data: string,
|};

let hasYarn: ?boolean;
let yarnVersion: ?number;

export class Yarn implements PackageInstaller {
  static async exists(): Promise<boolean> {
    if (hasYarn != null) {
      return hasYarn;
    }

    try {
      hasYarn = Boolean(await commandExists('yarn'));
    } catch (err) {
      hasYarn = false;
    }

    return hasYarn;
  }

  async install({
    modules,
    cwd,
    saveDev = true,
  }: InstallerOptions): Promise<void> {
    if (yarnVersion == null) {
      let version = await exec('yarn --version');
      yarnVersion = parseInt(version.stdout, 10);
    }

    let args = ['add', '--json'].concat(
      modules.map(npmSpecifierFromModuleRequest),
    );

    if (saveDev) {
      args.push('-D');
      if (yarnVersion < 2) {
        args.push('-W');
      }
    }

    // When Parcel is run by Yarn (e.g. via package.json scripts), several environment variables are
    // added. When parcel in turn calls Yarn again, these can cause Yarn to behave stragely, so we
    // filter them out when installing packages.
    let env = {};
    for (let key in process.env) {
      if (
        !key.startsWith('npm_') &&
        key !== 'YARN_WRAP_OUTPUT' &&
        key !== 'INIT_CWD' &&
        key !== 'NODE_ENV'
      ) {
        env[key] = process.env[key];
      }
    }

    let installProcess = spawn(YARN_CMD, args, {cwd, env});
    installProcess.stdout
      // Invoking yarn with --json provides streaming, newline-delimited JSON output.
      .pipe(split())
      .pipe(new JSONParseStream())
      .on('error', e => {
        logger.error(e, '@parcel/package-manager');
      })
      .on('data', (message: YarnStdOutMessage) => {
        switch (message.type) {
          case 'step':
            logger.progress(
              prefix(
                `[${message.data.current}/${message.data.total}] ${message.data.message}`,
              ),
            );
            return;
          case 'success':
          case 'info':
            logger.info({
              origin: '@parcel/package-manager',
              message: prefix(message.data),
            });
            return;
          default:
          // ignore
        }
      });

    installProcess.stderr
      .pipe(split())
      .pipe(new JSONParseStream())
      .on('error', e => {
        logger.error(e, '@parcel/package-manager');
      })
      .on('data', (message: YarnStdErrMessage) => {
        switch (message.type) {
          case 'warning':
            logger.warn({
              origin: '@parcel/package-manager',
              message: prefix(message.data),
            });
            return;
          case 'error':
            logger.error({
              origin: '@parcel/package-manager',
              message: prefix(message.data),
            });
            return;
          default:
          // ignore
        }
      });

    try {
      return await promiseFromProcess(installProcess);
    } catch (e) {
      throw new Error('Yarn failed to install modules:' + e.message);
    }
  }
}

function prefix(message: string): string {
  return 'yarn: ' + message;
}

registerSerializableClass(`${pkg.version}:Yarn`, Yarn);
