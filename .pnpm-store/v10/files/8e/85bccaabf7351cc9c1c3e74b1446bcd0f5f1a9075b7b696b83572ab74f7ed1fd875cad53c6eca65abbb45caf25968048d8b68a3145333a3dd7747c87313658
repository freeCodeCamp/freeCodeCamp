/**
 * class ArgumentParser
 *
 * Object for parsing command line strings into js objects.
 *
 * Inherited from [[ActionContainer]]
 **/
'use strict';

var util    = require('util');
var format  = require('util').format;
var Path    = require('path');
var sprintf = require('sprintf-js').sprintf;

// Constants
var c = require('./const');

var $$ = require('./utils');

var ActionContainer = require('./action_container');

// Errors
var argumentErrorHelper = require('./argument/error');

var HelpFormatter = require('./help/formatter');

var Namespace = require('./namespace');


/**
 * new ArgumentParser(options)
 *
 * Create a new ArgumentParser object.
 *
 * ##### Options:
 * - `prog`  The name of the program (default: Path.basename(process.argv[1]))
 * - `usage`  A usage message (default: auto-generated from arguments)
 * - `description`  A description of what the program does
 * - `epilog`  Text following the argument descriptions
 * - `parents`  Parsers whose arguments should be copied into this one
 * - `formatterClass`  HelpFormatter class for printing help messages
 * - `prefixChars`  Characters that prefix optional arguments
 * - `fromfilePrefixChars` Characters that prefix files containing additional arguments
 * - `argumentDefault`  The default value for all arguments
 * - `addHelp`  Add a -h/-help option
 * - `conflictHandler`  Specifies how to handle conflicting argument names
 * - `debug`  Enable debug mode. Argument errors throw exception in
 *   debug mode and process.exit in normal. Used for development and
 *   testing (default: false)
 *
 * See also [original guide][1]
 *
 * [1]:http://docs.python.org/dev/library/argparse.html#argumentparser-objects
 **/
function ArgumentParser(options) {
  if (!(this instanceof ArgumentParser)) {
    return new ArgumentParser(options);
  }
  var self = this;
  options = options || {};

  options.description = (options.description || null);
  options.argumentDefault = (options.argumentDefault || null);
  options.prefixChars = (options.prefixChars || '-');
  options.conflictHandler = (options.conflictHandler || 'error');
  ActionContainer.call(this, options);

  options.addHelp = typeof options.addHelp === 'undefined' || !!options.addHelp;
  options.parents = options.parents || [];
  // default program name
  options.prog = (options.prog || Path.basename(process.argv[1]));
  this.prog = options.prog;
  this.usage = options.usage;
  this.epilog = options.epilog;
  this.version = options.version;

  this.debug = (options.debug === true);

  this.formatterClass = (options.formatterClass || HelpFormatter);
  this.fromfilePrefixChars = options.fromfilePrefixChars || null;
  this._positionals = this.addArgumentGroup({ title: 'Positional arguments' });
  this._optionals = this.addArgumentGroup({ title: 'Optional arguments' });
  this._subparsers = null;

  // register types
  function FUNCTION_IDENTITY(o) {
    return o;
  }
  this.register('type', 'auto', FUNCTION_IDENTITY);
  this.register('type', null, FUNCTION_IDENTITY);
  this.register('type', 'int', function (x) {
    var result = parseInt(x, 10);
    if (isNaN(result)) {
      throw new Error(x + ' is not a valid integer.');
    }
    return result;
  });
  this.register('type', 'float', function (x) {
    var result = parseFloat(x);
    if (isNaN(result)) {
      throw new Error(x + ' is not a valid float.');
    }
    return result;
  });
  this.register('type', 'string', function (x) {
    return '' + x;
  });

  // add help and version arguments if necessary
  var defaultPrefix = (this.prefixChars.indexOf('-') > -1) ? '-' : this.prefixChars[0];
  if (options.addHelp) {
    this.addArgument(
      [ defaultPrefix + 'h', defaultPrefix + defaultPrefix + 'help' ],
      {
        action: 'help',
        defaultValue: c.SUPPRESS,
        help: 'Show this help message and exit.'
      }
    );
  }
  if (typeof this.version !== 'undefined') {
    this.addArgument(
      [ defaultPrefix + 'v', defaultPrefix + defaultPrefix + 'version' ],
      {
        action: 'version',
        version: this.version,
        defaultValue: c.SUPPRESS,
        help: "Show program's version number and exit."
      }
    );
  }

  // add parent arguments and defaults
  options.parents.forEach(function (parent) {
    self._addContainerActions(parent);
    if (typeof parent._defaults !== 'undefined') {
      for (var defaultKey in parent._defaults) {
        if (parent._defaults.hasOwnProperty(defaultKey)) {
          self._defaults[defaultKey] = parent._defaults[defaultKey];
        }
      }
    }
  });
}

