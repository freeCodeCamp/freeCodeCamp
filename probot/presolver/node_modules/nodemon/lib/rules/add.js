'use strict';

var utils = require('../utils');

// internal
var reEscComments = /\\#/g;
// note that '^^' is used in place of escaped comments
var reUnescapeComments = /\^\^/g;
var reComments = /#.*$/;
var reEscapeChars = /[.|\-[\]()\\]/g;
var reAsterisk = /\*/g;

module.exports = add;

/**
 * Converts file patterns or regular expressions to nodemon
 * compatible RegExp matching rules. Note: the `rules` argument
 * object is modified to include the new rule and new RegExp
 *
 * ### Example:
 *
 *     var rules = { watch: [], ignore: [] };
 *     add(rules, 'watch', '*.js');
 *     add(rules, 'ignore', '/public/');
 *     add(rules, 'watch', ':(\d)*\.js'); // note: string based regexp
 *     add(rules, 'watch', /\d*\.js/);
 *
 * @param {Object} rules containing `watch` and `ignore`. Also updated during
 *                       execution
 * @param {String} which must be either "watch" or "ignore"
 * @param {String|RegExp} the actual rule.
 */
function add(rules, which, rule) {
  if (!{ ignore: 1, watch: 1}[which]) {
    throw new Error('rules/index.js#add requires "ignore" or "watch" as the ' +
      'first argument');
  }

  if (Array.isArray(rule)) {
    rule.forEach(function (rule) {
      add(rules, which, rule);
    });
    return;
  }

  // support the rule being a RegExp, but reformat it to
  // the custom :<regexp> format that we're working with.
  if (rule instanceof RegExp) {
    // rule = ':' + rule.toString().replace(/^\/(.*?)\/$/g, '$1');
    utils.log.error('RegExp format no longer supported, but globs are.');
    return;
  }

  // remove comments and trim lines
  // this mess of replace methods is escaping "\#" to allow for emacs temp files

  // first up strip comments and remove blank head or tails
  rule = (rule || '').replace(reEscComments, '^^')
             .replace(reComments, '')
             .replace(reUnescapeComments, '#').trim();

  var regexp = false;

  if (typeof rule === 'string' && rule.substring(0, 1) === ':') {
    rule = rule.substring(1);
    utils.log.error('RegExp no longer supported: ' + rule);
    regexp = true;
  } else if (rule.length === 0) {
    // blank line (or it was a comment)
    return;
  }

  if (regexp) {
    // rules[which].push(rule);
  } else {
    // rule = rule.replace(reEscapeChars, '\\$&')
    // .replace(reAsterisk, '.*');

    rules[which].push(rule);
    // compile a regexp of all the rules for this ignore or watch
    var re = rules[which].map(function (rule) {
      return rule.replace(reEscapeChars, '\\$&')
                 .replace(reAsterisk, '.*');
    }).join('|');

    // used for the directory matching
    rules[which].re = new RegExp(re);
  }
}
