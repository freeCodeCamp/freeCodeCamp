/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */
// flowlint ambiguous-object-type:error
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _createForOfIteratorHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/createForOfIteratorHelper"));

var _require = require('graphql'),
    GraphQLError = _require.GraphQLError;

/**
 * Creates an error describing invalid application code (GraphQL/Schema)
 * that must be fixed by the end developer. This should only be used
 * for local errors that don't affect processing of other user code.
 */
function createUserError(message, locations, nodes) {
  var messageWithLocations = message;

  if (locations != null) {
    var printedLocations = printLocations(locations);
    messageWithLocations = printedLocations.length === 0 ? message : [message].concat(printedLocations).join('\n\n') + '\n';
  }

  return new GraphQLError(messageWithLocations, nodes !== null && nodes !== void 0 ? nodes : []);
}
/**
 * Similar to createUserError but for errors that are *not* recoverable:
 * the compiler should not continue to process other inputs because their
 * validity can't be determined.
 */


function createNonRecoverableUserError(message, locations, nodes) {
  var messageWithLocations = message;

  if (locations != null) {
    var printedLocations = printLocations(locations);
    messageWithLocations = printedLocations.length === 0 ? message : [message].concat(printedLocations).join('\n\n') + '\n';
  }

  var error = new GraphQLError(messageWithLocations, nodes !== null && nodes !== void 0 ? nodes : []);
  return new Error(error.message);
}
/**
 * Creates an error describing a problem with the compiler itself - such
 * as a broken invariant - that must be fixed within the compiler.
 */


function createCompilerError(message, locations, nodes) {
  var messageWithLocations = message;

  if (locations != null) {
    var printedLocations = printLocations(locations);
    messageWithLocations = printedLocations.length === 0 ? message : [message].concat(printedLocations).join('\n\n') + '\n';
  }

  var error = new GraphQLError("Internal Error: ".concat(messageWithLocations), nodes !== null && nodes !== void 0 ? nodes : []);
  return new Error(error.message);
}
/**
 * Iterates over the elements of some iterable value, calling the
 * supplied callback for each item with a guard for user errors.
 *
 * Non-user errors abort the iteration and are instantly rethrown.
 * User errors are collected and rethrown at the end, if multiple user errors
 * occur, a combined error is thrown.
 */


function eachWithCombinedError(iterable, fn) {
  var errors = [];

  var _iterator = (0, _createForOfIteratorHelper2["default"])(iterable),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;

      try {
        fn(item);
      } catch (error) {
        if (error instanceof GraphQLError) {
          errors.push(error);
        } else {
          throw error;
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  if (errors.length > 0) {
    if (errors.length === 1) {
      throw createUserError(String(errors[0]).split('\n').map(function (line, index) {
        return index === 0 ? "- ".concat(line) : "  ".concat(line);
      }).join('\n'));
    }

    throw createUserError("Encountered ".concat(errors.length, " errors:\n") + errors.map(function (error) {
      return String(error).split('\n').map(function (line, index) {
        return index === 0 ? "- ".concat(line) : "  ".concat(line);
      }).join('\n');
    }).join('\n'));
  }
}

function printLocations(locations) {
  var printedLocations = [];

  var _iterator2 = (0, _createForOfIteratorHelper2["default"])(locations),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var location = _step2.value;
      var sourceLocation = location;

      while (sourceLocation.kind === 'Derived') {
        sourceLocation = sourceLocation.source;
      }

      switch (sourceLocation.kind) {
        case 'Source':
          {
            // source location
            var prefix = sourceLocation === location ? 'Source: ' : 'Source (derived): ';
            printedLocations.push(prefix + highlightSourceAtLocation(sourceLocation.source, getLocation(sourceLocation.source, sourceLocation.start)));
            break;
          }

        case 'Generated':
          {
            printedLocations.push('Source: (generated)');
            break;
          }

        case 'Unknown':
          {
            printedLocations.push('Source: (unknown)');
            break;
          }

        default:
          {
            sourceLocation;
            throw createCompilerError("CompilerError: cannot print location '".concat(String(sourceLocation), "'."));
          }
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return printedLocations;
}
/**
 * Render a helpful description of the location of the error in the GraphQL
 * Source document.
 */


function highlightSourceAtLocation(source, location) {
  var firstLineColumnOffset = source.locationOffset.column - 1;
  var body = whitespace(firstLineColumnOffset) + source.body;
  var lineIndex = location.line - 1;
  var lineOffset = source.locationOffset.line - 1;
  var lineNum = location.line + lineOffset;
  var columnOffset = location.line === 1 ? firstLineColumnOffset : 0;
  var columnNum = location.column + columnOffset;
  var lines = body.split(/\r\n|[\n\r]/g);
  return "".concat(source.name, " (").concat(lineNum, ":").concat(columnNum, ")\n") + printPrefixedLines([// Lines specified like this: ["prefix", "string"],
  ["".concat(lineNum - 1, ": "), lines[lineIndex - 1]], ["".concat(lineNum, ": "), lines[lineIndex]], ['', whitespace(columnNum - 1) + '^'], ["".concat(lineNum + 1, ": "), lines[lineIndex + 1]]]);
}

function printPrefixedLines(lines) {
  var existingLines = lines.filter(function (_ref) {
    var _ = _ref[0],
        line = _ref[1];
    return line !== undefined;
  });
  var padLen = 0;

  var _iterator3 = (0, _createForOfIteratorHelper2["default"])(existingLines),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var _step3$value = _step3.value,
          prefix = _step3$value[0];
      padLen = Math.max(padLen, prefix.length);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  return existingLines.map(function (_ref2) {
    var prefix = _ref2[0],
        line = _ref2[1];
    return lpad(padLen, prefix) + line;
  }).join('\n');
}

function whitespace(len) {
  return Array(len + 1).join(' ');
}

function lpad(len, str) {
  return whitespace(len - str.length) + str;
}

function getLocation(source, position) {
  var lineRegexp = /\r\n|[\n\r]/g;
  var line = 1;
  var column = position + 1;
  var match;

  while ((match = lineRegexp.exec(source.body)) && match.index < position) {
    line += 1;
    column = position + 1 - (match.index + match[0].length);
  }

  return {
    line: line,
    column: column
  };
}

module.exports = {
  createCompilerError: createCompilerError,
  createNonRecoverableUserError: createNonRecoverableUserError,
  createUserError: createUserError,
  eachWithCombinedError: eachWithCombinedError
};