util.inherits(ArgumentParser, ActionContainer);

/**
 * ArgumentParser#addSubparsers(options) -> [[ActionSubparsers]]
 * - options (object): hash of options see [[ActionSubparsers.new]]
 *
 * See also [subcommands][1]
 *
 * [1]:http://docs.python.org/dev/library/argparse.html#sub-commands
 **/
ArgumentParser.prototype.addSubparsers = function (options) {
  if (this._subparsers) {
    this.error('Cannot have multiple subparser arguments.');
  }

  options = options || {};
  options.debug = (this.debug === true);
  options.optionStrings = [];
  options.parserClass = (options.parserClass || ArgumentParser);


  if (!!options.title || !!options.description) {

    this._subparsers = this.addArgumentGroup({
      title: (options.title || 'subcommands'),
      description: options.description
    });
    delete options.title;
    delete options.description;

  } else {
    this._subparsers = this._positionals;
  }

  // prog defaults to the usage message of this parser, skipping
  // optional arguments and with no "usage:" prefix
  if (!options.prog) {
    var formatter = this._getFormatter();
    var positionals = this._getPositionalActions();
    var groups = this._mutuallyExclusiveGroups;
    formatter.addUsage(this.usage, positionals, groups, '');
    options.prog = formatter.formatHelp().trim();
  }

  // create the parsers action and add it to the positionals list
  var ParsersClass = this._popActionClass(options, 'parsers');
  var action = new ParsersClass(options);
  this._subparsers._addAction(action);

  // return the created parsers action
  return action;
};

ArgumentParser.prototype._addAction = function (action) {
  if (action.isOptional()) {
    this._optionals._addAction(action);
  } else {
    this._positionals._addAction(action);
  }
  return action;
};

ArgumentParser.prototype._getOptionalActions = function () {
  return this._actions.filter(function (action) {
    return action.isOptional();
  });
};

ArgumentParser.prototype._getPositionalActions = function () {
  return this._actions.filter(function (action) {
    return action.isPositional();
  });
};


/**
 * ArgumentParser#parseArgs(args, namespace) -> Namespace|Object
 * - args (array): input elements
 * - namespace (Namespace|Object): result object
 *
 * Parsed args and throws error if some arguments are not recognized
 *
 * See also [original guide][1]
 *
 * [1]:http://docs.python.org/dev/library/argparse.html#the-parse-args-method
 **/
ArgumentParser.prototype.parseArgs = function (args, namespace) {
  var argv;
  var result = this.parseKnownArgs(args, namespace);

  args = result[0];
  argv = result[1];
  if (argv && argv.length > 0) {
    this.error(
      format('Unrecognized arguments: %s.', argv.join(' '))
    );
  }
  return args;
};

/**
 * ArgumentParser#parseKnownArgs(args, namespace) -> array
 * - args (array): input options
 * - namespace (Namespace|Object): result object
 *
 * Parse known arguments and return tuple of result object
 * and unknown args
 *
 * See also [original guide][1]
 *
 * [1]:http://docs.python.org/dev/library/argparse.html#partial-parsing
 **/
