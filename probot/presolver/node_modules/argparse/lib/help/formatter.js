/**
 * class HelpFormatter
 *
 * Formatter for generating usage messages and argument help strings. Only the
 * name of this class is considered a public API. All the methods provided by
 * the class are considered an implementation detail.
 *
 * Do not call in your code, use this class only for inherits your own forvatter
 *
 * ToDo add [additonal formatters][1]
 *
 * [1]:http://docs.python.org/dev/library/argparse.html#formatter-class
 **/
'use strict';

var sprintf = require('sprintf-js').sprintf;

// Constants
var c = require('../const');

var $$ = require('../utils');


/*:nodoc:* internal
 * new Support(parent, heding)
 * - parent (object): parent section
 * - heading (string): header string
 *
 **/
function Section(parent, heading) {
  this._parent = parent;
  this._heading = heading;
  this._items = [];
}

/*:nodoc:* internal
 * Section#addItem(callback) -> Void
 * - callback (array): tuple with function and args
 *
 * Add function for single element
 **/
Section.prototype.addItem = function (callback) {
  this._items.push(callback);
};

/*:nodoc:* internal
 * Section#formatHelp(formatter) -> string
 * - formatter (HelpFormatter): current formatter
 *
 * Form help section string
 *
 **/
Section.prototype.formatHelp = function (formatter) {
  var itemHelp, heading;

  // format the indented section
  if (this._parent) {
    formatter._indent();
  }

  itemHelp = this._items.map(function (item) {
    var obj, func, args;

    obj = formatter;
    func = item[0];
    args = item[1];
    return func.apply(obj, args);
  });
  itemHelp = formatter._joinParts(itemHelp);

  if (this._parent) {
    formatter._dedent();
  }

  // return nothing if the section was empty
  if (!itemHelp) {
    return '';
  }

  // add the heading if the section was non-empty
  heading = '';
  if (this._heading && this._heading !== c.SUPPRESS) {
    var currentIndent = formatter.currentIndent;
    heading = $$.repeat(' ', currentIndent) + this._heading + ':' + c.EOL;
  }

  // join the section-initialize newline, the heading and the help
  return formatter._joinParts([ c.EOL, heading, itemHelp, c.EOL ]);
};

/**
 * new HelpFormatter(options)
 *
 * #### Options:
 * - `prog`: program name
 * - `indentIncriment`: indent step, default value 2
 * - `maxHelpPosition`: max help position, default value = 24
 * - `width`: line width
 *
 **/
var HelpFormatter = module.exports = function HelpFormatter(options) {
  options = options || {};

  this._prog = options.prog;

  this._maxHelpPosition = options.maxHelpPosition || 24;
  this._width = (options.width || ((process.env.COLUMNS || 80) - 2));

  this._currentIndent = 0;
  this._indentIncriment = options.indentIncriment || 2;
  this._level = 0;
  this._actionMaxLength = 0;

  this._rootSection = new Section(null);
  this._currentSection = this._rootSection;

  this._whitespaceMatcher = new RegExp('\\s+', 'g');
  this._longBreakMatcher = new RegExp(c.EOL + c.EOL + c.EOL + '+', 'g');
};

HelpFormatter.prototype._indent = function () {
  this._currentIndent += this._indentIncriment;
  this._level += 1;
};

HelpFormatter.prototype._dedent = function () {
  this._currentIndent -= this._indentIncriment;
  this._level -= 1;
  if (this._currentIndent < 0) {
    throw new Error('Indent decreased below 0.');
  }
};

HelpFormatter.prototype._addItem = function (func, args) {
  this._currentSection.addItem([ func, args ]);
};

//
// Message building methods
//

/**
 * HelpFormatter#startSection(heading) -> Void
 * - heading (string): header string
 *
 * Start new help section
 *
 * See alse [code example][1]
 *
 * ##### Example
 *
 *      formatter.startSection(actionGroup.title);
 *      formatter.addText(actionGroup.description);
 *      formatter.addArguments(actionGroup._groupActions);
 *      formatter.endSection();
 *
 **/
HelpFormatter.prototype.startSection = function (heading) {
  this._indent();
  var section = new Section(this._currentSection, heading);
  var func = section.formatHelp.bind(section);
  this._addItem(func, [ this ]);
  this._currentSection = section;
};

/**
 * HelpFormatter#endSection -> Void
 *
 * End help section
 *
 * ##### Example
 *
 *      formatter.startSection(actionGroup.title);
 *      formatter.addText(actionGroup.description);
 *      formatter.addArguments(actionGroup._groupActions);
 *      formatter.endSection();
 **/
