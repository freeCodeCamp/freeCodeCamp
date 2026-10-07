/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */
// flowlint ambiguous-object-type:error
'use strict';

var _yargs = require('yargs');

var _require = require('./RelayCompilerMain'),
    main = _require.main;

var RelayConfig;

try {
  // eslint-disable-next-line no-eval
  RelayConfig = eval('require')('relay-config'); // eslint-disable-next-line lint/no-unused-catch-bindings
} catch (_) {}

var options = {
  schema: {
    describe: 'Path to schema.graphql or schema.json',
    demandOption: true,
    type: 'string',
    array: false
  },
  src: {
    describe: 'Root directory of application code',
    demandOption: true,
    type: 'string',
    array: false
  },
  include: {
    describe: 'Directories to include under src',
    type: 'string',
    array: true,
    "default": ['**']
  },
  exclude: {
    describe: 'Directories to ignore under src',
    type: 'string',
    array: true,
    "default": ['**/node_modules/**', '**/__mocks__/**', '**/__generated__/**']
  },
  extensions: {
    array: true,
    describe: 'File extensions to compile (defaults to extensions provided by the ' + 'language plugin)',
    type: 'string'
  },
  verbose: {
    describe: 'More verbose logging',
    type: 'boolean',
    "default": false
  },
  quiet: {
    describe: 'No output to stdout',
    type: 'boolean',
    "default": false
  },
  watchman: {
    describe: 'Use watchman when not in watch mode',
    type: 'boolean',
    "default": true
  },
  watch: {
    describe: 'If specified, watches files and regenerates on changes',
    type: 'boolean',
    "default": false
  },
  validate: {
    describe: 'Looks for pending changes and exits with non-zero code instead of ' + 'writing to disk',
    type: 'boolean',
    "default": false
  },
  persistFunction: {
    describe: 'An async function (or path to a module exporting this function) which will persist the query text and return the id.',
    demandOption: false,
    type: 'string',
    array: false
  },
  persistOutput: {
    describe: 'A path to a .json file where persisted query metadata should be saved. Will use the default implementation (md5 hash) if `persistFunction` is not passed.',
    demandOption: false,
    type: 'string',
    array: false
  },
  repersist: {
    describe: 'Run the persist function even if the query has not changed.',
    type: 'boolean',
    "default": false
  },
  noFutureProofEnums: {
    describe: 'This option controls whether or not a catch-all entry is added to enum type definitions ' + 'for values that may be added in the future. Enabling this means you will have to update ' + 'your application whenever the GraphQL server schema adds new enum values to prevent it ' + 'from breaking.',
    type: 'boolean',
    "default": false
  },
  language: {
    describe: 'The name of the language plugin used for input files and artifacts',
    demandOption: false,
    type: 'string',
    array: false,
    "default": 'javascript'
  },
  artifactDirectory: {
    describe: 'A specific directory to output all artifacts to. When enabling this ' + 'the babel plugin needs `artifactDirectory` set as well.',
    demandOption: false,
    type: 'string',
    array: false
  },
  customScalars: {
    describe: 'Mappings from custom scalars in your schema to built-in GraphQL ' + 'types, for type emission purposes. (Uses yargs dot-notation, e.g. ' + '--customScalars.URL=String)',
    type: 'object'
  },
  eagerESModules: {
    describe: 'This option enables emitting es modules artifacts.',
    type: 'boolean',
    "default": false
  }
}; // Parse CLI args

var yargs = _yargs.usage('Create Relay generated files\n\n' + '$0 --schema <path> --src <path> [--watch]').options(options).strict(); // Load external config


var config = RelayConfig && RelayConfig.loadConfig();

if (config) {
  // Apply externally loaded config through the yargs API so that we can leverage yargs' defaults and have them show up
  // in the help banner. We add it conditionally otherwise yargs would add new option `--config` which is confusing for
  // Relay users (it's not Relay Config file).
  yargs = yargs.config(config);
}

var argv = yargs.help().argv; // Start the application

main(argv)["catch"](function (error) {
  console.error(String(error.stack || error));
  process.exit(1);
});