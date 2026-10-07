/*:nodoc:*
 * class ActionAppendConstant
 *
 * This stores a list, and appends the value specified by
 * the const keyword argument to the list.
 * (Note that the const keyword argument defaults to null.)
 * The 'appendConst' action is typically useful when multiple
 * arguments need to store constants to the same list.
 *
 * This class inherited from [[Action]]
 **/

'use strict';

var util = require('util');

var Action = require('../../action');

/*:nodoc:*
 * new ActionAppendConstant(options)
 * - options (object): options hash see [[Action.new]]
 *
 **/
var ActionAppendConstant = module.exports = function ActionAppendConstant(options) {
  options = options || {};
  options.nargs = 0;
  if (typeof options.constant === 'undefined') {
    throw new Error('constant option is required for appendAction');
  }
  Action.call(this, options);
};
util.inherits(ActionAppendConstant, Action);

/*:nodoc:*
 * ActionAppendConstant#call(parser, namespace, values, optionString) -> Void
 * - parser (ArgumentParser): current parser
 * - namespace (Namespace): namespace for output data
 * - values (Array): parsed values
 * - optionString (Array): input option string(not parsed)
 *
 * Call the action. Save result in namespace object
 **/
ActionAppendConstant.prototype.call = function (parser, namespace) {
  var items = [].concat(namespace[this.dest] || []);
  items.push(this.constant);
  namespace.set(this.dest, items);
};
