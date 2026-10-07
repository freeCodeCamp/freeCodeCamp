/** internal
 * class ActionContainer
 *
 * Action container. Parent for [[ArgumentParser]] and [[ArgumentGroup]]
 **/

'use strict';

var format = require('util').format;

// Constants
var c = require('./const');

var $$ = require('./utils');

//Actions
var ActionHelp = require('./action/help');
var ActionAppend = require('./action/append');
var ActionAppendConstant = require('./action/append/constant');
var ActionCount = require('./action/count');
var ActionStore = require('./action/store');
var ActionStoreConstant = require('./action/store/constant');
var ActionStoreTrue = require('./action/store/true');
var ActionStoreFalse = require('./action/store/false');
var ActionVersion = require('./action/version');
var ActionSubparsers = require('./action/subparsers');

// Errors
var argumentErrorHelper = require('./argument/error');

/**
 * new ActionContainer(options)
 *
 * Action container. Parent for [[ArgumentParser]] and [[ArgumentGroup]]
 *
 * ##### Options:
 *
 * - `description` -- A description of what the program does
 * - `prefixChars`  -- Characters that prefix optional arguments
 * - `argumentDefault`  -- The default value for all arguments
 * - `conflictHandler` -- The conflict handler to use for duplicate arguments
 **/
var ActionContainer = module.exports = function ActionContainer(options) {
  options = options || {};

  this.description = options.description;
  this.argumentDefault = options.argumentDefault;
  this.prefixChars = options.prefixChars || '';
  this.conflictHandler = options.conflictHandler;

  // set up registries
  this._registries = {};

  // register actions
  this.register('action', null, ActionStore);
  this.register('action', 'store', ActionStore);
  this.register('action', 'storeConst', ActionStoreConstant);
  this.register('action', 'storeTrue', ActionStoreTrue);
  this.register('action', 'storeFalse', ActionStoreFalse);
  this.register('action', 'append', ActionAppend);
  this.register('action', 'appendConst', ActionAppendConstant);
  this.register('action', 'count', ActionCount);
  this.register('action', 'help', ActionHelp);
  this.register('action', 'version', ActionVersion);
  this.register('action', 'parsers', ActionSubparsers);

  // raise an exception if the conflict handler is invalid
  this._getHandler();

  // action storage
  this._actions = [];
  this._optionStringActions = {};

  // groups
  this._actionGroups = [];
  this._mutuallyExclusiveGroups = [];

  // defaults storage
  this._defaults = {};

  // determines whether an "option" looks like a negative number
  // -1, -1.5 -5e+4
  this._regexpNegativeNumber = new RegExp('^[-]?[0-9]*\\.?[0-9]+([eE][-+]?[0-9]+)?$');

  // whether or not there are any optionals that look like negative
  // numbers -- uses a list so it can be shared and edited
  this._hasNegativeNumberOptionals = [];
};

// Groups must be required, then ActionContainer already defined
var ArgumentGroup = require('./argument/group');
var MutuallyExclusiveGroup = require('./argument/exclusive');

//
// Registration methods
//

/**
 * ActionContainer#register(registryName, value, object) -> Void
 * - registryName (String) : object type action|type
 * - value (string) : keyword
 * - object (Object|Function) : handler
 *
 *  Register handlers
 **/
ActionContainer.prototype.register = function (registryName, value, object) {
  this._registries[registryName] = this._registries[registryName] || {};
  this._registries[registryName][value] = object;
};

ActionContainer.prototype._registryGet = function (registryName, value, defaultValue) {
  if (arguments.length < 3) {
    defaultValue = null;
  }
  return this._registries[registryName][value] || defaultValue;
};

//
// Namespace default accessor methods
//

/**
 * ActionContainer#setDefaults(options) -> Void
 * - options (object):hash of options see [[Action.new]]
 *
 * Set defaults
 **/
ActionContainer.prototype.setDefaults = function (options) {
  options = options || {};
  for (var property in options) {
    if ($$.has(options, property)) {
      this._defaults[property] = options[property];
    }
  }

  // if these defaults match any existing arguments, replace the previous
  // default on the object with the new one
  this._actions.forEach(function (action) {
    if ($$.has(options, action.dest)) {
      action.defaultValue = options[action.dest];
    }
  });
};

/**
 * ActionContainer#getDefault(dest) -> Mixed
 * - dest (string): action destination
 *
 * Return action default value
 **/
ActionContainer.prototype.getDefault = function (dest) {
  var result = $$.has(this._defaults, dest) ? this._defaults[dest] : null;

  this._actions.forEach(function (action) {
    if (action.dest === dest && $$.has(action, 'defaultValue')) {
      result = action.defaultValue;
    }
  });

  return result;
};
//
// Adding argument actions
//