HelpFormatter.prototype.endSection = function () {
  this._currentSection = this._currentSection._parent;
  this._dedent();
};

/**
 * HelpFormatter#addText(text) -> Void
 * - text (string): plain text
 *
 * Add plain text into current section
 *
 * ##### Example
 *
 *      formatter.startSection(actionGroup.title);
 *      formatter.addText(actionGroup.description);
 *      formatter.addArguments(actionGroup._groupActions);
 *      formatter.endSection();
 *
 **/
HelpFormatter.prototype.addText = function (text) {
  if (text && text !== c.SUPPRESS) {
    this._addItem(this._formatText, [ text ]);
  }
};

/**
 * HelpFormatter#addUsage(usage, actions, groups, prefix) -> Void
 * - usage (string): usage text
 * - actions (array): actions list
 * - groups (array): groups list
 * - prefix (string): usage prefix
 *
 * Add usage data into current section
 *
 * ##### Example
 *
 *      formatter.addUsage(this.usage, this._actions, []);
 *      return formatter.formatHelp();
 *
 **/
HelpFormatter.prototype.addUsage = function (usage, actions, groups, prefix) {
  if (usage !== c.SUPPRESS) {
    this._addItem(this._formatUsage, [ usage, actions, groups, prefix ]);
  }
};

/**
 * HelpFormatter#addArgument(action) -> Void
 * - action (object): action
 *
 * Add argument into current section
 *
 * Single variant of [[HelpFormatter#addArguments]]
 **/
HelpFormatter.prototype.addArgument = function (action) {
  if (action.help !== c.SUPPRESS) {
    var self = this;

    // find all invocations
    var invocations = [ this._formatActionInvocation(action) ];
    var invocationLength = invocations[0].length;

    var actionLength;

    if (action._getSubactions) {
      this._indent();
      action._getSubactions().forEach(function (subaction) {

        var invocationNew = self._formatActionInvocation(subaction);
        invocations.push(invocationNew);
        invocationLength = Math.max(invocationLength, invocationNew.length);

      });
      this._dedent();
    }

    // update the maximum item length
    actionLength = invocationLength + this._currentIndent;
    this._actionMaxLength = Math.max(this._actionMaxLength, actionLength);

    // add the item to the list
    this._addItem(this._formatAction, [ action ]);
  }
};

/**
 * HelpFormatter#addArguments(actions) -> Void
 * - actions (array): actions list
 *
 * Mass add arguments into current section
 *
 * ##### Example
 *
 *      formatter.startSection(actionGroup.title);
 *      formatter.addText(actionGroup.description);
 *      formatter.addArguments(actionGroup._groupActions);
 *      formatter.endSection();
 *
 **/
HelpFormatter.prototype.addArguments = function (actions) {
  var self = this;
  actions.forEach(function (action) {
    self.addArgument(action);
  });
};

//
// Help-formatting methods
//

/**
 * HelpFormatter#formatHelp -> string
 *
 * Format help
 *
 * ##### Example
 *
 *      formatter.addText(this.epilog);
 *      return formatter.formatHelp();
 *
 **/
HelpFormatter.prototype.formatHelp = function () {
  var help = this._rootSection.formatHelp(this);
  if (help) {
    help = help.replace(this._longBreakMatcher, c.EOL + c.EOL);
    help = $$.trimChars(help, c.EOL) + c.EOL;
  }
  return help;
};

HelpFormatter.prototype._joinParts = function (partStrings) {
  return partStrings.filter(function (part) {
    return (part && part !== c.SUPPRESS);
  }).join('');
};

