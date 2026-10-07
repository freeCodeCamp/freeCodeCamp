'use strict';

/**
 * Main entry point for handling filesystem-based configuration,
 * whether that's a config file or `package.json` or whatever.
 * @module lib/cli/options
 * @private
 */

const fs = require('fs');
const ansi = require('ansi-colors');
const yargsParser = require('yargs-parser');
const {types, aliases} = require('./run-option-metadata');
const {ONE_AND_DONE_ARGS} = require('./one-and-dones');
const mocharc = require('../mocharc.json');
const {list} = require('./run-helpers');
const {loadConfig, findConfig} = require('./config');
const findUp = require('find-up');
const debug = require('debug')('mocha:cli:options');
const {isNodeFlag} = require('./node-flags');
const {createUnparsableFileError} = require('../errors');

/**
 * The `yargs-parser` namespace
 * @external yargsParser
 * @see {@link https://npm.im/yargs-parser}
 */

/**
 * An object returned by a configured `yargs-parser` representing arguments
 * @memberof external:yargsParser
 * @interface Arguments
 */

/**
 * Base yargs parser configuration
 * @private
 */
const YARGS_PARSER_CONFIG = {
  'combine-arrays': true,
  'short-option-groups': false,
  'dot-notation': false,
  'strip-aliased': true
};

/**
 * This is the config pulled from the `yargs` property of Mocha's
 * `package.json`, but it also disables camel case expansion as to
 * avoid outputting non-canonical keynames, as we need to do some
 * lookups.
 * @private
 * @ignore
 */
const configuration = Object.assign({}, YARGS_PARSER_CONFIG, {
  'camel-case-expansion': false
});

/**
 * This is a really fancy way to:
 * - `array`-type options: ensure unique values and evtl. split comma-delimited lists
 * - `boolean`/`number`/`string`- options: use last element when given multiple times
 * This is passed as the `coerce` option to `yargs-parser`
 * @private
 * @ignore
 */
const globOptions = ['spec', 'ignore'];
const coerceOpts = Object.assign(
  types.array.reduce(
    (acc, arg) =>
      Object.assign(acc, {
        [arg]: v => Array.from(new Set(globOptions.includes(arg) ? v : list(v)))
      }),
    {}
  ),
  types.boolean
    .concat(types.string, types.number)
    .reduce(
      (acc, arg) =>
        Object.assign(acc, {[arg]: v => (Array.isArray(v) ? v.pop() : v)}),
      {}
    )
);

/**
 * We do not have a case when multiple arguments are ever allowed after a flag
 * (e.g., `--foo bar baz quux`), so we fix the number of arguments to 1 across
 * the board of non-boolean options.
 * This is passed as the `narg` option to `yargs-parser`
 * @private
 * @ignore
 */
const nargOpts = types.array
  .concat(types.string, types.number)
  .reduce((acc, arg) => Object.assign(acc, {[arg]: 1}), {});

/**
 * Wrapper around `yargs-parser` which applies our settings
 * @param {string|string[]} args - Arguments to parse
 * @param {Object} defaultValues - Default values of mocharc.json
 * @param  {...Object} configObjects - `configObjects` for yargs-parser
 * @private
 * @ignore
 */
const parse = (args = [], defaultValues = {}, ...configObjects) => {
  // save node-specific args for special handling.
  // 1. when these args have a "=" they should be considered to have values
  // 2. if they don't, they just boolean flags
  // 3. to avoid explicitly defining the set of them, we tell yargs-parser they
  //    are ALL boolean flags.
  // 4. we can then reapply the values after yargs-parser is done.
  const nodeArgs = (Array.isArray(args) ? args : args.split(' ')).reduce(
    (acc, arg) => {
      const pair = arg.split('=');
      let flag = pair[0];
      if (isNodeFlag(flag, false)) {
        flag = flag.replace(/^--?/, '');
        return arg.includes('=')
          ? acc.concat([[flag, pair[1]]])
          : acc.concat([[flag, true]]);
      }
      return acc;
    },
    []
  );

  const result = yargsParser.detailed(args, {
    configuration,
    configObjects,
    default: defaultValues,
    coerce: coerceOpts,
    narg: nargOpts,
    alias: aliases,
    string: types.string,
    array: types.array,
    number: types.number,
    boolean: types.boolean.concat(nodeArgs.map(pair => pair[0]))
  });
  if (result.error) {
    console.error(ansi.red(`Error: ${result.error.message}`));
    process.exit(1);
  }

  // reapply "=" arg values from above
  nodeArgs.forEach(([key, value]) => {
    result.argv[key] = value;
  });

  return result.argv;
};

