/*:nodoc:*
 * class ActionCount
 *
 * This counts the number of times a keyword argument occurs.
 * For example, this is useful for increasing verbosity levels
 *
 * This class inherided from [[Action]]
 *
 **/
'use strict';

var util = require('util');

var Action = require('../action');

/*:nodoc:*
 * new ActionCount(options)
 * - options (object): options hash see [[Action.new]]
 *
 **/
var ActionCount = module.exports = function ActionCount(options) {
  options = options || {};
  options.nargs = 0;

  Action.call(this, options);
};
util.inherits(ActionCount, Action);

/*:nodoc:*
 * ActionCount#call(parser, namespace, values, optionString) -> Void
 * - parser (ArgumentParser): current parser
 * - namespace (Namespace): namespace for output data
 * - values (Array): parsed values
 * - optionString (Array): input option string(not parsed)
 *
 * Call the action. Save result in namespace object
 **/
ActionCount.prototype.call = function (parser, namespace) {
  namespace.set(this.dest, (namespace[this.dest] || 0) + 1);
};