HelpFormatter.prototype._formatUsage = function (usage, actions, groups, prefix) {
  if (!prefix && typeof prefix !== 'string') {
    prefix = 'usage: ';
  }

  actions = actions || [];
  groups = groups || [];


  // if usage is specified, use that
  if (usage) {
    usage = sprintf(usage, { prog: this._prog });

    // if no optionals or positionals are available, usage is just prog
  } else if (!usage && actions.length === 0) {
    usage = this._prog;

    // if optionals and positionals are available, calculate usage
  } else if (!usage) {
    var prog = this._prog;
    var optionals = [];
    var positionals = [];
    var actionUsage;
    var textWidth;

    // split optionals from positionals
    actions.forEach(function (action) {
      if (action.isOptional()) {
        optionals.push(action);
      } else {
        positionals.push(action);
      }
    });

    // build full usage string
    actionUsage = this._formatActionsUsage([].concat(optionals, positionals), groups);
    usage = [ prog, actionUsage ].join(' ');

    // wrap the usage parts if it's too long
    textWidth = this._width - this._currentIndent;
    if ((prefix.length + usage.length) > textWidth) {

      // break usage into wrappable parts
      var regexpPart = new RegExp('\\(.*?\\)+|\\[.*?\\]+|\\S+', 'g');
      var optionalUsage = this._formatActionsUsage(optionals, groups);
      var positionalUsage = this._formatActionsUsage(positionals, groups);


      var optionalParts = optionalUsage.match(regexpPart);
      var positionalParts = positionalUsage.match(regexpPart) || [];

      if (optionalParts.join(' ') !== optionalUsage) {
        throw new Error('assert "optionalParts.join(\' \') === optionalUsage"');
      }
      if (positionalParts.join(' ') !== positionalUsage) {
        throw new Error('assert "positionalParts.join(\' \') === positionalUsage"');
      }

      // helper for wrapping lines
      /*eslint-disable func-style*/ // node 0.10 compat
      var _getLines = function (parts, indent, prefix) {
        var lines = [];
        var line = [];

        var lineLength = prefix ? prefix.length - 1 : indent.length - 1;

        parts.forEach(function (part) {
          if (lineLength + 1 + part.length > textWidth) {
            lines.push(indent + line.join(' '));
            line = [];
            lineLength = indent.length - 1;
          }
          line.push(part);
          lineLength += part.length + 1;
        });

        if (line) {
          lines.push(indent + line.join(' '));
        }
        if (prefix) {
          lines[0] = lines[0].substr(indent.length);
        }
        return lines;
      };

      var lines, indent, parts;
      // if prog is short, follow it with optionals or positionals
      if (prefix.length + prog.length <= 0.75 * textWidth) {
        indent = $$.repeat(' ', (prefix.length + prog.length + 1));
        if (optionalParts) {
          lines = [].concat(
            _getLines([ prog ].concat(optionalParts), indent, prefix),
            _getLines(positionalParts, indent)
          );
        } else if (positionalParts) {
          lines = _getLines([ prog ].concat(positionalParts), indent, prefix);
        } else {
          lines = [ prog ];
        }

        // if prog is long, put it on its own line
      } else {
        indent = $$.repeat(' ', prefix.length);
        parts = optionalParts.concat(positionalParts);
        lines = _getLines(parts, indent);
        if (lines.length > 1) {
          lines = [].concat(
            _getLines(optionalParts, indent),
            _getLines(positionalParts, indent)
          );
        }
        lines = [ prog ].concat(lines);
      }
      // join lines into usage
      usage = lines.join(c.EOL);
    }
  }

  // prefix with 'usage:'
  return prefix + usage + c.EOL + c.EOL;
};