/**
 * ActionContainer#addArgument(args, options) -> Object
 * - args (String|Array): argument key, or array of argument keys
 * - options (Object): action objects see [[Action.new]]
 *
 * #### Examples
 * - addArgument([ '-f', '--foo' ], { action: 'store', defaultValue: 1, ... })
 * - addArgument([ 'bar' ], { action: 'store', nargs: 1, ... })
 * - addArgument('--baz', { action: 'store', nargs: 1, ... })
 **/
ActionContainer.prototype.addArgument = function (args, options) {
  args = args;
  options = options || {};

  if (typeof args === 'string') {
    args = [ args ];
  }
  if (!Array.isArray(args)) {
    throw new TypeError('addArgument first argument should be a string or an array');
  }
  if (typeof options !== 'object' || Array.isArray(options)) {
    throw new TypeError('addArgument second argument should be a hash');
  }

  // if no positional args are supplied or only one is supplied and
  // it doesn't look like an option string, parse a positional argument
  if (!args || args.length === 1 && this.prefixChars.indexOf(args[0][0]) < 0) {
    if (args && !!options.dest) {
      throw new Error('dest supplied twice for positional argument');
    }
    options = this._getPositional(args, options);

    // otherwise, we're adding an optional argument
  } else {
    options = this._getOptional(args, options);
  }

  // if no default was supplied, use the parser-level default
  if (typeof options.defaultValue === 'undefined') {
    var dest = options.dest;
    if ($$.has(this._defaults, dest)) {
      options.defaultValue = this._defaults[dest];
    } else if (typeof this.argumentDefault !== 'undefined') {
      options.defaultValue = this.argumentDefault;
    }
  }

  // create the action object, and add it to the parser
  var ActionClass = this._popActionClass(options);
  if (typeof ActionClass !== 'function') {
    throw new Error(format('Unknown action "%s".', ActionClass));
  }
  var action = new ActionClass(options);

  // throw an error if the action type is not callable
  var typeFunction = this._registryGet('type', action.type, action.type);
  if (typeof typeFunction !== 'function') {
    throw new Error(format('"%s" is not callable', typeFunction));
  }

  return this._addAction(action);
};

/**
 * ActionContainer#addArgumentGroup(options) -> ArgumentGroup
 * - options (Object): hash of options see [[ArgumentGroup.new]]
 *
 * Create new arguments groups
 **/
ActionContainer.prototype.addArgumentGroup = function (options) {
  var group = new ArgumentGroup(this, options);
  this._actionGroups.push(group);
  return group;
};

/**
 * ActionContainer#addMutuallyExclusiveGroup(options) -> ArgumentGroup
 * - options (Object): {required: false}
 *
 * Create new mutual exclusive groups
 **/
ActionContainer.prototype.addMutuallyExclusiveGroup = function (options) {
  var group = new MutuallyExclusiveGroup(this, options);
  this._mutuallyExclusiveGroups.push(group);
  return group;
};

ActionContainer.prototype._addAction = function (action) {
  var self = this;

  // resolve any conflicts
  this._checkConflict(action);

  // add to actions list
  this._actions.push(action);
  action.container = this;

  // index the action by any option strings it has
  action.optionStrings.forEach(function (optionString) {
    self._optionStringActions[optionString] = action;
  });

  // set the flag if any option strings look like negative numbers
  action.optionStrings.forEach(function (optionString) {
    if (optionString.match(self._regexpNegativeNumber)) {
      if (!self._hasNegativeNumberOptionals.some(Boolean)) {
        self._hasNegativeNumberOptionals.push(true);
      }
    }
  });

  // return the created action
  return action;
};

ActionContainer.prototype._removeAction = function (action) {
  var actionIndex = this._actions.indexOf(action);
  if (actionIndex >= 0) {
    this._actions.splice(actionIndex, 1);
  }
};

ActionContainer.prototype._addContainerActions = function (container) {
  // collect groups by titles
  var titleGroupMap = {};
  this._actionGroups.forEach(function (group) {
    if (titleGroupMap[group.title]) {
      throw new Error(format('Cannot merge actions - two groups are named "%s".', group.title));
    }
    titleGroupMap[group.title] = group;
  });

  // map each action to its group
  var groupMap = {};
  function actionHash(action) {
    // unique (hopefully?) string suitable as dictionary key
    return action.getName();
  }
  container._actionGroups.forEach(function (group) {
    // if a group with the title exists, use that, otherwise
    // create a new group matching the container's group
    if (!titleGroupMap[group.title]) {
      titleGroupMap[group.title] = this.addArgumentGroup({
        title: group.title,
        description: group.description
      });
    }

    // map the actions to their new group
    group._groupActions.forEach(function (action) {
      groupMap[actionHash(action)] = titleGroupMap[group.title];
    });
  }, this);

  // add container's mutually exclusive groups
  // NOTE: if add_mutually_exclusive_group ever gains title= and
  // description= then this code will need to be expanded as above
  var mutexGroup;
  container._mutuallyExclusiveGroups.forEach(function (group) {
    mutexGroup = this.addMutuallyExclusiveGroup({
      required: group.required
    });
    // map the actions to their new mutex group
    group._groupActions.forEach(function (action) {
      groupMap[actionHash(action)] = mutexGroup;
    });
  }, this);  // forEach takes a 'this' argument

  // add all actions to this container or their group
  container._actions.forEach(function (action) {
    var key = actionHash(action);
    if (groupMap[key]) {
      groupMap[key]._addAction(action);
    } else {
      this._addAction(action);
    }
  });
};