ArgumentParser.prototype.parseKnownArgs = function (args, namespace) {
  var self = this;

  // args default to the system args
  args = args || process.argv.slice(2);

  // default Namespace built from parser defaults
  namespace = namespace || new Namespace();

  self._actions.forEach(function (action) {
    if (action.dest !== c.SUPPRESS) {
      if (!$$.has(namespace, action.dest)) {
        if (action.defaultValue !== c.SUPPRESS) {
          var defaultValue = action.defaultValue;
          if (typeof action.defaultValue === 'string') {
            defaultValue = self._getValue(action, defaultValue);
          }
          namespace[action.dest] = defaultValue;
        }
      }
    }
  });

  Object.keys(self._defaults).forEach(function (dest) {
    namespace[dest] = self._defaults[dest];
  });

  // parse the arguments and exit if there are any errors
  try {
    var res = this._parseKnownArgs(args, namespace);

    namespace = res[0];
    args = res[1];
    if ($$.has(namespace, c._UNRECOGNIZED_ARGS_ATTR)) {
      args = $$.arrayUnion(args, namespace[c._UNRECOGNIZED_ARGS_ATTR]);
      delete namespace[c._UNRECOGNIZED_ARGS_ATTR];
    }
    return [ namespace, args ];
  } catch (e) {
    this.error(e);
  }
};