HelpFormatter.prototype._formatActionsUsage = function (actions, groups) {
  // find group indices and identify actions in groups
  var groupActions = [];
  var inserts = [];
  var self = this;

  groups.forEach(function (group) {
    var end;
    var i;

    var start = actions.indexOf(group._groupActions[0]);
    if (start >= 0) {
      end = start + group._groupActions.length;

      //if (actions.slice(start, end) === group._groupActions) {
      if ($$.arrayEqual(actions.slice(start, end), group._groupActions)) {
        group._groupActions.forEach(function (action) {
          groupActions.push(action);
        });

        if (!group.required) {
          if (inserts[start]) {
            inserts[start] += ' [';
          } else {
            inserts[start] = '[';
          }
          inserts[end] = ']';
        } else {
          if (inserts[start]) {
            inserts[start] += ' (';
          } else {
            inserts[start] = '(';
          }
          inserts[end] = ')';
        }
        for (i = start + 1; i < end; i += 1) {
          inserts[i] = '|';
        }
      }
    }
  });

  // collect all actions format strings
  var parts = [];

  actions.forEach(function (action, actionIndex) {
    var part;
    var optionString;
    var argsDefault;
    var argsString;

    // suppressed arguments are marked with None
    // remove | separators for suppressed arguments
    if (action.help === c.SUPPRESS) {
      parts.push(null);
      if (inserts[actionIndex] === '|') {
        inserts.splice(actionIndex, actionIndex);
      } else if (inserts[actionIndex + 1] === '|') {
        inserts.splice(actionIndex + 1, actionIndex + 1);
      }

      // produce all arg strings
    } else if (!action.isOptional()) {
      part = self._formatArgs(action, action.dest);

      // if it's in a group, strip the outer []
      if (groupActions.indexOf(action) >= 0) {
        if (part[0] === '[' && part[part.length - 1] === ']') {
          part = part.slice(1, -1);
        }
      }
      // add the action string to the list
      parts.push(part);

    // produce the first way to invoke the option in brackets
    } else {
      optionString = action.optionStrings[0];

      // if the Optional doesn't take a value, format is: -s or --long
      if (action.nargs === 0) {
        part = '' + optionString;

      // if the Optional takes a value, format is: -s ARGS or --long ARGS
      } else {
        argsDefault = action.dest.toUpperCase();
        argsString = self._formatArgs(action, argsDefault);
        part = optionString + ' ' + argsString;
      }
      // make it look optional if it's not required or in a group
      if (!action.required && groupActions.indexOf(action) < 0) {
        part = '[' + part + ']';
      }
      // add the action string to the list
      parts.push(part);
    }
  });

  // insert things at the necessary indices
  for (var i = inserts.length - 1; i >= 0; --i) {
    if (inserts[i] !== null) {
      parts.splice(i, 0, inserts[i]);
    }
  }

  // join all the action items with spaces
  var text = parts.filter(function (part) {
    return !!part;
  }).join(' ');

  // clean up separators for mutually exclusive groups
  text = text.replace(/([\[(]) /g, '$1'); // remove spaces
  text = text.replace(/ ([\])])/g, '$1');
  text = text.replace(/\[ *\]/g, ''); // remove empty groups
  text = text.replace(/\( *\)/g, '');
  text = text.replace(/\(([^|]*)\)/g, '$1'); // remove () from single action groups

  text = text.trim();

  // return the text
  return text;
};

HelpFormatter.prototype._formatText = function (text) {
  text = sprintf(text, { prog: this._prog });
  var textWidth = this._width - this._currentIndent;
  var indentIncriment = $$.repeat(' ', this._currentIndent);
  return this._fillText(text, textWidth, indentIncriment) + c.EOL + c.EOL;
};

HelpFormatter.prototype._formatAction = function (action) {
  var self = this;

  var helpText;
  var helpLines;
  var parts;
  var indentFirst;

  // determine the required width and the entry label
  var helpPosition = Math.min(this._actionMaxLength + 2, this._maxHelpPosition);
  var helpWidth = this._width - helpPosition;
  var actionWidth = helpPosition - this._currentIndent - 2;
  var actionHeader = this._formatActionInvocation(action);

  // no help; start on same line and add a final newline
  if (!action.help) {
    actionHeader = $$.repeat(' ', this._currentIndent) + actionHeader + c.EOL;

  // short action name; start on the same line and pad two spaces
  } else if (actionHeader.length <= actionWidth) {
    actionHeader = $$.repeat(' ', this._currentIndent) +
        actionHeader +
        '  ' +
        $$.repeat(' ', actionWidth - actionHeader.length);
    indentFirst = 0;

  // long action name; start on the next line
  } else {
    actionHeader = $$.repeat(' ', this._currentIndent) + actionHeader + c.EOL;
    indentFirst = helpPosition;
  }

  // collect the pieces of the action help
  parts = [ actionHeader ];

  // if there was help for the action, add lines of help text
  if (action.help) {
    helpText = this._expandHelp(action);
    helpLines = this._splitLines(helpText, helpWidth);
    parts.push($$.repeat(' ', indentFirst) + helpLines[0] + c.EOL);
    helpLines.slice(1).forEach(function (line) {
      parts.push($$.repeat(' ', helpPosition) + line + c.EOL);
    });

  // or add a newline if the description doesn't end with one
  } else if (actionHeader.charAt(actionHeader.length - 1) !== c.EOL) {
    parts.push(c.EOL);
  }
  // if there are any sub-actions, add their help as well
  if (action._getSubactions) {
    this._indent();
    action._getSubactions().forEach(function (subaction) {
      parts.push(self._formatAction(subaction));
    });
    this._dedent();
  }
  // return a single string
  return this._joinParts(parts);
};

HelpFormatter.prototype._formatActionInvocation = function (action) {
  if (!action.isOptional()) {
    var format_func = this._metavarFormatter(action, action.dest);
    var metavars = format_func(1);
    return metavars[0];
  }

  var parts = [];
  var argsDefault;
  var argsString;

  // if the Optional doesn't take a value, format is: -s, --long
  if (action.nargs === 0) {
    parts = parts.concat(action.optionStrings);

  // if the Optional takes a value, format is: -s ARGS, --long ARGS
  } else {
    argsDefault = action.dest.toUpperCase();
    argsString = this._formatArgs(action, argsDefault);
    action.optionStrings.forEach(function (optionString) {
      parts.push(optionString + ' ' + argsString);
    });
  }
  return parts.join(', ');
};

