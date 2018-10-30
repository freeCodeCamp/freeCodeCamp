/*:nodoc:*
 * class ActionStoreConstant
 *
 * This action stores the value specified by the const keyword argument.
 * (Note that the const keyword argument defaults to the rather unhelpful null.)
 * The 'store_const' action is most commonly used with optional
 * arguments that specify some sort of flag.
 *
 * This class inherited from [[Action]]
 **/
'use strict';

var util = require('util');

var Action = require('../../action');

/*:nodoc:*
 * new ActionStoreConstant(options)
 * - options (object): options hash see [[Action.new]]
 *
 **/
var ActionStoreConstant = module.exports = function ActionStoreConstant(options) {
  options = options || {};
  options.nargs = 0;
  if (typeof options.constant === 'undefined') {
    throw new Error('constant option is required for storeAction');
  }
  Action.call(this, options);
};
util.inherits(ActionStoreConstant, Action);

/*:nodoc:*
 * ActionStoreConstant#call(parser, namespace, values, optionString) -> Void
 * - parser (ArgumentParser): current parser
 * - namespace (Namespace): namespace for output data
 * - values (Array): parsed values
 * - optionString (Array): input option string(not parsed)
 *
 * Call the action. Save result in namespace object
 **/
ActionStoreConstant.prototype.call = function (parser, namespace) {
  namespace.set(this.dest, this.constant);
};
