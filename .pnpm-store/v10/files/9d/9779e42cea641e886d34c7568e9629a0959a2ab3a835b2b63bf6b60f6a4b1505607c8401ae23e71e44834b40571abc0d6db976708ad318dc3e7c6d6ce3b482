'use strict';

/**
 * Definition for Mocha's default ("run tests") command
 *
 * @module
 * @private
 */

const symbols = require('log-symbols');
const ansi = require('ansi-colors');
const Mocha = require('../mocha');
const {
  createUnsupportedError,
  createInvalidArgumentValueError,
  createMissingArgumentError
} = require('../errors');

const {
  list,
  handleRequires,
  validateLegacyPlugin,
  runMocha
} = require('./run-helpers');
const {ONE_AND_DONES, ONE_AND_DONE_ARGS} = require('./one-and-dones');
const debug = require('debug')('mocha:cli:run');
const defaults = require('../mocharc.json');
const {types, aliases} = require('./run-option-metadata');

/**
 * Logical option groups
 * @constant
 */
const GROUPS = {
  FILES: 'File Handling',
  FILTERS: 'Test Filters',
  NODEJS: 'Node.js & V8',
  OUTPUT: 'Reporting & Output',
  RULES: 'Rules & Behavior',
  CONFIG: 'Configuration'
};

exports.command = ['$0 [spec..]', 'inspect'];

exports.describe = 'Run tests with Mocha';