ActionContainer.prototype._getPositional = function (dest, options) {
  if (Array.isArray(dest)) {
    dest = dest[0];
  }
  // make sure required is not specified
  if (options.required) {
    throw new Error('"required" is an invalid argument for positionals.');
  }

  // mark positional arguments as required if at least one is
  // always required
  if (options.nargs !== c.OPTIONAL && options.nargs !== c.ZERO_OR_MORE) {
    options.required = true;
  }
  if (options.nargs === c.ZERO_OR_MORE && typeof options.defaultValue === 'undefined') {
    options.required = true;
  }

  // return the keyword arguments with no option strings
  options.dest = dest;
  options.optionStrings = [];
  return options;
};

ActionContainer.prototype._getOptional = function (args, options) {
  var prefixChars = this.prefixChars;
  var optionStrings = [];
  var optionStringsLong = [];

  // determine short and long option strings
  args.forEach(function (optionString) {
    // error on strings that don't start with an appropriate prefix
    if (prefixChars.indexOf(optionString[0]) < 0) {
      throw new Error(format('Invalid option string "%s": must start with a "%s".',
        optionString,
        prefixChars
      ));
    }

    // strings starting with two prefix characters are long options
    optionStrings.push(optionString);
    if (optionString.length > 1 && prefixChars.indexOf(optionString[1]) >= 0) {
      optionStringsLong.push(optionString);
    }
  });

  // infer dest, '--foo-bar' -> 'foo_bar' and '-x' -> 'x'
  var dest = options.dest || null;
  delete options.dest;

  if (!dest) {
    var optionStringDest = optionStringsLong.length ? optionStringsLong[0] : optionStrings[0];
    dest = $$.trimChars(optionStringDest, this.prefixChars);

    if (dest.length === 0) {
      throw new Error(
        format('dest= is required for options like "%s"', optionStrings.join(', '))
      );
    }
    dest = dest.replace(/-/g, '_');
  }

  // return the updated keyword arguments
  options.dest = dest;
  options.optionStrings = optionStrings;

  return options;
};

ActionContainer.prototype._popActionClass = function (options, defaultValue) {
  defaultValue = defaultValue || null;

  var action = (options.action || defaultValue);
  delete options.action;

  var actionClass = this._registryGet('action', action, action);
  return actionClass;
};

ActionContainer.prototype._getHandler = function () {
  var handlerString = this.conflictHandler;
  var handlerFuncName = '_handleConflict' + $$.capitalize(handlerString);
  var func = this[handlerFuncName];
  if (typeof func === 'undefined') {
    var msg = 'invalid conflict resolution value: ' + handlerString;
    throw new Error(msg);
  } else {
    return func;
  }
};

ActionContainer.prototype._checkConflict = function (action) {
  var optionStringActions = this._optionStringActions;
  var conflictOptionals = [];

  // find all options that conflict with this option
  // collect pairs, the string, and an existing action that it conflicts with
  action.optionStrings.forEach(function (optionString) {
    var conflOptional = optionStringActions[optionString];
    if (typeof conflOptional !== 'undefined') {
      conflictOptionals.push([ optionString, conflOptional ]);
    }
  });

  if (conflictOptionals.length > 0) {
    var conflictHandler = this._getHandler();
    conflictHandler.call(this, action, conflictOptionals);
  }
};

ActionContainer.prototype._handleConflictError = function (action, conflOptionals) {
  var conflicts = conflOptionals.map(function (pair) { return pair[0]; });
  conflicts = conflicts.join(', ');
  throw argumentErrorHelper(
    action,
    format('Conflicting option string(s): %s', conflicts)
  );
};

ActionContainer.prototype._handleConflictResolve = function (action, conflOptionals) {
  // remove all conflicting options
  var self = this;
  conflOptionals.forEach(function (pair) {
    var optionString = pair[0];
    var conflictingAction = pair[1];
    // remove the conflicting option string
    var i = conflictingAction.optionStrings.indexOf(optionString);
    if (i >= 0) {
      conflictingAction.optionStrings.splice(i, 1);
    }
    delete self._optionStringActions[optionString];
    // if the option now has no option string, remove it from the
    // container holding it
    if (conflictingAction.optionStrings.length === 0) {
      conflictingAction.container._removeAction(conflictingAction);
    }
  });
};
