/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const chalk = require('chalk');
const findUp = require('find-up');
const path = require('path');

class ModuleNotFoundPlugin {
  constructor(appPath, yarnLockFile) {
    this.appPath = appPath;
    this.yarnLockFile = yarnLockFile;

    this.useYarnCommand = this.useYarnCommand.bind(this);
    this.getRelativePath = this.getRelativePath.bind(this);
    this.prettierError = this.prettierError.bind(this);
  }

  useYarnCommand() {
    try {
      return findUp.sync('yarn.lock', { cwd: this.appPath }) != null;
    } catch (_) {
      return false;
    }
  }

  getRelativePath(_file) {
    let file = path.relative(this.appPath, _file);
    if (file.startsWith('..')) {
      file = _file;
    } else if (!file.startsWith('.')) {
      file = '.' + path.sep + file;
    }
    return file;
  }

  prettierError(err) {
    let { details: _details = '', origin } = err;

    if (origin == null) {
      const caseSensitivity =
        err.message &&
        /\[CaseSensitivePathsPlugin\] `(.*?)` .* `(.*?)`/.exec(err.message);
      if (caseSensitivity) {
        const [, incorrectPath, actualName] = caseSensitivity;
        const actualFile = this.getRelativePath(
          path.join(path.dirname(incorrectPath), actualName)
        );
        const incorrectName = path.basename(incorrectPath);
        err.message = `Cannot find file: '${incorrectName}' does not match the corresponding name on disk: '${actualFile}'.`;
      }
      return err;
    }

    const file = this.getRelativePath(origin.resource);
    let details = _details.split('\n');

    const request = /resolve '(.*?)' in '(.*?)'/.exec(details);
    if (request) {
      const isModule = details[1] && details[1].includes('module');
      const isFile = details[1] && details[1].includes('file');

      let [, target, context] = request;
      context = this.getRelativePath(context);
      if (isModule) {
        const isYarn = this.useYarnCommand();
        details = [
          `Cannot find module: '${target}'. Make sure this package is installed.`,
          '',
          'You can install this package by running: ' +
            (isYarn
              ? chalk.bold(`yarn add ${target}`)
              : chalk.bold(`npm install ${target}`)) +
            '.',
        ];
      } else if (isFile) {
        details = [`Cannot find file '${target}' in '${context}'.`];
      } else {
        details = [err.message];
      }
    } else {
      details = [err.message];
    }
    err.message = [file, ...details].join('\n').replace('Error: ', '');

    const isModuleScopePluginError =
      err.error && err.error.__module_scope_plugin;
    if (isModuleScopePluginError) {
      err.message = err.message.replace('Module not found: ', '');
    }
    return err;
  }

  apply(compiler) {
    const { prettierError } = this;
    compiler.hooks.make.intercept({
      register(tap) {
        if (!(tap.name === 'MultiEntryPlugin' || tap.name === 'EntryPlugin')) {
          return tap;
        }
        return Object.assign({}, tap, {
          fn: (compilation, callback) => {
            tap.fn(compilation, (err, ...args) => {
              if (err && err.name === 'ModuleNotFoundError') {
                err = prettierError(err);
              }
              callback(err, ...args);
            });
          },
        });
      },
    });
    compiler.hooks.normalModuleFactory.tap('ModuleNotFoundPlugin', nmf => {
      nmf.hooks.afterResolve.intercept({
        register(tap) {
          if (tap.name !== 'CaseSensitivePathsPlugin') {
            return tap;
          }
          return Object.assign({}, tap, {
            fn: (compilation, callback) => {
              tap.fn(compilation, (err, ...args) => {
                if (
                  err &&
                  err.message &&
                  err.message.includes('CaseSensitivePathsPlugin')
                ) {
                  err = prettierError(err);
                }
                callback(err, ...args);
              });
            },
          });
        },
      });
    });
  }
}

module.exports = ModuleNotFoundPlugin;