exports.builder = yargs =>
  yargs
    .options({
      'allow-uncaught': {
        description: 'Allow uncaught errors to propagate',
        group: GROUPS.RULES
      },
      'async-only': {
        description:
          'Require all tests to use a callback (async) or return a Promise',
        group: GROUPS.RULES
      },
      bail: {
        description: 'Abort ("bail") after first test failure',
        group: GROUPS.RULES
      },
      'check-leaks': {
        description: 'Check for global variable leaks',
        group: GROUPS.RULES
      },
      color: {
        description: 'Force-enable color output',
        group: GROUPS.OUTPUT
      },
      config: {
        config: true,
        defaultDescription: '(nearest rc file)',
        description: 'Path to config file',
        group: GROUPS.CONFIG
      },
      delay: {
        description: 'Delay initial execution of root suite',
        group: GROUPS.RULES
      },
      diff: {
        default: true,
        description: 'Show diff on failure',
        group: GROUPS.OUTPUT
      },
      'dry-run': {
        description: 'Report tests without executing them',
        group: GROUPS.RULES
      },
      exit: {
        description: 'Force Mocha to quit after tests complete',
        group: GROUPS.RULES
      },
      extension: {
        default: defaults.extension,
        description: 'File extension(s) to load',
        group: GROUPS.FILES,
        requiresArg: true,
        coerce: list
      },
      'pass-on-failing-test-suite': {
        default: false,
        description: 'Not fail test run if tests were failed',
        group: GROUPS.RULES
      },
      'fail-zero': {
        description: 'Fail test run if no test(s) encountered',
        group: GROUPS.RULES
      },
      fgrep: {
        conflicts: 'grep',
        description: 'Only run tests containing this string',
        group: GROUPS.FILTERS,
        requiresArg: true
      },
      file: {
        defaultDescription: '(none)',
        description:
          'Specify file(s) to be loaded prior to root suite execution',
        group: GROUPS.FILES,
        normalize: true,
        requiresArg: true
      },
      'forbid-only': {
        description: 'Fail if exclusive test(s) encountered',
        group: GROUPS.RULES
      },
      'forbid-pending': {
        description: 'Fail if pending test(s) encountered',
        group: GROUPS.RULES
      },
      'full-trace': {
        description: 'Display full stack traces',
        group: GROUPS.OUTPUT
      },
      global: {
        coerce: list,
        description: 'List of allowed global variables',
        group: GROUPS.RULES,
        requiresArg: true
      },
      grep: {
        coerce: value => (!value ? null : value),
        conflicts: 'fgrep',
        description: 'Only run tests matching this string or regexp',
        group: GROUPS.FILTERS,
        requiresArg: true
      },
      ignore: {
        defaultDescription: '(none)',
        description: 'Ignore file(s) or glob pattern(s)',
        group: GROUPS.FILES,
        requiresArg: true
      },
      'inline-diffs': {
        description:
          'Display actual/expected differences inline within each string',
        group: GROUPS.OUTPUT
      },
      invert: {
        description: 'Inverts --grep and --fgrep matches',
        group: GROUPS.FILTERS
      },
      jobs: {
        description:
          'Number of concurrent jobs for --parallel; use 1 to run in serial',
        defaultDescription: '(number of CPU cores - 1)',
        requiresArg: true,
        group: GROUPS.RULES
      },
      'list-interfaces': {
        conflicts: Array.from(ONE_AND_DONE_ARGS),
        description: 'List built-in user interfaces & exit'
      },
      'list-reporters': {
        conflicts: Array.from(ONE_AND_DONE_ARGS),
        description: 'List built-in reporters & exit'
      },
      'no-colors': {
        description: 'Force-disable color output',
        group: GROUPS.OUTPUT,
        hidden: true
      },
      'node-option': {
        description: 'Node or V8 option (no leading "--")',
        group: GROUPS.CONFIG
      },
      package: {
        description: 'Path to package.json for config',
        group: GROUPS.CONFIG,
        normalize: true,
        requiresArg: true
      },
      parallel: {
        description: 'Run tests in parallel',
        group: GROUPS.RULES
      },
      recursive: {
        description: 'Look for tests in subdirectories',
        group: GROUPS.FILES
      },
      reporter: {
        default: defaults.reporter,
        description: 'Specify reporter to use',
        group: GROUPS.OUTPUT,
        requiresArg: true
      },
      'reporter-option': {
        coerce: opts =>
          list(opts).reduce((acc, opt) => {
            const pair = opt.split('=');

            if (pair.length > 2 || !pair.length) {
              throw createInvalidArgumentValueError(
                `invalid reporter option '${opt}'`,
                '--reporter-option',
                opt,
                'expected "key=value" format'
              );
            }

            acc[pair[0]] = pair.length === 2 ? pair[1] : true;
            return acc;
          }, {}),
        description: 'Reporter-specific options (<k=v,[k1=v1,..]>)',
        group: GROUPS.OUTPUT,
        requiresArg: true
      },
      require: {
        defaultDescription: '(none)',
        description: 'Require module',
        group: GROUPS.FILES,
        requiresArg: true
      },
      retries: {
        description: 'Retry failed tests this many times',
        group: GROUPS.RULES
      },
      slow: {
        default: defaults.slow,
        description: 'Specify "slow" test threshold (in milliseconds)',
        group: GROUPS.RULES
      },
      sort: {
        description: 'Sort test files',
        group: GROUPS.FILES
      },
      timeout: {
        default: defaults.timeout,
        description: 'Specify test timeout threshold (in milliseconds)',
        group: GROUPS.RULES
      },
      ui: {
        default: defaults.ui,
        description: 'Specify user interface',
        group: GROUPS.RULES,
        requiresArg: true
      },
      watch: {
        description: 'Watch files in the current working directory for changes',
        group: GROUPS.FILES
      },
      'watch-files': {
        description: 'List of paths or globs to watch',
        group: GROUPS.FILES,
        requiresArg: true,
        coerce: list
      },
      'watch-ignore': {
        description: 'List of paths or globs to exclude from watching',
        group: GROUPS.FILES,
        requiresArg: true,
        coerce: list,
        default: defaults['watch-ignore']
      }
    })
    .positional('spec', {
      default: ['test'],
      description: 'One or more files, directories, or globs to test',
      type: 'array'
    })
    .check(argv => {
      // "one-and-dones"; let yargs handle help and version
      Object.keys(ONE_AND_DONES).forEach(opt => {
        if (argv[opt]) {
          ONE_AND_DONES[opt].call(null, yargs);
          process.exit();
        }
      });

      // yargs.implies() isn't flexible enough to handle this
      if (argv.invert && !('fgrep' in argv || 'grep' in argv)) {
        throw createMissingArgumentError(
          '"--invert" requires one of "--fgrep <str>" or "--grep <regexp>"',
          '--fgrep|--grep',
          'string|regexp'
        );
      }

      if (argv.parallel) {
        // yargs.conflicts() can't deal with `--file foo.js --no-parallel`, either
        if (argv.file) {
          throw createUnsupportedError(
            '--parallel runs test files in a non-deterministic order, and is mutually exclusive with --file'
          );
        }

        // or this
        if (argv.sort) {
          throw createUnsupportedError(
            '--parallel runs test files in a non-deterministic order, and is mutually exclusive with --sort'
          );
        }

        if (argv.reporter === 'progress') {
          throw createUnsupportedError(
            '--reporter=progress is mutually exclusive with --parallel'
          );
        }

        if (argv.reporter === 'markdown') {
          throw createUnsupportedError(
            '--reporter=markdown is mutually exclusive with --parallel'
          );
        }

        if (argv.reporter === 'json-stream') {
          throw createUnsupportedError(
            '--reporter=json-stream is mutually exclusive with --parallel'
          );
        }
      }

      if (argv.compilers) {
        throw createUnsupportedError(
          `--compilers is DEPRECATED and no longer supported.
          See https://github.com/mochajs/mocha/wiki/compilers-deprecation for migration information.`
        );
      }

      if (argv.opts) {
        throw createUnsupportedError(
          `--opts: configuring Mocha via 'mocha.opts' is DEPRECATED and no longer supported.
          Please use a configuration file instead.`
        );
      }

      return true;
    })
    .middleware(async (argv, yargs) => {
      // currently a failing middleware does not work nicely with yargs' `fail()`.
      try {
        // load requires first, because it can impact "plugin" validation
        const plugins = await handleRequires(argv.require);
        validateLegacyPlugin(argv, 'reporter', Mocha.reporters);
        validateLegacyPlugin(argv, 'ui', Mocha.interfaces);
        Object.assign(argv, plugins);
      } catch (err) {
        // this could be a bad --require, bad reporter, ui, etc.
        console.error(`\n${symbols.error} ${ansi.red('ERROR:')}`, err);
        yargs.exit(1);
      }
    })
    .array(types.array)
    .boolean(types.boolean)
    .string(types.string)
    .number(types.number)
    .alias(aliases);

exports.handler = async function (argv) {
  debug('post-yargs config', argv);
  const mocha = new Mocha(argv);

  try {
    await runMocha(mocha, argv);
  } catch (err) {
    console.error('\n Exception during run:', err);
    process.exit(1);
  }
};
