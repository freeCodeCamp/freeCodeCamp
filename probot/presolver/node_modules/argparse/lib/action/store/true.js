/*:nodoc:*
 * class ActionStoreTrue
 *
 * This action store the values True respectively.
 * This isspecial cases of 'storeConst'
 *
 * This class inherited from [[Action]]
 **/
'use strict';

var util = require('util');

var ActionStoreConstant = require('./constant');

/*:nodoc:*
 * new ActionStoreTrue(options)
 * - options (object): options hash see [[Action.new]]
 *
 **/
var ActionStoreTrue = module.exports = function ActionStoreTrue(options) {
  options = options || {};
  options.constant = true;
  options.defaultValue = options.defaultValue !== null ? options.defaultValue : false;
  ActionStoreConstant.call(this, options);
};
util.inherits(ActionStoreTrue, ActionStoreConstant);
