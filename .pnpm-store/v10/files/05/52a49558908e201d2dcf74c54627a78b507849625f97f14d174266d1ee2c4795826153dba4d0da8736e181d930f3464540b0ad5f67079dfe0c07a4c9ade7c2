/*:nodoc:*
 * class ActionStore
 *
 * This action just stores the argument’s value. This is the default action.
 *
 * This class inherited from [[Action]]
 *
 **/
'use strict';

var util = require('util');

var Action = require('../action');

// Constants
var c = require('../const');


/*:nodoc:*
 * new ActionStore(options)
 * - options (object): options hash see [[Action.new]]
 *
 **/
var ActionStore = module.exports = function ActionStore(options) {
  options = options || {};
  if (this.nargs <= 0) {
    throw new Error('nargs for store actions must be > 0; if you ' +
        'have nothing to store, actions such as store ' +
        'true or store const may be more appropriate');

  }
  if (typeof this.constant !== 'undefined' && this.nargs !== c.OPTIONAL) {
    throw new Error('nargs must be OPTIONAL to supply const');
  }
  Action.call(this, options);
};
util.inherits(ActionStore, Action);

/*:nodoc:*
 * ActionStore#call(parser, namespace, values, optionString) -> Void
 * - parser (ArgumentParser): current parser
 * - namespace (Namespace): namespace for output data
 * - values (Array): parsed values
 * - optionString (Array): input option string(not parsed)
 *
 * Call the action. Save result in namespace object
 **/
ActionStore.prototype.call = function (parser, namespace, values) {
  namespace.set(this.dest, values);
};
