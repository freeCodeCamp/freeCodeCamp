'use strict';
var utils = require('../utils');
var add = require('./add');
var parse = require('./parse');

// exported
var rules = { ignore: [], watch: [] };

/**
 * Loads a nodemon config file and populates the ignore
 * and watch rules with it's contents, and calls callback
 * with the new rules
 *
 * @param  {String} filename
 * @param  {Function} callback
 */
function load(filename, callback) {
  parse(filename, function (err, result) {
    if (err) {
      // we should have bombed already, but
      utils.log.error(err);
      callback(err);
    }

    if (result.raw) {
      result.raw.forEach(add.bind(null, rules, 'ignore'));
    } else {
      result.ignore.forEach(add.bind(null, rules, 'ignore'));
      result.watch.forEach(add.bind(null, rules, 'watch'));
    }

    callback(null, rules);
  });
}

module.exports = {
  reset: function () { // just used for testing
    rules.ignore.length = rules.watch.length = 0;
    delete rules.ignore.re;
    delete rules.watch.re;
  },
  load: load,
  ignore: {
    test: add.bind(null, rules, 'ignore'),
    add: add.bind(null, rules, 'ignore'),
  },
  watch: {
    test: add.bind(null, rules, 'watch'),
    add: add.bind(null, rules, 'watch'),
  },
  add: add.bind(null, rules),
  rules: rules,
};