ArgumentParser.prototype._parseKnownArgs = function (argStrings, namespace) {
  var self = this;

  var extras = [];

  // replace arg strings that are file references
  if (this.fromfilePrefixChars !== null) {
    argStrings = this._readArgsFromFiles(argStrings);
  }
  // map all mutually exclusive arguments to the other arguments
  // they can't occur with
  // Python has 'conflicts = action_conflicts.setdefault(mutex_action, [])'
  // though I can't conceive of a way in which an action could be a member
  // of two different mutually exclusive groups.

  function actionHash(action) {
    // some sort of hashable key for this action
    // action itself cannot be a key in actionConflicts
    // I think getName() (join of optionStrings) is unique enough
    return action.getName();
  }

  var conflicts, key;
  var actionConflicts = {};

  this._mutuallyExclusiveGroups.forEach(function (mutexGroup) {
    mutexGroup._groupActions.forEach(function (mutexAction, i, groupActions) {
      key = actionHash(mutexAction);
      if (!$$.has(actionConflicts, key)) {
        actionConflicts[key] = [];
      }
      conflicts = actionConflicts[key];
      conflicts.push.apply(conflicts, groupActions.slice(0, i));
      conflicts.push.apply(conflicts, groupActions.slice(i + 1));
    });
  });

  // find all option indices, and determine the arg_string_pattern
  // which has an 'O' if there is an option at an index,
  // an 'A' if there is an argument, or a '-' if there is a '--'
  var optionStringIndices = {};

  var argStringPatternParts = [];

  argStrings.forEach(function (argString, argStringIndex) {
    if (argString === '--') {
      argStringPatternParts.push('-');
      while (argStringIndex < argStrings.length) {
        argStringPatternParts.push('A');
        argStringIndex++;
      }
    } else {
      // otherwise, add the arg to the arg strings
      // and note the index if it was an option
      var pattern;
      var optionTuple = self._parseOptional(argString);
      if (!optionTuple) {
        pattern = 'A';
      } else {
        optionStringIndices[argStringIndex] = optionTuple;
        pattern = 'O';
      }
      argStringPatternParts.push(pattern);
    }
  });
  var argStringsPattern = argStringPatternParts.join('');

  var seenActions = [];
  var seenNonDefaultActions = [];


  function takeAction(action, argumentStrings, optionString) {
    seenActions.push(action);
    var argumentValues = self._getValues(action, argumentStrings);

    // error if this argument is not allowed with other previously
    // seen arguments, assuming that actions that use the default
    // value don't really count as "present"
    if (argumentValues !== action.defaultValue) {
      seenNonDefaultActions.push(action);
      if (actionConflicts[actionHash(action)]) {
        actionConflicts[actionHash(action)].forEach(function (actionConflict) {
          if (seenNonDefaultActions.indexOf(actionConflict) >= 0) {
            throw argumentErrorHelper(
              action,
              format('Not allowed with argument "%s".', actionConflict.getName())
            );
          }
        });
      }
    }

    if (argumentValues !== c.SUPPRESS) {
      action.call(self, namespace, argumentValues, optionString);
    }
  }

  function consumeOptional(startIndex) {
    // get the optional identified at this index
    var optionTuple = optionStringIndices[startIndex];
    var action = optionTuple[0];
    var optionString = optionTuple[1];
    var explicitArg = optionTuple[2];

    // identify additional optionals in the same arg string
    // (e.g. -xyz is the same as -x -y -z if no args are required)
    var actionTuples = [];

    var args, argCount, start, stop;

    for (;;) {
      if (!action) {
        extras.push(argStrings[startIndex]);
        return startIndex + 1;
      }
      if (explicitArg) {
        argCount = self._matchArgument(action, 'A');

        // if the action is a single-dash option and takes no
        // arguments, try to parse more single-dash options out
        // of the tail of the option string
        var chars = self.prefixChars;
        if (argCount === 0 && chars.indexOf(optionString[1]) < 0) {
          actionTuples.push([ action, [], optionString ]);
          optionString = optionString[0] + explicitArg[0];
          var newExplicitArg = explicitArg.slice(1) || null;
          var optionalsMap = self._optionStringActions;

          if (Object.keys(optionalsMap).indexOf(optionString) >= 0) {
            action = optionalsMap[optionString];
            explicitArg = newExplicitArg;
          } else {
            throw argumentErrorHelper(action, sprintf('ignored explicit argument %r', explicitArg));
          }
        } else if (argCount === 1) {
          // if the action expect exactly one argument, we've
          // successfully matched the option; exit the loop
          stop = startIndex + 1;
          args = [ explicitArg ];
          actionTuples.push([ action, args, optionString ]);
          break;
        } else {
          // error if a double-dash option did not use the
          // explicit argument
          throw argumentErrorHelper(action, sprintf('ignored explicit argument %r', explicitArg));
        }
      } else {
        // if there is no explicit argument, try to match the
        // optional's string arguments with the following strings
        // if successful, exit the loop

        start = startIndex + 1;
        var selectedPatterns = argStringsPattern.substr(start);

        argCount = self._matchArgument(action, selectedPatterns);
        stop = start + argCount;


        args = argStrings.slice(start, stop);

        actionTuples.push([ action, args, optionString ]);
        break;
      }

    }

    // add the Optional to the list and return the index at which
    // the Optional's string args stopped
    if (actionTuples.length < 1) {
      throw new Error('length should be > 0');
    }
    for (var i = 0; i < actionTuples.length; i++) {
      takeAction.apply(self, actionTuples[i]);
    }
    return stop;
  }

  // the list of Positionals left to be parsed; this is modified
  // by consume_positionals()
  var positionals = self._getPositionalActions();

  function consumePositionals(startIndex) {
    // match as many Positionals as possible
    var selectedPattern = argStringsPattern.substr(startIndex);
    var argCounts = self._matchArgumentsPartial(positionals, selectedPattern);

    // slice off the appropriate arg strings for each Positional
    // and add the Positional and its args to the list
    for (var i = 0; i < positionals.length; i++) {
      var action = positionals[i];
      var argCount = argCounts[i];
      if (typeof argCount === 'undefined') {
        continue;
      }
      var args = argStrings.slice(startIndex, startIndex + argCount);

      startIndex += argCount;
      takeAction(action, args);
    }

    // slice off the Positionals that we just parsed and return the
    // index at which the Positionals' string args stopped
    positionals = positionals.slice(argCounts.length);
    return startIndex;
  }

  // consume Positionals and Optionals alternately, until we have
  // passed the last option string
  var startIndex = 0;
  var position;

  var maxOptionStringIndex = -1;

  Object.keys(optionStringIndices).forEach(function (position) {
    maxOptionStringIndex = Math.max(maxOptionStringIndex, parseInt(position, 10));
  });

  var positionalsEndIndex, nextOptionStringIndex;

  while (startIndex <= maxOptionStringIndex) {
    // consume any Positionals preceding the next option
    nextOptionStringIndex = null;
    for (position in optionStringIndices) {
      if (!optionStringIndices.hasOwnProperty(position)) { continue; }

      position = parseInt(position, 10);
      if (position >= startIndex) {
        if (nextOptionStringIndex !== null) {
          nextOptionStringIndex = Math.min(nextOptionStringIndex, position);
        } else {
          nextOptionStringIndex = position;
        }
      }
    }

    if (startIndex !== nextOptionStringIndex) {
      positionalsEndIndex = consumePositionals(startIndex);
      // only try to parse the next optional if we didn't consume
      // the option string during the positionals parsing
      if (positionalsEndIndex > startIndex) {
        startIndex = positionalsEndIndex;
        continue;
      } else {
        startIndex = positionalsEndIndex;
      }
    }

    // if we consumed all the positionals we could and we're not
    // at the index of an option string, there were extra arguments
    if (!optionStringIndices[startIndex]) {
      var strings = argStrings.slice(startIndex, nextOptionStringIndex);
      extras = extras.concat(strings);
      startIndex = nextOptionStringIndex;
    }
    // consume the next optional and any arguments for it
    startIndex = consumeOptional(startIndex);
  }

  // consume any positionals following the last Optional
  var stopIndex = consumePositionals(startIndex);

  // if we didn't consume all the argument strings, there were extras
  extras = extras.concat(argStrings.slice(stopIndex));

  // if we didn't use all the Positional objects, there were too few
  // arg strings supplied.
  if (positionals.length > 0) {
    self.error('too few arguments');
  }

  // make sure all required actions were present
  self._actions.forEach(function (action) {
    if (action.required) {
      if (seenActions.indexOf(action) < 0) {
        self.error(format('Argument "%s" is required', action.getName()));
      }
    }
  });

  // make sure all required groups have one option present
  var actionUsed = false;
  self._mutuallyExclusiveGroups.forEach(function (group) {
    if (group.required) {
      actionUsed = group._groupActions.some(function (action) {
        return seenNonDefaultActions.indexOf(action) !== -1;
      });

      // if no actions were used, report the error
      if (!actionUsed) {
        var names = [];
        group._groupActions.forEach(function (action) {
          if (action.help !== c.SUPPRESS) {
            names.push(action.getName());
          }
        });
        names = names.join(' ');
        var msg = 'one of the arguments ' + names + ' is required';
        self.error(msg);
      }
    }
  });

  // return the updated namespace and the extra arguments
  return [ namespace, extras ];
};

