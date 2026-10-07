'use strict';var _slicedToArray = function () {function sliceIterator(arr, i) {var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"]) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}return function (arr, i) {if (Array.isArray(arr)) {return arr;} else if (Symbol.iterator in Object(arr)) {return sliceIterator(arr, i);} else {throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();var _contextCompat = require('eslint-module-utils/contextCompat');
var _resolve = require('eslint-module-utils/resolve');var _resolve2 = _interopRequireDefault(_resolve);
var _semver = require('semver');var _semver2 = _interopRequireDefault(_semver);
var _arrayPrototype = require('array.prototype.flatmap');var _arrayPrototype2 = _interopRequireDefault(_arrayPrototype);

var _docsUrl = require('../docsUrl');var _docsUrl2 = _interopRequireDefault(_docsUrl);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}function _toArray(arr) {return Array.isArray(arr) ? arr : Array.from(arr);}

var typescriptPkg = void 0;
try {
  typescriptPkg = require('typescript/package.json'); // eslint-disable-line import/no-extraneous-dependencies
} catch (e) {/**/}

function isPunctuator(node, value) {
  return node.type === 'Punctuator' && node.value === value;
}

// Get the name of the default import of `node`, if any.
function getDefaultImportName(node) {
  var defaultSpecifier = node.specifiers.
  find(function (specifier) {return specifier.type === 'ImportDefaultSpecifier';});
  return defaultSpecifier != null ? defaultSpecifier.local.name : undefined;
}

// Checks whether `node` has a namespace import.
function hasNamespace(node) {
  var specifiers = node.specifiers.
  filter(function (specifier) {return specifier.type === 'ImportNamespaceSpecifier';});
  return specifiers.length > 0;
}

// Checks whether `node` has any non-default specifiers.
function hasSpecifiers(node) {
  var specifiers = node.specifiers.
  filter(function (specifier) {return specifier.type === 'ImportSpecifier';});
  return specifiers.length > 0;
}

// Checks whether `node` has a comment (that ends) on the previous line or on
// the same line as `node` (starts).
function hasCommentBefore(node, sourceCode) {
  return sourceCode.getCommentsBefore(node).
  some(function (comment) {return comment.loc.end.line >= node.loc.start.line - 1;});
}

// Checks whether `node` has a comment (that starts) on the same line as `node`
// (ends).
function hasCommentAfter(node, sourceCode) {
  return sourceCode.getCommentsAfter(node).
  some(function (comment) {return comment.loc.start.line === node.loc.end.line;});
}

// Checks whether `node` has any comments _inside,_ except inside the `{...}`
// part (if any).
function hasCommentInsideNonSpecifiers(node, sourceCode) {
  var tokens = sourceCode.getTokens(node);
  var openBraceIndex = tokens.findIndex(function (token) {return isPunctuator(token, '{');});
  var closeBraceIndex = tokens.findIndex(function (token) {return isPunctuator(token, '}');});
  // Slice away the first token, since we're no looking for comments _before_
  // `node` (only inside). If there's a `{...}` part, look for comments before
  // the `{`, but not before the `}` (hence the `+1`s).
  var someTokens = openBraceIndex >= 0 && closeBraceIndex >= 0 ?
  tokens.slice(1, openBraceIndex + 1).concat(tokens.slice(closeBraceIndex + 1)) :
  tokens.slice(1);
  return someTokens.some(function (token) {return sourceCode.getCommentsBefore(token).length > 0;});
}

// It's not obvious what the user wants to do with comments associated with
// duplicate imports, so skip imports with comments when autofixing.
function hasProblematicComments(node, sourceCode) {
  return (
    hasCommentBefore(node, sourceCode) ||
    hasCommentAfter(node, sourceCode) ||
    hasCommentInsideNonSpecifiers(node, sourceCode));

}

/** @type {(first: import('estree').ImportDeclaration, rest: import('estree').ImportDeclaration[], sourceCode: import('eslint').SourceCode.SourceCode, context: import('eslint').Rule.RuleContext) => import('eslint').Rule.ReportFixer | undefined} */
function getFix(first, rest, sourceCode, context) {
  // Sorry ESLint <= 3 users, no autofix for you. Autofixing duplicate imports
  // requires multiple `fixer.whatever()` calls in the `fix`: We both need to
  // update the first one, and remove the rest. Support for multiple
  // `fixer.whatever()` in a single `fix` was added in ESLint 4.1.
  // `sourceCode.getCommentsBefore` was added in 4.0, so that's an easy thing to
  // check for.
  if (typeof sourceCode.getCommentsBefore !== 'function') {
    return undefined;
  }

  // Adjusting the first import might make it multiline, which could break
  // `eslint-disable-next-line` comments and similar, so bail if the first
  // import has comments. Also, if the first import is `import * as ns from
  // './foo'` there's nothing we can do.
  if (hasProblematicComments(first, sourceCode) || hasNamespace(first)) {
    return undefined;
  }

  var defaultImportNames = new Set(
  (0, _arrayPrototype2['default'])([].concat(first, rest || []), function (x) {return getDefaultImportName(x) || [];}));


  // Bail if there are multiple different default import names – it's up to the
  // user to choose which one to keep.
  if (defaultImportNames.size > 1) {
    return undefined;
  }

  // Leave it to the user to handle comments. Also skip `import * as ns from
  // './foo'` imports, since they cannot be merged into another import.
  var restWithoutComments = rest.filter(function (node) {return !hasProblematicComments(node, sourceCode) && !hasNamespace(node);});

  var specifiers = restWithoutComments.
  map(function (node) {
    var tokens = sourceCode.getTokens(node);
    var openBrace = tokens.find(function (token) {return isPunctuator(token, '{');});
    var closeBrace = tokens.find(function (token) {return isPunctuator(token, '}');});

    if (openBrace == null || closeBrace == null) {
      return undefined;
    }

    return {
      importNode: node,
      identifiers: sourceCode.text.slice(openBrace.range[1], closeBrace.range[0]).split(','), // Split the text into separate identifiers (retaining any whitespace before or after)
      isEmpty: !hasSpecifiers(node) };

  }).
  filter(function (x) {return !!x;});

  var unnecessaryImports = restWithoutComments.filter(function (node) {return !hasSpecifiers(node) &&
    !hasNamespace(node) &&
    !specifiers.some(function (specifier) {return specifier.importNode === node;});});


  var shouldAddDefault = getDefaultImportName(first) == null && defaultImportNames.size === 1;
  var shouldAddSpecifiers = specifiers.length > 0;
  var shouldRemoveUnnecessary = unnecessaryImports.length > 0;
  var preferInline = context.options[0] && context.options[0]['prefer-inline'];

  if (!(shouldAddDefault || shouldAddSpecifiers || shouldRemoveUnnecessary)) {
    return undefined;
  }

  /** @type {import('eslint').Rule.ReportFixer} */
  return function (fixer) {
    var tokens = sourceCode.getTokens(first);
    var openBrace = tokens.find(function (token) {return isPunctuator(token, '{');});
    var closeBrace = tokens.find(function (token) {return isPunctuator(token, '}');});
    var firstToken = sourceCode.getFirstToken(first);var _defaultImportNames = _slicedToArray(
    defaultImportNames, 1),defaultImportName = _defaultImportNames[0];

    var firstHasTrailingComma = closeBrace != null && isPunctuator(sourceCode.getTokenBefore(closeBrace), ',');
    var firstIsEmpty = !hasSpecifiers(first);
    var firstExistingIdentifiers = firstIsEmpty ?
    new Set() :
    new Set(sourceCode.text.slice(openBrace.range[1], closeBrace.range[0]).
    split(',').
    map(function (x) {return x.trim();}));var _specifiers$reduce =


    specifiers.reduce(
    function (_ref, specifier) {var _ref2 = _slicedToArray(_ref, 3),result = _ref2[0],needsComma = _ref2[1],existingIdentifiers = _ref2[2];
      var isTypeSpecifier = specifier.importNode.importKind === 'type';

      // a user might set prefer-inline but not have a supporting TypeScript version. Flow does not support inline types so this should fail in that case as well.
      if (preferInline && (!typescriptPkg || !_semver2['default'].satisfies(typescriptPkg.version, '>= 4.5'))) {
        throw new Error('Your version of TypeScript does not support inline type imports.');
      }

      // Add *only* the new identifiers that don't already exist, and track any new identifiers so we don't add them again in the next loop
      var _specifier$identifier = specifier.identifiers.reduce(function (_ref3, cur) {var _ref4 = _slicedToArray(_ref3, 2),text = _ref4[0],set = _ref4[1];
        var trimmed = cur.trim(); // Trim whitespace before/after to compare to our set of existing identifiers
        var curWithType = trimmed.length > 0 && preferInline && isTypeSpecifier ? 'type ' + String(cur) : cur;
        if (existingIdentifiers.has(trimmed)) {
          return [text, set];
        }
        return [text.length > 0 ? String(text) + ',' + String(curWithType) : curWithType, set.add(trimmed)];
      }, ['', existingIdentifiers]),_specifier$identifier2 = _slicedToArray(_specifier$identifier, 2),specifierText = _specifier$identifier2[0],updatedExistingIdentifiers = _specifier$identifier2[1];

      return [
      needsComma && !specifier.isEmpty && specifierText.length > 0 ? String(
      result) + ',' + String(specifierText) : '' + String(
      result) + String(specifierText),
      specifier.isEmpty ? needsComma : true,
      updatedExistingIdentifiers];

    },
    ['', !firstHasTrailingComma && !firstIsEmpty, firstExistingIdentifiers]),_specifiers$reduce2 = _slicedToArray(_specifiers$reduce, 1),specifiersText = _specifiers$reduce2[0];


    /** @type {import('eslint').Rule.Fix[]} */
    var fixes = [];

    if (shouldAddSpecifiers && preferInline && first.importKind === 'type') {
      // `import type {a} from './foo'` → `import {type a} from './foo'`
      var typeIdentifierToken = tokens.find(function (token) {return token.type === 'Identifier' && token.value === 'type';});
      fixes.push(fixer.removeRange([typeIdentifierToken.range[0], typeIdentifierToken.range[1] + 1]));

      tokens.
      filter(function (token) {return firstExistingIdentifiers.has(token.value);}).
      forEach(function (identifier) {
        fixes.push(fixer.replaceTextRange([identifier.range[0], identifier.range[1]], 'type ' + String(identifier.value)));
      });
    }

    if (shouldAddDefault && openBrace == null && shouldAddSpecifiers) {
      // `import './foo'` → `import def, {...} from './foo'`
      fixes.push(
      fixer.insertTextAfter(firstToken, ' ' + String(defaultImportName) + ', {' + String(specifiersText) + '} from'));

    } else if (shouldAddDefault && openBrace == null && !shouldAddSpecifiers) {
      // `import './foo'` → `import def from './foo'`
      fixes.push(fixer.insertTextAfter(firstToken, ' ' + String(defaultImportName) + ' from'));
    } else if (shouldAddDefault && openBrace != null && closeBrace != null) {
      // `import {...} from './foo'` → `import def, {...} from './foo'`
      fixes.push(fixer.insertTextAfter(firstToken, ' ' + String(defaultImportName) + ','));
      if (shouldAddSpecifiers) {
        // `import def, {...} from './foo'` → `import def, {..., ...} from './foo'`
        fixes.push(fixer.insertTextBefore(closeBrace, specifiersText));
      }
    } else if (!shouldAddDefault && openBrace == null && shouldAddSpecifiers) {
      if (first.specifiers.length === 0) {
        // `import './foo'` → `import {...} from './foo'`
        fixes.push(fixer.insertTextAfter(firstToken, ' {' + String(specifiersText) + '} from'));
      } else {
        // `import def from './foo'` → `import def, {...} from './foo'`
        fixes.push(fixer.insertTextAfter(first.specifiers[0], ', {' + String(specifiersText) + '}'));
      }
    } else if (!shouldAddDefault && openBrace != null && closeBrace != null) {
      // `import {...} './foo'` → `import {..., ...} from './foo'`
      fixes.push(fixer.insertTextBefore(closeBrace, specifiersText));
    }

    // Remove imports whose specifiers have been moved into the first import.
    specifiers.forEach(function (specifier) {
      var importNode = specifier.importNode;
      fixes.push(fixer.remove(importNode));

      var charAfterImportRange = [importNode.range[1], importNode.range[1] + 1];
      var charAfterImport = sourceCode.text.substring(charAfterImportRange[0], charAfterImportRange[1]);
      if (charAfterImport === '\n') {
        fixes.push(fixer.removeRange(charAfterImportRange));
      }
    });

    // Remove imports whose default import has been moved to the first import,
    // and side-effect-only imports that are unnecessary due to the first
    // import.
    unnecessaryImports.forEach(function (node) {
      fixes.push(fixer.remove(node));

      var charAfterImportRange = [node.range[1], node.range[1] + 1];
      var charAfterImport = sourceCode.text.substring(charAfterImportRange[0], charAfterImportRange[1]);
      if (charAfterImport === '\n') {
        fixes.push(fixer.removeRange(charAfterImportRange));
      }
    });

    return fixes;
  };
}

/** @type {(imported: Map<string, import('estree').ImportDeclaration[]>, context: import('eslint').Rule.RuleContext) => void} */
function checkImports(imported, context) {var _iteratorNormalCompletion = true;var _didIteratorError = false;var _iteratorError = undefined;try {
    for (var _iterator = imported.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {var _ref5 = _step.value;var _ref6 = _slicedToArray(_ref5, 2);var _module = _ref6[0];var nodes = _ref6[1];
      if (nodes.length > 1) {(function () {
          var message = '\'' + String(_module) + '\' imported multiple times.';var _nodes = _toArray(
          nodes),first = _nodes[0],rest = _nodes.slice(1);
          var sourceCode = (0, _contextCompat.getSourceCode)(context);
          var fix = getFix(first, rest, sourceCode, context);

          context.report({
            node: first.source,
            message: message,
            fix: fix // Attach the autofix (if any) to the first import.
          });

          rest.forEach(function (node) {
            context.report({
              node: node.source,
              message: message });

          });})();
      }
    }} catch (err) {_didIteratorError = true;_iteratorError = err;} finally {try {if (!_iteratorNormalCompletion && _iterator['return']) {_iterator['return']();}} finally {if (_didIteratorError) {throw _iteratorError;}}}
}

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'problem',
    docs: {
      category: 'Style guide',
      description: 'Forbid repeated import of the same module in multiple places.',
      url: (0, _docsUrl2['default'])('no-duplicates') },

    fixable: 'code',
    schema: [
    {
      type: 'object',
      properties: {
        considerQueryString: {
          type: 'boolean' },

        'prefer-inline': {
          type: 'boolean' } },


      additionalProperties: false }] },




  /** @param {import('eslint').Rule.RuleContext} context */
  create: function () {function create(context) {
      /** @type {boolean} */
      // Prepare the resolver from options.
      var considerQueryStringOption = context.options[0] && context.options[0].considerQueryString;
      /** @type {boolean} */
      var preferInline = context.options[0] && context.options[0]['prefer-inline'];
      var defaultResolver = function () {function defaultResolver(sourcePath) {return (0, _resolve2['default'])(sourcePath, context) || sourcePath;}return defaultResolver;}();
      var resolver = considerQueryStringOption ? function (sourcePath) {
        var parts = sourcePath.match(/^([^?]*)\?(.*)$/);
        if (!parts) {
          return defaultResolver(sourcePath);
        }
        return String(defaultResolver(parts[1])) + '?' + String(parts[2]);
      } : defaultResolver;

      /** @type {Map<unknown, { imported: Map<string, import('estree').ImportDeclaration[]>, nsImported: Map<string, import('estree').ImportDeclaration[]>, defaultTypesImported: Map<string, import('estree').ImportDeclaration[]>, namedTypesImported: Map<string, import('estree').ImportDeclaration[]>}>} */
      var moduleMaps = new Map();

      /** @param {import('estree').ImportDeclaration} n */
      /** @returns {typeof moduleMaps[keyof typeof moduleMaps]} */
      function getImportMap(n) {
        if (!moduleMaps.has(n.parent)) {
          moduleMaps.set(n.parent, /** @type {typeof moduleMaps} */{
            imported: new Map(),
            nsImported: new Map(),
            defaultTypesImported: new Map(),
            namedTypesImported: new Map() });

        }
        var map = moduleMaps.get(n.parent);
        if (!preferInline && n.importKind === 'type') {
          return n.specifiers.length > 0 && n.specifiers[0].type === 'ImportDefaultSpecifier' ? map.defaultTypesImported : map.namedTypesImported;
        }
        if (!preferInline && n.specifiers.some(function (spec) {return spec.importKind === 'type';})) {
          return map.namedTypesImported;
        }

        return hasNamespace(n) ? map.nsImported : map.imported;
      }

      return {
        /** @param {import('estree').ImportDeclaration} n */
        ImportDeclaration: function () {function ImportDeclaration(n) {
            /** @type {string} */
            // resolved path will cover aliased duplicates
            var resolvedPath = resolver(n.source.value);
            var importMap = getImportMap(n);

            if (importMap.has(resolvedPath)) {
              importMap.get(resolvedPath).push(n);
            } else {
              importMap.set(resolvedPath, [n]);
            }
          }return ImportDeclaration;}(),

        'Program:exit': function () {function ProgramExit() {var _iteratorNormalCompletion2 = true;var _didIteratorError2 = false;var _iteratorError2 = undefined;try {
              for (var _iterator2 = moduleMaps.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {var map = _step2.value;
                checkImports(map.imported, context);
                checkImports(map.nsImported, context);
                checkImports(map.defaultTypesImported, context);
                checkImports(map.namedTypesImported, context);
              }} catch (err) {_didIteratorError2 = true;_iteratorError2 = err;} finally {try {if (!_iteratorNormalCompletion2 && _iterator2['return']) {_iterator2['return']();}} finally {if (_didIteratorError2) {throw _iteratorError2;}}}
          }return ProgramExit;}() };

    }return create;}() };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlcy9uby1kdXBsaWNhdGVzLmpzIl0sIm5hbWVzIjpbInR5cGVzY3JpcHRQa2ciLCJyZXF1aXJlIiwiZSIsImlzUHVuY3R1YXRvciIsIm5vZGUiLCJ2YWx1ZSIsInR5cGUiLCJnZXREZWZhdWx0SW1wb3J0TmFtZSIsImRlZmF1bHRTcGVjaWZpZXIiLCJzcGVjaWZpZXJzIiwiZmluZCIsInNwZWNpZmllciIsImxvY2FsIiwibmFtZSIsInVuZGVmaW5lZCIsImhhc05hbWVzcGFjZSIsImZpbHRlciIsImxlbmd0aCIsImhhc1NwZWNpZmllcnMiLCJoYXNDb21tZW50QmVmb3JlIiwic291cmNlQ29kZSIsImdldENvbW1lbnRzQmVmb3JlIiwic29tZSIsImNvbW1lbnQiLCJsb2MiLCJlbmQiLCJsaW5lIiwic3RhcnQiLCJoYXNDb21tZW50QWZ0ZXIiLCJnZXRDb21tZW50c0FmdGVyIiwiaGFzQ29tbWVudEluc2lkZU5vblNwZWNpZmllcnMiLCJ0b2tlbnMiLCJnZXRUb2tlbnMiLCJvcGVuQnJhY2VJbmRleCIsImZpbmRJbmRleCIsInRva2VuIiwiY2xvc2VCcmFjZUluZGV4Iiwic29tZVRva2VucyIsInNsaWNlIiwiY29uY2F0IiwiaGFzUHJvYmxlbWF0aWNDb21tZW50cyIsImdldEZpeCIsImZpcnN0IiwicmVzdCIsImNvbnRleHQiLCJkZWZhdWx0SW1wb3J0TmFtZXMiLCJTZXQiLCJ4Iiwic2l6ZSIsInJlc3RXaXRob3V0Q29tbWVudHMiLCJtYXAiLCJvcGVuQnJhY2UiLCJjbG9zZUJyYWNlIiwiaW1wb3J0Tm9kZSIsImlkZW50aWZpZXJzIiwidGV4dCIsInJhbmdlIiwic3BsaXQiLCJpc0VtcHR5IiwidW5uZWNlc3NhcnlJbXBvcnRzIiwic2hvdWxkQWRkRGVmYXVsdCIsInNob3VsZEFkZFNwZWNpZmllcnMiLCJzaG91bGRSZW1vdmVVbm5lY2Vzc2FyeSIsInByZWZlcklubGluZSIsIm9wdGlvbnMiLCJmaXhlciIsImZpcnN0VG9rZW4iLCJnZXRGaXJzdFRva2VuIiwiZGVmYXVsdEltcG9ydE5hbWUiLCJmaXJzdEhhc1RyYWlsaW5nQ29tbWEiLCJnZXRUb2tlbkJlZm9yZSIsImZpcnN0SXNFbXB0eSIsImZpcnN0RXhpc3RpbmdJZGVudGlmaWVycyIsInRyaW0iLCJyZWR1Y2UiLCJyZXN1bHQiLCJuZWVkc0NvbW1hIiwiZXhpc3RpbmdJZGVudGlmaWVycyIsImlzVHlwZVNwZWNpZmllciIsImltcG9ydEtpbmQiLCJzZW12ZXIiLCJzYXRpc2ZpZXMiLCJ2ZXJzaW9uIiwiRXJyb3IiLCJjdXIiLCJzZXQiLCJ0cmltbWVkIiwiY3VyV2l0aFR5cGUiLCJoYXMiLCJhZGQiLCJzcGVjaWZpZXJUZXh0IiwidXBkYXRlZEV4aXN0aW5nSWRlbnRpZmllcnMiLCJzcGVjaWZpZXJzVGV4dCIsImZpeGVzIiwidHlwZUlkZW50aWZpZXJUb2tlbiIsInB1c2giLCJyZW1vdmVSYW5nZSIsImZvckVhY2giLCJpZGVudGlmaWVyIiwicmVwbGFjZVRleHRSYW5nZSIsImluc2VydFRleHRBZnRlciIsImluc2VydFRleHRCZWZvcmUiLCJyZW1vdmUiLCJjaGFyQWZ0ZXJJbXBvcnRSYW5nZSIsImNoYXJBZnRlckltcG9ydCIsInN1YnN0cmluZyIsImNoZWNrSW1wb3J0cyIsImltcG9ydGVkIiwiZW50cmllcyIsIm1vZHVsZSIsIm5vZGVzIiwibWVzc2FnZSIsImZpeCIsInJlcG9ydCIsInNvdXJjZSIsImV4cG9ydHMiLCJtZXRhIiwiZG9jcyIsImNhdGVnb3J5IiwiZGVzY3JpcHRpb24iLCJ1cmwiLCJmaXhhYmxlIiwic2NoZW1hIiwicHJvcGVydGllcyIsImNvbnNpZGVyUXVlcnlTdHJpbmciLCJhZGRpdGlvbmFsUHJvcGVydGllcyIsImNyZWF0ZSIsImNvbnNpZGVyUXVlcnlTdHJpbmdPcHRpb24iLCJkZWZhdWx0UmVzb2x2ZXIiLCJzb3VyY2VQYXRoIiwicmVzb2x2ZXIiLCJwYXJ0cyIsIm1hdGNoIiwibW9kdWxlTWFwcyIsIk1hcCIsImdldEltcG9ydE1hcCIsIm4iLCJwYXJlbnQiLCJuc0ltcG9ydGVkIiwiZGVmYXVsdFR5cGVzSW1wb3J0ZWQiLCJuYW1lZFR5cGVzSW1wb3J0ZWQiLCJnZXQiLCJzcGVjIiwiSW1wb3J0RGVjbGFyYXRpb24iLCJyZXNvbHZlZFBhdGgiLCJpbXBvcnRNYXAiLCJ2YWx1ZXMiXSwibWFwcGluZ3MiOiJxb0JBQUE7QUFDQSxzRDtBQUNBLGdDO0FBQ0EseUQ7O0FBRUEscUM7O0FBRUEsSUFBSUEsc0JBQUo7QUFDQSxJQUFJO0FBQ0ZBLGtCQUFnQkMsUUFBUSx5QkFBUixDQUFoQixDQURFLENBQ2tEO0FBQ3JELENBRkQsQ0FFRSxPQUFPQyxDQUFQLEVBQVUsQ0FBRSxJQUFNOztBQUVwQixTQUFTQyxZQUFULENBQXNCQyxJQUF0QixFQUE0QkMsS0FBNUIsRUFBbUM7QUFDakMsU0FBT0QsS0FBS0UsSUFBTCxLQUFjLFlBQWQsSUFBOEJGLEtBQUtDLEtBQUwsS0FBZUEsS0FBcEQ7QUFDRDs7QUFFRDtBQUNBLFNBQVNFLG9CQUFULENBQThCSCxJQUE5QixFQUFvQztBQUNsQyxNQUFNSSxtQkFBbUJKLEtBQUtLLFVBQUw7QUFDdEJDLE1BRHNCLENBQ2pCLFVBQUNDLFNBQUQsVUFBZUEsVUFBVUwsSUFBVixLQUFtQix3QkFBbEMsRUFEaUIsQ0FBekI7QUFFQSxTQUFPRSxvQkFBb0IsSUFBcEIsR0FBMkJBLGlCQUFpQkksS0FBakIsQ0FBdUJDLElBQWxELEdBQXlEQyxTQUFoRTtBQUNEOztBQUVEO0FBQ0EsU0FBU0MsWUFBVCxDQUFzQlgsSUFBdEIsRUFBNEI7QUFDMUIsTUFBTUssYUFBYUwsS0FBS0ssVUFBTDtBQUNoQk8sUUFEZ0IsQ0FDVCxVQUFDTCxTQUFELFVBQWVBLFVBQVVMLElBQVYsS0FBbUIsMEJBQWxDLEVBRFMsQ0FBbkI7QUFFQSxTQUFPRyxXQUFXUSxNQUFYLEdBQW9CLENBQTNCO0FBQ0Q7O0FBRUQ7QUFDQSxTQUFTQyxhQUFULENBQXVCZCxJQUF2QixFQUE2QjtBQUMzQixNQUFNSyxhQUFhTCxLQUFLSyxVQUFMO0FBQ2hCTyxR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bEIsQ0FBckIsRUFBOEU7QUFDNUUsaUJBQU83QixJQUFJMEYsa0JBQVg7QUFDRDs7QUFFRCxlQUFPN0gsYUFBYXlILENBQWIsSUFBa0J0RixJQUFJd0YsVUFBdEIsR0FBbUN4RixJQUFJeUQsUUFBOUM7QUFDRDs7QUFFRCxhQUFPO0FBQ0w7QUFDQW9DLHlCQUZLLDBDQUVhUCxDQUZiLEVBRWdCO0FBQ25CO0FBQ0E7QUFDQSxnQkFBTVEsZUFBZWQsU0FBU00sRUFBRXRCLE1BQUYsQ0FBUzdHLEtBQWxCLENBQXJCO0FBQ0EsZ0JBQU00SSxZQUFZVixhQUFhQyxDQUFiLENBQWxCOztBQUVBLGdCQUFJUyxVQUFVekQsR0FBVixDQUFjd0QsWUFBZCxDQUFKLEVBQWlDO0FBQy9CQyx3QkFBVUosR0FBVixDQUFjRyxZQUFkLEVBQTRCakQsSUFBNUIsQ0FBaUN5QyxDQUFqQztBQUNELGFBRkQsTUFFTztBQUNMUyx3QkFBVTVELEdBQVYsQ0FBYzJELFlBQWQsRUFBNEIsQ0FBQ1IsQ0FBRCxDQUE1QjtBQUNEO0FBQ0YsV0FiSTs7QUFlTCxzQkFmSyxzQ0FlWTtBQUNmLG9DQUFrQkgsV0FBV2EsTUFBWCxFQUFsQixtSUFBdUMsS0FBNUJoRyxHQUE0QjtBQUNyQ3dELDZCQUFheEQsSUFBSXlELFFBQWpCLEVBQTJCL0QsT0FBM0I7QUFDQThELDZCQUFheEQsSUFBSXdGLFVBQWpCLEVBQTZCOUYsT0FBN0I7QUFDQThELDZCQUFheEQsSUFBSXlGLG9CQUFqQixFQUF1Qy9GLE9BQXZDO0FBQ0E4RCw2QkFBYXhELElBQUkwRixrQkFBakIsRUFBcUNoRyxPQUFyQztBQUNELGVBTmM7QUFPaEIsV0F0Qkksd0JBQVA7O0FBd0JELEtBMUZjLG1CQUFqQiIsImZpbGUiOiJuby1kdXBsaWNhdGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U291cmNlQ29kZSB9IGZyb20gJ2VzbGludC1tb2R1bGUtdXRpbHMvY29udGV4dENvbXBhdCc7XG5pbXBvcnQgcmVzb2x2ZSBmcm9tICdlc2xpbnQtbW9kdWxlLXV0aWxzL3Jlc29sdmUnO1xuaW1wb3J0IHNlbXZlciBmcm9tICdzZW12ZXInO1xuaW1wb3J0IGZsYXRNYXAgZnJvbSAnYXJyYXkucHJvdG90eXBlLmZsYXRtYXAnO1xuXG5pbXBvcnQgZG9jc1VybCBmcm9tICcuLi9kb2NzVXJsJztcblxubGV0IHR5cGVzY3JpcHRQa2c7XG50cnkge1xuICB0eXBlc2NyaXB0UGtnID0gcmVxdWlyZSgndHlwZXNjcmlwdC9wYWNrYWdlLmpzb24nKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXNcbn0gY2F0Y2ggKGUpIHsgLyoqLyB9XG5cbmZ1bmN0aW9uIGlzUHVuY3R1YXRvcihub2RlLCB2YWx1ZSkge1xuICByZXR1cm4gbm9kZS50eXBlID09PSAnUHVuY3R1YXRvcicgJiYgbm9kZS52YWx1ZSA9PT0gdmFsdWU7XG59XG5cbi8vIEdldCB0aGUgbmFtZSBvZiB0aGUgZGVmYXVsdCBpbXBvcnQgb2YgYG5vZGVgLCBpZiBhbnkuXG5mdW5jdGlvbiBnZXREZWZhdWx0SW1wb3J0TmFtZShub2RlKSB7XG4gIGNvbnN0IGRlZmF1bHRTcGVjaWZpZXIgPSBub2RlLnNwZWNpZmllcnNcbiAgICAuZmluZCgoc3BlY2lmaWVyKSA9PiBzcGVjaWZpZXIudHlwZSA9PT0gJ0ltcG9ydERlZmF1bHRTcGVjaWZpZXInKTtcbiAgcmV0dXJuIGRlZmF1bHRTcGVjaWZpZXIgIT0gbnVsbCA/IGRlZmF1bHRTcGVjaWZpZXIubG9jYWwubmFtZSA6IHVuZGVmaW5lZDtcbn1cblxuLy8gQ2hlY2tzIHdoZXRoZXIgYG5vZGVgIGhhcyBhIG5hbWVzcGFjZSBpbXBvcnQuXG5mdW5jdGlvbiBoYXNOYW1lc3BhY2Uobm9kZSkge1xuICBjb25zdCBzcGVjaWZpZXJzID0gbm9kZS5zcGVjaWZpZXJzXG4gICAgLmZpbHRlcigoc3BlY2lmaWVyKSA9PiBzcGVjaWZpZXIudHlwZSA9PT0gJ0ltcG9ydE5hbWVzcGFjZVNwZWNpZmllcicpO1xuICByZXR1cm4gc3BlY2lmaWVycy5sZW5ndGggPiAwO1xufVxuXG4vLyBDaGVja3Mgd2hldGhlciBgbm9kZWAgaGFzIGFueSBub24tZGVmYXVsdCBzcGVjaWZpZXJzLlxuZnVuY3Rpb24gaGFzU3BlY2lmaWVycyhub2RlKSB7XG4gIGNvbnN0IHNwZWNpZmllcnMgPSBub2RlLnNwZWNpZmllcnNcbiAgICAuZmlsdGVyKChzcGVjaWZpZXIpID0+IHNwZWNpZmllci50eXBlID09PSAnSW1wb3J0U3BlY2lmaWVyJyk7XG4gIHJldHVybiBzcGVjaWZpZXJzLmxlbmd0aCA+IDA7XG59XG5cbi8vIENoZWNrcyB3aGV0aGVyIGBub2RlYCBoYXMgYSBjb21tZW50ICh0aGF0IGVuZHMpIG9uIHRoZSBwcmV2aW91cyBsaW5lIG9yIG9uXG4vLyB0aGUgc2FtZSBsaW5lIGFzIGBub2RlYCAoc3RhcnRzKS5cbmZ1bmN0aW9uIGhhc0NvbW1lbnRCZWZvcmUobm9kZSwgc291cmNlQ29kZSkge1xuICByZXR1cm4gc291cmNlQ29kZS5nZXRDb21tZW50c0JlZm9yZShub2RlKVxuICAgIC5zb21lKChjb21tZW50KSA9PiBjb21tZW50LmxvYy5lbmQubGluZSA+PSBub2RlLmxvYy5zdGFydC5saW5lIC0gMSk7XG59XG5cbi8vIENoZWNrcyB3aGV0aGVyIGBub2RlYCBoYXMgYSBjb21tZW50ICh0aGF0IHN0YXJ0cykgb24gdGhlIHNhbWUgbGluZSBhcyBgbm9kZWBcbi8vIChlbmRzKS5cbmZ1bmN0aW9uIGhhc0NvbW1lbnRBZnRlcihub2RlLCBzb3VyY2VDb2RlKSB7XG4gIHJldHVybiBzb3VyY2VDb2RlLmdldENvbW1lbnRzQWZ0ZXIobm9kZSlcbiAgICAuc29tZSgoY29tbWVudCkgPT4gY29tbWVudC5sb2Muc3RhcnQubGluZSA9PT0gbm9kZS5sb2MuZW5kLmxpbmUpO1xufVxuXG4vLyBDaGVja3Mgd2hldGhlciBgbm9kZWAgaGFzIGFueSBjb21tZW50cyBfaW5zaWRlLF8gZXhjZXB0IGluc2lkZSB0aGUgYHsuLi59YFxuLy8gcGFydCAoaWYgYW55KS5cbmZ1bmN0aW9uIGhhc0NvbW1lbnRJbnNpZGVOb25TcGVjaWZpZXJzKG5vZGUsIHNvdXJjZUNvZGUpIHtcbiAgY29uc3QgdG9rZW5zID0gc291cmNlQ29kZS5nZXRUb2tlbnMobm9kZSk7XG4gIGNvbnN0IG9wZW5CcmFjZUluZGV4ID0gdG9rZW5zLmZpbmRJbmRleCgodG9rZW4pID0+IGlzUHVuY3R1YXRvcih0b2tlbiwgJ3snKSk7XG4gIGNvbnN0IGNsb3NlQnJhY2VJbmRleCA9IHRva2Vucy5maW5kSW5kZXgoKHRva2VuKSA9PiBpc1B1bmN0dWF0b3IodG9rZW4sICd9JykpO1xuICAvLyBTbGljZSBhd2F5IHRoZSBmaXJzdCB0b2tlbiwgc2luY2Ugd2UncmUgbm8gbG9va2luZyBmb3IgY29tbWVudHMgX2JlZm9yZV9cbiAgLy8gYG5vZGVgIChvbmx5IGluc2lkZSkuIElmIHRoZXJlJ3MgYSBgey4uLn1gIHBhcnQsIGxvb2sgZm9yIGNvbW1lbnRzIGJlZm9yZVxuICAvLyB0aGUgYHtgLCBidXQgbm90IGJlZm9yZSB0aGUgYH1gIChoZW5jZSB0aGUgYCsxYHMpLlxuICBjb25zdCBzb21lVG9rZW5zID0gb3BlbkJyYWNlSW5kZXggPj0gMCAmJiBjbG9zZUJyYWNlSW5kZXggPj0gMFxuICAgID8gdG9rZW5zLnNsaWNlKDEsIG9wZW5CcmFjZUluZGV4ICsgMSkuY29uY2F0KHRva2Vucy5zbGljZShjbG9zZUJyYWNlSW5kZXggKyAxKSlcbiAgICA6IHRva2Vucy5zbGljZSgxKTtcbiAgcmV0dXJuIHNvbWVUb2tlbnMuc29tZSgodG9rZW4pID0+IHNvdXJjZUNvZGUuZ2V0Q29tbWVudHNCZWZvcmUodG9rZW4pLmxlbmd0aCA+IDApO1xufVxuXG4vLyBJdCdzIG5vdCBvYnZpb3VzIHdoYXQgdGhlIHVzZXIgd2FudHMgdG8gZG8gd2l0aCBjb21tZW50cyBhc3NvY2lhdGVkIHdpdGhcbi8vIGR1cGxpY2F0ZSBpbXBvcnRzLCBzbyBza2lwIGltcG9ydHMgd2l0aCBjb21tZW50cyB3aGVuIGF1dG9maXhpbmcuXG5mdW5jdGlvbiBoYXNQcm9ibGVtYXRpY0NvbW1lbnRzKG5vZGUsIHNvdXJjZUNvZGUpIHtcbiAgcmV0dXJuIChcbiAgICBoYXNDb21tZW50QmVmb3JlKG5vZGUsIHNvdXJjZUNvZGUpXG4gICAgfHwgaGFzQ29tbWVudEFmdGVyKG5vZGUsIHNvdXJjZUNvZGUpXG4gICAgfHwgaGFzQ29tbWVudEluc2lkZU5vblNwZWNpZmllcnMobm9kZSwgc291cmNlQ29kZSlcbiAgKTtcbn1cblxuLyoqIEB0eXBlIHsoZmlyc3Q6IGltcG9ydCgnZXN0cmVlJykuSW1wb3J0RGVjbGFyYXRpb24sIHJlc3Q6IGltcG9ydCgnZXN0cmVlJykuSW1wb3J0RGVjbGFyYXRpb25bXSwgc291cmNlQ29kZTogaW1wb3J0KCdlc2xpbnQnKS5Tb3VyY2VDb2RlLlNvdXJjZUNvZGUsIGNvbnRleHQ6IGltcG9ydCgnZXNsaW50JykuUnVsZS5SdWxlQ29udGV4dCkgPT4gaW1wb3J0KCdlc2xpbnQnKS5SdWxlLlJlcG9ydEZpeGVyIHwgdW5kZWZpbmVkfSAqL1xuZnVuY3Rpb24gZ2V0Rml4KGZpcnN0LCByZXN0LCBzb3VyY2VDb2RlLCBjb250ZXh0KSB7XG4gIC8vIFNvcnJ5IEVTTGludCA8PSAzIHVzZXJzLCBubyBhdXRvZml4IGZvciB5b3UuIEF1dG9maXhpbmcgZHVwbGljYXRlIGltcG9ydHNcbiAgLy8gcmVxdWlyZXMgbXVsdGlwbGUgYGZpeGVyLndoYXRldmVyKClgIGNhbGxzIGluIHRoZSBgZml4YDogV2UgYm90aCBuZWVkIHRvXG4gIC8vIHVwZGF0ZSB0aGUgZmlyc3Qgb25lLCBhbmQgcmVtb3ZlIHRoZSByZXN0LiBTdXBwb3J0IGZvciBtdWx0aXBsZVxuICAvLyBgZml4ZXIud2hhdGV2ZXIoKWAgaW4gYSBzaW5nbGUgYGZpeGAgd2FzIGFkZGVkIGluIEVTTGludCA0LjEuXG4gIC8vIGBzb3VyY2VDb2RlLmdldENvbW1lbnRzQmVmb3JlYCB3YXMgYWRkZWQgaW4gNC4wLCBzbyB0aGF0J3MgYW4gZWFzeSB0aGluZyB0b1xuICAvLyBjaGVjayBmb3IuXG4gIGlmICh0eXBlb2Ygc291cmNlQ29kZS5nZXRDb21tZW50c0JlZm9yZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICAvLyBBZGp1c3RpbmcgdGhlIGZpcnN0IGltcG9ydCBtaWdodCBtYWtlIGl0IG11bHRpbGluZSwgd2hpY2ggY291bGQgYnJlYWtcbiAgLy8gYGVzbGludC1kaXNhYmxlLW5leHQtbGluZWAgY29tbWVudHMgYW5kIHNpbWlsYXIsIHNvIGJhaWwgaWYgdGhlIGZpcnN0XG4gIC8vIGltcG9ydCBoYXMgY29tbWVudHMuIEFsc28sIGlmIHRoZSBmaXJzdCBpbXBvcnQgaXMgYGltcG9ydCAqIGFzIG5zIGZyb21cbiAgLy8gJy4vZm9vJ2AgdGhlcmUncyBub3RoaW5nIHdlIGNhbiBkby5cbiAgaWYgKGhhc1Byb2JsZW1hdGljQ29tbWVudHMoZmlyc3QsIHNvdXJjZUNvZGUpIHx8IGhhc05hbWVzcGFjZShmaXJzdCkpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgY29uc3QgZGVmYXVsdEltcG9ydE5hbWVzID0gbmV3IFNldChcbiAgICBmbGF0TWFwKFtdLmNvbmNhdChmaXJzdCwgcmVzdCB8fCBbXSksICh4KSA9PiBnZXREZWZhdWx0SW1wb3J0TmFtZSh4KSB8fCBbXSksXG4gICk7XG5cbiAgLy8gQmFpbCBpZiB0aGVyZSBhcmUgbXVsdGlwbGUgZGlmZmVyZW50IGRlZmF1bHQgaW1wb3J0IG5hbWVzIOKAkyBpdCdzIHVwIHRvIHRoZVxuICAvLyB1c2VyIHRvIGNob29zZSB3aGljaCBvbmUgdG8ga2VlcC5cbiAgaWYgKGRlZmF1bHRJbXBvcnROYW1lcy5zaXplID4gMSkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICAvLyBMZWF2ZSBpdCB0byB0aGUgdXNlciB0byBoYW5kbGUgY29tbWVudHMuIEFsc28gc2tpcCBgaW1wb3J0ICogYXMgbnMgZnJvbVxuICAvLyAnLi9mb28nYCBpbXBvcnRzLCBzaW5jZSB0aGV5IGNhbm5vdCBiZSBtZXJnZWQgaW50byBhbm90aGVyIGltcG9ydC5cbiAgY29uc3QgcmVzdFdpdGhvdXRDb21tZW50cyA9IHJlc3QuZmlsdGVyKChub2RlKSA9PiAhaGFzUHJvYmxlbWF0aWNDb21tZW50cyhub2RlLCBzb3VyY2VDb2RlKSAmJiAhaGFzTmFtZXNwYWNlKG5vZGUpKTtcblxuICBjb25zdCBzcGVjaWZpZXJzID0gcmVzdFdpdGhvdXRDb21tZW50c1xuICAgIC5tYXAoKG5vZGUpID0+IHtcbiAgICAgIGNvbnN0IHRva2VucyA9IHNvdXJjZUNvZGUuZ2V0VG9rZW5zKG5vZGUpO1xuICAgICAgY29uc3Qgb3BlbkJyYWNlID0gdG9rZW5zLmZpbmQoKHRva2VuKSA9PiBpc1B1bmN0dWF0b3IodG9rZW4sICd7JykpO1xuICAgICAgY29uc3QgY2xvc2VCcmFjZSA9IHRva2Vucy5maW5kKCh0b2tlbikgPT4gaXNQdW5jdHVhdG9yKHRva2VuLCAnfScpKTtcblxuICAgICAgaWYgKG9wZW5CcmFjZSA9PSBudWxsIHx8IGNsb3NlQnJhY2UgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBpbXBvcnROb2RlOiBub2RlLFxuICAgICAgICBpZGVudGlmaWVyczogc291cmNlQ29kZS50ZXh0LnNsaWNlKG9wZW5CcmFjZS5yYW5nZVsxXSwgY2xvc2VCcmFjZS5yYW5nZVswXSkuc3BsaXQoJywnKSwgLy8gU3BsaXQgdGhlIHRleHQgaW50byBzZXBhcmF0ZSBpZGVudGlmaWVycyAocmV0YWluaW5nIGFueSB3aGl0ZXNwYWNlIGJlZm9yZSBvciBhZnRlcilcbiAgICAgICAgaXNFbXB0eTogIWhhc1NwZWNpZmllcnMobm9kZSksXG4gICAgICB9O1xuICAgIH0pXG4gICAgLmZpbHRlcigoeCkgPT4gISF4KTtcblxuICBjb25zdCB1bm5lY2Vzc2FyeUltcG9ydHMgPSByZXN0V2l0aG91dENvbW1lbnRzLmZpbHRlcigobm9kZSkgPT4gIWhhc1NwZWNpZmllcnMobm9kZSlcbiAgICAmJiAhaGFzTmFtZXNwYWNlKG5vZGUpXG4gICAgJiYgIXNwZWNpZmllcnMuc29tZSgoc3BlY2lmaWVyKSA9PiBzcGVjaWZpZXIuaW1wb3J0Tm9kZSA9PT0gbm9kZSksXG4gICk7XG5cbiAgY29uc3Qgc2hvdWxkQWRkRGVmYXVsdCA9IGdldERlZmF1bHRJbXBvcnROYW1lKGZpcnN0KSA9PSBudWxsICYmIGRlZmF1bHRJbXBvcnROYW1lcy5zaXplID09PSAxO1xuICBjb25zdCBzaG91bGRBZGRTcGVjaWZpZXJzID0gc3BlY2lmaWVycy5sZW5ndGggPiAwO1xuICBjb25zdCBzaG91bGRSZW1vdmVVbm5lY2Vzc2FyeSA9IHVubmVjZXNzYXJ5SW1wb3J0cy5sZW5ndGggPiAwO1xuICBjb25zdCBwcmVmZXJJbmxpbmUgPSBjb250ZXh0Lm9wdGlvbnNbMF0gJiYgY29udGV4dC5vcHRpb25zWzBdWydwcmVmZXItaW5saW5lJ107XG5cbiAgaWYgKCEoc2hvdWxkQWRkRGVmYXVsdCB8fCBzaG91bGRBZGRTcGVjaWZpZXJzIHx8IHNob3VsZFJlbW92ZVVubmVjZXNzYXJ5KSkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICAvKiogQHR5cGUge2ltcG9ydCgnZXNsaW50JykuUnVsZS5SZXBvcnRGaXhlcn0gKi9cbiAgcmV0dXJuIChmaXhlcikgPT4ge1xuICAgIGNvbnN0IHRva2VucyA9IHNvdXJjZUNvZGUuZ2V0VG9rZW5zKGZpcnN0KTtcbiAgICBjb25zdCBvcGVuQnJhY2UgPSB0b2tlbnMuZmluZCgodG9rZW4pID0+IGlzUHVuY3R1YXRvcih0b2tlbiwgJ3snKSk7XG4gICAgY29uc3QgY2xvc2VCcmFjZSA9IHRva2Vucy5maW5kKCh0b2tlbikgPT4gaXNQdW5jdHVhdG9yKHRva2VuLCAnfScpKTtcbiAgICBjb25zdCBmaXJzdFRva2VuID0gc291cmNlQ29kZS5nZXRGaXJzdFRva2VuKGZpcnN0KTtcbiAgICBjb25zdCBbZGVmYXVsdEltcG9ydE5hbWVdID0gZGVmYXVsdEltcG9ydE5hbWVzO1xuXG4gICAgY29uc3QgZmlyc3RIYXNUcmFpbGluZ0NvbW1hID0gY2xvc2VCcmFjZSAhPSBudWxsICYmIGlzUHVuY3R1YXRvcihzb3VyY2VDb2RlLmdldFRva2VuQmVmb3JlKGNsb3NlQnJhY2UpLCAnLCcpO1xuICAgIGNvbnN0IGZpcnN0SXNFbXB0eSA9ICFoYXNTcGVjaWZpZXJzKGZpcnN0KTtcbiAgICBjb25zdCBmaXJzdEV4aXN0aW5nSWRlbnRpZmllcnMgPSBmaXJzdElzRW1wdHlcbiAgICAgID8gbmV3IFNldCgpXG4gICAgICA6IG5ldyBTZXQoc291cmNlQ29kZS50ZXh0LnNsaWNlKG9wZW5CcmFjZS5yYW5nZVsxXSwgY2xvc2VCcmFjZS5yYW5nZVswXSlcbiAgICAgICAgLnNwbGl0KCcsJylcbiAgICAgICAgLm1hcCgoeCkgPT4geC50cmltKCkpLFxuICAgICAgKTtcblxuICAgIGNvbnN0IFtzcGVjaWZpZXJzVGV4dF0gPSBzcGVjaWZpZXJzLnJlZHVjZShcbiAgICAgIChbcmVzdWx0LCBuZWVkc0NvbW1hLCBleGlzdGluZ0lkZW50aWZpZXJzXSwgc3BlY2lmaWVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzVHlwZVNwZWNpZmllciA9IHNwZWNpZmllci5pbXBvcnROb2RlLmltcG9ydEtpbmQgPT09ICd0eXBlJztcblxuICAgICAgICAvLyBhIHVzZXIgbWlnaHQgc2V0IHByZWZlci1pbmxpbmUgYnV0IG5vdCBoYXZlIGEgc3VwcG9ydGluZyBUeXBlU2NyaXB0IHZlcnNpb24uIEZsb3cgZG9lcyBub3Qgc3VwcG9ydCBpbmxpbmUgdHlwZXMgc28gdGhpcyBzaG91bGQgZmFpbCBpbiB0aGF0IGNhc2UgYXMgd2VsbC5cbiAgICAgICAgaWYgKHByZWZlcklubGluZSAmJiAoIXR5cGVzY3JpcHRQa2cgfHwgIXNlbXZlci5zYXRpc2ZpZXModHlwZXNjcmlwdFBrZy52ZXJzaW9uLCAnPj0gNC41JykpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3VyIHZlcnNpb24gb2YgVHlwZVNjcmlwdCBkb2VzIG5vdCBzdXBwb3J0IGlubGluZSB0eXBlIGltcG9ydHMuJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgKm9ubHkqIHRoZSBuZXcgaWRlbnRpZmllcnMgdGhhdCBkb24ndCBhbHJlYWR5IGV4aXN0LCBhbmQgdHJhY2sgYW55IG5ldyBpZGVudGlmaWVycyBzbyB3ZSBkb24ndCBhZGQgdGhlbSBhZ2FpbiBpbiB0aGUgbmV4dCBsb29wXG4gICAgICAgIGNvbnN0IFtzcGVjaWZpZXJUZXh0LCB1cGRhdGVkRXhpc3RpbmdJZGVudGlmaWVyc10gPSBzcGVjaWZpZXIuaWRlbnRpZmllcnMucmVkdWNlKChbdGV4dCwgc2V0XSwgY3VyKSA9PiB7XG4gICAgICAgICAgY29uc3QgdHJpbW1lZCA9IGN1ci50cmltKCk7IC8vIFRyaW0gd2hpdGVzcGFjZSBiZWZvcmUvYWZ0ZXIgdG8gY29tcGFyZSB0byBvdXIgc2V0IG9mIGV4aXN0aW5nIGlkZW50aWZpZXJzXG4gICAgICAgICAgY29uc3QgY3VyV2l0aFR5cGUgPSB0cmltbWVkLmxlbmd0aCA+IDAgJiYgcHJlZmVySW5saW5lICYmIGlzVHlwZVNwZWNpZmllciA/IGB0eXBlICR7Y3VyfWAgOiBjdXI7XG4gICAgICAgICAgaWYgKGV4aXN0aW5nSWRlbnRpZmllcnMuaGFzKHRyaW1tZWQpKSB7XG4gICAgICAgICAgICByZXR1cm4gW3RleHQsIHNldF07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBbdGV4dC5sZW5ndGggPiAwID8gYCR7dGV4dH0sJHtjdXJXaXRoVHlwZX1gIDogY3VyV2l0aFR5cGUsIHNldC5hZGQodHJpbW1lZCldO1xuICAgICAgICB9LCBbJycsIGV4aXN0aW5nSWRlbnRpZmllcnNdKTtcblxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIG5lZWRzQ29tbWEgJiYgIXNwZWNpZmllci5pc0VtcHR5ICYmIHNwZWNpZmllclRleHQubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyBgJHtyZXN1bHR9LCR7c3BlY2lmaWVyVGV4dH1gXG4gICAgICAgICAgICA6IGAke3Jlc3VsdH0ke3NwZWNpZmllclRleHR9YCxcbiAgICAgICAgICBzcGVjaWZpZXIuaXNFbXB0eSA/IG5lZWRzQ29tbWEgOiB0cnVlLFxuICAgICAgICAgIHVwZGF0ZWRFeGlzdGluZ0lkZW50aWZpZXJzLFxuICAgICAgICBdO1xuICAgICAgfSxcbiAgICAgIFsnJywgIWZpcnN0SGFzVHJhaWxpbmdDb21tYSAmJiAhZmlyc3RJc0VtcHR5LCBmaXJzdEV4aXN0aW5nSWRlbnRpZmllcnNdLFxuICAgICk7XG5cbiAgICAvKiogQHR5cGUge2ltcG9ydCgnZXNsaW50JykuUnVsZS5GaXhbXX0gKi9cbiAgICBjb25zdCBmaXhlcyA9IFtdO1xuXG4gICAgaWYgKHNob3VsZEFkZFNwZWNpZmllcnMgJiYgcHJlZmVySW5saW5lICYmIGZpcnN0LmltcG9ydEtpbmQgPT09ICd0eXBlJykge1xuICAgICAgLy8gYGltcG9ydCB0eXBlIHthfSBmcm9tICcuL2ZvbydgIOKGkiBgaW1wb3J0IHt0eXBlIGF9IGZyb20gJy4vZm9vJ2BcbiAgICAgIGNvbnN0IHR5cGVJZGVudGlmaWVyVG9rZW4gPSB0b2tlbnMuZmluZCgodG9rZW4pID0+IHRva2VuLnR5cGUgPT09ICdJZGVudGlmaWVyJyAmJiB0b2tlbi52YWx1ZSA9PT0gJ3R5cGUnKTtcbiAgICAgIGZpeGVzLnB1c2goZml4ZXIucmVtb3ZlUmFuZ2UoW3R5cGVJZGVudGlmaWVyVG9rZW4ucmFuZ2VbMF0sIHR5cGVJZGVudGlmaWVyVG9rZW4ucmFuZ2VbMV0gKyAxXSkpO1xuXG4gICAgICB0b2tlbnNcbiAgICAgICAgLmZpbHRlcigodG9rZW4pID0+IGZpcnN0RXhpc3RpbmdJZGVudGlmaWVycy5oYXModG9rZW4udmFsdWUpKVxuICAgICAgICAuZm9yRWFjaCgoaWRlbnRpZmllcikgPT4ge1xuICAgICAgICAgIGZpeGVzLnB1c2goZml4ZXIucmVwbGFjZVRleHRSYW5nZShbaWRlbnRpZmllci5yYW5nZVswXSwgaWRlbnRpZmllci5yYW5nZVsxXV0sIGB0eXBlICR7aWRlbnRpZmllci52YWx1ZX1gKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChzaG91bGRBZGREZWZhdWx0ICYmIG9wZW5CcmFjZSA9PSBudWxsICYmIHNob3VsZEFkZFNwZWNpZmllcnMpIHtcbiAgICAgIC8vIGBpbXBvcnQgJy4vZm9vJ2Ag4oaSIGBpbXBvcnQgZGVmLCB7Li4ufSBmcm9tICcuL2ZvbydgXG4gICAgICBmaXhlcy5wdXNoKFxuICAgICAgICBmaXhlci5pbnNlcnRUZXh0QWZ0ZXIoZmlyc3RUb2tlbiwgYCAke2RlZmF1bHRJbXBvcnROYW1lfSwgeyR7c3BlY2lmaWVyc1RleHR9fSBmcm9tYCksXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoc2hvdWxkQWRkRGVmYXVsdCAmJiBvcGVuQnJhY2UgPT0gbnVsbCAmJiAhc2hvdWxkQWRkU3BlY2lmaWVycykge1xuICAgICAgLy8gYGltcG9ydCAnLi9mb28nYCDihpIgYGltcG9ydCBkZWYgZnJvbSAnLi9mb28nYFxuICAgICAgZml4ZXMucHVzaChmaXhlci5pbnNlcnRUZXh0QWZ0ZXIoZmlyc3RUb2tlbiwgYCAke2RlZmF1bHRJbXBvcnROYW1lfSBmcm9tYCkpO1xuICAgIH0gZWxzZSBpZiAoc2hvdWxkQWRkRGVmYXVsdCAmJiBvcGVuQnJhY2UgIT0gbnVsbCAmJiBjbG9zZUJyYWNlICE9IG51bGwpIHtcbiAgICAgIC8vIGBpbXBvcnQgey4uLn0gZnJvbSAnLi9mb28nYCDihpIgYGltcG9ydCBkZWYsIHsuLi59IGZyb20gJy4vZm9vJ2BcbiAgICAgIGZpeGVzLnB1c2goZml4ZXIuaW5zZXJ0VGV4dEFmdGVyKGZpcnN0VG9rZW4sIGAgJHtkZWZhdWx0SW1wb3J0TmFtZX0sYCkpO1xuICAgICAgaWYgKHNob3VsZEFkZFNwZWNpZmllcnMpIHtcbiAgICAgICAgLy8gYGltcG9ydCBkZWYsIHsuLi59IGZyb20gJy4vZm9vJ2Ag4oaSIGBpbXBvcnQgZGVmLCB7Li4uLCAuLi59IGZyb20gJy4vZm9vJ2BcbiAgICAgICAgZml4ZXMucHVzaChmaXhlci5pbnNlcnRUZXh0QmVmb3JlKGNsb3NlQnJhY2UsIHNwZWNpZmllcnNUZXh0KSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghc2hvdWxkQWRkRGVmYXVsdCAmJiBvcGVuQnJhY2UgPT0gbnVsbCAmJiBzaG91bGRBZGRTcGVjaWZpZXJzKSB7XG4gICAgICBpZiAoZmlyc3Quc3BlY2lmaWVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgLy8gYGltcG9ydCAnLi9mb28nYCDihpIgYGltcG9ydCB7Li4ufSBmcm9tICcuL2ZvbydgXG4gICAgICAgIGZpeGVzLnB1c2goZml4ZXIuaW5zZXJ0VGV4dEFmdGVyKGZpcnN0VG9rZW4sIGAgeyR7c3BlY2lmaWVyc1RleHR9fSBmcm9tYCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gYGltcG9ydCBkZWYgZnJvbSAnLi9mb28nYCDihpIgYGltcG9ydCBkZWYsIHsuLi59IGZyb20gJy4vZm9vJ2BcbiAgICAgICAgZml4ZXMucHVzaChmaXhlci5pbnNlcnRUZXh0QWZ0ZXIoZmlyc3Quc3BlY2lmaWVyc1swXSwgYCwgeyR7c3BlY2lmaWVyc1RleHR9fWApKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFzaG91bGRBZGREZWZhdWx0ICYmIG9wZW5CcmFjZSAhPSBudWxsICYmIGNsb3NlQnJhY2UgIT0gbnVsbCkge1xuICAgICAgLy8gYGltcG9ydCB7Li4ufSAnLi9mb28nYCDihpIgYGltcG9ydCB7Li4uLCAuLi59IGZyb20gJy4vZm9vJ2BcbiAgICAgIGZpeGVzLnB1c2goZml4ZXIuaW5zZXJ0VGV4dEJlZm9yZShjbG9zZUJyYWNlLCBzcGVjaWZpZXJzVGV4dCkpO1xuICAgIH1cblxuICAgIC8vIFJlbW92ZSBpbXBvcnRzIHdob3NlIHNwZWNpZmllcnMgaGF2ZSBiZWVuIG1vdmVkIGludG8gdGhlIGZpcnN0IGltcG9ydC5cbiAgICBzcGVjaWZpZXJzLmZvckVhY2goKHNwZWNpZmllcikgPT4ge1xuICAgICAgY29uc3QgaW1wb3J0Tm9kZSA9IHNwZWNpZmllci5pbXBvcnROb2RlO1xuICAgICAgZml4ZXMucHVzaChmaXhlci5yZW1vdmUoaW1wb3J0Tm9kZSkpO1xuXG4gICAgICBjb25zdCBjaGFyQWZ0ZXJJbXBvcnRSYW5nZSA9IFtpbXBvcnROb2RlLnJhbmdlWzFdLCBpbXBvcnROb2RlLnJhbmdlWzFdICsgMV07XG4gICAgICBjb25zdCBjaGFyQWZ0ZXJJbXBvcnQgPSBzb3VyY2VDb2RlLnRleHQuc3Vic3RyaW5nKGNoYXJBZnRlckltcG9ydFJhbmdlWzBdLCBjaGFyQWZ0ZXJJbXBvcnRSYW5nZVsxXSk7XG4gICAgICBpZiAoY2hhckFmdGVySW1wb3J0ID09PSAnXFxuJykge1xuICAgICAgICBmaXhlcy5wdXNoKGZpeGVyLnJlbW92ZVJhbmdlKGNoYXJBZnRlckltcG9ydFJhbmdlKSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBSZW1vdmUgaW1wb3J0cyB3aG9zZSBkZWZhdWx0IGltcG9ydCBoYXMgYmVlbiBtb3ZlZCB0byB0aGUgZmlyc3QgaW1wb3J0LFxuICAgIC8vIGFuZCBzaWRlLWVmZmVjdC1vbmx5IGltcG9ydHMgdGhhdCBhcmUgdW5uZWNlc3NhcnkgZHVlIHRvIHRoZSBmaXJzdFxuICAgIC8vIGltcG9ydC5cbiAgICB1bm5lY2Vzc2FyeUltcG9ydHMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgZml4ZXMucHVzaChmaXhlci5yZW1vdmUobm9kZSkpO1xuXG4gICAgICBjb25zdCBjaGFyQWZ0ZXJJbXBvcnRSYW5nZSA9IFtub2RlLnJhbmdlWzFdLCBub2RlLnJhbmdlWzFdICsgMV07XG4gICAgICBjb25zdCBjaGFyQWZ0ZXJJbXBvcnQgPSBzb3VyY2VDb2RlLnRleHQuc3Vic3RyaW5nKGNoYXJBZnRlckltcG9ydFJhbmdlWzBdLCBjaGFyQWZ0ZXJJbXBvcnRSYW5nZVsxXSk7XG4gICAgICBpZiAoY2hhckFmdGVySW1wb3J0ID09PSAnXFxuJykge1xuICAgICAgICBmaXhlcy5wdXNoKGZpeGVyLnJlbW92ZVJhbmdlKGNoYXJBZnRlckltcG9ydFJhbmdlKSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZml4ZXM7XG4gIH07XG59XG5cbi8qKiBAdHlwZSB7KGltcG9ydGVkOiBNYXA8c3RyaW5nLCBpbXBvcnQoJ2VzdHJlZScpLkltcG9ydERlY2xhcmF0aW9uW10+LCBjb250ZXh0OiBpbXBvcnQoJ2VzbGludCcpLlJ1bGUuUnVsZUNvbnRleHQpID0+IHZvaWR9ICovXG5mdW5jdGlvbiBjaGVja0ltcG9ydHMoaW1wb3J0ZWQsIGNvbnRleHQpIHtcbiAgZm9yIChjb25zdCBbbW9kdWxlLCBub2Rlc10gb2YgaW1wb3J0ZWQuZW50cmllcygpKSB7XG4gICAgaWYgKG5vZGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgJyR7bW9kdWxlfScgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMuYDtcbiAgICAgIGNvbnN0IFtmaXJzdCwgLi4ucmVzdF0gPSBub2RlcztcbiAgICAgIGNvbnN0IHNvdXJjZUNvZGUgPSBnZXRTb3VyY2VDb2RlKGNvbnRleHQpO1xuICAgICAgY29uc3QgZml4ID0gZ2V0Rml4KGZpcnN0LCByZXN0LCBzb3VyY2VDb2RlLCBjb250ZXh0KTtcblxuICAgICAgY29udGV4dC5yZXBvcnQoe1xuICAgICAgICBub2RlOiBmaXJzdC5zb3VyY2UsXG4gICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIGZpeCwgLy8gQXR0YWNoIHRoZSBhdXRvZml4IChpZiBhbnkpIHRvIHRoZSBmaXJzdCBpbXBvcnQuXG4gICAgICB9KTtcblxuICAgICAgcmVzdC5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgIGNvbnRleHQucmVwb3J0KHtcbiAgICAgICAgICBub2RlOiBub2RlLnNvdXJjZSxcbiAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG4vKiogQHR5cGUge2ltcG9ydCgnZXNsaW50JykuUnVsZS5SdWxlTW9kdWxlfSAqL1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG1ldGE6IHtcbiAgICB0eXBlOiAncHJvYmxlbScsXG4gICAgZG9jczoge1xuICAgICAgY2F0ZWdvcnk6ICdTdHlsZSBndWlkZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0ZvcmJpZCByZXBlYXRlZCBpbXBvcnQgb2YgdGhlIHNhbWUgbW9kdWxlIGluIG11bHRpcGxlIHBsYWNlcy4nLFxuICAgICAgdXJsOiBkb2NzVXJsKCduby1kdXBsaWNhdGVzJyksXG4gICAgfSxcbiAgICBmaXhhYmxlOiAnY29kZScsXG4gICAgc2NoZW1hOiBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgY29uc2lkZXJRdWVyeVN0cmluZzoge1xuICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgJ3ByZWZlci1pbmxpbmUnOiB7XG4gICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGZhbHNlLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuXG4gIC8qKiBAcGFyYW0ge2ltcG9ydCgnZXNsaW50JykuUnVsZS5SdWxlQ29udGV4dH0gY29udGV4dCAqL1xuICBjcmVhdGUoY29udGV4dCkge1xuICAgIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cbiAgICAvLyBQcmVwYXJlIHRoZSByZXNvbHZlciBmcm9tIG9wdGlvbnMuXG4gICAgY29uc3QgY29uc2lkZXJRdWVyeVN0cmluZ09wdGlvbiA9IGNvbnRleHQub3B0aW9uc1swXSAmJiBjb250ZXh0Lm9wdGlvbnNbMF0uY29uc2lkZXJRdWVyeVN0cmluZztcbiAgICAvKiogQHR5cGUge2Jvb2xlYW59ICovXG4gICAgY29uc3QgcHJlZmVySW5saW5lID0gY29udGV4dC5vcHRpb25zWzBdICYmIGNvbnRleHQub3B0aW9uc1swXVsncHJlZmVyLWlubGluZSddO1xuICAgIGNvbnN0IGRlZmF1bHRSZXNvbHZlciA9IChzb3VyY2VQYXRoKSA9PiByZXNvbHZlKHNvdXJjZVBhdGgsIGNvbnRleHQpIHx8IHNvdXJjZVBhdGg7XG4gICAgY29uc3QgcmVzb2x2ZXIgPSBjb25zaWRlclF1ZXJ5U3RyaW5nT3B0aW9uID8gKHNvdXJjZVBhdGgpID0+IHtcbiAgICAgIGNvbnN0IHBhcnRzID0gc291cmNlUGF0aC5tYXRjaCgvXihbXj9dKilcXD8oLiopJC8pO1xuICAgICAgaWYgKCFwYXJ0cykge1xuICAgICAgICByZXR1cm4gZGVmYXVsdFJlc29sdmVyKHNvdXJjZVBhdGgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGAke2RlZmF1bHRSZXNvbHZlcihwYXJ0c1sxXSl9PyR7cGFydHNbMl19YDtcbiAgICB9IDogZGVmYXVsdFJlc29sdmVyO1xuXG4gICAgLyoqIEB0eXBlIHtNYXA8dW5rbm93biwgeyBpbXBvcnRlZDogTWFwPHN0cmluZywgaW1wb3J0KCdlc3RyZWUnKS5JbXBvcnREZWNsYXJhdGlvbltdPiwgbnNJbXBvcnRlZDogTWFwPHN0cmluZywgaW1wb3J0KCdlc3RyZWUnKS5JbXBvcnREZWNsYXJhdGlvbltdPiwgZGVmYXVsdFR5cGVzSW1wb3J0ZWQ6IE1hcDxzdHJpbmcsIGltcG9ydCgnZXN0cmVlJykuSW1wb3J0RGVjbGFyYXRpb25bXT4sIG5hbWVkVHlwZXNJbXBvcnRlZDogTWFwPHN0cmluZywgaW1wb3J0KCdlc3RyZWUnKS5JbXBvcnREZWNsYXJhdGlvbltdPn0+fSAqL1xuICAgIGNvbnN0IG1vZHVsZU1hcHMgPSBuZXcgTWFwKCk7XG5cbiAgICAvKiogQHBhcmFtIHtpbXBvcnQoJ2VzdHJlZScpLkltcG9ydERlY2xhcmF0aW9ufSBuICovXG4gICAgLyoqIEByZXR1cm5zIHt0eXBlb2YgbW9kdWxlTWFwc1trZXlvZiB0eXBlb2YgbW9kdWxlTWFwc119ICovXG4gICAgZnVuY3Rpb24gZ2V0SW1wb3J0TWFwKG4pIHtcbiAgICAgIGlmICghbW9kdWxlTWFwcy5oYXMobi5wYXJlbnQpKSB7XG4gICAgICAgIG1vZHVsZU1hcHMuc2V0KG4ucGFyZW50LCAvKiogQHR5cGUge3R5cGVvZiBtb2R1bGVNYXBzfSAqLyB7XG4gICAgICAgICAgaW1wb3J0ZWQ6IG5ldyBNYXAoKSxcbiAgICAgICAgICBuc0ltcG9ydGVkOiBuZXcgTWFwKCksXG4gICAgICAgICAgZGVmYXVsdFR5cGVzSW1wb3J0ZWQ6IG5ldyBNYXAoKSxcbiAgICAgICAgICBuYW1lZFR5cGVzSW1wb3J0ZWQ6IG5ldyBNYXAoKSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBjb25zdCBtYXAgPSBtb2R1bGVNYXBzLmdldChuLnBhcmVudCk7XG4gICAgICBpZiAoIXByZWZlcklubGluZSAmJiBuLmltcG9ydEtpbmQgPT09ICd0eXBlJykge1xuICAgICAgICByZXR1cm4gbi5zcGVjaWZpZXJzLmxlbmd0aCA+IDAgJiYgbi5zcGVjaWZpZXJzWzBdLnR5cGUgPT09ICdJbXBvcnREZWZhdWx0U3BlY2lmaWVyJyA/IG1hcC5kZWZhdWx0VHlwZXNJbXBvcnRlZCA6IG1hcC5uYW1lZFR5cGVzSW1wb3J0ZWQ7XG4gICAgICB9XG4gICAgICBpZiAoIXByZWZlcklubGluZSAmJiBuLnNwZWNpZmllcnMuc29tZSgoc3BlYykgPT4gc3BlYy5pbXBvcnRLaW5kID09PSAndHlwZScpKSB7XG4gICAgICAgIHJldHVybiBtYXAubmFtZWRUeXBlc0ltcG9ydGVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaGFzTmFtZXNwYWNlKG4pID8gbWFwLm5zSW1wb3J0ZWQgOiBtYXAuaW1wb3J0ZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC8qKiBAcGFyYW0ge2ltcG9ydCgnZXN0cmVlJykuSW1wb3J0RGVjbGFyYXRpb259IG4gKi9cbiAgICAgIEltcG9ydERlY2xhcmF0aW9uKG4pIHtcbiAgICAgICAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXG4gICAgICAgIC8vIHJlc29sdmVkIHBhdGggd2lsbCBjb3ZlciBhbGlhc2VkIGR1cGxpY2F0ZXNcbiAgICAgICAgY29uc3QgcmVzb2x2ZWRQYXRoID0gcmVzb2x2ZXIobi5zb3VyY2UudmFsdWUpO1xuICAgICAgICBjb25zdCBpbXBvcnRNYXAgPSBnZXRJbXBvcnRNYXAobik7XG5cbiAgICAgICAgaWYgKGltcG9ydE1hcC5oYXMocmVzb2x2ZWRQYXRoKSkge1xuICAgICAgICAgIGltcG9ydE1hcC5nZXQocmVzb2x2ZWRQYXRoKS5wdXNoKG4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGltcG9ydE1hcC5zZXQocmVzb2x2ZWRQYXRoLCBbbl0pO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICAnUHJvZ3JhbTpleGl0JygpIHtcbiAgICAgICAgZm9yIChjb25zdCBtYXAgb2YgbW9kdWxlTWFwcy52YWx1ZXMoKSkge1xuICAgICAgICAgIGNoZWNrSW1wb3J0cyhtYXAuaW1wb3J0ZWQsIGNvbnRleHQpO1xuICAgICAgICAgIGNoZWNrSW1wb3J0cyhtYXAubnNJbXBvcnRlZCwgY29udGV4dCk7XG4gICAgICAgICAgY2hlY2tJbXBvcnRzKG1hcC5kZWZhdWx0VHlwZXNJbXBvcnRlZCwgY29udGV4dCk7XG4gICAgICAgICAgY2hlY2tJbXBvcnRzKG1hcC5uYW1lZFR5cGVzSW1wb3J0ZWQsIGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH07XG4gIH0sXG59O1xuIl19