// @flow strict-local

import type {PackageInstaller, InstallerOptions} from './types';

import path from 'path';
import spawn from 'cross-spawn';
import logger from '@parcel/logger';
import promiseFromProcess from './promiseFromProcess';
import {registerSerializableClass} from '@parcel/core';
import {npmSpecifierFromModuleRequest} from './utils';

// $FlowFixMe
import pkg from '../package.json';

const NPM_CMD = 'npm';

export class Npm implements PackageInstaller {
  async install({
    modules,
    cwd,
    fs,
    packagePath,
    saveDev = true,
  }: InstallerOptions): Promise<void> {
    // npm doesn't auto-create a package.json when installing,
    // so create an empty one if needed.
    if (packagePath == null) {
      await fs.writeFile(path.join(cwd, 'package.json'), '{}');
    }

    let args = ['install', '--json', saveDev ? '--save-dev' : '--save'].concat(
      modules.map(npmSpecifierFromModuleRequest),
    );

    // When Parcel is run by npm (e.g. via package.json scripts), several environment variables are
    // added. When parcel in turn calls npm again, these can cause npm to behave stragely, so we
    // filter them out when installing packages.
    let env = {};
    for (let key in process.env) {
      if (!key.startsWith('npm_') && key !== 'INIT_CWD' && key !== 'NODE_ENV') {
        env[key] = process.env[key];
      }
    }

    let installProcess = spawn(NPM_CMD, args, {cwd, env});
    let stdout = '';
    installProcess.stdout.on('data', (buf: Buffer) => {
      stdout += buf.toString();
    });

    let stderr = [];
    installProcess.stderr.on('data', (buf: Buffer) => {
      stderr.push(buf.toString().trim());
    });

    try {
      await promiseFromProcess(installProcess);

      let results: NPMResults = JSON.parse(stdout);
      let addedCount = results.added.length;
      if (addedCount > 0) {
        logger.log({
          origin: '@parcel/package-manager',
          message: `Added ${addedCount} packages via npm`,
        });
      }

      // Since we succeeded, stderr might have useful information not included
      // in the json written to stdout. It's also not necessary to log these as
      // errors as they often aren't.
      for (let message of stderr) {
        if (message.length > 0) {
          logger.log({
            origin: '@parcel/package-manager',
            message,
          });
        }
      }
    } catch (e) {
      throw new Error(
        'npm failed to install modules: ' +
          e.message +
          ' - ' +
          stderr.join('\n'),
      );
    }
  }
}

type NPMResults = {|
  added: Array<{name: string, ...}>,
|};

registerSerializableClass(`${pkg.version}:Npm`, Npm);