/**
 * Given path to config file in `args.config`, attempt to load & parse config file.
 * @param {Object} [args] - Arguments object
 * @param {string|boolean} [args.config] - Path to config file or `false` to skip
 * @public
 * @alias module:lib/cli.loadRc
 * @returns {external:yargsParser.Arguments|void} Parsed config, or nothing if `args.config` is `false`
 */
const loadRc = (args = {}) => {
  if (args.config !== false) {
    const config = args.config || findConfig();
    return config ? loadConfig(config) : {};
  }
};

module.exports.loadRc = loadRc;

/**
 * Given path to `package.json` in `args.package`, attempt to load config from `mocha` prop.
 * @param {Object} [args] - Arguments object
 * @param {string|boolean} [args.config] - Path to `package.json` or `false` to skip
 * @public
 * @alias module:lib/cli.loadPkgRc
 * @returns {external:yargsParser.Arguments|void} Parsed config, or nothing if `args.package` is `false`
 */
const loadPkgRc = (args = {}) => {
  let result;
  if (args.package === false) {
    return result;
  }
  result = {};
  const filepath = args.package || findUp.sync(mocharc.package);
  if (filepath) {
    let configData;
    try {
      configData = fs.readFileSync(filepath, 'utf8');
    } catch (err) {
      // If `args.package` was explicitly specified, throw an error
      if (filepath == args.package) {
        throw createUnparsableFileError(
          `Unable to read ${filepath}: ${err}`,
          filepath
        );
      } else {
        debug('failed to read default package.json at %s; ignoring',
              filepath);
        return result;
      }
    }
    try {
      const pkg = JSON.parse(configData);
      if (pkg.mocha) {
        debug('`mocha` prop of package.json parsed: %O', pkg.mocha);
        result = pkg.mocha;
      } else {
        debug('no config found in %s', filepath);
      }
    } catch (err) {
      // If JSON failed to parse, throw an error.
      throw createUnparsableFileError(
        `Unable to parse ${filepath}: ${err}`,
        filepath
      );
    }
  }
  return result;
};

module.exports.loadPkgRc = loadPkgRc;

/**
 * Priority list:
 *
 * 1. Command-line args
 * 2. `MOCHA_OPTIONS` environment variable.
 * 3. RC file (`.mocharc.c?js`, `.mocharc.ya?ml`, `mocharc.json`)
 * 4. `mocha` prop of `package.json`
 * 5. default configuration (`lib/mocharc.json`)
 *
 * If a {@link module:lib/cli/one-and-dones.ONE_AND_DONE_ARGS "one-and-done" option} is present in the `argv` array, no external config files will be read.
 * @summary Parses options read from `.mocharc.*` and `package.json`.
 * @param {string|string[]} [argv] - Arguments to parse
 * @public
 * @alias module:lib/cli.loadOptions
 * @returns {external:yargsParser.Arguments} Parsed args from everything
 */
const loadOptions = (argv = []) => {
  let args = parse(argv);
  // short-circuit: look for a flag that would abort loading of options
  if (
    Array.from(ONE_AND_DONE_ARGS).reduce(
      (acc, arg) => acc || arg in args,
      false
    )
  ) {
    return args;
  }

  const envConfig = parse(process.env.MOCHA_OPTIONS || '');
  const rcConfig = loadRc(args);
  const pkgConfig = loadPkgRc(args);

  if (rcConfig) {
    args.config = false;
    args._ = args._.concat(rcConfig._ || []);
  }
  if (pkgConfig) {
    args.package = false;
    args._ = args._.concat(pkgConfig._ || []);
  }

  args = parse(
    args._,
    mocharc,
    args,
    envConfig,
    rcConfig || {},
    pkgConfig || {}
  );

  // recombine positional arguments and "spec"
  if (args.spec) {
    args._ = args._.concat(args.spec);
    delete args.spec;
  }

  // make unique
  args._ = Array.from(new Set(args._));

  return args;
};

module.exports.loadOptions = loadOptions;
module.exports.YARGS_PARSER_CONFIG = YARGS_PARSER_CONFIG;