ArgumentParser.prototype._readArgsFromFiles = function (argStrings) {
  // expand arguments referencing files
  var self = this;
  var fs = require('fs');
  var newArgStrings = [];
  argStrings.forEach(function (argString) {
    if (self.fromfilePrefixChars.indexOf(argString[0]) < 0) {
      // for regular arguments, just add them back into the list
      newArgStrings.push(argString);
    } else {
      // replace arguments referencing files with the file content
      try {
        var argstrs = [];
        var filename = argString.slice(1);
        var content = fs.readFileSync(filename, 'utf8');
        content = content.trim().split('\n');
        content.forEach(function (argLine) {
          self.convertArgLineToArgs(argLine).forEach(function (arg) {
            argstrs.push(arg);
          });
          argstrs = self._readArgsFromFiles(argstrs);
        });
        newArgStrings.push.apply(newArgStrings, argstrs);
      } catch (error) {
        return self.error(error.message);
      }
    }
  });
  return newArgStrings;
};

ArgumentParser.prototype.convertArgLineToArgs = function (argLine) {
  return [ argLine ];
};

ArgumentParser.prototype._matchArgument = function (action, regexpArgStrings) {

  // match the pattern for this action to the arg strings
  var regexpNargs = new RegExp('^' + this._getNargsPattern(action));
  var matches = regexpArgStrings.match(regexpNargs);
  var message;

  // throw an exception if we weren't able to find a match
  if (!matches) {
    switch (action.nargs) {
      /*eslint-disable no-undefined*/
      case undefined:
      case null:
        message = 'Expected one argument.';
        break;
      case c.OPTIONAL:
        message = 'Expected at most one argument.';
        break;
      case c.ONE_OR_MORE:
        message = 'Expected at least one argument.';
        break;
      default:
        message = 'Expected %s argument(s)';
    }

    throw argumentErrorHelper(
      action,
      format(message, action.nargs)
    );
  }
  // return the number of arguments matched
  return matches[1].length;
};

ArgumentParser.prototype._matchArgumentsPartial = function (actions, regexpArgStrings) {
  // progressively shorten the actions list by slicing off the
  // final actions until we find a match
  var self = this;
  var result = [];
  var actionSlice, pattern, matches;
  var i, j;

  function getLength(string) {
    return string.length;
  }

  for (i = actions.length; i > 0; i--) {
    pattern = '';
    actionSlice = actions.slice(0, i);
    for (j = 0; j < actionSlice.length; j++) {
      pattern += self._getNargsPattern(actionSlice[j]);
    }

    pattern = new RegExp('^' + pattern);
    matches = regexpArgStrings.match(pattern);

    if (matches && matches.length > 0) {
      // need only groups
      matches = matches.splice(1);
      result = result.concat(matches.map(getLength));
      break;
    }
  }

  // return the list of arg string counts
  return result;
};