HelpFormatter.prototype._metavarFormatter = function (action, metavarDefault) {
  var result;

  if (action.metavar || action.metavar === '') {
    result = action.metavar;
  } else if (action.choices) {
    var choices = action.choices;

    if (typeof choices === 'string') {
      choices = choices.split('').join(', ');
    } else if (Array.isArray(choices)) {
      choices = choices.join(',');
    } else {
      choices = Object.keys(choices).join(',');
    }
    result = '{' + choices + '}';
  } else {
    result = metavarDefault;
  }

  return function (size) {
    if (Array.isArray(result)) {
      return result;
    }

    var metavars = [];
    for (var i = 0; i < size; i += 1) {
      metavars.push(result);
    }
    return metavars;
  };
};

HelpFormatter.prototype._formatArgs = function (action, metavarDefault) {
  var result;
  var metavars;

  var buildMetavar = this._metavarFormatter(action, metavarDefault);

  switch (action.nargs) {
    /*eslint-disable no-undefined*/
    case undefined:
    case null:
      metavars = buildMetavar(1);
      result = '' + metavars[0];
      break;
    case c.OPTIONAL:
      metavars = buildMetavar(1);
      result = '[' + metavars[0] + ']';
      break;
    case c.ZERO_OR_MORE:
      metavars = buildMetavar(2);
      result = '[' + metavars[0] + ' [' + metavars[1] + ' ...]]';
      break;
    case c.ONE_OR_MORE:
      metavars = buildMetavar(2);
      result = '' + metavars[0] + ' [' + metavars[1] + ' ...]';
      break;
    case c.REMAINDER:
      result = '...';
      break;
    case c.PARSER:
      metavars = buildMetavar(1);
      result = metavars[0] + ' ...';
      break;
    default:
      metavars = buildMetavar(action.nargs);
      result = metavars.join(' ');
  }
  return result;
};

HelpFormatter.prototype._expandHelp = function (action) {
  var params = { prog: this._prog };

  Object.keys(action).forEach(function (actionProperty) {
    var actionValue = action[actionProperty];

    if (actionValue !== c.SUPPRESS) {
      params[actionProperty] = actionValue;
    }
  });

  if (params.choices) {
    if (typeof params.choices === 'string') {
      params.choices = params.choices.split('').join(', ');
    } else if (Array.isArray(params.choices)) {
      params.choices = params.choices.join(', ');
    } else {
      params.choices = Object.keys(params.choices).join(', ');
    }
  }

  return sprintf(this._getHelpString(action), params);
};

HelpFormatter.prototype._splitLines = function (text, width) {
  var lines = [];
  var delimiters = [ ' ', '.', ',', '!', '?' ];
  var re = new RegExp('[' + delimiters.join('') + '][^' + delimiters.join('') + ']*$');

  text = text.replace(/[\n\|\t]/g, ' ');

  text = text.trim();
  text = text.replace(this._whitespaceMatcher, ' ');

  // Wraps the single paragraph in text (a string) so every line
  // is at most width characters long.
  text.split(c.EOL).forEach(function (line) {
    if (width >= line.length) {
      lines.push(line);
      return;
    }

    var wrapStart = 0;
    var wrapEnd = width;
    var delimiterIndex = 0;
    while (wrapEnd <= line.length) {
      if (wrapEnd !== line.length && delimiters.indexOf(line[wrapEnd] < -1)) {
        delimiterIndex = (re.exec(line.substring(wrapStart, wrapEnd)) || {}).index;
        wrapEnd = wrapStart + delimiterIndex + 1;
      }
      lines.push(line.substring(wrapStart, wrapEnd));
      wrapStart = wrapEnd;
      wrapEnd += width;
    }
    if (wrapStart < line.length) {
      lines.push(line.substring(wrapStart, wrapEnd));
    }
  });

  return lines;
};

HelpFormatter.prototype._fillText = function (text, width, indent) {
  var lines = this._splitLines(text, width);
  lines = lines.map(function (line) {
    return indent + line;
  });
  return lines.join(c.EOL);
};

HelpFormatter.prototype._getHelpString = function (action) {
  return action.help;
};
