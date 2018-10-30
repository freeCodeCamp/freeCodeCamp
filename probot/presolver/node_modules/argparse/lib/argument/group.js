/** internal
 * class ArgumentGroup
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

var ActionContainer = require('../action_container');


/**
 * new ArgumentGroup(container, options)
 * - container (object): main container
 * - options (object): hash of group options
 *
 * #### options
 * - **prefixChars**  group name prefix
 * - **argumentDefault**  default argument value
 * - **title**  group title
 * - **description** group description
 *
 **/
var ArgumentGroup = module.exports = function ArgumentGroup(container, options) {

  options = options || {};

  // add any missing keyword arguments by checking the container
  options.conflictHandler = (options.conflictHandler || container.conflictHandler);
  options.prefixChars = (options.prefixChars || container.prefixChars);
  options.argumentDefault = (options.argumentDefault || container.argumentDefault);

  ActionContainer.call(this, options);

  // group attributes
  this.title = options.title;
  this._groupActions = [];

  // share most attributes with the container
  this._container = container;
  this._registries = container._registries;
  this._actions = container._actions;
  this._optionStringActions = container._optionStringActions;
  this._defaults = container._defaults;
  this._hasNegativeNumberOptionals = container._hasNegativeNumberOptionals;
  this._mutuallyExclusiveGroups = container._mutuallyExclusiveGroups;
};
util.inherits(ArgumentGroup, ActionContainer);


ArgumentGroup.prototype._addAction = function (action) {
  // Parent add action
  action = ActionContainer.prototype._addAction.call(this, action);
  this._groupActions.push(action);
  return action;
};


ArgumentGroup.prototype._removeAction = function (action) {
  // Parent remove action
  ActionContainer.prototype._removeAction.call(this, action);
  var actionIndex = this._groupActions.indexOf(action);
  if (actionIndex >= 0) {
    this._groupActions.splice(actionIndex, 1);
  }
};

