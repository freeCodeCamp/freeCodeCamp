/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const chalk = require('chalk');
const path = require('path');
const os = require('os');

class ModuleScopePlugin {
  constructor(appSrc, allowedFiles = []) {
    this.appSrcs = Array.isArray(appSrc) ? appSrc : [appSrc];
    this.allowedFiles = new Set(allowedFiles);
    this.allowedPaths = [...allowedFiles].map(path.dirname).filter(p => path.relative(p, process.cwd()) !== '');
  }

  apply(resolver) {
    const { appSrcs } = this;
    resolver.hooks.file.tapAsync(
      'ModuleScopePlugin',
      (request, contextResolver, callback) => {
        // Unknown issuer, probably webpack internals
        if (!request.context.issuer) {
          return callback();
        }
        if (
          // If this resolves to a node_module, we don't care what happens next
          request.descriptionFileRoot.indexOf('/node_modules/') !== -1 ||
          request.descriptionFileRoot.indexOf('\\node_modules\\') !== -1 ||
          // Make sure this request was manual
          !request.__innerRequest_request
        ) {
          return callback();
        }
        // Resolve the issuer from our appSrc and make sure it's one of our files
        // Maybe an indexOf === 0 would be better?
        if (
          appSrcs.every(appSrc => {
            const relative = path.relative(appSrc, request.context.issuer);
            // If it's not in one of our app src or a subdirectory, not our request!
            return relative.startsWith('../') || relative.startsWith('..\\');
          })
        ) {
          return callback();
        }
        const requestFullPath = path.resolve(
          path.dirname(request.context.issuer),
          request.__innerRequest_request
        );
        if (this.allowedFiles.has(requestFullPath)) {
          return callback();
        }
        if (this.allowedPaths.some((allowedFile) => {
          return requestFullPath.startsWith(allowedFile);
        })) {
          return callback();
        }
        // Find path from src to the requested file
        // Error if in a parent directory of all given appSrcs
        if (
          appSrcs.every(appSrc => {
            const requestRelative = path.relative(appSrc, requestFullPath);
            return (
              requestRelative.startsWith('../') ||
              requestRelative.startsWith('..\\')
            );
          })
        ) {
          const scopeError = new Error(
            `You attempted to import ${chalk.cyan(
              request.__innerRequest_request
            )} which falls outside of the project ${chalk.cyan(
              'src/'
            )} directory. ` +
              `Relative imports outside of ${chalk.cyan(
                'src/'
              )} are not supported.` +
              os.EOL +
              `You can either move it inside ${chalk.cyan(
                'src/'
              )}, or add a symlink to it from project's ${chalk.cyan(
                'node_modules/'
              )}.`
          );
          Object.defineProperty(scopeError, '__module_scope_plugin', {
            value: true,
            writable: false,
            enumerable: false,
          });
          callback(scopeError, request);
        } else {
          callback();
        }
      }
    );
  }
}

module.exports = ModuleScopePlugin;
