'use strict';

/**
 * Contains "command" code for "one-and-dones"--options passed
 * to Mocha which cause it to just dump some info and exit.
 * See {@link module:lib/cli/one-and-dones.ONE_AND_DONE_ARGS ONE_AND_DONE_ARGS} for more info.
 * @module
 * @private
 */

const Mocha = require('../mocha');

/**
 * Dumps a sorted list of the enumerable, lower-case keys of some object
 * to `STDOUT`.
 * @param {Object} obj - Object, ostensibly having some enumerable keys
 * @ignore
 * @private
 */
const showKeys = obj => {
  console.log();
  const keys = Object.keys(obj);
  const maxKeyLength = keys.reduce((max, key) => Math.max(max, key.length), 0);
  keys
    .filter(
      key => /^[a-z]/.test(key) && !obj[key].browserOnly && !obj[key].abstract
    )
    .sort()
    .forEach(key => {
      const description = obj[key].description;
      console.log(
        `    ${key.padEnd(maxKeyLength + 1)}${
          description ? `- ${description}` : ''
        }`
      );
    });
  console.log();
};

/**
 * Handlers for one-and-done options
 * @namespace
 * @private
 */
exports.ONE_AND_DONES = {
  /**
   * Dump list of built-in interfaces
   * @private
   */
  'list-interfaces': () => {
    showKeys(Mocha.interfaces);
  },
  /**
   * Dump list of built-in reporters
   * @private
   */
  'list-reporters': () => {
    showKeys(Mocha.reporters);
  }
};

/**
 * A Set of all one-and-done options
 * @type Set<string>
 * @private
 */
exports.ONE_AND_DONE_ARGS = new Set(
  ['help', 'h', 'version', 'V'].concat(Object.keys(exports.ONE_AND_DONES))
);