ArgumentParser.prototype._parseOptional = function (argString) {
  var action, optionString, argExplicit, optionTuples;

  // if it's an empty string, it was meant to be a positional
  if (!argString) {
    return null;
  }

  // if it doesn't start with a prefix, it was meant to be positional
  if (this.prefixChars.indexOf(argString[0]) < 0) {
    return null;
  }

  // if the option string is present in the parser, return the action
  if (this._optionStringActions[argString]) {
    return [ this._optionStringActions[argString], argString, null ];
  }

  // if it's just a single character, it was meant to be positional
  if (argString.length === 1) {
    return null;
  }

  // if the option string before the "=" is present, return the action
  if (argString.indexOf('=') >= 0) {
    optionString = argString.split('=', 1)[0];
    argExplicit = argString.slice(optionString.length + 1);

    if (this._optionStringActions[optionString]) {
      action = this._optionStringActions[optionString];
      return [ action, optionString, argExplicit ];
    }
  }

  // search through all possible prefixes of the option string
  // and all actions in the parser for possible interpretations
  optionTuples = this._getOptionTuples(argString);

  // if multiple actions match, the option string was ambiguous
  if (optionTuples.length > 1) {
    var optionStrings = optionTuples.map(function (optionTuple) {
      return optionTuple[1];
    });
    this.error(format(
          'Ambiguous option: "%s" could match %s.',
          argString, optionStrings.join(', ')
    ));
  // if exactly one action matched, this segmentation is good,
  // so return the parsed action
  } else if (optionTuples.length === 1) {
    return optionTuples[0];
  }

  // if it was not found as an option, but it looks like a negative
  // number, it was meant to be positional
  // unless there are negative-number-like options
  if (argString.match(this._regexpNegativeNumber)) {
    if (!this._hasNegativeNumberOptionals.some(Boolean)) {
      return null;
    }
  }
  // if it contains a space, it was meant to be a positional
  if (argString.search(' ') >= 0) {
    return null;
  }

  // it was meant to be an optional but there is no such option
  // in this parser (though it might be a valid option in a subparser)
  return [ null, argString, null ];
};

ArgumentParser.prototype._getOptionTuples = function (optionString) {
  var result = [];
  var chars = this.prefixChars;
  var optionPrefix;
  var argExplicit;
  var action;
  var actionOptionString;

  // option strings starting with two prefix characters are only split at
  // the '='
  if (chars.indexOf(optionString[0]) >= 0 && chars.indexOf(optionString[1]) >= 0) {
    if (optionString.indexOf('=') >= 0) {
      var optionStringSplit = optionString.split('=', 1);

      optionPrefix = optionStringSplit[0];
      argExplicit = optionStringSplit[1];
    } else {
      optionPrefix = optionString;
      argExplicit = null;
    }

    for (actionOptionString in this._optionStringActions) {
      if (actionOptionString.substr(0, optionPrefix.length) === optionPrefix) {
        action = this._optionStringActions[actionOptionString];
        result.push([ action, actionOptionString, argExplicit ]);
      }
    }

  // single character options can be concatenated with their arguments
  // but multiple character options always have to have their argument
  // separate
  } else if (chars.indexOf(optionString[0]) >= 0 && chars.indexOf(optionString[1]) < 0) {
    optionPrefix = optionString;
    argExplicit = null;
    var optionPrefixShort = optionString.substr(0, 2);
    var argExplicitShort = optionString.substr(2);

    for (actionOptionString in this._optionStringActions) {
      if (!$$.has(this._optionStringActions, actionOptionString)) continue;

      action = this._optionStringActions[actionOptionString];
      if (actionOptionString === optionPrefixShort) {
        result.push([ action, actionOptionString, argExplicitShort ]);
      } else if (actionOptionString.substr(0, optionPrefix.length) === optionPrefix) {
        result.push([ action, actionOptionString, argExplicit ]);
      }
    }

  // shouldn't ever get here
  } else {
    throw new Error(format('Unexpected option string: %s.', optionString));
  }
  // return the collected option tuples
  return result;
};

