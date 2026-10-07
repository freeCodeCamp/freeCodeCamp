/** internal
 * class MutuallyExclusiveGroup
 *
 * Group arguments.
 * By default, ArgumentParser groups command-line arguments
 * into “positional arguments” and “optional arguments”
 * when displaying help messages. When there is a better
 * conceptual grouping of arguments than this default one,
 * appropriate groups can be created using the addArgumentGroup() method
 *
 * This class inherited from [[ArgumentContainer]]
 **/
'use strict';

var util = require('util');

var ArgumentGroup = require('./group');

/**
 * new MutuallyExclusiveGroup(container, options)
 * - container (object): main container
 * - options (object): options.required -> true/false
 *
 * `required` could be an argument itself, but making it a property of
 * the options argument is more consistent with the JS adaptation of the Python)
 **/
var MutuallyExclusiveGroup = module.exports = function MutuallyExclusiveGroup(container, options) {
  var required;
  options = options || {};
  required = options.required || false;
  ArgumentGroup.call(this, container);
  this.required = required;

};
util.inherits(MutuallyExclusiveGroup, ArgumentGroup);


MutuallyExclusiveGroup.prototype._addAction = function (action) {
  var msg;
  if (action.required) {
    msg = 'mutually exclusive arguments must be optional';
    throw new Error(msg);
  }
  action = this._container._addAction(action);
  this._groupActions.push(action);
  return action;
};


MutuallyExclusiveGroup.prototype._removeAction = function (action) {
  this._container._removeAction(action);
  this._groupActions.remove(action);
};

