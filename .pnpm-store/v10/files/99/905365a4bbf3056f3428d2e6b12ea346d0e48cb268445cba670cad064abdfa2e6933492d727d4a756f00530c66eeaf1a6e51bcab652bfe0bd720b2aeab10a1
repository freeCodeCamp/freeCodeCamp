/*:nodoc:*
 * class ActionStoreFalse
 *
 * This action store the values False respectively.
 * This is special cases of 'storeConst'
 *
 * This class inherited from [[Action]]
 **/

'use strict';

var util = require('util');

var ActionStoreConstant = require('./constant');

/*:nodoc:*
 * new ActionStoreFalse(options)
 * - options (object): hash of options see [[Action.new]]
 *
 **/
var ActionStoreFalse = module.exports = function ActionStoreFalse(options) {
  options = options || {};
  options.constant = false;
  options.defaultValue = options.defaultValue !== null ? options.defaultValue : true;
  ActionStoreConstant.call(this, options);
};
util.inherits(ActionStoreFalse, ActionStoreConstant);
