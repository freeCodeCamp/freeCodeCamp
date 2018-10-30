'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.run = run;

var _chalk;

function _load_chalk() {
  return _chalk = _interopRequireDefault(require('chalk'));
}

var _os;

function _load_os() {
  return _os = _interopRequireDefault(require('os'));
}

var _path;

function _load_path() {
  return _path = _interopRequireDefault(require('path'));
}

var _yargs;

function _load_yargs() {
  return _yargs = _interopRequireDefault(require('yargs'));
}

var _jestUtil;

function _load_jestUtil() {
  return _jestUtil = require('jest-util');
}

var _jestValidate;

function _load_jestValidate() {
  return _jestValidate = require('jest-validate');
}

var _jestConfig;

function _load_jestConfig() {
  return _jestConfig = require('jest-config');
}

var _;

function _load_() {
  return _ = _interopRequireDefault(require('../'));
}

var _args;

function _load_args() {
  return _args = _interopRequireWildcard(require('./args'));
}

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/default
const VERSION = require('../../package.json').version; /**
                                                        * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
                                                        *
                                                        * This source code is licensed under the MIT license found in the
                                                        * LICENSE file in the root directory of this source tree.
                                                        *
                                                        * 
                                                        */

function run(cliArgv, cliInfo) {
  const realFs = require('fs');
  const fs = require('graceful-fs');
  fs.gracefulify(realFs);

  let argv;
  if (cliArgv) {
    argv = cliArgv;
  } else {
    argv = (_yargs || _load_yargs()).default.usage((_args || _load_args()).usage).help(false).version(false).options((_args || _load_args()).options).argv;

    (0, (_jestValidate || _load_jestValidate()).validateCLIOptions)(argv, (_args || _load_args()).options);
  }

  if (argv.help) {
    (_yargs || _load_yargs()).default.showHelp();
    process.on('exit', () => process.exitCode = 1);
    return;
  }

  if (argv.version) {
    console.log(`v${VERSION}\n`);
    return;
  }

  if (!argv._.length) {
    console.log('Please provide a path to a script. (See --help for details)');
    process.on('exit', () => process.exitCode = 1);
    return;
  }

  const root = process.cwd();
  const filePath = (_path || _load_path()).default.resolve(root, argv._[0]);

  if (argv.debug) {
    const info = cliInfo ? ', ' + cliInfo.join(', ') : '';
    console.log(`Using Jest Runtime v${VERSION}${info}`);
  }
  const options = (0, (_jestConfig || _load_jestConfig()).readConfig)(argv, root);
  const globalConfig = options.globalConfig;
  // Always disable automocking in scripts.
  const config = Object.assign({}, options.projectConfig, {
    automock: false,
    unmockedModulePathPatterns: null
  });
  (_ || _load_()).default.createContext(config, {
    maxWorkers: (_os || _load_os()).default.cpus().length - 1,
    watchman: globalConfig.watchman
  }).then(hasteMap => {
    /* $FlowFixMe */
    const Environment = require(config.testEnvironment);
    const environment = new Environment(config);
    (0, (_jestUtil || _load_jestUtil()).setGlobal)(environment.global, 'console', new (_jestUtil || _load_jestUtil()).Console(process.stdout, process.stderr));
    environment.global.jestProjectConfig = config;
    environment.global.jestGlobalConfig = globalConfig;

    const runtime = new (_ || _load_()).default(config, environment, hasteMap.resolver);
    runtime.requireModule(filePath);
  }).catch(e => {
    console.error((_chalk || _load_chalk()).default.red(e.stack || e));
    process.on('exit', () => process.exitCode = 1);
  });
}