ArgumentParser.prototype._getNargsPattern = function (action) {
  // in all examples below, we have to allow for '--' args
  // which are represented as '-' in the pattern
  var regexpNargs;

  switch (action.nargs) {
    // the default (null) is assumed to be a single argument
    case undefined:
    case null:
      regexpNargs = '(-*A-*)';
      break;
    // allow zero or more arguments
    case c.OPTIONAL:
      regexpNargs = '(-*A?-*)';
      break;
    // allow zero or more arguments
    case c.ZERO_OR_MORE:
      regexpNargs = '(-*[A-]*)';
      break;
    // allow one or more arguments
    case c.ONE_OR_MORE:
      regexpNargs = '(-*A[A-]*)';
      break;
    // allow any number of options or arguments
    case c.REMAINDER:
      regexpNargs = '([-AO]*)';
      break;
    // allow one argument followed by any number of options or arguments
    case c.PARSER:
      regexpNargs = '(-*A[-AO]*)';
      break;
    // all others should be integers
    default:
      regexpNargs = '(-*' + $$.repeat('-*A', action.nargs) + '-*)';
  }

  // if this is an optional action, -- is not allowed
  if (action.isOptional()) {
    regexpNargs = regexpNargs.replace(/-\*/g, '');
    regexpNargs = regexpNargs.replace(/-/g, '');
  }

  // return the pattern
  return regexpNargs;
};

//
// Value conversion methods
//

ArgumentParser.prototype._getValues = function (action, argStrings) {
  var self = this;

  // for everything but PARSER args, strip out '--'
  if (action.nargs !== c.PARSER && action.nargs !== c.REMAINDER) {
    argStrings = argStrings.filter(function (arrayElement) {
      return arrayElement !== '--';
    });
  }

  var value, argString;

  // optional argument produces a default when not present
  if (argStrings.length === 0 && action.nargs === c.OPTIONAL) {

    value = (action.isOptional()) ? action.constant : action.defaultValue;

    if (typeof (value) === 'string') {
      value = this._getValue(action, value);
      this._checkValue(action, value);
    }

  // when nargs='*' on a positional, if there were no command-line
  // args, use the default if it is anything other than None
  } else if (argStrings.length === 0 && action.nargs === c.ZERO_OR_MORE &&
    action.optionStrings.length === 0) {

    value = (action.defaultValue || argStrings);
    this._checkValue(action, value);

  // single argument or optional argument produces a single value
  } else if (argStrings.length === 1 &&
        (!action.nargs || action.nargs === c.OPTIONAL)) {

    argString = argStrings[0];
    value = this._getValue(action, argString);
    this._checkValue(action, value);

  // REMAINDER arguments convert all values, checking none
  } else if (action.nargs === c.REMAINDER) {
    value = argStrings.map(function (v) {
      return self._getValue(action, v);
    });

  // PARSER arguments convert all values, but check only the first
  } else if (action.nargs === c.PARSER) {
    value = argStrings.map(function (v) {
      return self._getValue(action, v);
    });
    this._checkValue(action, value[0]);

  // all other types of nargs produce a list
  } else {
    value = argStrings.map(function (v) {
      return self._getValue(action, v);
    });
    value.forEach(function (v) {
      self._checkValue(action, v);
    });
  }

  // return the converted value
  return value;
};

ArgumentParser.prototype._getValue = function (action, argString) {
  var result;

  var typeFunction = this._registryGet('type', action.type, action.type);
  if (typeof typeFunction !== 'function') {
    var message = format('%s is not callable', typeFunction);
    throw argumentErrorHelper(action, message);
  }

  // convert the value to the appropriate type
  try {
    result = typeFunction(argString);

    // ArgumentTypeErrors indicate errors
    // If action.type is not a registered string, it is a function
    // Try to deduce its name for inclusion in the error message
    // Failing that, include the error message it raised.
  } catch (e) {
    var name = null;
    if (typeof action.type === 'string') {
      name = action.type;
    } else {
      name = action.type.name || action.type.displayName || '<function>';
    }
    var msg = format('Invalid %s value: %s', name, argString);
    if (name === '<function>') { msg += '\n' + e.message; }
    throw argumentErrorHelper(action, msg);
  }
  // return the converted value
  return result;
};

ArgumentParser.prototype._checkValue = function (action, value) {
  // converted value must be one of the choices (if specified)
  var choices = action.choices;
  if (choices) {
    // choise for argument can by array or string
    if ((typeof choices === 'string' || Array.isArray(choices)) &&
        choices.indexOf(value) !== -1) {
      return;
    }
    // choise for subparsers can by only hash
    if (typeof choices === 'object' && !Array.isArray(choices) && choices[value]) {
      return;
    }

    if (typeof choices === 'string') {
      choices = choices.split('').join(', ');
    } else if (Array.isArray(choices)) {
      choices =  choices.join(', ');
    } else {
      choices =  Object.keys(choices).join(', ');
    }
    var message = format('Invalid choice: %s (choose from [%s])', value, choices);
    throw argumentErrorHelper(action, message);
  }
};

//
// Help formatting methods
//

/**
 * ArgumentParser#formatUsage -> string
 *
 * Return usage string
 *
 * See also [original guide][1]
 *
 * [1]:http://docs.python.org/dev/library/argparse.html#printing-help
 **/
ArgumentParser.prototype.formatUsage = function () {
  var formatter = this._getFormatter();
  formatter.addUsage(this.usage, this._actions, this._mutuallyExclusiveGroups);
  return formatter.formatHelp();
};

/**
 * ArgumentParser#formatHelp -> string
 *
 * Return help
 *
 * See also [original guide][1]
 *
 * [1]:http://docs.python.org/dev/library/argparse.html#printing-help
 **/
ArgumentParser.prototype.formatHelp = function () {
  var formatter = this._getFormatter();

  // usage
  formatter.addUsage(this.usage, this._actions, this._mutuallyExclusiveGroups);

  // description
  formatter.addText(this.description);

  // positionals, optionals and user-defined groups
  this._actionGroups.forEach(function (actionGroup) {
    formatter.startSection(actionGroup.title);
    formatter.addText(actionGroup.description);
    formatter.addArguments(actionGroup._groupActions);
    formatter.endSection();
  });

  // epilog
  formatter.addText(this.epilog);

  // determine help from format above
  return formatter.formatHelp();
};

ArgumentParser.prototype._getFormatter = function () {
  var FormatterClass = this.formatterClass;
  var formatter = new FormatterClass({ prog: this.prog });
  return formatter;
};

//
//  Print functions
//

/**
 * ArgumentParser#printUsage() -> Void
 *
 * Print usage
 *
 * See also [original guide][1]
 *
 * [1]:http://docs.python.org/dev/library/argparse.html#printing-help
 **/
ArgumentParser.prototype.printUsage = function () {
  this._printMessage(this.formatUsage());
};

/**
 * ArgumentParser#printHelp() -> Void
 *
 * Print help
 *
 * See also [original guide][1]
 *
 * [1]:http://docs.python.org/dev/library/argparse.html#printing-help
 **/
ArgumentParser.prototype.printHelp = function () {
  this._printMessage(this.formatHelp());
};

ArgumentParser.prototype._printMessage = function (message, stream) {
  if (!stream) {
    stream = process.stdout;
  }
  if (message) {
    stream.write('' + message);
  }
};

//
//  Exit functions
//

/**
 * ArgumentParser#exit(status=0, message) -> Void
 * - status (int): exit status
 * - message (string): message
 *
 * Print message in stderr/stdout and exit program
 **/
ArgumentParser.prototype.exit = function (status, message) {
  if (message) {
    if (status === 0) {
      this._printMessage(message);
    } else {
      this._printMessage(message, process.stderr);
    }
  }

  process.exit(status);
};

/**
 * ArgumentParser#error(message) -> Void
 * - err (Error|string): message
 *
 * Error method Prints a usage message incorporating the message to stderr and
 * exits. If you override this in a subclass,
 * it should not return -- it should
 * either exit or throw an exception.
 *
 **/
ArgumentParser.prototype.error = function (err) {
  var message;
  if (err instanceof Error) {
    if (this.debug === true) {
      throw err;
    }
    message = err.message;
  } else {
    message = err;
  }
  var msg = format('%s: error: %s', this.prog, message) + c.EOL;

  if (this.debug === true) {
    throw new Error(msg);
  }

  this.printUsage(process.stderr);

  return this.exit(2, msg);
};

module.exports = ArgumentParser;
