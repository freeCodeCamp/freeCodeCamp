'use strict';var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {return typeof obj;} : function (obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};var _slicedToArray = function () {function sliceIterator(arr, i) {var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"]) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}return function (arr, i) {if (Array.isArray(arr)) {return arr;} else if (Symbol.iterator in Object(arr)) {return sliceIterator(arr, i);} else {throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();

var _minimatch = require('minimatch');var _minimatch2 = _interopRequireDefault(_minimatch);
var _arrayIncludes = require('array-includes');var _arrayIncludes2 = _interopRequireDefault(_arrayIncludes);
var _object = require('object.groupby');var _object2 = _interopRequireDefault(_object);
var _contextCompat = require('eslint-module-utils/contextCompat');
var _stringPrototype = require('string.prototype.trimend');var _stringPrototype2 = _interopRequireDefault(_stringPrototype);

var _importType = require('../core/importType');var _importType2 = _interopRequireDefault(_importType);
var _staticRequire = require('../core/staticRequire');var _staticRequire2 = _interopRequireDefault(_staticRequire);
var _docsUrl = require('../docsUrl');var _docsUrl2 = _interopRequireDefault(_docsUrl);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}

var categories = {
  named: 'named',
  'import': 'import',
  exports: 'exports' };


var defaultGroups = ['builtin', 'external', 'parent', 'sibling', 'index'];

// REPORTING AND FIXING

function reverse(array) {
  return array.map(function (v) {return Object.assign({}, v, { rank: -v.rank });}).reverse();
}

function getTokensOrCommentsAfter(sourceCode, node, count) {
  var currentNodeOrToken = node;
  var result = [];
  for (var i = 0; i < count; i++) {
    currentNodeOrToken = sourceCode.getTokenOrCommentAfter(currentNodeOrToken);
    if (currentNodeOrToken == null) {
      break;
    }
    result.push(currentNodeOrToken);
  }
  return result;
}

function getTokensOrCommentsBefore(sourceCode, node, count) {
  var currentNodeOrToken = node;
  var result = [];
  for (var i = 0; i < count; i++) {
    currentNodeOrToken = sourceCode.getTokenOrCommentBefore(currentNodeOrToken);
    if (currentNodeOrToken == null) {
      break;
    }
    result.push(currentNodeOrToken);
  }
  return result.reverse();
}

function takeTokensAfterWhile(sourceCode, node, condition) {
  var tokens = getTokensOrCommentsAfter(sourceCode, node, 100);
  var result = [];
  for (var i = 0; i < tokens.length; i++) {
    if (condition(tokens[i])) {
      result.push(tokens[i]);
    } else {
      break;
    }
  }
  return result;
}

function takeTokensBeforeWhile(sourceCode, node, condition) {
  var tokens = getTokensOrCommentsBefore(sourceCode, node, 100);
  var result = [];
  for (var i = tokens.length - 1; i >= 0; i--) {
    if (condition(tokens[i])) {
      result.push(tokens[i]);
    } else {
      break;
    }
  }
  return result.reverse();
}

function findOutOfOrder(imported) {
  if (imported.length === 0) {
    return [];
  }
  var maxSeenRankNode = imported[0];
  return imported.filter(function (importedModule) {
    var res = importedModule.rank < maxSeenRankNode.rank;
    if (maxSeenRankNode.rank < importedModule.rank) {
      maxSeenRankNode = importedModule;
    }
    return res;
  });
}

function findRootNode(node) {
  var parent = node;
  while (parent.parent != null && parent.parent.body == null) {
    parent = parent.parent;
  }
  return parent;
}

function commentOnSameLineAs(node) {
  return function (token) {return (token.type === 'Block' || token.type === 'Line') &&
    token.loc.start.line === token.loc.end.line &&
    token.loc.end.line === node.loc.end.line;};
}

function findEndOfLineWithComments(sourceCode, node) {
  var tokensToEndOfLine = takeTokensAfterWhile(sourceCode, node, commentOnSameLineAs(node));
  var endOfTokens = tokensToEndOfLine.length > 0 ?
  tokensToEndOfLine[tokensToEndOfLine.length - 1].range[1] :
  node.range[1];
  var result = endOfTokens;
  for (var i = endOfTokens; i < sourceCode.text.length; i++) {
    if (sourceCode.text[i] === '\n') {
      result = i + 1;
      break;
    }
    if (sourceCode.text[i] !== ' ' && sourceCode.text[i] !== '\t' && sourceCode.text[i] !== '\r') {
      break;
    }
    result = i + 1;
  }
  return result;
}

function findStartOfLineWithComments(sourceCode, node) {
  var tokensToEndOfLine = takeTokensBeforeWhile(sourceCode, node, commentOnSameLineAs(node));
  var startOfTokens = tokensToEndOfLine.length > 0 ? tokensToEndOfLine[0].range[0] : node.range[0];
  var result = startOfTokens;
  for (var i = startOfTokens - 1; i > 0; i--) {
    if (sourceCode.text[i] !== ' ' && sourceCode.text[i] !== '\t') {
      break;
    }
    result = i;
  }
  return result;
}

function findSpecifierStart(sourceCode, node) {
  var token = void 0;

  do {
    token = sourceCode.getTokenBefore(node);
  } while (token.value !== ',' && token.value !== '{');

  return token.range[1];
}

function findSpecifierEnd(sourceCode, node) {
  var token = void 0;

  do {
    token = sourceCode.getTokenAfter(node);
  } while (token.value !== ',' && token.value !== '}');

  return token.range[0];
}

function isRequireExpression(expr) {
  return expr != null &&
  expr.type === 'CallExpression' &&
  expr.callee != null &&
  expr.callee.name === 'require' &&
  expr.arguments != null &&
  expr.arguments.length === 1 &&
  expr.arguments[0].type === 'Literal';
}

function isSupportedRequireModule(node) {
  if (node.type !== 'VariableDeclaration') {
    return false;
  }
  if (node.declarations.length !== 1) {
    return false;
  }
  var decl = node.declarations[0];
  var isPlainRequire = decl.id && (
  decl.id.type === 'Identifier' || decl.id.type === 'ObjectPattern') &&
  isRequireExpression(decl.init);
  var isRequireWithMemberExpression = decl.id && (
  decl.id.type === 'Identifier' || decl.id.type === 'ObjectPattern') &&
  decl.init != null &&
  decl.init.type === 'CallExpression' &&
  decl.init.callee != null &&
  decl.init.callee.type === 'MemberExpression' &&
  isRequireExpression(decl.init.callee.object);
  return isPlainRequire || isRequireWithMemberExpression;
}

function isPlainImportModule(node) {
  return node.type === 'ImportDeclaration' && node.specifiers != null && node.specifiers.length > 0;
}

function isPlainImportEquals(node) {
  return node.type === 'TSImportEqualsDeclaration' && node.moduleReference.expression;
}

function isCJSExports(context, node) {
  if (
  node.type === 'MemberExpression' &&
  node.object.type === 'Identifier' &&
  node.property.type === 'Identifier' &&
  node.object.name === 'module' &&
  node.property.name === 'exports')
  {
    return (0, _contextCompat.getScope)(context, node).variables.findIndex(function (variable) {return variable.name === 'module';}) === -1;
  }
  if (
  node.type === 'Identifier' &&
  node.name === 'exports')
  {
    return (0, _contextCompat.getScope)(context, node).variables.findIndex(function (variable) {return variable.name === 'exports';}) === -1;
  }
}

function getNamedCJSExports(context, node) {
  if (node.type !== 'MemberExpression') {
    return;
  }
  var result = [];
  var root = node;
  var parent = null;
  while (root.type === 'MemberExpression') {
    if (root.property.type !== 'Identifier') {
      return;
    }
    result.unshift(root.property.name);
    parent = root;
    root = root.object;
  }

  if (isCJSExports(context, root)) {
    return result;
  }

  if (isCJSExports(context, parent)) {
    return result.slice(1);
  }
}

function canCrossNodeWhileReorder(node) {
  return isSupportedRequireModule(node) || isPlainImportModule(node) || isPlainImportEquals(node);
}

function canReorderItems(firstNode, secondNode) {
  var parent = firstNode.parent;var _sort =
  [
  parent.body.indexOf(firstNode),
  parent.body.indexOf(secondNode)].
  sort(),_sort2 = _slicedToArray(_sort, 2),firstIndex = _sort2[0],secondIndex = _sort2[1];
  var nodesBetween = parent.body.slice(firstIndex, secondIndex + 1);var _iteratorNormalCompletion = true;var _didIteratorError = false;var _iteratorError = undefined;try {
    for (var _iterator = nodesBetween[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {var nodeBetween = _step.value;
      if (!canCrossNodeWhileReorder(nodeBetween)) {
        return false;
      }
    }} catch (err) {_didIteratorError = true;_iteratorError = err;} finally {try {if (!_iteratorNormalCompletion && _iterator['return']) {_iterator['return']();}} finally {if (_didIteratorError) {throw _iteratorError;}}}
  return true;
}

function makeImportDescription(node) {
  if (node.type === 'export') {
    if (node.node.exportKind === 'type') {
      return 'type export';
    }
    return 'export';
  }
  if (node.node.importKind === 'type') {
    return 'type import';
  }
  if (node.node.importKind === 'typeof') {
    return 'typeof import';
  }
  return 'import';
}

function fixOutOfOrder(context, firstNode, secondNode, order, category) {
  var isNamed = category === categories.named;
  var isExports = category === categories.exports;
  var sourceCode = (0, _contextCompat.getSourceCode)(context);var _ref =




  isNamed ? {
    firstRoot: firstNode.node,
    secondRoot: secondNode.node } :
  {
    firstRoot: findRootNode(firstNode.node),
    secondRoot: findRootNode(secondNode.node) },firstRoot = _ref.firstRoot,secondRoot = _ref.secondRoot;var _ref2 =







  isNamed ? {
    firstRootStart: findSpecifierStart(sourceCode, firstRoot),
    firstRootEnd: findSpecifierEnd(sourceCode, firstRoot),
    secondRootStart: findSpecifierStart(sourceCode, secondRoot),
    secondRootEnd: findSpecifierEnd(sourceCode, secondRoot) } :
  {
    firstRootStart: findStartOfLineWithComments(sourceCode, firstRoot),
    firstRootEnd: findEndOfLineWithComments(sourceCode, firstRoot),
    secondRootStart: findStartOfLineWithComments(sourceCode, secondRoot),
    secondRootEnd: findEndOfLineWithComments(sourceCode, secondRoot) },firstRootStart = _ref2.firstRootStart,firstRootEnd = _ref2.firstRootEnd,secondRootStart = _ref2.secondRootStart,secondRootEnd = _ref2.secondRootEnd;


  if (firstNode.displayName === secondNode.displayName) {
    if (firstNode.alias) {
      firstNode.displayName = String(firstNode.displayName) + ' as ' + String(firstNode.alias);
    }
    if (secondNode.alias) {
      secondNode.displayName = String(secondNode.displayName) + ' as ' + String(secondNode.alias);
    }
  }

  var firstImport = String(makeImportDescription(firstNode)) + ' of `' + String(firstNode.displayName) + '`';
  var secondImport = '`' + String(secondNode.displayName) + '` ' + String(makeImportDescription(secondNode));
  var message = secondImport + ' should occur ' + String(order) + ' ' + firstImport;

  if (isNamed) {
    var firstCode = sourceCode.text.slice(firstRootStart, firstRoot.range[1]);
    var firstTrivia = sourceCode.text.slice(firstRoot.range[1], firstRootEnd);
    var secondCode = sourceCode.text.slice(secondRootStart, secondRoot.range[1]);
    var secondTrivia = sourceCode.text.slice(secondRoot.range[1], secondRootEnd);

    if (order === 'before') {
      var trimmedTrivia = (0, _stringPrototype2['default'])(secondTrivia);
      var gapCode = sourceCode.text.slice(firstRootEnd, secondRootStart - 1);
      var whitespaces = secondTrivia.slice(trimmedTrivia.length);
      context.report({
        node: secondNode.node,
        message: message,
        fix: function () {function fix(fixer) {return fixer.replaceTextRange(
            [firstRootStart, secondRootEnd], String(
            secondCode) + ',' + String(trimmedTrivia) + String(firstCode) + String(firstTrivia) + String(gapCode) + String(whitespaces));}return fix;}() });


    } else if (order === 'after') {
      var _trimmedTrivia = (0, _stringPrototype2['default'])(firstTrivia);
      var _gapCode = sourceCode.text.slice(secondRootEnd + 1, firstRootStart);
      var _whitespaces = firstTrivia.slice(_trimmedTrivia.length);
      context.report({
        node: secondNode.node,
        message: message,
        fix: function () {function fix(fixes) {return fixes.replaceTextRange(
            [secondRootStart, firstRootEnd], '' + String(
            _gapCode) + String(firstCode) + ',' + String(_trimmedTrivia) + String(secondCode) + String(_whitespaces));}return fix;}() });


    }
  } else {
    var canFix = isExports || canReorderItems(firstRoot, secondRoot);
    var newCode = sourceCode.text.substring(secondRootStart, secondRootEnd);

    if (newCode[newCode.length - 1] !== '\n') {
      newCode = String(newCode) + '\n';
    }

    if (order === 'before') {
      context.report({
        node: secondNode.node,
        message: message,
        fix: canFix && function (fixer) {return fixer.replaceTextRange(
          [firstRootStart, secondRootEnd],
          newCode + sourceCode.text.substring(firstRootStart, secondRootStart));} });


    } else if (order === 'after') {
      context.report({
        node: secondNode.node,
        message: message,
        fix: canFix && function (fixer) {return fixer.replaceTextRange(
          [secondRootStart, firstRootEnd],
          sourceCode.text.substring(secondRootEnd, firstRootEnd) + newCode);} });


    }
  }
}

function reportOutOfOrder(context, imported, outOfOrder, order, category) {
  outOfOrder.forEach(function (imp) {
    var found = imported.find(function () {function hasHigherRank(importedItem) {
        return importedItem.rank > imp.rank;
      }return hasHigherRank;}());
    fixOutOfOrder(context, found, imp, order, category);
  });
}

function makeOutOfOrderReport(context, imported, category) {
  var outOfOrder = findOutOfOrder(imported);
  if (!outOfOrder.length) {
    return;
  }

  // There are things to report. Try to minimize the number of reported errors.
  var reversedImported = reverse(imported);
  var reversedOrder = findOutOfOrder(reversedImported);
  if (reversedOrder.length < outOfOrder.length) {
    reportOutOfOrder(context, reversedImported, reversedOrder, 'after', category);
    return;
  }
  reportOutOfOrder(context, imported, outOfOrder, 'before', category);
}

var compareString = function compareString(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
};

/** Some parsers (languages without types) don't provide ImportKind */
var DEFAULT_IMPORT_KIND = 'value';
var getNormalizedValue = function getNormalizedValue(node, toLowerCase) {
  var value = node.value;
  return toLowerCase ? String(value).toLowerCase() : value;
};

function getSorter(alphabetizeOptions) {
  var multiplier = alphabetizeOptions.order === 'asc' ? 1 : -1;
  var orderImportKind = alphabetizeOptions.orderImportKind;
  var multiplierImportKind = orderImportKind !== 'ignore' && (
  alphabetizeOptions.orderImportKind === 'asc' ? 1 : -1);

  return function () {function importsSorter(nodeA, nodeB) {
      var importA = getNormalizedValue(nodeA, alphabetizeOptions.caseInsensitive);
      var importB = getNormalizedValue(nodeB, alphabetizeOptions.caseInsensitive);
      var result = 0;

      if (!(0, _arrayIncludes2['default'])(importA, '/') && !(0, _arrayIncludes2['default'])(importB, '/')) {
        result = compareString(importA, importB);
      } else {
        var A = importA.split('/');
        var B = importB.split('/');
        var a = A.length;
        var b = B.length;

        for (var i = 0; i < Math.min(a, b); i++) {
          // Skip comparing the first path segment, if they are relative segments for both imports
          if (i === 0 && (A[i] === '.' || A[i] === '..') && (B[i] === '.' || B[i] === '..')) {
            // If one is sibling and the other parent import, no need to compare at all, since the paths belong in different groups
            if (A[i] !== B[i]) {break;}
            continue;
          }
          result = compareString(A[i], B[i]);
          if (result) {break;}
        }

        if (!result && a !== b) {
          result = a < b ? -1 : 1;
        }
      }

      result = result * multiplier;

      // In case the paths are equal (result === 0), sort them by importKind
      if (!result && multiplierImportKind) {
        result = multiplierImportKind * compareString(
        nodeA.node.importKind || DEFAULT_IMPORT_KIND,
        nodeB.node.importKind || DEFAULT_IMPORT_KIND);

      }

      return result;
    }return importsSorter;}();
}

function mutateRanksToAlphabetize(imported, alphabetizeOptions) {
  var groupedByRanks = (0, _object2['default'])(imported, function (item) {return item.rank;});

  var sorterFn = getSorter(alphabetizeOptions);

  // sort group keys so that they can be iterated on in order
  var groupRanks = Object.keys(groupedByRanks).sort(function (a, b) {
    return a - b;
  });

  // sort imports locally within their group
  groupRanks.forEach(function (groupRank) {
    groupedByRanks[groupRank].sort(sorterFn);
  });

  // assign globally unique rank to each import
  var newRank = 0;
  var alphabetizedRanks = groupRanks.reduce(function (acc, groupRank) {
    groupedByRanks[groupRank].forEach(function (importedItem) {
      acc[String(importedItem.value) + '|' + String(importedItem.node.importKind)] = parseInt(groupRank, 10) + newRank;
      newRank += 1;
    });
    return acc;
  }, {});

  // mutate the original group-rank with alphabetized-rank
  imported.forEach(function (importedItem) {
    importedItem.rank = alphabetizedRanks[String(importedItem.value) + '|' + String(importedItem.node.importKind)];
  });
}

// DETECTING

function computePathRank(ranks, pathGroups, path, maxPosition) {
  for (var i = 0, l = pathGroups.length; i < l; i++) {var _pathGroups$i =
    pathGroups[i],pattern = _pathGroups$i.pattern,patternOptions = _pathGroups$i.patternOptions,group = _pathGroups$i.group,_pathGroups$i$positio = _pathGroups$i.position,position = _pathGroups$i$positio === undefined ? 1 : _pathGroups$i$positio;
    if ((0, _minimatch2['default'])(path, pattern, patternOptions || { nocomment: true })) {
      return ranks[group] + position / maxPosition;
    }
  }
}

function computeRank(context, ranks, importEntry, excludedImportTypes, isSortingTypesGroup) {
  var impType = void 0;
  var rank = void 0;

  var isTypeGroupInGroups = ranks.omittedTypes.indexOf('type') === -1;
  var isTypeOnlyImport = importEntry.node.importKind === 'type';
  var isExcludedFromPathRank = isTypeOnlyImport && isTypeGroupInGroups && excludedImportTypes.has('type');

  if (importEntry.type === 'import:object') {
    impType = 'object';
  } else if (isTypeOnlyImport && isTypeGroupInGroups && !isSortingTypesGroup) {
    impType = 'type';
  } else {
    impType = (0, _importType2['default'])(importEntry.value, context);
  }

  if (!excludedImportTypes.has(impType) && !isExcludedFromPathRank) {
    rank = computePathRank(ranks.groups, ranks.pathGroups, importEntry.value, ranks.maxPosition);
  }

  if (typeof rank === 'undefined') {
    rank = ranks.groups[impType];

    if (typeof rank === 'undefined') {
      return -1;
    }
  }

  if (isTypeOnlyImport && isSortingTypesGroup) {
    rank = ranks.groups.type + rank / 10;
  }

  if (importEntry.type !== 'import' && !importEntry.type.startsWith('import:')) {
    rank += 100;
  }

  return rank;
}

function registerNode(context, importEntry, ranks, imported, excludedImportTypes, isSortingTypesGroup) {
  var rank = computeRank(context, ranks, importEntry, excludedImportTypes, isSortingTypesGroup);
  if (rank !== -1) {
    var importNode = importEntry.node;

    if (importEntry.type === 'require' && importNode.parent.parent.type === 'VariableDeclaration') {
      importNode = importNode.parent.parent;
    }

    imported.push(Object.assign({},
    importEntry, {
      rank: rank,
      isMultiline: importNode.loc.end.line !== importNode.loc.start.line }));

  }
}

function getRequireBlock(node) {
  var n = node;
  // Handle cases like `const baz = require('foo').bar.baz`
  // and `const foo = require('foo')()`
  while (
  n.parent.type === 'MemberExpression' && n.parent.object === n ||
  n.parent.type === 'CallExpression' && n.parent.callee === n)
  {
    n = n.parent;
  }
  if (
  n.parent.type === 'VariableDeclarator' &&
  n.parent.parent.type === 'VariableDeclaration' &&
  n.parent.parent.parent.type === 'Program')
  {
    return n.parent.parent.parent;
  }
}

var types = ['builtin', 'external', 'internal', 'unknown', 'parent', 'sibling', 'index', 'object', 'type'];

/**
                                                                                                             * Creates an object with type-rank pairs.
                                                                                                             *
                                                                                                             * Example: { index: 0, sibling: 1, parent: 1, external: 1, builtin: 2, internal: 2 }
                                                                                                             */
function convertGroupsToRanks(groups) {
  var rankObject = groups.reduce(function (res, group, index) {
    [].concat(group).forEach(function (groupItem) {
      res[groupItem] = index * 2;
    });
    return res;
  }, {});

  var omittedTypes = types.filter(function (type) {
    return typeof rankObject[type] === 'undefined';
  });

  var ranks = omittedTypes.reduce(function (res, type) {
    res[type] = groups.length * 2;
    return res;
  }, rankObject);

  return { groups: ranks, omittedTypes: omittedTypes };
}

function convertPathGroupsForRanks(pathGroups) {
  var after = {};
  var before = {};

  var transformed = pathGroups.map(function (pathGroup, index) {var
    group = pathGroup.group,positionString = pathGroup.position;
    var position = 0;
    if (positionString === 'after') {
      if (!after[group]) {
        after[group] = 1;
      }
      position = after[group]++;
    } else if (positionString === 'before') {
      if (!before[group]) {
        before[group] = [];
      }
      before[group].push(index);
    }

    return Object.assign({}, pathGroup, { position: position });
  });

  var maxPosition = 1;

  Object.keys(before).forEach(function (group) {
    var groupLength = before[group].length;
    before[group].forEach(function (groupIndex, index) {
      transformed[groupIndex].position = -1 * (groupLength - index);
    });
    maxPosition = Math.max(maxPosition, groupLength);
  });

  Object.keys(after).forEach(function (key) {
    var groupNextPosition = after[key];
    maxPosition = Math.max(maxPosition, groupNextPosition - 1);
  });

  return {
    pathGroups: transformed,
    maxPosition: maxPosition > 10 ? Math.pow(10, Math.ceil(Math.log10(maxPosition))) : 10 };

}

function fixNewLineAfterImport(context, previousImport) {
  var prevRoot = findRootNode(previousImport.node);
  var tokensToEndOfLine = takeTokensAfterWhile(
  (0, _contextCompat.getSourceCode)(context),
  prevRoot,
  commentOnSameLineAs(prevRoot));


  var endOfLine = prevRoot.range[1];
  if (tokensToEndOfLine.length > 0) {
    endOfLine = tokensToEndOfLine[tokensToEndOfLine.length - 1].range[1];
  }
  return function (fixer) {return fixer.insertTextAfterRange([prevRoot.range[0], endOfLine], '\n');};
}

function removeNewLineAfterImport(context, currentImport, previousImport) {
  var sourceCode = (0, _contextCompat.getSourceCode)(context);
  var prevRoot = findRootNode(previousImport.node);
  var currRoot = findRootNode(currentImport.node);
  var rangeToRemove = [
  findEndOfLineWithComments(sourceCode, prevRoot),
  findStartOfLineWithComments(sourceCode, currRoot)];

  if (/^\s*$/.test(sourceCode.text.substring(rangeToRemove[0], rangeToRemove[1]))) {
    return function (fixer) {return fixer.removeRange(rangeToRemove);};
  }
  return undefined;
}

function makeNewlinesBetweenReport(context, imported, newlinesBetweenImports_, newlinesBetweenTypeOnlyImports_, distinctGroup, isSortingTypesGroup, isConsolidatingSpaceBetweenImports) {
  var getNumberOfEmptyLinesBetween = function getNumberOfEmptyLinesBetween(currentImport, previousImport) {
    var linesBetweenImports = (0, _contextCompat.getSourceCode)(context).lines.slice(
    previousImport.node.loc.end.line,
    currentImport.node.loc.start.line - 1);


    return linesBetweenImports.filter(function (line) {return !line.trim().length;}).length;
  };
  var getIsStartOfDistinctGroup = function getIsStartOfDistinctGroup(currentImport, previousImport) {return currentImport.rank - 1 >= previousImport.rank;};
  var previousImport = imported[0];

  imported.slice(1).forEach(function (currentImport) {
    var emptyLinesBetween = getNumberOfEmptyLinesBetween(
    currentImport,
    previousImport);


    var isStartOfDistinctGroup = getIsStartOfDistinctGroup(
    currentImport,
    previousImport);


    var isTypeOnlyImport = currentImport.node.importKind === 'type';
    var isPreviousImportTypeOnlyImport = previousImport.node.importKind === 'type';

    var isNormalImportNextToTypeOnlyImportAndRelevant = isTypeOnlyImport !== isPreviousImportTypeOnlyImport && isSortingTypesGroup;

    var isTypeOnlyImportAndRelevant = isTypeOnlyImport && isSortingTypesGroup;

    // In the special case where newlinesBetweenImports and consolidateIslands
    // want the opposite thing, consolidateIslands wins
    var newlinesBetweenImports = isSortingTypesGroup &&
    isConsolidatingSpaceBetweenImports && (
    previousImport.isMultiline || currentImport.isMultiline) &&
    newlinesBetweenImports_ === 'never' ?
    'always-and-inside-groups' :
    newlinesBetweenImports_;

    // In the special case where newlinesBetweenTypeOnlyImports and
    // consolidateIslands want the opposite thing, consolidateIslands wins
    var newlinesBetweenTypeOnlyImports = isSortingTypesGroup &&
    isConsolidatingSpaceBetweenImports && (
    isNormalImportNextToTypeOnlyImportAndRelevant ||
    previousImport.isMultiline ||
    currentImport.isMultiline) &&
    newlinesBetweenTypeOnlyImports_ === 'never' ?
    'always-and-inside-groups' :
    newlinesBetweenTypeOnlyImports_;

    var isNotIgnored = isTypeOnlyImportAndRelevant &&
    newlinesBetweenTypeOnlyImports !== 'ignore' ||
    !isTypeOnlyImportAndRelevant && newlinesBetweenImports !== 'ignore';

    if (isNotIgnored) {
      var shouldAssertNewlineBetweenGroups = (isTypeOnlyImportAndRelevant || isNormalImportNextToTypeOnlyImportAndRelevant) && (
      newlinesBetweenTypeOnlyImports === 'always' ||
      newlinesBetweenTypeOnlyImports === 'always-and-inside-groups') ||
      !isTypeOnlyImportAndRelevant && !isNormalImportNextToTypeOnlyImportAndRelevant && (
      newlinesBetweenImports === 'always' ||
      newlinesBetweenImports === 'always-and-inside-groups');

      var shouldAssertNoNewlineWithinGroup = (isTypeOnlyImportAndRelevant || isNormalImportNextToTypeOnlyImportAndRelevant) &&
      newlinesBetweenTypeOnlyImports !== 'always-and-inside-groups' ||
      !isTypeOnlyImportAndRelevant && !isNormalImportNextToTypeOnlyImportAndRelevant &&
      newlinesBetweenImports !== 'always-and-inside-groups';

      var shouldAssertNoNewlineBetweenGroup = !isSortingTypesGroup ||
      !isNormalImportNextToTypeOnlyImportAndRelevant ||
      newlinesBetweenTypeOnlyImports === 'never';

      var isTheNewlineBetweenImportsInTheSameGroup = distinctGroup && currentImport.rank === previousImport.rank ||
      !distinctGroup && !isStartOfDistinctGroup;

      // Let's try to cut down on linting errors sent to the user
      var alreadyReported = false;

      if (shouldAssertNewlineBetweenGroups) {
        if (currentImport.rank !== previousImport.rank && emptyLinesBetween === 0) {
          if (distinctGroup || isStartOfDistinctGroup) {
            alreadyReported = true;
            context.report({
              node: previousImport.node,
              message: 'There should be at least one empty line between import groups',
              fix: fixNewLineAfterImport(context, previousImport) });

          }
        } else if (emptyLinesBetween > 0 && shouldAssertNoNewlineWithinGroup) {
          if (isTheNewlineBetweenImportsInTheSameGroup) {
            alreadyReported = true;
            context.report({
              node: previousImport.node,
              message: 'There should be no empty line within import group',
              fix: removeNewLineAfterImport(context, currentImport, previousImport) });

          }
        }
      } else if (emptyLinesBetween > 0 && shouldAssertNoNewlineBetweenGroup) {
        alreadyReported = true;
        context.report({
          node: previousImport.node,
          message: 'There should be no empty line between import groups',
          fix: removeNewLineAfterImport(context, currentImport, previousImport) });

      }

      if (!alreadyReported && isConsolidatingSpaceBetweenImports) {
        if (emptyLinesBetween === 0 && currentImport.isMultiline) {
          context.report({
            node: previousImport.node,
            message: 'There should be at least one empty line between this import and the multi-line import that follows it',
            fix: fixNewLineAfterImport(context, previousImport) });

        } else if (emptyLinesBetween === 0 && previousImport.isMultiline) {
          context.report({
            node: previousImport.node,
            message: 'There should be at least one empty line between this multi-line import and the import that follows it',
            fix: fixNewLineAfterImport(context, previousImport) });

        } else if (
        emptyLinesBetween > 0 &&
        !previousImport.isMultiline &&
        !currentImport.isMultiline &&
        isTheNewlineBetweenImportsInTheSameGroup)
        {
          context.report({
            node: previousImport.node,
            message:
            'There should be no empty lines between this single-line import and the single-line import that follows it',
            fix: removeNewLineAfterImport(context, currentImport, previousImport) });

        }
      }
    }

    previousImport = currentImport;
  });
}

function getAlphabetizeConfig(options) {
  var alphabetize = options.alphabetize || {};
  var order = alphabetize.order || 'ignore';
  var orderImportKind = alphabetize.orderImportKind || 'ignore';
  var caseInsensitive = alphabetize.caseInsensitive || false;

  return { order: order, orderImportKind: orderImportKind, caseInsensitive: caseInsensitive };
}

// TODO, semver-major: Change the default of "distinctGroup" from true to false
var defaultDistinctGroup = true;

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      category: 'Style guide',
      description: 'Enforce a convention in module import order.',
      url: (0, _docsUrl2['default'])('order') },


    fixable: 'code',
    schema: [
    {
      type: 'object',
      properties: {
        groups: {
          type: 'array',
          uniqueItems: true,
          items: {
            oneOf: [
            { 'enum': types },
            {
              type: 'array',
              uniqueItems: true,
              items: { 'enum': types } }] } },




        pathGroupsExcludedImportTypes: {
          type: 'array' },

        distinctGroup: {
          type: 'boolean',
          'default': defaultDistinctGroup },

        pathGroups: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              pattern: {
                type: 'string' },

              patternOptions: {
                type: 'object' },

              group: {
                type: 'string',
                'enum': types },

              position: {
                type: 'string',
                'enum': ['after', 'before'] } },


            additionalProperties: false,
            required: ['pattern', 'group'] } },


        'newlines-between': {
          'enum': [
          'ignore',
          'always',
          'always-and-inside-groups',
          'never'] },


        'newlines-between-types': {
          'enum': [
          'ignore',
          'always',
          'always-and-inside-groups',
          'never'] },


        consolidateIslands: {
          'enum': [
          'inside-groups',
          'never'] },


        sortTypesGroup: {
          type: 'boolean',
          'default': false },

        named: {
          'default': false,
          oneOf: [{
            type: 'boolean' },
          {
            type: 'object',
            properties: {
              enabled: { type: 'boolean' },
              'import': { type: 'boolean' },
              'export': { type: 'boolean' },
              require: { type: 'boolean' },
              cjsExports: { type: 'boolean' },
              types: {
                type: 'string',
                'enum': [
                'mixed',
                'types-first',
                'types-last'] } },



            additionalProperties: false }] },


        alphabetize: {
          type: 'object',
          properties: {
            caseInsensitive: {
              type: 'boolean',
              'default': false },

            order: {
              'enum': ['ignore', 'asc', 'desc'],
              'default': 'ignore' },

            orderImportKind: {
              'enum': ['ignore', 'asc', 'desc'],
              'default': 'ignore' } },


          additionalProperties: false },

        warnOnUnassignedImports: {
          type: 'boolean',
          'default': false } },


      additionalProperties: false,
      dependencies: {
        sortTypesGroup: {
          oneOf: [
          {
            // When sortTypesGroup is true, groups must NOT be an array that does not contain 'type'
            properties: {
              sortTypesGroup: { 'enum': [true] },
              groups: {
                not: {
                  type: 'array',
                  uniqueItems: true,
                  items: {
                    oneOf: [
                    { 'enum': types.filter(function (t) {return t !== 'type';}) },
                    {
                      type: 'array',
                      uniqueItems: true,
                      items: { 'enum': types.filter(function (t) {return t !== 'type';}) } }] } } } },






            required: ['groups'] },

          {
            properties: {
              sortTypesGroup: { 'enum': [false] } } }] },




        'newlines-between-types': {
          properties: {
            sortTypesGroup: { 'enum': [true] } },

          required: ['sortTypesGroup'] },

        consolidateIslands: {
          oneOf: [
          {
            properties: {
              consolidateIslands: { 'enum': ['inside-groups'] } },

            anyOf: [
            {
              properties: {
                'newlines-between': { 'enum': ['always-and-inside-groups'] } },

              required: ['newlines-between'] },

            {
              properties: {
                'newlines-between-types': { 'enum': ['always-and-inside-groups'] } },

              required: ['newlines-between-types'] }] },



          {
            properties: {
              consolidateIslands: { 'enum': ['never'] } } }] } } }] },









  create: function () {function create(context) {
      var options = context.options[0] || {};
      var newlinesBetweenImports = options['newlines-between'] || 'ignore';
      var newlinesBetweenTypeOnlyImports = options['newlines-between-types'] || newlinesBetweenImports;
      var pathGroupsExcludedImportTypes = new Set(options.pathGroupsExcludedImportTypes || ['builtin', 'external', 'object']);
      var sortTypesGroup = options.sortTypesGroup;
      var consolidateIslands = options.consolidateIslands || 'never';

      var named = Object.assign({
        types: 'mixed' },
      _typeof(options.named) === 'object' ? Object.assign({},
      options.named, {
        'import': 'import' in options.named ? options.named['import'] : options.named.enabled,
        'export': 'export' in options.named ? options.named['export'] : options.named.enabled,
        require: 'require' in options.named ? options.named.require : options.named.enabled,
        cjsExports: 'cjsExports' in options.named ? options.named.cjsExports : options.named.enabled }) :
      {
        'import': options.named,
        'export': options.named,
        require: options.named,
        cjsExports: options.named });



      var namedGroups = named.types === 'mixed' ? [] : named.types === 'types-last' ? ['value'] : ['type'];
      var alphabetize = getAlphabetizeConfig(options);
      var distinctGroup = options.distinctGroup == null ? defaultDistinctGroup : !!options.distinctGroup;
      var ranks = void 0;

      try {var _convertPathGroupsFor =
        convertPathGroupsForRanks(options.pathGroups || []),pathGroups = _convertPathGroupsFor.pathGroups,maxPosition = _convertPathGroupsFor.maxPosition;var _convertGroupsToRanks =
        convertGroupsToRanks(options.groups || defaultGroups),groups = _convertGroupsToRanks.groups,omittedTypes = _convertGroupsToRanks.omittedTypes;
        ranks = {
          groups: groups,
          omittedTypes: omittedTypes,
          pathGroups: pathGroups,
          maxPosition: maxPosition };

      } catch (error) {
        // Malformed configuration
        return {
          Program: function () {function Program(node) {
              context.report(node, error.message);
            }return Program;}() };

      }
      var importMap = new Map();
      var exportMap = new Map();

      var isTypeGroupInGroups = ranks.omittedTypes.indexOf('type') === -1;
      var isSortingTypesGroup = isTypeGroupInGroups && sortTypesGroup;

      function getBlockImports(node) {
        if (!importMap.has(node)) {
          importMap.set(node, []);
        }
        return importMap.get(node);
      }

      function getBlockExports(node) {
        if (!exportMap.has(node)) {
          exportMap.set(node, []);
        }
        return exportMap.get(node);
      }

      function makeNamedOrderReport(context, namedImports) {
        if (namedImports.length > 1) {
          var imports = namedImports.map(
          function (namedImport) {
            var kind = namedImport.kind || 'value';
            var rank = namedGroups.findIndex(function (entry) {return [].concat(entry).indexOf(kind) > -1;});

            return Object.assign({
              displayName: namedImport.value,
              rank: rank === -1 ? namedGroups.length : rank },
            namedImport, {
              value: String(namedImport.value) + ':' + String(namedImport.alias || '') });

          });

          if (alphabetize.order !== 'ignore') {
            mutateRanksToAlphabetize(imports, alphabetize);
          }

          makeOutOfOrderReport(context, imports, categories.named);
        }
      }

      return Object.assign({
        ImportDeclaration: function () {function ImportDeclaration(node) {
            // Ignoring unassigned imports unless warnOnUnassignedImports is set
            if (node.specifiers.length || options.warnOnUnassignedImports) {
              var name = node.source.value;
              registerNode(
              context,
              {
                node: node,
                value: name,
                displayName: name,
                type: 'import' },

              ranks,
              getBlockImports(node.parent),
              pathGroupsExcludedImportTypes,
              isSortingTypesGroup);


              if (named['import']) {
                makeNamedOrderReport(
                context,
                node.specifiers.filter(
                function (specifier) {return specifier.type === 'ImportSpecifier';}).map(
                function (specifier) {return Object.assign({
                    node: specifier,
                    value: specifier.imported.name,
                    type: 'import',
                    kind: specifier.importKind },
                  specifier.local.range[0] !== specifier.imported.range[0] && {
                    alias: specifier.local.name });}));




              }
            }
          }return ImportDeclaration;}(),
        TSImportEqualsDeclaration: function () {function TSImportEqualsDeclaration(node) {
            // skip "export import"s
            if (node.isExport) {
              return;
            }

            var displayName = void 0;
            var value = void 0;
            var type = void 0;
            if (node.moduleReference.type === 'TSExternalModuleReference') {
              value = node.moduleReference.expression.value;
              displayName = value;
              type = 'import';
            } else {
              value = '';
              displayName = (0, _contextCompat.getSourceCode)(context).getText(node.moduleReference);
              type = 'import:object';
            }

            registerNode(
            context,
            {
              node: node,
              value: value,
              displayName: displayName,
              type: type },

            ranks,
            getBlockImports(node.parent),
            pathGroupsExcludedImportTypes,
            isSortingTypesGroup);

          }return TSImportEqualsDeclaration;}(),
        CallExpression: function () {function CallExpression(node) {
            if (!(0, _staticRequire2['default'])(node)) {
              return;
            }
            var block = getRequireBlock(node);
            if (!block) {
              return;
            }
            var name = node.arguments[0].value;
            registerNode(
            context,
            {
              node: node,
              value: name,
              displayName: name,
              type: 'require' },

            ranks,
            getBlockImports(block),
            pathGroupsExcludedImportTypes,
            isSortingTypesGroup);

          }return CallExpression;}() },
      named.require && {
        VariableDeclarator: function () {function VariableDeclarator(node) {
            if (node.id.type === 'ObjectPattern' && isRequireExpression(node.init)) {
              for (var i = 0; i < node.id.properties.length; i++) {
                if (
                node.id.properties[i].key.type !== 'Identifier' ||
                node.id.properties[i].value.type !== 'Identifier')
                {
                  return;
                }
              }
              makeNamedOrderReport(
              context,
              node.id.properties.map(function (prop) {return Object.assign({
                  node: prop,
                  value: prop.key.name,
                  type: 'require' },
                prop.key.range[0] !== prop.value.range[0] && {
                  alias: prop.value.name });}));



            }
          }return VariableDeclarator;}() },

      named['export'] && {
        ExportNamedDeclaration: function () {function ExportNamedDeclaration(node) {
            makeNamedOrderReport(
            context,
            node.specifiers.map(function (specifier) {return Object.assign({
                node: specifier,
                value: specifier.local.name,
                type: 'export',
                kind: specifier.exportKind },
              specifier.local.range[0] !== specifier.exported.range[0] && {
                alias: specifier.exported.name });}));



          }return ExportNamedDeclaration;}() },

      named.cjsExports && {
        AssignmentExpression: function () {function AssignmentExpression(node) {
            if (node.parent.type === 'ExpressionStatement') {
              if (isCJSExports(context, node.left)) {
                if (node.right.type === 'ObjectExpression') {
                  for (var i = 0; i < node.right.properties.length; i++) {
                    if (
                    !node.right.properties[i].key ||
                    node.right.properties[i].key.type !== 'Identifier' ||
                    !node.right.properties[i].value ||
                    node.right.properties[i].value.type !== 'Identifier')
                    {
                      return;
                    }
                  }

                  makeNamedOrderReport(
                  context,
                  node.right.properties.map(function (prop) {return Object.assign({
                      node: prop,
                      value: prop.key.name,
                      type: 'export' },
                    prop.key.range[0] !== prop.value.range[0] && {
                      alias: prop.value.name });}));



                }
              } else {
                var nameParts = getNamedCJSExports(context, node.left);
                if (nameParts && nameParts.length > 0) {
                  var name = nameParts.join('.');
                  getBlockExports(node.parent.parent).push({
                    node: node,
                    value: name,
                    displayName: name,
                    type: 'export',
                    rank: 0 });

                }
              }
            }
          }return AssignmentExpression;}() }, {

        'Program:exit': function () {function ProgramExit() {
            importMap.forEach(function (imported) {
              if (newlinesBetweenImports !== 'ignore' || newlinesBetweenTypeOnlyImports !== 'ignore') {
                makeNewlinesBetweenReport(
                context,
                imported,
                newlinesBetweenImports,
                newlinesBetweenTypeOnlyImports,
                distinctGroup,
                isSortingTypesGroup,
                consolidateIslands === 'inside-groups' && (
                newlinesBetweenImports === 'always-and-inside-groups' ||
                newlinesBetweenTypeOnlyImports === 'always-and-inside-groups'));

              }

              if (alphabetize.order !== 'ignore') {
                mutateRanksToAlphabetize(imported, alphabetize);
              }

              makeOutOfOrderReport(context, imported, categories['import']);
            });

            exportMap.forEach(function (exported) {
              if (alphabetize.order !== 'ignore') {
                mutateRanksToAlphabetize(exported, alphabetize);
                makeOutOfOrderReport(context, exported, categories.exports);
              }
            });

            importMap.clear();
            exportMap.clear();
          }return ProgramExit;}() });

    }return create;}() };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlcy9vcmRlci5qcyJdLCJuYW1lcyI6WyJjYXRlZ29yaWVzIiwibmFtZWQiLCJleHBvcnRzIiwiZGVmYXVsdEdyb3VwcyIsInJldmVyc2UiLCJhcnJheSIsIm1hcCIsInYiLCJyYW5rIiwiZ2V0VG9rZW5zT3JDb21tZW50c0FmdGVyIiwic291cmNlQ29kZSIsIm5vZGUiLCJjb3VudCIsImN1cnJlbnROb2RlT3JUb2tlbiIsInJlc3VsdCIsImkiLCJnZXRUb2tlbk9yQ29tbWVudEFmdGVyIiwicHVzaCIsImdldFRva2Vuc09yQ29tbWVudHNCZWZvcmUiLCJnZXRUb2tlbk9yQ29tbWVudEJlZm9yZSIsInRha2VUb2tlbnNBZnRlcldoaWxlIiwiY29uZGl0aW9uIiwidG9rZW5zIiwibGVuZ3RoIiwidGFrZVRva2Vuc0JlZm9yZVdoaWxlIiwiZmluZE91dE9mT3JkZXIiLCJpbXBvcnRlZCIsIm1heFNlZW5SYW5rTm9kZSIsImZpbHRlciIsImltcG9ydGVkTW9kdWxlIiwicmVzIiwiZmluZFJvb3ROb2RlIiwicGFyZW50IiwiYm9keSIsImNvbW1lbnRPblNhbWVMaW5lQXMiLCJ0b2tlbiIsInR5cGUiLCJsb2MiLCJzdGFydCIsImxpbmUiLCJlbmQiLCJmaW5kRW5kT2ZMaW5lV2l0aENvbW1lbnRzIiwidG9rZW5zVG9FbmRPZkxpbmUiLCJlbmRPZlRva2VucyIsInJhbmdlIiwidGV4dCIsImZpbmRTdGFydE9mTGluZVdpdGhDb21tZW50cyIsInN0YXJ0T2ZUb2tlbnMiLCJmaW5kU3BlY2lmaWVyU3RhcnQiLCJnZXRUb2tlbkJlZm9yZSIsInZhbHVlIiwiZmluZFNwZWNpZmllckVuZCIsImdldFRva2VuQWZ0ZXIiLCJpc1JlcXVpcmVFeHByZXNzaW9uIiwiZXhwciIsImNhbGxlZSIsIm5hbWUiLCJhcmd1bWVudHMiLCJpc1N1cHBvcnRlZFJlcXVpcmVNb2R1bGUiLCJkZWNsYXJhdGlvbnMiLCJkZWNsIiwiaXNQbGFpblJlcXVpcmUiLCJpZCIsImluaXQiLCJpc1JlcXVpcmVXaXRoTWVtYmVyRXhwcmVzc2lvbiIsIm9iamVjdCIsImlzUGxhaW5JbXBvcnRNb2R1bGUiLCJzcGVjaWZpZXJzIiwiaXNQbGFpbkltcG9ydEVxdWFscyIsIm1vZHVsZVJlZmVyZW5jZSIsImV4cHJlc3Npb24iLCJpc0NKU0V4cG9ydHMiLCJjb250ZXh0IiwicHJvcGVydHkiLCJ2YXJpYWJsZXMiLCJmaW5kSW5kZXgiLCJ2YXJpYWJsZSIsImdldE5hbWVkQ0pTRXhwb3J0cyIsInJvb3QiLCJ1bnNoaWZ0Iiwic2xpY2UiLCJjYW5Dcm9zc05vZGVXaGlsZVJlb3JkZXIiLCJjYW5SZW9yZGVySXRlbXMiLCJmaXJzdE5vZGUiLCJzZWNvbmROb2RlIiwiaW5kZXhPZiIsInNvcnQiLCJmaXJzdEluZGV4Iiwic2Vjb25kSW5kZXgiLCJub2Rlc0JldHdlZW4iLCJub2RlQmV0d2VlbiIsIm1ha2VJbXBvcnREZXNjcmlwdGlvbiIsImV4cG9ydEtpbmQiLCJpbXBvcnRLaW5kIiwiZml4T3V0T2ZPcmRlciIsIm9yZGVyIiwiY2F0ZWdvcnkiLCJpc05hbWVkIiwiaXNFeHBvcnRzIiwiZmlyc3RSb290Iiwic2Vjb25kUm9vdCIsImZpcnN0Um9vdFN0YXJ0IiwiZmlyc3RSb290RW5kIiwic2Vjb25kUm9vdFN0YXJ0Iiwic2Vjb25kUm9vdEVuZCIsImRpc3BsYXlOYW1lIiwiYWxpYXMiLCJmaXJzdEltcG9ydCIsInNlY29uZEltcG9ydCIsIm1lc3NhZ2UiLCJmaXJzdENvZGUiLCJmaXJzdFRyaXZpYSIsInNlY29uZENvZGUiLCJzZWNvbmRUcml2aWEiLCJ0cmltbWVkVHJpdmlhIiwiZ2FwQ29kZSIsIndoaXRlc3BhY2VzIiwicmVwb3J0IiwiZml4IiwiZml4ZXIiLCJyZXBsYWNlVGV4dFJhbmdlIiwiZml4ZXMiLCJjYW5GaXgiLCJuZXdDb2RlIiwic3Vic3RyaW5nIiwicmVwb3J0T3V0T2ZPcmRlciIsIm91dE9mT3JkZXIiLCJmb3JFYWNoIiwiaW1wIiwiZm91bmQiLCJmaW5kIiwiaGFzSGlnaGVyUmFuayIsImltcG9ydGVkSXRlbSIsIm1ha2VPdXRPZk9yZGVyUmVwb3J0IiwicmV2ZXJzZWRJbXBvcnRlZCIsInJldmVyc2VkT3JkZXIiLCJjb21wYXJlU3RyaW5nIiwiYSIsImIiLCJERUZBVUxUX0lNUE9SVF9LSU5EIiwiZ2V0Tm9ybWFsaXplZFZhbHVlIiwidG9Mb3dlckNhc2UiLCJTdHJpbmciLCJnZXRTb3J0ZXIiLCJhbHBoYWJldGl6ZU9wdGlvbnMiLCJtdWx0aXBsaWVyIiwib3JkZXJJbXBvcnRLaW5kIiwibXVsdGlwbGllckltcG9ydEtpbmQiLCJpbXBvcnRzU29ydGVyIiwibm9kZUEiLCJub2RlQiIsImltcG9ydEEiLCJjYXNlSW5zZW5zaXRpdmUiLCJpbXBvcnRCIiwiQSIsInNwbGl0IiwiQiIsIk1hdGgiLCJtaW4iLCJtdXRhdGVSYW5rc1RvQWxwaGFiZXRpemUiLCJncm91cGVkQnlSYW5rcyIsIml0ZW0iLCJzb3J0ZXJGbiIsImdyb3VwUmFua3MiLCJPYmplY3QiLCJrZXlzIiwiZ3JvdXBSYW5rIiwibmV3UmFuayIsImFscGhhYmV0aXplZFJhbmtzIiwicmVkdWNlIiwiYWNjIiwicGFyc2VJbnQiLCJjb21wdXRlUGF0aFJhbmsiLCJyYW5rcyIsInBhdGhHcm91cHMiLCJwYXRoIiwibWF4UG9zaXRpb24iLCJsIiwicGF0dGVybiIsInBhdHRlcm5PcHRpb25zIiwiZ3JvdXAiLCJwb3NpdGlvbiIsIm5vY29tbWVudCIsImNvbXB1dGVSYW5rIiwiaW1wb3J0RW50cnkiLCJleGNsdWRlZEltcG9ydFR5cGVzIiwiaXNTb3J0aW5nVHlwZXNHcm91cCIsImltcFR5cGUiLCJpc1R5cGVHcm91cEluR3JvdXBzIiwib21pdHRlZFR5cGVzIiwiaXNUeXBlT25seUltcG9ydCIsImlzRXhjbHVkZWRGcm9tUGF0aFJhbmsiLCJoYXMiLCJncm91cHMiLCJzdGFydHNXaXRoIiwicmVnaXN0ZXJOb2RlIiwiaW1wb3J0Tm9kZSIsImlzTXVsdGlsaW5lIiwiZ2V0UmVxdWlyZUJsb2NrIiwibiIsInR5cGVzIiwiY29udmVydEdyb3Vwc1RvUmFua3MiLCJyYW5rT2JqZWN0IiwiaW5kZXgiLCJjb25jYXQiLCJncm91cEl0ZW0iLCJjb252ZXJ0UGF0aEdyb3Vwc0ZvclJhbmtzIiwiYWZ0ZXIiLCJiZWZvcmUiLCJ0cmFuc2Zvcm1lZCIsInBhdGhHcm91cCIsInBvc2l0aW9uU3RyaW5nIiwiZ3JvdXBMZW5ndGgiLCJncm91cEluZGV4IiwibWF4Iiwia2V5IiwiZ3JvdXBOZXh0UG9zaXRpb24iLCJwb3ciLCJjZWlsIiwibG9nMTAiLCJmaXhOZXdMaW5lQWZ0ZXJJbXBvcnQiLCJwcmV2aW91c0ltcG9ydCIsInByZXZSb290IiwiZW5kT2ZMaW5lIiwiaW5zZXJ0VGV4dEFmdGVyUmFuZ2UiLCJyZW1vdmVOZXdMaW5lQWZ0ZXJJbXBvcnQiLCJjdXJyZW50SW1wb3J0IiwiY3VyclJvb3QiLCJyYW5nZVRvUmVtb3ZlIiwidGVzdCIsInJlbW92ZVJhbmdlIiwidW5kZWZpbmVkIiwibWFrZU5ld2xpbmVzQmV0d2VlblJlcG9ydCIsIm5ld2xpbmVzQmV0d2VlbkltcG9ydHNfIiwibmV3bGluZXNCZXR3ZWVuVHlwZU9ubHlJbXBvcnRzXyIsImRpc3RpbmN0R3JvdXAiLCJpc0NvbnNvbGlkYXRpbmdTcGFjZUJldHdlZW5JbXBvcnRzIiwiZ2V0TnVtYmVyT2ZFbXB0eUxpbmVzQmV0d2VlbiIsImxpbmVzQmV0d2VlbkltcG9ydHMiLCJsaW5lcyIsInRyaW0iLCJnZXRJc1N0YXJ0T2ZEaXN0aW5jdEdyb3VwIiwiZW1wdHlMaW5lc0JldHdlZW4iLCJpc1N0YXJ0T2ZEaXN0aW5jdEdyb3VwIiwiaXNQcmV2aW91c0ltcG9ydFR5cGVPbmx5SW1wb3J0IiwiaXNOb3JtYWxJbXBvcnROZXh0VG9UeXBlT25seUltcG9ydEFuZFJlbGV2YW50IiwiaXNUeXBlT25seUltcG9ydEFuZFJlbGV2YW50IiwibmV3bGluZXNCZXR3ZWVuSW1wb3J0cyIsIm5ld2xpbmVzQmV0d2VlblR5cGVPbmx5SW1wb3J0cyIsImlzTm90SWdub3JlZCIsInNob3VsZEFzc2VydE5ld2xpbmVCZXR3ZWVuR3JvdXBzIiwic2hvdWxkQXNzZXJ0Tm9OZXdsaW5lV2l0aGluR3JvdXAiLCJzaG91bGRBc3NlcnROb05ld2xpbmVCZXR3ZWVuR3JvdXAiLCJpc1RoZU5ld2xpbmVCZXR3ZWVuSW1wb3J0c0luVGhlU2FtZUdyb3VwIiwiYWxyZWFkeVJlcG9ydGVkIiwiZ2V0QWxwaGFiZXRpemVDb25maWciLCJvcHRpb25zIiwiYWxwaGFiZXRpemUiLCJkZWZhdWx0RGlzdGluY3RHcm91cCIsIm1vZHVsZSIsIm1ldGEiLCJkb2NzIiwiZGVzY3JpcHRpb24iLCJ1cmwiLCJmaXhhYmxlIiwic2NoZW1hIiwicHJvcGVydGllcyIsInVuaXF1ZUl0ZW1zIiwiaXRlbXMiLCJvbmVPZiIsInBhdGhHcm91cHNFeGNsdWRlZEltcG9ydFR5cGVzIiwiYWRkaXRpb25hbFByb3BlcnRpZXMiLCJyZXF1aXJlZCIsImNvbnNvbGlkYXRlSXNsYW5kcyIsInNvcnRUeXBlc0dyb3VwIiwiZW5hYmxlZCIsInJlcXVpcmUiLCJjanNFeHBvcnRzIiwid2Fybk9uVW5hc3NpZ25lZEltcG9ydHMiLCJkZXBlbmRlbmNpZXMiLCJub3QiLCJ0IiwiYW55T2YiLCJjcmVhdGUiLCJTZXQiLCJuYW1lZEdyb3VwcyIsImVycm9yIiwiUHJvZ3JhbSIsImltcG9ydE1hcCIsIk1hcCIsImV4cG9ydE1hcCIsImdldEJsb2NrSW1wb3J0cyIsInNldCIsImdldCIsImdldEJsb2NrRXhwb3J0cyIsIm1ha2VOYW1lZE9yZGVyUmVwb3J0IiwibmFtZWRJbXBvcnRzIiwiaW1wb3J0cyIsIm5hbWVkSW1wb3J0Iiwia2luZCIsImVudHJ5IiwiSW1wb3J0RGVjbGFyYXRpb24iLCJzb3VyY2UiLCJzcGVjaWZpZXIiLCJsb2NhbCIsIlRTSW1wb3J0RXF1YWxzRGVjbGFyYXRpb24iLCJpc0V4cG9ydCIsImdldFRleHQiLCJDYWxsRXhwcmVzc2lvbiIsImJsb2NrIiwiVmFyaWFibGVEZWNsYXJhdG9yIiwicHJvcCIsIkV4cG9ydE5hbWVkRGVjbGFyYXRpb24iLCJleHBvcnRlZCIsIkFzc2lnbm1lbnRFeHByZXNzaW9uIiwibGVmdCIsInJpZ2h0IiwibmFtZVBhcnRzIiwiam9pbiIsImNsZWFyIl0sIm1hcHBpbmdzIjoiQUFBQSxhOztBQUVBLHNDO0FBQ0EsK0M7QUFDQSx3QztBQUNBO0FBQ0EsMkQ7O0FBRUEsZ0Q7QUFDQSxzRDtBQUNBLHFDOztBQUVBLElBQU1BLGFBQWE7QUFDakJDLFNBQU8sT0FEVTtBQUVqQixZQUFRLFFBRlM7QUFHakJDLFdBQVMsU0FIUSxFQUFuQjs7O0FBTUEsSUFBTUMsZ0JBQWdCLENBQUMsU0FBRCxFQUFZLFVBQVosRUFBd0IsUUFBeEIsRUFBa0MsU0FBbEMsRUFBNkMsT0FBN0MsQ0FBdEI7O0FBRUE7O0FBRUEsU0FBU0MsT0FBVCxDQUFpQkMsS0FBakIsRUFBd0I7QUFDdEIsU0FBT0EsTUFBTUMsR0FBTixDQUFVLFVBQUNDLENBQUQsNEJBQWFBLENBQWIsSUFBZ0JDLE1BQU0sQ0FBQ0QsRUFBRUMsSUFBekIsS0FBVixFQUE0Q0osT0FBNUMsRUFBUDtBQUNEOztBQUVELFNBQVNLLHdCQUFULENBQWtDQyxVQUFsQyxFQUE4Q0MsSUFBOUMsRUFBb0RDLEtBQXBELEVBQTJEO0FBQ3pELE1BQUlDLHFCQUFxQkYsSUFBekI7QUFDQSxNQUFNRyxTQUFTLEVBQWY7QUFDQSxPQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUgsS0FBcEIsRUFBMkJHLEdBQTNCLEVBQWdDO0FBQzlCRix5QkFBcUJILFdBQVdNLHNCQUFYLENBQWtDSCxrQkFBbEMsQ0FBckI7QUFDQSxRQUFJQSxzQkFBc0IsSUFBMUIsRUFBZ0M7QUFDOUI7QUFDRDtBQUNEQyxXQUFPRyxJQUFQLENBQVlKLGtCQUFaO0FBQ0Q7QUFDRCxTQUFPQyxNQUFQO0FBQ0Q7O0FBRUQsU0FBU0kseUJBQVQsQ0FBbUNSLFVBQW5DLEVBQStDQyxJQUEvQyxFQUFxREMsS0FBckQsRUFBNEQ7QUFDMUQsTUFBSUMscUJBQXFCRixJQUF6QjtBQUNBLE1BQU1HLFNBQVMsRUFBZjtB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Q3pULFdBQVdFLE9BQW5EO0FBQ0Q7QUFDRixhQUxEOztBQU9BOFIsc0JBQVUrQixLQUFWO0FBQ0E3QixzQkFBVTZCLEtBQVY7QUFDRCxXQW5OSDs7QUFxTkQsS0EzZmMsbUJBQWpCIiwiZmlsZSI6Im9yZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgbWluaW1hdGNoIGZyb20gJ21pbmltYXRjaCc7XG5pbXBvcnQgaW5jbHVkZXMgZnJvbSAnYXJyYXktaW5jbHVkZXMnO1xuaW1wb3J0IGdyb3VwQnkgZnJvbSAnb2JqZWN0Lmdyb3VwYnknO1xuaW1wb3J0IHsgZ2V0U2NvcGUsIGdldFNvdXJjZUNvZGUgfSBmcm9tICdlc2xpbnQtbW9kdWxlLXV0aWxzL2NvbnRleHRDb21wYXQnO1xuaW1wb3J0IHRyaW1FbmQgZnJvbSAnc3RyaW5nLnByb3RvdHlwZS50cmltZW5kJztcblxuaW1wb3J0IGltcG9ydFR5cGUgZnJvbSAnLi4vY29yZS9pbXBvcnRUeXBlJztcbmltcG9ydCBpc1N0YXRpY1JlcXVpcmUgZnJvbSAnLi4vY29yZS9zdGF0aWNSZXF1aXJlJztcbmltcG9ydCBkb2NzVXJsIGZyb20gJy4uL2RvY3NVcmwnO1xuXG5jb25zdCBjYXRlZ29yaWVzID0ge1xuICBuYW1lZDogJ25hbWVkJyxcbiAgaW1wb3J0OiAnaW1wb3J0JyxcbiAgZXhwb3J0czogJ2V4cG9ydHMnLFxufTtcblxuY29uc3QgZGVmYXVsdEdyb3VwcyA9IFsnYnVpbHRpbicsICdleHRlcm5hbCcsICdwYXJlbnQnLCAnc2libGluZycsICdpbmRleCddO1xuXG4vLyBSRVBPUlRJTkcgQU5EIEZJWElOR1xuXG5mdW5jdGlvbiByZXZlcnNlKGFycmF5KSB7XG4gIHJldHVybiBhcnJheS5tYXAoKHYpID0+ICh7IC4uLnYsIHJhbms6IC12LnJhbmsgfSkpLnJldmVyc2UoKTtcbn1cblxuZnVuY3Rpb24gZ2V0VG9rZW5zT3JDb21tZW50c0FmdGVyKHNvdXJjZUNvZGUsIG5vZGUsIGNvdW50KSB7XG4gIGxldCBjdXJyZW50Tm9kZU9yVG9rZW4gPSBub2RlO1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgY3VycmVudE5vZGVPclRva2VuID0gc291cmNlQ29kZS5nZXRUb2tlbk9yQ29tbWVudEFmdGVyKGN1cnJlbnROb2RlT3JUb2tlbik7XG4gICAgaWYgKGN1cnJlbnROb2RlT3JUb2tlbiA9PSBudWxsKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgcmVzdWx0LnB1c2goY3VycmVudE5vZGVPclRva2VuKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBnZXRUb2tlbnNPckNvbW1lbnRzQmVmb3JlKHNvdXJjZUNvZGUsIG5vZGUsIGNvdW50KSB7XG4gIGxldCBjdXJyZW50Tm9kZU9yVG9rZW4gPSBub2RlO1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgY3VycmVudE5vZGVPclRva2VuID0gc291cmNlQ29kZS5nZXRUb2tlbk9yQ29tbWVudEJlZm9yZShjdXJyZW50Tm9kZU9yVG9rZW4pO1xuICAgIGlmIChjdXJyZW50Tm9kZU9yVG9rZW4gPT0gbnVsbCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJlc3VsdC5wdXNoKGN1cnJlbnROb2RlT3JUb2tlbik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdC5yZXZlcnNlKCk7XG59XG5cbmZ1bmN0aW9uIHRha2VUb2tlbnNBZnRlcldoaWxlKHNvdXJjZUNvZGUsIG5vZGUsIGNvbmRpdGlvbikge1xuICBjb25zdCB0b2tlbnMgPSBnZXRUb2tlbnNPckNvbW1lbnRzQWZ0ZXIoc291cmNlQ29kZSwgbm9kZSwgMTAwKTtcbiAgY29uc3QgcmVzdWx0ID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGNvbmRpdGlvbih0b2tlbnNbaV0pKSB7XG4gICAgICByZXN1bHQucHVzaCh0b2tlbnNbaV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gdGFrZVRva2Vuc0JlZm9yZVdoaWxlKHNvdXJjZUNvZGUsIG5vZGUsIGNvbmRpdGlvbikge1xuICBjb25zdCB0b2tlbnMgPSBnZXRUb2tlbnNPckNvbW1lbnRzQmVmb3JlKHNvdXJjZUNvZGUsIG5vZGUsIDEwMCk7XG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuICBmb3IgKGxldCBpID0gdG9rZW5zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgaWYgKGNvbmRpdGlvbih0b2tlbnNbaV0pKSB7XG4gICAgICByZXN1bHQucHVzaCh0b2tlbnNbaV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdC5yZXZlcnNlKCk7XG59XG5cbmZ1bmN0aW9uIGZpbmRPdXRPZk9yZGVyKGltcG9ydGVkKSB7XG4gIGlmIChpbXBvcnRlZC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgbGV0IG1heFNlZW5SYW5rTm9kZSA9IGltcG9ydGVkWzBdO1xuICByZXR1cm4gaW1wb3J0ZWQuZmlsdGVyKGZ1bmN0aW9uIChpbXBvcnRlZE1vZHVsZSkge1xuICAgIGNvbnN0IHJlcyA9IGltcG9ydGVkTW9kdWxlLnJhbmsgPCBtYXhTZWVuUmFua05vZGUucmFuaztcbiAgICBpZiAobWF4U2VlblJhbmtOb2RlLnJhbmsgPCBpbXBvcnRlZE1vZHVsZS5yYW5rKSB7XG4gICAgICBtYXhTZWVuUmFua05vZGUgPSBpbXBvcnRlZE1vZHVsZTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGZpbmRSb290Tm9kZShub2RlKSB7XG4gIGxldCBwYXJlbnQgPSBub2RlO1xuICB3aGlsZSAocGFyZW50LnBhcmVudCAhPSBudWxsICYmIHBhcmVudC5wYXJlbnQuYm9keSA9PSBudWxsKSB7XG4gICAgcGFyZW50ID0gcGFyZW50LnBhcmVudDtcbiAgfVxuICByZXR1cm4gcGFyZW50O1xufVxuXG5mdW5jdGlvbiBjb21tZW50T25TYW1lTGluZUFzKG5vZGUpIHtcbiAgcmV0dXJuICh0b2tlbikgPT4gKHRva2VuLnR5cGUgPT09ICdCbG9jaycgfHwgIHRva2VuLnR5cGUgPT09ICdMaW5lJylcbiAgICAgICYmIHRva2VuLmxvYy5zdGFydC5saW5lID09PSB0b2tlbi5sb2MuZW5kLmxpbmVcbiAgICAgICYmIHRva2VuLmxvYy5lbmQubGluZSA9PT0gbm9kZS5sb2MuZW5kLmxpbmU7XG59XG5cbmZ1bmN0aW9uIGZpbmRFbmRPZkxpbmVXaXRoQ29tbWVudHMoc291cmNlQ29kZSwgbm9kZSkge1xuICBjb25zdCB0b2tlbnNUb0VuZE9mTGluZSA9IHRha2VUb2tlbnNBZnRlcldoaWxlKHNvdXJjZUNvZGUsIG5vZGUsIGNvbW1lbnRPblNhbWVMaW5lQXMobm9kZSkpO1xuICBjb25zdCBlbmRPZlRva2VucyA9IHRva2Vuc1RvRW5kT2ZMaW5lLmxlbmd0aCA+IDBcbiAgICA/IHRva2Vuc1RvRW5kT2ZMaW5lW3Rva2Vuc1RvRW5kT2ZMaW5lLmxlbmd0aCAtIDFdLnJhbmdlWzFdXG4gICAgOiBub2RlLnJhbmdlWzFdO1xuICBsZXQgcmVzdWx0ID0gZW5kT2ZUb2tlbnM7XG4gIGZvciAobGV0IGkgPSBlbmRPZlRva2VuczsgaSA8IHNvdXJjZUNvZGUudGV4dC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzb3VyY2VDb2RlLnRleHRbaV0gPT09ICdcXG4nKSB7XG4gICAgICByZXN1bHQgPSBpICsgMTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAoc291cmNlQ29kZS50ZXh0W2ldICE9PSAnICcgJiYgc291cmNlQ29kZS50ZXh0W2ldICE9PSAnXFx0JyAmJiBzb3VyY2VDb2RlLnRleHRbaV0gIT09ICdcXHInKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgcmVzdWx0ID0gaSArIDE7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZmluZFN0YXJ0T2ZMaW5lV2l0aENvbW1lbnRzKHNvdXJjZUNvZGUsIG5vZGUpIHtcbiAgY29uc3QgdG9rZW5zVG9FbmRPZkxpbmUgPSB0YWtlVG9rZW5zQmVmb3JlV2hpbGUoc291cmNlQ29kZSwgbm9kZSwgY29tbWVudE9uU2FtZUxpbmVBcyhub2RlKSk7XG4gIGNvbnN0IHN0YXJ0T2ZUb2tlbnMgPSB0b2tlbnNUb0VuZE9mTGluZS5sZW5ndGggPiAwID8gdG9rZW5zVG9FbmRPZkxpbmVbMF0ucmFuZ2VbMF0gOiBub2RlLnJhbmdlWzBdO1xuICBsZXQgcmVzdWx0ID0gc3RhcnRPZlRva2VucztcbiAgZm9yIChsZXQgaSA9IHN0YXJ0T2ZUb2tlbnMgLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgaWYgKHNvdXJjZUNvZGUudGV4dFtpXSAhPT0gJyAnICYmIHNvdXJjZUNvZGUudGV4dFtpXSAhPT0gJ1xcdCcpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXN1bHQgPSBpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGZpbmRTcGVjaWZpZXJTdGFydChzb3VyY2VDb2RlLCBub2RlKSB7XG4gIGxldCB0b2tlbjtcblxuICBkbyB7XG4gICAgdG9rZW4gPSBzb3VyY2VDb2RlLmdldFRva2VuQmVmb3JlKG5vZGUpO1xuICB9IHdoaWxlICh0b2tlbi52YWx1ZSAhPT0gJywnICYmIHRva2VuLnZhbHVlICE9PSAneycpO1xuXG4gIHJldHVybiB0b2tlbi5yYW5nZVsxXTtcbn1cblxuZnVuY3Rpb24gZmluZFNwZWNpZmllckVuZChzb3VyY2VDb2RlLCBub2RlKSB7XG4gIGxldCB0b2tlbjtcblxuICBkbyB7XG4gICAgdG9rZW4gPSBzb3VyY2VDb2RlLmdldFRva2VuQWZ0ZXIobm9kZSk7XG4gIH0gd2hpbGUgKHRva2VuLnZhbHVlICE9PSAnLCcgJiYgdG9rZW4udmFsdWUgIT09ICd9Jyk7XG5cbiAgcmV0dXJuIHRva2VuLnJhbmdlWzBdO1xufVxuXG5mdW5jdGlvbiBpc1JlcXVpcmVFeHByZXNzaW9uKGV4cHIpIHtcbiAgcmV0dXJuIGV4cHIgIT0gbnVsbFxuICAgICYmIGV4cHIudHlwZSA9PT0gJ0NhbGxFeHByZXNzaW9uJ1xuICAgICYmIGV4cHIuY2FsbGVlICE9IG51bGxcbiAgICAmJiBleHByLmNhbGxlZS5uYW1lID09PSAncmVxdWlyZSdcbiAgICAmJiBleHByLmFyZ3VtZW50cyAhPSBudWxsXG4gICAgJiYgZXhwci5hcmd1bWVudHMubGVuZ3RoID09PSAxXG4gICAgJiYgZXhwci5hcmd1bWVudHNbMF0udHlwZSA9PT0gJ0xpdGVyYWwnO1xufVxuXG5mdW5jdGlvbiBpc1N1cHBvcnRlZFJlcXVpcmVNb2R1bGUobm9kZSkge1xuICBpZiAobm9kZS50eXBlICE9PSAnVmFyaWFibGVEZWNsYXJhdGlvbicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKG5vZGUuZGVjbGFyYXRpb25zLmxlbmd0aCAhPT0gMSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBkZWNsID0gbm9kZS5kZWNsYXJhdGlvbnNbMF07XG4gIGNvbnN0IGlzUGxhaW5SZXF1aXJlID0gZGVjbC5pZFxuICAgICYmIChkZWNsLmlkLnR5cGUgPT09ICdJZGVudGlmaWVyJyB8fCBkZWNsLmlkLnR5cGUgPT09ICdPYmplY3RQYXR0ZXJuJylcbiAgICAmJiBpc1JlcXVpcmVFeHByZXNzaW9uKGRlY2wuaW5pdCk7XG4gIGNvbnN0IGlzUmVxdWlyZVdpdGhNZW1iZXJFeHByZXNzaW9uID0gZGVjbC5pZFxuICAgICYmIChkZWNsLmlkLnR5cGUgPT09ICdJZGVudGlmaWVyJyB8fCBkZWNsLmlkLnR5cGUgPT09ICdPYmplY3RQYXR0ZXJuJylcbiAgICAmJiBkZWNsLmluaXQgIT0gbnVsbFxuICAgICYmIGRlY2wuaW5pdC50eXBlID09PSAnQ2FsbEV4cHJlc3Npb24nXG4gICAgJiYgZGVjbC5pbml0LmNhbGxlZSAhPSBudWxsXG4gICAgJiYgZGVjbC5pbml0LmNhbGxlZS50eXBlID09PSAnTWVtYmVyRXhwcmVzc2lvbidcbiAgICAmJiBpc1JlcXVpcmVFeHByZXNzaW9uKGRlY2wuaW5pdC5jYWxsZWUub2JqZWN0KTtcbiAgcmV0dXJuIGlzUGxhaW5SZXF1aXJlIHx8IGlzUmVxdWlyZVdpdGhNZW1iZXJFeHByZXNzaW9uO1xufVxuXG5mdW5jdGlvbiBpc1BsYWluSW1wb3J0TW9kdWxlKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUudHlwZSA9PT0gJ0ltcG9ydERlY2xhcmF0aW9uJyAmJiBub2RlLnNwZWNpZmllcnMgIT0gbnVsbCAmJiBub2RlLnNwZWNpZmllcnMubGVuZ3RoID4gMDtcbn1cblxuZnVuY3Rpb24gaXNQbGFpbkltcG9ydEVxdWFscyhub2RlKSB7XG4gIHJldHVybiBub2RlLnR5cGUgPT09ICdUU0ltcG9ydEVxdWFsc0RlY2xhcmF0aW9uJyAmJiBub2RlLm1vZHVsZVJlZmVyZW5jZS5leHByZXNzaW9uO1xufVxuXG5mdW5jdGlvbiBpc0NKU0V4cG9ydHMoY29udGV4dCwgbm9kZSkge1xuICBpZiAoXG4gICAgbm9kZS50eXBlID09PSAnTWVtYmVyRXhwcmVzc2lvbidcbiAgICAmJiBub2RlLm9iamVjdC50eXBlID09PSAnSWRlbnRpZmllcidcbiAgICAmJiBub2RlLnByb3BlcnR5LnR5cGUgPT09ICdJZGVudGlmaWVyJ1xuICAgICYmIG5vZGUub2JqZWN0Lm5hbWUgPT09ICdtb2R1bGUnXG4gICAgJiYgbm9kZS5wcm9wZXJ0eS5uYW1lID09PSAnZXhwb3J0cydcbiAgKSB7XG4gICAgcmV0dXJuIGdldFNjb3BlKGNvbnRleHQsIG5vZGUpLnZhcmlhYmxlcy5maW5kSW5kZXgoKHZhcmlhYmxlKSA9PiB2YXJpYWJsZS5uYW1lID09PSAnbW9kdWxlJykgPT09IC0xO1xuICB9XG4gIGlmIChcbiAgICBub2RlLnR5cGUgPT09ICdJZGVudGlmaWVyJ1xuICAgICYmIG5vZGUubmFtZSA9PT0gJ2V4cG9ydHMnXG4gICkge1xuICAgIHJldHVybiBnZXRTY29wZShjb250ZXh0LCBub2RlKS52YXJpYWJsZXMuZmluZEluZGV4KCh2YXJpYWJsZSkgPT4gdmFyaWFibGUubmFtZSA9PT0gJ2V4cG9ydHMnKSA9PT0gLTE7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0TmFtZWRDSlNFeHBvcnRzKGNvbnRleHQsIG5vZGUpIHtcbiAgaWYgKG5vZGUudHlwZSAhPT0gJ01lbWJlckV4cHJlc3Npb24nKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuICBsZXQgcm9vdCA9IG5vZGU7XG4gIGxldCBwYXJlbnQgPSBudWxsO1xuICB3aGlsZSAocm9vdC50eXBlID09PSAnTWVtYmVyRXhwcmVzc2lvbicpIHtcbiAgICBpZiAocm9vdC5wcm9wZXJ0eS50eXBlICE9PSAnSWRlbnRpZmllcicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmVzdWx0LnVuc2hpZnQocm9vdC5wcm9wZXJ0eS5uYW1lKTtcbiAgICBwYXJlbnQgPSByb290O1xuICAgIHJvb3QgPSByb290Lm9iamVjdDtcbiAgfVxuXG4gIGlmIChpc0NKU0V4cG9ydHMoY29udGV4dCwgcm9vdCkpIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgaWYgKGlzQ0pTRXhwb3J0cyhjb250ZXh0LCBwYXJlbnQpKSB7XG4gICAgcmV0dXJuIHJlc3VsdC5zbGljZSgxKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW5Dcm9zc05vZGVXaGlsZVJlb3JkZXIobm9kZSkge1xuICByZXR1cm4gaXNTdXBwb3J0ZWRSZXF1aXJlTW9kdWxlKG5vZGUpIHx8IGlzUGxhaW5JbXBvcnRNb2R1bGUobm9kZSkgfHwgaXNQbGFpbkltcG9ydEVxdWFscyhub2RlKTtcbn1cblxuZnVuY3Rpb24gY2FuUmVvcmRlckl0ZW1zKGZpcnN0Tm9kZSwgc2Vjb25kTm9kZSkge1xuICBjb25zdCBwYXJlbnQgPSBmaXJzdE5vZGUucGFyZW50O1xuICBjb25zdCBbZmlyc3RJbmRleCwgc2Vjb25kSW5kZXhdID0gW1xuICAgIHBhcmVudC5ib2R5LmluZGV4T2YoZmlyc3ROb2RlKSxcbiAgICBwYXJlbnQuYm9keS5pbmRleE9mKHNlY29uZE5vZGUpLFxuICBdLnNvcnQoKTtcbiAgY29uc3Qgbm9kZXNCZXR3ZWVuID0gcGFyZW50LmJvZHkuc2xpY2UoZmlyc3RJbmRleCwgc2Vjb25kSW5kZXggKyAxKTtcbiAgZm9yIChjb25zdCBub2RlQmV0d2VlbiBvZiBub2Rlc0JldHdlZW4pIHtcbiAgICBpZiAoIWNhbkNyb3NzTm9kZVdoaWxlUmVvcmRlcihub2RlQmV0d2VlbikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIG1ha2VJbXBvcnREZXNjcmlwdGlvbihub2RlKSB7XG4gIGlmIChub2RlLnR5cGUgPT09ICdleHBvcnQnKSB7XG4gICAgaWYgKG5vZGUubm9kZS5leHBvcnRLaW5kID09PSAndHlwZScpIHtcbiAgICAgIHJldHVybiAndHlwZSBleHBvcnQnO1xuICAgIH1cbiAgICByZXR1cm4gJ2V4cG9ydCc7XG4gIH1cbiAgaWYgKG5vZGUubm9kZS5pbXBvcnRLaW5kID09PSAndHlwZScpIHtcbiAgICByZXR1cm4gJ3R5cGUgaW1wb3J0JztcbiAgfVxuICBpZiAobm9kZS5ub2RlLmltcG9ydEtpbmQgPT09ICd0eXBlb2YnKSB7XG4gICAgcmV0dXJuICd0eXBlb2YgaW1wb3J0JztcbiAgfVxuICByZXR1cm4gJ2ltcG9ydCc7XG59XG5cbmZ1bmN0aW9uIGZpeE91dE9mT3JkZXIoY29udGV4dCwgZmlyc3ROb2RlLCBzZWNvbmROb2RlLCBvcmRlciwgY2F0ZWdvcnkpIHtcbiAgY29uc3QgaXNOYW1lZCA9IGNhdGVnb3J5ID09PSBjYXRlZ29yaWVzLm5hbWVkO1xuICBjb25zdCBpc0V4cG9ydHMgPSBjYXRlZ29yeSA9PT0gY2F0ZWdvcmllcy5leHBvcnRzO1xuICBjb25zdCBzb3VyY2VDb2RlID0gZ2V0U291cmNlQ29kZShjb250ZXh0KTtcblxuICBjb25zdCB7XG4gICAgZmlyc3RSb290LFxuICAgIHNlY29uZFJvb3QsXG4gIH0gPSBpc05hbWVkID8ge1xuICAgIGZpcnN0Um9vdDogZmlyc3ROb2RlLm5vZGUsXG4gICAgc2Vjb25kUm9vdDogc2Vjb25kTm9kZS5ub2RlLFxuICB9IDoge1xuICAgIGZpcnN0Um9vdDogZmluZFJvb3ROb2RlKGZpcnN0Tm9kZS5ub2RlKSxcbiAgICBzZWNvbmRSb290OiBmaW5kUm9vdE5vZGUoc2Vjb25kTm9kZS5ub2RlKSxcbiAgfTtcblxuICBjb25zdCB7XG4gICAgZmlyc3RSb290U3RhcnQsXG4gICAgZmlyc3RSb290RW5kLFxuICAgIHNlY29uZFJvb3RTdGFydCxcbiAgICBzZWNvbmRSb290RW5kLFxuICB9ID0gaXNOYW1lZCA/IHtcbiAgICBmaXJzdFJvb3RTdGFydDogZmluZFNwZWNpZmllclN0YXJ0KHNvdXJjZUNvZGUsIGZpcnN0Um9vdCksXG4gICAgZmlyc3RSb290RW5kOiBmaW5kU3BlY2lmaWVyRW5kKHNvdXJjZUNvZGUsIGZpcnN0Um9vdCksXG4gICAgc2Vjb25kUm9vdFN0YXJ0OiBmaW5kU3BlY2lmaWVyU3RhcnQoc291cmNlQ29kZSwgc2Vjb25kUm9vdCksXG4gICAgc2Vjb25kUm9vdEVuZDogZmluZFNwZWNpZmllckVuZChzb3VyY2VDb2RlLCBzZWNvbmRSb290KSxcbiAgfSA6IHtcbiAgICBmaXJzdFJvb3RTdGFydDogZmluZFN0YXJ0T2ZMaW5lV2l0aENvbW1lbnRzKHNvdXJjZUNvZGUsIGZpcnN0Um9vdCksXG4gICAgZmlyc3RSb290RW5kOiBmaW5kRW5kT2ZMaW5lV2l0aENvbW1lbnRzKHNvdXJjZUNvZGUsIGZpcnN0Um9vdCksXG4gICAgc2Vjb25kUm9vdFN0YXJ0OiBmaW5kU3RhcnRPZkxpbmVXaXRoQ29tbWVudHMoc291cmNlQ29kZSwgc2Vjb25kUm9vdCksXG4gICAgc2Vjb25kUm9vdEVuZDogZmluZEVuZE9mTGluZVdpdGhDb21tZW50cyhzb3VyY2VDb2RlLCBzZWNvbmRSb290KSxcbiAgfTtcblxuICBpZiAoZmlyc3ROb2RlLmRpc3BsYXlOYW1lID09PSBzZWNvbmROb2RlLmRpc3BsYXlOYW1lKSB7XG4gICAgaWYgKGZpcnN0Tm9kZS5hbGlhcykge1xuICAgICAgZmlyc3ROb2RlLmRpc3BsYXlOYW1lID0gYCR7Zmlyc3ROb2RlLmRpc3BsYXlOYW1lfSBhcyAke2ZpcnN0Tm9kZS5hbGlhc31gO1xuICAgIH1cbiAgICBpZiAoc2Vjb25kTm9kZS5hbGlhcykge1xuICAgICAgc2Vjb25kTm9kZS5kaXNwbGF5TmFtZSA9IGAke3NlY29uZE5vZGUuZGlzcGxheU5hbWV9IGFzICR7c2Vjb25kTm9kZS5hbGlhc31gO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGZpcnN0SW1wb3J0ID0gYCR7bWFrZUltcG9ydERlc2NyaXB0aW9uKGZpcnN0Tm9kZSl9IG9mIFxcYCR7Zmlyc3ROb2RlLmRpc3BsYXlOYW1lfVxcYGA7XG4gIGNvbnN0IHNlY29uZEltcG9ydCA9IGBcXGAke3NlY29uZE5vZGUuZGlzcGxheU5hbWV9XFxgICR7bWFrZUltcG9ydERlc2NyaXB0aW9uKHNlY29uZE5vZGUpfWA7XG4gIGNvbnN0IG1lc3NhZ2UgPSBgJHtzZWNvbmRJbXBvcnR9IHNob3VsZCBvY2N1ciAke29yZGVyfSAke2ZpcnN0SW1wb3J0fWA7XG5cbiAgaWYgKGlzTmFtZWQpIHtcbiAgICBjb25zdCBmaXJzdENvZGUgPSBzb3VyY2VDb2RlLnRleHQuc2xpY2UoZmlyc3RSb290U3RhcnQsIGZpcnN0Um9vdC5yYW5nZVsxXSk7XG4gICAgY29uc3QgZmlyc3RUcml2aWEgPSBzb3VyY2VDb2RlLnRleHQuc2xpY2UoZmlyc3RSb290LnJhbmdlWzFdLCBmaXJzdFJvb3RFbmQpO1xuICAgIGNvbnN0IHNlY29uZENvZGUgPSBzb3VyY2VDb2RlLnRleHQuc2xpY2Uoc2Vjb25kUm9vdFN0YXJ0LCBzZWNvbmRSb290LnJhbmdlWzFdKTtcbiAgICBjb25zdCBzZWNvbmRUcml2aWEgPSBzb3VyY2VDb2RlLnRleHQuc2xpY2Uoc2Vjb25kUm9vdC5yYW5nZVsxXSwgc2Vjb25kUm9vdEVuZCk7XG5cbiAgICBpZiAob3JkZXIgPT09ICdiZWZvcmUnKSB7XG4gICAgICBjb25zdCB0cmltbWVkVHJpdmlhID0gdHJpbUVuZChzZWNvbmRUcml2aWEpO1xuICAgICAgY29uc3QgZ2FwQ29kZSA9IHNvdXJjZUNvZGUudGV4dC5zbGljZShmaXJzdFJvb3RFbmQsIHNlY29uZFJvb3RTdGFydCAtIDEpO1xuICAgICAgY29uc3Qgd2hpdGVzcGFjZXMgPSBzZWNvbmRUcml2aWEuc2xpY2UodHJpbW1lZFRyaXZpYS5sZW5ndGgpO1xuICAgICAgY29udGV4dC5yZXBvcnQoe1xuICAgICAgICBub2RlOiBzZWNvbmROb2RlLm5vZGUsXG4gICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIGZpeDogKGZpeGVyKSA9PiBmaXhlci5yZXBsYWNlVGV4dFJhbmdlKFxuICAgICAgICAgIFtmaXJzdFJvb3RTdGFydCwgc2Vjb25kUm9vdEVuZF0sXG4gICAgICAgICAgYCR7c2Vjb25kQ29kZX0sJHt0cmltbWVkVHJpdmlhfSR7Zmlyc3RDb2RlfSR7Zmlyc3RUcml2aWF9JHtnYXBDb2RlfSR7d2hpdGVzcGFjZXN9YCxcbiAgICAgICAgKSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAob3JkZXIgPT09ICdhZnRlcicpIHtcbiAgICAgIGNvbnN0IHRyaW1tZWRUcml2aWEgPSB0cmltRW5kKGZpcnN0VHJpdmlhKTtcbiAgICAgIGNvbnN0IGdhcENvZGUgPSBzb3VyY2VDb2RlLnRleHQuc2xpY2Uoc2Vjb25kUm9vdEVuZCArIDEsIGZpcnN0Um9vdFN0YXJ0KTtcbiAgICAgIGNvbnN0IHdoaXRlc3BhY2VzID0gZmlyc3RUcml2aWEuc2xpY2UodHJpbW1lZFRyaXZpYS5sZW5ndGgpO1xuICAgICAgY29udGV4dC5yZXBvcnQoe1xuICAgICAgICBub2RlOiBzZWNvbmROb2RlLm5vZGUsXG4gICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIGZpeDogKGZpeGVzKSA9PiBmaXhlcy5yZXBsYWNlVGV4dFJhbmdlKFxuICAgICAgICAgIFtzZWNvbmRSb290U3RhcnQsIGZpcnN0Um9vdEVuZF0sXG4gICAgICAgICAgYCR7Z2FwQ29kZX0ke2ZpcnN0Q29kZX0sJHt0cmltbWVkVHJpdmlhfSR7c2Vjb25kQ29kZX0ke3doaXRlc3BhY2VzfWAsXG4gICAgICAgICksXG4gICAgICB9KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgY2FuRml4ID0gaXNFeHBvcnRzIHx8IGNhblJlb3JkZXJJdGVtcyhmaXJzdFJvb3QsIHNlY29uZFJvb3QpO1xuICAgIGxldCBuZXdDb2RlID0gc291cmNlQ29kZS50ZXh0LnN1YnN0cmluZyhzZWNvbmRSb290U3RhcnQsIHNlY29uZFJvb3RFbmQpO1xuXG4gICAgaWYgKG5ld0NvZGVbbmV3Q29kZS5sZW5ndGggLSAxXSAhPT0gJ1xcbicpIHtcbiAgICAgIG5ld0NvZGUgPSBgJHtuZXdDb2RlfVxcbmA7XG4gICAgfVxuXG4gICAgaWYgKG9yZGVyID09PSAnYmVmb3JlJykge1xuICAgICAgY29udGV4dC5yZXBvcnQoe1xuICAgICAgICBub2RlOiBzZWNvbmROb2RlLm5vZGUsXG4gICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIGZpeDogY2FuRml4ICYmICgoZml4ZXIpID0+IGZpeGVyLnJlcGxhY2VUZXh0UmFuZ2UoXG4gICAgICAgICAgW2ZpcnN0Um9vdFN0YXJ0LCBzZWNvbmRSb290RW5kXSxcbiAgICAgICAgICBuZXdDb2RlICsgc291cmNlQ29kZS50ZXh0LnN1YnN0cmluZyhmaXJzdFJvb3RTdGFydCwgc2Vjb25kUm9vdFN0YXJ0KSxcbiAgICAgICAgKSksXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKG9yZGVyID09PSAnYWZ0ZXInKSB7XG4gICAgICBjb250ZXh0LnJlcG9ydCh7XG4gICAgICAgIG5vZGU6IHNlY29uZE5vZGUubm9kZSxcbiAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgZml4OiBjYW5GaXggJiYgKChmaXhlcikgPT4gZml4ZXIucmVwbGFjZVRleHRSYW5nZShcbiAgICAgICAgICBbc2Vjb25kUm9vdFN0YXJ0LCBmaXJzdFJvb3RFbmRdLFxuICAgICAgICAgIHNvdXJjZUNvZGUudGV4dC5zdWJzdHJpbmcoc2Vjb25kUm9vdEVuZCwgZmlyc3RSb290RW5kKSArIG5ld0NvZGUsXG4gICAgICAgICkpLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlcG9ydE91dE9mT3JkZXIoY29udGV4dCwgaW1wb3J0ZWQsIG91dE9mT3JkZXIsIG9yZGVyLCBjYXRlZ29yeSkge1xuICBvdXRPZk9yZGVyLmZvckVhY2goZnVuY3Rpb24gKGltcCkge1xuICAgIGNvbnN0IGZvdW5kID0gaW1wb3J0ZWQuZmluZChmdW5jdGlvbiBoYXNIaWdoZXJSYW5rKGltcG9ydGVkSXRlbSkge1xuICAgICAgcmV0dXJuIGltcG9ydGVkSXRlbS5yYW5rID4gaW1wLnJhbms7XG4gICAgfSk7XG4gICAgZml4T3V0T2ZPcmRlcihjb250ZXh0LCBmb3VuZCwgaW1wLCBvcmRlciwgY2F0ZWdvcnkpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbWFrZU91dE9mT3JkZXJSZXBvcnQoY29udGV4dCwgaW1wb3J0ZWQsIGNhdGVnb3J5KSB7XG4gIGNvbnN0IG91dE9mT3JkZXIgPSBmaW5kT3V0T2ZPcmRlcihpbXBvcnRlZCk7XG4gIGlmICghb3V0T2ZPcmRlci5sZW5ndGgpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBUaGVyZSBhcmUgdGhpbmdzIHRvIHJlcG9ydC4gVHJ5IHRvIG1pbmltaXplIHRoZSBudW1iZXIgb2YgcmVwb3J0ZWQgZXJyb3JzLlxuICBjb25zdCByZXZlcnNlZEltcG9ydGVkID0gcmV2ZXJzZShpbXBvcnRlZCk7XG4gIGNvbnN0IHJldmVyc2VkT3JkZXIgPSBmaW5kT3V0T2ZPcmRlcihyZXZlcnNlZEltcG9ydGVkKTtcbiAgaWYgKHJldmVyc2VkT3JkZXIubGVuZ3RoIDwgb3V0T2ZPcmRlci5sZW5ndGgpIHtcbiAgICByZXBvcnRPdXRPZk9yZGVyKGNvbnRleHQsIHJldmVyc2VkSW1wb3J0ZWQsIHJldmVyc2VkT3JkZXIsICdhZnRlcicsIGNhdGVnb3J5KTtcbiAgICByZXR1cm47XG4gIH1cbiAgcmVwb3J0T3V0T2ZPcmRlcihjb250ZXh0LCBpbXBvcnRlZCwgb3V0T2ZPcmRlciwgJ2JlZm9yZScsIGNhdGVnb3J5KTtcbn1cblxuY29uc3QgY29tcGFyZVN0cmluZyA9IChhLCBiKSA9PiB7XG4gIGlmIChhIDwgYikge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICBpZiAoYSA+IGIpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICByZXR1cm4gMDtcbn07XG5cbi8qKiBTb21lIHBhcnNlcnMgKGxhbmd1YWdlcyB3aXRob3V0IHR5cGVzKSBkb24ndCBwcm92aWRlIEltcG9ydEtpbmQgKi9cbmNvbnN0IERFRkFVTFRfSU1QT1JUX0tJTkQgPSAndmFsdWUnO1xuY29uc3QgZ2V0Tm9ybWFsaXplZFZhbHVlID0gKG5vZGUsIHRvTG93ZXJDYXNlKSA9PiB7XG4gIGNvbnN0IHZhbHVlID0gbm9kZS52YWx1ZTtcbiAgcmV0dXJuIHRvTG93ZXJDYXNlID8gU3RyaW5nKHZhbHVlKS50b0xvd2VyQ2FzZSgpIDogdmFsdWU7XG59O1xuXG5mdW5jdGlvbiBnZXRTb3J0ZXIoYWxwaGFiZXRpemVPcHRpb25zKSB7XG4gIGNvbnN0IG11bHRpcGxpZXIgPSBhbHBoYWJldGl6ZU9wdGlvbnMub3JkZXIgPT09ICdhc2MnID8gMSA6IC0xO1xuICBjb25zdCBvcmRlckltcG9ydEtpbmQgPSBhbHBoYWJldGl6ZU9wdGlvbnMub3JkZXJJbXBvcnRLaW5kO1xuICBjb25zdCBtdWx0aXBsaWVySW1wb3J0S2luZCA9IG9yZGVySW1wb3J0S2luZCAhPT0gJ2lnbm9yZSdcbiAgICAmJiAoYWxwaGFiZXRpemVPcHRpb25zLm9yZGVySW1wb3J0S2luZCA9PT0gJ2FzYycgPyAxIDogLTEpO1xuXG4gIHJldHVybiBmdW5jdGlvbiBpbXBvcnRzU29ydGVyKG5vZGVBLCBub2RlQikge1xuICAgIGNvbnN0IGltcG9ydEEgPSBnZXROb3JtYWxpemVkVmFsdWUobm9kZUEsIGFscGhhYmV0aXplT3B0aW9ucy5jYXNlSW5zZW5zaXRpdmUpO1xuICAgIGNvbnN0IGltcG9ydEIgPSBnZXROb3JtYWxpemVkVmFsdWUobm9kZUIsIGFscGhhYmV0aXplT3B0aW9ucy5jYXNlSW5zZW5zaXRpdmUpO1xuICAgIGxldCByZXN1bHQgPSAwO1xuXG4gICAgaWYgKCFpbmNsdWRlcyhpbXBvcnRBLCAnLycpICYmICFpbmNsdWRlcyhpbXBvcnRCLCAnLycpKSB7XG4gICAgICByZXN1bHQgPSBjb21wYXJlU3RyaW5nKGltcG9ydEEsIGltcG9ydEIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBBID0gaW1wb3J0QS5zcGxpdCgnLycpO1xuICAgICAgY29uc3QgQiA9IGltcG9ydEIuc3BsaXQoJy8nKTtcbiAgICAgIGNvbnN0IGEgPSBBLmxlbmd0aDtcbiAgICAgIGNvbnN0IGIgPSBCLmxlbmd0aDtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNYXRoLm1pbihhLCBiKTsgaSsrKSB7XG4gICAgICAgIC8vIFNraXAgY29tcGFyaW5nIHRoZSBmaXJzdCBwYXRoIHNlZ21lbnQsIGlmIHRoZXkgYXJlIHJlbGF0aXZlIHNlZ21lbnRzIGZvciBib3RoIGltcG9ydHNcbiAgICAgICAgaWYgKGkgPT09IDAgJiYgKChBW2ldID09PSAnLicgfHwgQVtpXSA9PT0gJy4uJykgJiYgKEJbaV0gPT09ICcuJyB8fCBCW2ldID09PSAnLi4nKSkpIHtcbiAgICAgICAgICAvLyBJZiBvbmUgaXMgc2libGluZyBhbmQgdGhlIG90aGVyIHBhcmVudCBpbXBvcnQsIG5vIG5lZWQgdG8gY29tcGFyZSBhdCBhbGwsIHNpbmNlIHRoZSBwYXRocyBiZWxvbmcgaW4gZGlmZmVyZW50IGdyb3Vwc1xuICAgICAgICAgIGlmIChBW2ldICE9PSBCW2ldKSB7IGJyZWFrOyB9XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ID0gY29tcGFyZVN0cmluZyhBW2ldLCBCW2ldKTtcbiAgICAgICAgaWYgKHJlc3VsdCkgeyBicmVhazsgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIXJlc3VsdCAmJiBhICE9PSBiKSB7XG4gICAgICAgIHJlc3VsdCA9IGEgPCBiID8gLTEgOiAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJlc3VsdCA9IHJlc3VsdCAqIG11bHRpcGxpZXI7XG5cbiAgICAvLyBJbiBjYXNlIHRoZSBwYXRocyBhcmUgZXF1YWwgKHJlc3VsdCA9PT0gMCksIHNvcnQgdGhlbSBieSBpbXBvcnRLaW5kXG4gICAgaWYgKCFyZXN1bHQgJiYgbXVsdGlwbGllckltcG9ydEtpbmQpIHtcbiAgICAgIHJlc3VsdCA9IG11bHRpcGxpZXJJbXBvcnRLaW5kICogY29tcGFyZVN0cmluZyhcbiAgICAgICAgbm9kZUEubm9kZS5pbXBvcnRLaW5kIHx8IERFRkFVTFRfSU1QT1JUX0tJTkQsXG4gICAgICAgIG5vZGVCLm5vZGUuaW1wb3J0S2luZCB8fCBERUZBVUxUX0lNUE9SVF9LSU5ELFxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufVxuXG5mdW5jdGlvbiBtdXRhdGVSYW5rc1RvQWxwaGFiZXRpemUoaW1wb3J0ZWQsIGFscGhhYmV0aXplT3B0aW9ucykge1xuICBjb25zdCBncm91cGVkQnlSYW5rcyA9IGdyb3VwQnkoaW1wb3J0ZWQsIChpdGVtKSA9PiBpdGVtLnJhbmspO1xuXG4gIGNvbnN0IHNvcnRlckZuID0gZ2V0U29ydGVyKGFscGhhYmV0aXplT3B0aW9ucyk7XG5cbiAgLy8gc29ydCBncm91cCBrZXlzIHNvIHRoYXQgdGhleSBjYW4gYmUgaXRlcmF0ZWQgb24gaW4gb3JkZXJcbiAgY29uc3QgZ3JvdXBSYW5rcyA9IE9iamVjdC5rZXlzKGdyb3VwZWRCeVJhbmtzKS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGEgLSBiO1xuICB9KTtcblxuICAvLyBzb3J0IGltcG9ydHMgbG9jYWxseSB3aXRoaW4gdGhlaXIgZ3JvdXBcbiAgZ3JvdXBSYW5rcy5mb3JFYWNoKGZ1bmN0aW9uIChncm91cFJhbmspIHtcbiAgICBncm91cGVkQnlSYW5rc1tncm91cFJhbmtdLnNvcnQoc29ydGVyRm4pO1xuICB9KTtcblxuICAvLyBhc3NpZ24gZ2xvYmFsbHkgdW5pcXVlIHJhbmsgdG8gZWFjaCBpbXBvcnRcbiAgbGV0IG5ld1JhbmsgPSAwO1xuICBjb25zdCBhbHBoYWJldGl6ZWRSYW5rcyA9IGdyb3VwUmFua3MucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGdyb3VwUmFuaykge1xuICAgIGdyb3VwZWRCeVJhbmtzW2dyb3VwUmFua10uZm9yRWFjaChmdW5jdGlvbiAoaW1wb3J0ZWRJdGVtKSB7XG4gICAgICBhY2NbYCR7aW1wb3J0ZWRJdGVtLnZhbHVlfXwke2ltcG9ydGVkSXRlbS5ub2RlLmltcG9ydEtpbmR9YF0gPSBwYXJzZUludChncm91cFJhbmssIDEwKSArIG5ld1Jhbms7XG4gICAgICBuZXdSYW5rICs9IDE7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuXG4gIC8vIG11dGF0ZSB0aGUgb3JpZ2luYWwgZ3JvdXAtcmFuayB3aXRoIGFscGhhYmV0aXplZC1yYW5rXG4gIGltcG9ydGVkLmZvckVhY2goZnVuY3Rpb24gKGltcG9ydGVkSXRlbSkge1xuICAgIGltcG9ydGVkSXRlbS5yYW5rID0gYWxwaGFiZXRpemVkUmFua3NbYCR7aW1wb3J0ZWRJdGVtLnZhbHVlfXwke2ltcG9ydGVkSXRlbS5ub2RlLmltcG9ydEtpbmR9YF07XG4gIH0pO1xufVxuXG4vLyBERVRFQ1RJTkdcblxuZnVuY3Rpb24gY29tcHV0ZVBhdGhSYW5rKHJhbmtzLCBwYXRoR3JvdXBzLCBwYXRoLCBtYXhQb3NpdGlvbikge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IHBhdGhHcm91cHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgY29uc3QgeyBwYXR0ZXJuLCBwYXR0ZXJuT3B0aW9ucywgZ3JvdXAsIHBvc2l0aW9uID0gMSB9ID0gcGF0aEdyb3Vwc1tpXTtcbiAgICBpZiAobWluaW1hdGNoKHBhdGgsIHBhdHRlcm4sIHBhdHRlcm5PcHRpb25zIHx8IHsgbm9jb21tZW50OiB0cnVlIH0pKSB7XG4gICAgICByZXR1cm4gcmFua3NbZ3JvdXBdICsgcG9zaXRpb24gLyBtYXhQb3NpdGlvbjtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY29tcHV0ZVJhbmsoY29udGV4dCwgcmFua3MsIGltcG9ydEVudHJ5LCBleGNsdWRlZEltcG9ydFR5cGVzLCBpc1NvcnRpbmdUeXBlc0dyb3VwKSB7XG4gIGxldCBpbXBUeXBlO1xuICBsZXQgcmFuaztcblxuICBjb25zdCBpc1R5cGVHcm91cEluR3JvdXBzID0gcmFua3Mub21pdHRlZFR5cGVzLmluZGV4T2YoJ3R5cGUnKSA9PT0gLTE7XG4gIGNvbnN0IGlzVHlwZU9ubHlJbXBvcnQgPSBpbXBvcnRFbnRyeS5ub2RlLmltcG9ydEtpbmQgPT09ICd0eXBlJztcbiAgY29uc3QgaXNFeGNsdWRlZEZyb21QYXRoUmFuayA9IGlzVHlwZU9ubHlJbXBvcnQgJiYgaXNUeXBlR3JvdXBJbkdyb3VwcyAmJiBleGNsdWRlZEltcG9ydFR5cGVzLmhhcygndHlwZScpO1xuXG4gIGlmIChpbXBvcnRFbnRyeS50eXBlID09PSAnaW1wb3J0Om9iamVjdCcpIHtcbiAgICBpbXBUeXBlID0gJ29iamVjdCc7XG4gIH0gZWxzZSBpZiAoaXNUeXBlT25seUltcG9ydCAmJiBpc1R5cGVHcm91cEluR3JvdXBzICYmICFpc1NvcnRpbmdUeXBlc0dyb3VwKSB7XG4gICAgaW1wVHlwZSA9ICd0eXBlJztcbiAgfSBlbHNlIHtcbiAgICBpbXBUeXBlID0gaW1wb3J0VHlwZShpbXBvcnRFbnRyeS52YWx1ZSwgY29udGV4dCk7XG4gIH1cblxuICBpZiAoIWV4Y2x1ZGVkSW1wb3J0VHlwZXMuaGFzKGltcFR5cGUpICYmICFpc0V4Y2x1ZGVkRnJvbVBhdGhSYW5rKSB7XG4gICAgcmFuayA9IGNvbXB1dGVQYXRoUmFuayhyYW5rcy5ncm91cHMsIHJhbmtzLnBhdGhHcm91cHMsIGltcG9ydEVudHJ5LnZhbHVlLCByYW5rcy5tYXhQb3NpdGlvbik7XG4gIH1cblxuICBpZiAodHlwZW9mIHJhbmsgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmFuayA9IHJhbmtzLmdyb3Vwc1tpbXBUeXBlXTtcblxuICAgIGlmICh0eXBlb2YgcmFuayA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gIH1cblxuICBpZiAoaXNUeXBlT25seUltcG9ydCAmJiBpc1NvcnRpbmdUeXBlc0dyb3VwKSB7XG4gICAgcmFuayA9IHJhbmtzLmdyb3Vwcy50eXBlICsgcmFuayAvIDEwO1xuICB9XG5cbiAgaWYgKGltcG9ydEVudHJ5LnR5cGUgIT09ICdpbXBvcnQnICYmICFpbXBvcnRFbnRyeS50eXBlLnN0YXJ0c1dpdGgoJ2ltcG9ydDonKSkge1xuICAgIHJhbmsgKz0gMTAwO1xuICB9XG5cbiAgcmV0dXJuIHJhbms7XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyTm9kZShjb250ZXh0LCBpbXBvcnRFbnRyeSwgcmFua3MsIGltcG9ydGVkLCBleGNsdWRlZEltcG9ydFR5cGVzLCBpc1NvcnRpbmdUeXBlc0dyb3VwKSB7XG4gIGNvbnN0IHJhbmsgPSBjb21wdXRlUmFuayhjb250ZXh0LCByYW5rcywgaW1wb3J0RW50cnksIGV4Y2x1ZGVkSW1wb3J0VHlwZXMsIGlzU29ydGluZ1R5cGVzR3JvdXApO1xuICBpZiAocmFuayAhPT0gLTEpIHtcbiAgICBsZXQgaW1wb3J0Tm9kZSA9IGltcG9ydEVudHJ5Lm5vZGU7XG5cbiAgICBpZiAoaW1wb3J0RW50cnkudHlwZSA9PT0gJ3JlcXVpcmUnICYmIGltcG9ydE5vZGUucGFyZW50LnBhcmVudC50eXBlID09PSAnVmFyaWFibGVEZWNsYXJhdGlvbicpIHtcbiAgICAgIGltcG9ydE5vZGUgPSBpbXBvcnROb2RlLnBhcmVudC5wYXJlbnQ7XG4gICAgfVxuXG4gICAgaW1wb3J0ZWQucHVzaCh7XG4gICAgICAuLi5pbXBvcnRFbnRyeSxcbiAgICAgIHJhbmssXG4gICAgICBpc011bHRpbGluZTogaW1wb3J0Tm9kZS5sb2MuZW5kLmxpbmUgIT09IGltcG9ydE5vZGUubG9jLnN0YXJ0LmxpbmUsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UmVxdWlyZUJsb2NrKG5vZGUpIHtcbiAgbGV0IG4gPSBub2RlO1xuICAvLyBIYW5kbGUgY2FzZXMgbGlrZSBgY29uc3QgYmF6ID0gcmVxdWlyZSgnZm9vJykuYmFyLmJhemBcbiAgLy8gYW5kIGBjb25zdCBmb28gPSByZXF1aXJlKCdmb28nKSgpYFxuICB3aGlsZSAoXG4gICAgbi5wYXJlbnQudHlwZSA9PT0gJ01lbWJlckV4cHJlc3Npb24nICYmIG4ucGFyZW50Lm9iamVjdCA9PT0gblxuICAgIHx8IG4ucGFyZW50LnR5cGUgPT09ICdDYWxsRXhwcmVzc2lvbicgJiYgbi5wYXJlbnQuY2FsbGVlID09PSBuXG4gICkge1xuICAgIG4gPSBuLnBhcmVudDtcbiAgfVxuICBpZiAoXG4gICAgbi5wYXJlbnQudHlwZSA9PT0gJ1ZhcmlhYmxlRGVjbGFyYXRvcidcbiAgICAmJiBuLnBhcmVudC5wYXJlbnQudHlwZSA9PT0gJ1ZhcmlhYmxlRGVjbGFyYXRpb24nXG4gICAgJiYgbi5wYXJlbnQucGFyZW50LnBhcmVudC50eXBlID09PSAnUHJvZ3JhbSdcbiAgKSB7XG4gICAgcmV0dXJuIG4ucGFyZW50LnBhcmVudC5wYXJlbnQ7XG4gIH1cbn1cblxuY29uc3QgdHlwZXMgPSBbJ2J1aWx0aW4nLCAnZXh0ZXJuYWwnLCAnaW50ZXJuYWwnLCAndW5rbm93bicsICdwYXJlbnQnLCAnc2libGluZycsICdpbmRleCcsICdvYmplY3QnLCAndHlwZSddO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gb2JqZWN0IHdpdGggdHlwZS1yYW5rIHBhaXJzLlxuICpcbiAqIEV4YW1wbGU6IHsgaW5kZXg6IDAsIHNpYmxpbmc6IDEsIHBhcmVudDogMSwgZXh0ZXJuYWw6IDEsIGJ1aWx0aW46IDIsIGludGVybmFsOiAyIH1cbiAqL1xuZnVuY3Rpb24gY29udmVydEdyb3Vwc1RvUmFua3MoZ3JvdXBzKSB7XG4gIGNvbnN0IHJhbmtPYmplY3QgPSBncm91cHMucmVkdWNlKGZ1bmN0aW9uIChyZXMsIGdyb3VwLCBpbmRleCkge1xuICAgIFtdLmNvbmNhdChncm91cCkuZm9yRWFjaChmdW5jdGlvbiAoZ3JvdXBJdGVtKSB7XG4gICAgICByZXNbZ3JvdXBJdGVtXSA9IGluZGV4ICogMjtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzO1xuICB9LCB7fSk7XG5cbiAgY29uc3Qgb21pdHRlZFR5cGVzID0gdHlwZXMuZmlsdGVyKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiByYW5rT2JqZWN0W3R5cGVdID09PSAndW5kZWZpbmVkJztcbiAgfSk7XG5cbiAgY29uc3QgcmFua3MgPSBvbWl0dGVkVHlwZXMucmVkdWNlKGZ1bmN0aW9uIChyZXMsIHR5cGUpIHtcbiAgICByZXNbdHlwZV0gPSBncm91cHMubGVuZ3RoICogMjtcbiAgICByZXR1cm4gcmVzO1xuICB9LCByYW5rT2JqZWN0KTtcblxuICByZXR1cm4geyBncm91cHM6IHJhbmtzLCBvbWl0dGVkVHlwZXMgfTtcbn1cblxuZnVuY3Rpb24gY29udmVydFBhdGhHcm91cHNGb3JSYW5rcyhwYXRoR3JvdXBzKSB7XG4gIGNvbnN0IGFmdGVyID0ge307XG4gIGNvbnN0IGJlZm9yZSA9IHt9O1xuXG4gIGNvbnN0IHRyYW5zZm9ybWVkID0gcGF0aEdyb3Vwcy5tYXAoKHBhdGhHcm91cCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCB7IGdyb3VwLCBwb3NpdGlvbjogcG9zaXRpb25TdHJpbmcgfSA9IHBhdGhHcm91cDtcbiAgICBsZXQgcG9zaXRpb24gPSAwO1xuICAgIGlmIChwb3NpdGlvblN0cmluZyA9PT0gJ2FmdGVyJykge1xuICAgICAgaWYgKCFhZnRlcltncm91cF0pIHtcbiAgICAgICAgYWZ0ZXJbZ3JvdXBdID0gMTtcbiAgICAgIH1cbiAgICAgIHBvc2l0aW9uID0gYWZ0ZXJbZ3JvdXBdKys7XG4gICAgfSBlbHNlIGlmIChwb3NpdGlvblN0cmluZyA9PT0gJ2JlZm9yZScpIHtcbiAgICAgIGlmICghYmVmb3JlW2dyb3VwXSkge1xuICAgICAgICBiZWZvcmVbZ3JvdXBdID0gW107XG4gICAgICB9XG4gICAgICBiZWZvcmVbZ3JvdXBdLnB1c2goaW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiB7IC4uLnBhdGhHcm91cCwgcG9zaXRpb24gfTtcbiAgfSk7XG5cbiAgbGV0IG1heFBvc2l0aW9uID0gMTtcblxuICBPYmplY3Qua2V5cyhiZWZvcmUpLmZvckVhY2goKGdyb3VwKSA9PiB7XG4gICAgY29uc3QgZ3JvdXBMZW5ndGggPSBiZWZvcmVbZ3JvdXBdLmxlbmd0aDtcbiAgICBiZWZvcmVbZ3JvdXBdLmZvckVhY2goKGdyb3VwSW5kZXgsIGluZGV4KSA9PiB7XG4gICAgICB0cmFuc2Zvcm1lZFtncm91cEluZGV4XS5wb3NpdGlvbiA9IC0xICogKGdyb3VwTGVuZ3RoIC0gaW5kZXgpO1xuICAgIH0pO1xuICAgIG1heFBvc2l0aW9uID0gTWF0aC5tYXgobWF4UG9zaXRpb24sIGdyb3VwTGVuZ3RoKTtcbiAgfSk7XG5cbiAgT2JqZWN0LmtleXMoYWZ0ZXIpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGNvbnN0IGdyb3VwTmV4dFBvc2l0aW9uID0gYWZ0ZXJba2V5XTtcbiAgICBtYXhQb3NpdGlvbiA9IE1hdGgubWF4KG1heFBvc2l0aW9uLCBncm91cE5leHRQb3NpdGlvbiAtIDEpO1xuICB9KTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhHcm91cHM6IHRyYW5zZm9ybWVkLFxuICAgIG1heFBvc2l0aW9uOiBtYXhQb3NpdGlvbiA+IDEwID8gTWF0aC5wb3coMTAsIE1hdGguY2VpbChNYXRoLmxvZzEwKG1heFBvc2l0aW9uKSkpIDogMTAsXG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpeE5ld0xpbmVBZnRlckltcG9ydChjb250ZXh0LCBwcmV2aW91c0ltcG9ydCkge1xuICBjb25zdCBwcmV2Um9vdCA9IGZpbmRSb290Tm9kZShwcmV2aW91c0ltcG9ydC5ub2RlKTtcbiAgY29uc3QgdG9rZW5zVG9FbmRPZkxpbmUgPSB0YWtlVG9rZW5zQWZ0ZXJXaGlsZShcbiAgICBnZXRTb3VyY2VDb2RlKGNvbnRleHQpLFxuICAgIHByZXZSb290LFxuICAgIGNvbW1lbnRPblNhbWVMaW5lQXMocHJldlJvb3QpLFxuICApO1xuXG4gIGxldCBlbmRPZkxpbmUgPSBwcmV2Um9vdC5yYW5nZVsxXTtcbiAgaWYgKHRva2Vuc1RvRW5kT2ZMaW5lLmxlbmd0aCA+IDApIHtcbiAgICBlbmRPZkxpbmUgPSB0b2tlbnNUb0VuZE9mTGluZVt0b2tlbnNUb0VuZE9mTGluZS5sZW5ndGggLSAxXS5yYW5nZVsxXTtcbiAgfVxuICByZXR1cm4gKGZpeGVyKSA9PiBmaXhlci5pbnNlcnRUZXh0QWZ0ZXJSYW5nZShbcHJldlJvb3QucmFuZ2VbMF0sIGVuZE9mTGluZV0sICdcXG4nKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlTmV3TGluZUFmdGVySW1wb3J0KGNvbnRleHQsIGN1cnJlbnRJbXBvcnQsIHByZXZpb3VzSW1wb3J0KSB7XG4gIGNvbnN0IHNvdXJjZUNvZGUgPSBnZXRTb3VyY2VDb2RlKGNvbnRleHQpO1xuICBjb25zdCBwcmV2Um9vdCA9IGZpbmRSb290Tm9kZShwcmV2aW91c0ltcG9ydC5ub2RlKTtcbiAgY29uc3QgY3VyclJvb3QgPSBmaW5kUm9vdE5vZGUoY3VycmVudEltcG9ydC5ub2RlKTtcbiAgY29uc3QgcmFuZ2VUb1JlbW92ZSA9IFtcbiAgICBmaW5kRW5kT2ZMaW5lV2l0aENvbW1lbnRzKHNvdXJjZUNvZGUsIHByZXZSb290KSxcbiAgICBmaW5kU3RhcnRPZkxpbmVXaXRoQ29tbWVudHMoc291cmNlQ29kZSwgY3VyclJvb3QpLFxuICBdO1xuICBpZiAoKC9eXFxzKiQvKS50ZXN0KHNvdXJjZUNvZGUudGV4dC5zdWJzdHJpbmcocmFuZ2VUb1JlbW92ZVswXSwgcmFuZ2VUb1JlbW92ZVsxXSkpKSB7XG4gICAgcmV0dXJuIChmaXhlcikgPT4gZml4ZXIucmVtb3ZlUmFuZ2UocmFuZ2VUb1JlbW92ZSk7XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gbWFrZU5ld2xpbmVzQmV0d2VlblJlcG9ydChjb250ZXh0LCBpbXBvcnRlZCwgbmV3bGluZXNCZXR3ZWVuSW1wb3J0c18sIG5ld2xpbmVzQmV0d2VlblR5cGVPbmx5SW1wb3J0c18sIGRpc3RpbmN0R3JvdXAsIGlzU29ydGluZ1R5cGVzR3JvdXAsIGlzQ29uc29saWRhdGluZ1NwYWNlQmV0d2VlbkltcG9ydHMpIHtcbiAgY29uc3QgZ2V0TnVtYmVyT2ZFbXB0eUxpbmVzQmV0d2VlbiA9IChjdXJyZW50SW1wb3J0LCBwcmV2aW91c0ltcG9ydCkgPT4ge1xuICAgIGNvbnN0IGxpbmVzQmV0d2VlbkltcG9ydHMgPSBnZXRTb3VyY2VDb2RlKGNvbnRleHQpLmxpbmVzLnNsaWNlKFxuICAgICAgcHJldmlvdXNJbXBvcnQubm9kZS5sb2MuZW5kLmxpbmUsXG4gICAgICBjdXJyZW50SW1wb3J0Lm5vZGUubG9jLnN0YXJ0LmxpbmUgLSAxLFxuICAgICk7XG5cbiAgICByZXR1cm4gbGluZXNCZXR3ZWVuSW1wb3J0cy5maWx0ZXIoKGxpbmUpID0+ICFsaW5lLnRyaW0oKS5sZW5ndGgpLmxlbmd0aDtcbiAgfTtcbiAgY29uc3QgZ2V0SXNTdGFydE9mRGlzdGluY3RHcm91cCA9IChjdXJyZW50SW1wb3J0LCBwcmV2aW91c0ltcG9ydCkgPT4gY3VycmVudEltcG9ydC5yYW5rIC0gMSA+PSBwcmV2aW91c0ltcG9ydC5yYW5rO1xuICBsZXQgcHJldmlvdXNJbXBvcnQgPSBpbXBvcnRlZFswXTtcblxuICBpbXBvcnRlZC5zbGljZSgxKS5mb3JFYWNoKGZ1bmN0aW9uIChjdXJyZW50SW1wb3J0KSB7XG4gICAgY29uc3QgZW1wdHlMaW5lc0JldHdlZW4gPSBnZXROdW1iZXJPZkVtcHR5TGluZXNCZXR3ZWVuKFxuICAgICAgY3VycmVudEltcG9ydCxcbiAgICAgIHByZXZpb3VzSW1wb3J0LFxuICAgICk7XG5cbiAgICBjb25zdCBpc1N0YXJ0T2ZEaXN0aW5jdEdyb3VwID0gZ2V0SXNTdGFydE9mRGlzdGluY3RHcm91cChcbiAgICAgIGN1cnJlbnRJbXBvcnQsXG4gICAgICBwcmV2aW91c0ltcG9ydCxcbiAgICApO1xuXG4gICAgY29uc3QgaXNUeXBlT25seUltcG9ydCA9IGN1cnJlbnRJbXBvcnQubm9kZS5pbXBvcnRLaW5kID09PSAndHlwZSc7XG4gICAgY29uc3QgaXNQcmV2aW91c0ltcG9ydFR5cGVPbmx5SW1wb3J0ID0gcHJldmlvdXNJbXBvcnQubm9kZS5pbXBvcnRLaW5kID09PSAndHlwZSc7XG5cbiAgICBjb25zdCBpc05vcm1hbEltcG9ydE5leHRUb1R5cGVPbmx5SW1wb3J0QW5kUmVsZXZhbnQgPSAgICAgIGlzVHlwZU9ubHlJbXBvcnQgIT09IGlzUHJldmlvdXNJbXBvcnRUeXBlT25seUltcG9ydCAmJiBpc1NvcnRpbmdUeXBlc0dyb3VwO1xuXG4gICAgY29uc3QgaXNUeXBlT25seUltcG9ydEFuZFJlbGV2YW50ID0gaXNUeXBlT25seUltcG9ydCAmJiBpc1NvcnRpbmdUeXBlc0dyb3VwO1xuXG4gICAgLy8gSW4gdGhlIHNwZWNpYWwgY2FzZSB3aGVyZSBuZXdsaW5lc0JldHdlZW5JbXBvcnRzIGFuZCBjb25zb2xpZGF0ZUlzbGFuZHNcbiAgICAvLyB3YW50IHRoZSBvcHBvc2l0ZSB0aGluZywgY29uc29saWRhdGVJc2xhbmRzIHdpbnNcbiAgICBjb25zdCBuZXdsaW5lc0JldHdlZW5JbXBvcnRzID0gICAgICBpc1NvcnRpbmdUeXBlc0dyb3VwXG4gICAgICAmJiBpc0NvbnNvbGlkYXRpbmdTcGFjZUJldHdlZW5JbXBvcnRzXG4gICAgICAmJiAocHJldmlvdXNJbXBvcnQuaXNNdWx0aWxpbmUgfHwgY3VycmVudEltcG9ydC5pc011bHRpbGluZSlcbiAgICAgICYmIG5ld2xpbmVzQmV0d2VlbkltcG9ydHNfID09PSAnbmV2ZXInXG4gICAgICA/ICdhbHdheXMtYW5kLWluc2lkZS1ncm91cHMnXG4gICAgICA6IG5ld2xpbmVzQmV0d2VlbkltcG9ydHNfO1xuXG4gICAgLy8gSW4gdGhlIHNwZWNpYWwgY2FzZSB3aGVyZSBuZXdsaW5lc0JldHdlZW5UeXBlT25seUltcG9ydHMgYW5kXG4gICAgLy8gY29uc29saWRhdGVJc2xhbmRzIHdhbnQgdGhlIG9wcG9zaXRlIHRoaW5nLCBjb25zb2xpZGF0ZUlzbGFuZHMgd2luc1xuICAgIGNvbnN0IG5ld2xpbmVzQmV0d2VlblR5cGVPbmx5SW1wb3J0cyA9ICAgICAgaXNTb3J0aW5nVHlwZXNHcm91cFxuICAgICAgJiYgaXNDb25zb2xpZGF0aW5nU3BhY2VCZXR3ZWVuSW1wb3J0c1xuICAgICAgJiYgKGlzTm9ybWFsSW1wb3J0TmV4dFRvVHlwZU9ubHlJbXBvcnRBbmRSZWxldmFudFxuICAgICAgICB8fCBwcmV2aW91c0ltcG9ydC5pc011bHRpbGluZVxuICAgICAgICB8fCBjdXJyZW50SW1wb3J0LmlzTXVsdGlsaW5lKVxuICAgICAgJiYgbmV3bGluZXNCZXR3ZWVuVHlwZU9ubHlJbXBvcnRzXyA9PT0gJ25ldmVyJ1xuICAgICAgPyAnYWx3YXlzLWFuZC1pbnNpZGUtZ3JvdXBzJ1xuICAgICAgOiBuZXdsaW5lc0JldHdlZW5UeXBlT25seUltcG9ydHNfO1xuXG4gICAgY29uc3QgaXNOb3RJZ25vcmVkID0gICAgICBpc1R5cGVPbmx5SW1wb3J0QW5kUmVsZXZhbnRcbiAgICAgICAgJiYgbmV3bGluZXNCZXR3ZWVuVHlwZU9ubHlJbXBvcnRzICE9PSAnaWdub3JlJ1xuICAgICAgfHwgIWlzVHlwZU9ubHlJbXBvcnRBbmRSZWxldmFudCAmJiBuZXdsaW5lc0JldHdlZW5JbXBvcnRzICE9PSAnaWdub3JlJztcblxuICAgIGlmIChpc05vdElnbm9yZWQpIHtcbiAgICAgIGNvbnN0IHNob3VsZEFzc2VydE5ld2xpbmVCZXR3ZWVuR3JvdXBzID0gICAgICAgIChpc1R5cGVPbmx5SW1wb3J0QW5kUmVsZXZhbnQgfHwgaXNOb3JtYWxJbXBvcnROZXh0VG9UeXBlT25seUltcG9ydEFuZFJlbGV2YW50KVxuICAgICAgICAgICYmIChuZXdsaW5lc0JldHdlZW5UeXBlT25seUltcG9ydHMgPT09ICdhbHdheXMnXG4gICAgICAgICAgICB8fCBuZXdsaW5lc0JldHdlZW5UeXBlT25seUltcG9ydHMgPT09ICdhbHdheXMtYW5kLWluc2lkZS1ncm91cHMnKVxuICAgICAgICB8fCAhaXNUeXBlT25seUltcG9ydEFuZFJlbGV2YW50ICYmICFpc05vcm1hbEltcG9ydE5leHRUb1R5cGVPbmx5SW1wb3J0QW5kUmVsZXZhbnRcbiAgICAgICAgICAmJiAobmV3bGluZXNCZXR3ZWVuSW1wb3J0cyA9PT0gJ2Fsd2F5cydcbiAgICAgICAgICAgIHx8IG5ld2xpbmVzQmV0d2VlbkltcG9ydHMgPT09ICdhbHdheXMtYW5kLWluc2lkZS1ncm91cHMnKTtcblxuICAgICAgY29uc3Qgc2hvdWxkQXNzZXJ0Tm9OZXdsaW5lV2l0aGluR3JvdXAgPSAgICAgICAgKGlzVHlwZU9ubHlJbXBvcnRBbmRSZWxldmFudCB8fCBpc05vcm1hbEltcG9ydE5leHRUb1R5cGVPbmx5SW1wb3J0QW5kUmVsZXZhbnQpXG4gICAgICAgICAgJiYgbmV3bGluZXNCZXR3ZWVuVHlwZU9ubHlJbXBvcnRzICE9PSAnYWx3YXlzLWFuZC1pbnNpZGUtZ3JvdXBzJ1xuICAgICAgICB8fCAhaXNUeXBlT25seUltcG9ydEFuZFJlbGV2YW50ICYmICFpc05vcm1hbEltcG9ydE5leHRUb1R5cGVPbmx5SW1wb3J0QW5kUmVsZXZhbnRcbiAgICAgICAgICAmJiBuZXdsaW5lc0JldHdlZW5JbXBvcnRzICE9PSAnYWx3YXlzLWFuZC1pbnNpZGUtZ3JvdXBzJztcblxuICAgICAgY29uc3Qgc2hvdWxkQXNzZXJ0Tm9OZXdsaW5lQmV0d2Vlbkdyb3VwID0gICAgICAgICFpc1NvcnRpbmdUeXBlc0dyb3VwXG4gICAgICAgIHx8ICFpc05vcm1hbEltcG9ydE5leHRUb1R5cGVPbmx5SW1wb3J0QW5kUmVsZXZhbnRcbiAgICAgICAgfHwgbmV3bGluZXNCZXR3ZWVuVHlwZU9ubHlJbXBvcnRzID09PSAnbmV2ZXInO1xuXG4gICAgICBjb25zdCBpc1RoZU5ld2xpbmVCZXR3ZWVuSW1wb3J0c0luVGhlU2FtZUdyb3VwID0gZGlzdGluY3RHcm91cCAmJiBjdXJyZW50SW1wb3J0LnJhbmsgPT09IHByZXZpb3VzSW1wb3J0LnJhbmtcbiAgICAgIHx8ICFkaXN0aW5jdEdyb3VwICYmICFpc1N0YXJ0T2ZEaXN0aW5jdEdyb3VwO1xuXG4gICAgICAvLyBMZXQncyB0cnkgdG8gY3V0IGRvd24gb24gbGludGluZyBlcnJvcnMgc2VudCB0byB0aGUgdXNlclxuICAgICAgbGV0IGFscmVhZHlSZXBvcnRlZCA9IGZhbHNlO1xuXG4gICAgICBpZiAoc2hvdWxkQXNzZXJ0TmV3bGluZUJldHdlZW5Hcm91cHMpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRJbXBvcnQucmFuayAhPT0gcHJldmlvdXNJbXBvcnQucmFuayAmJiBlbXB0eUxpbmVzQmV0d2VlbiA9PT0gMCkge1xuICAgICAgICAgIGlmIChkaXN0aW5jdEdyb3VwIHx8IGlzU3RhcnRPZkRpc3RpbmN0R3JvdXApIHtcbiAgICAgICAgICAgIGFscmVhZHlSZXBvcnRlZCA9IHRydWU7XG4gICAgICAgICAgICBjb250ZXh0LnJlcG9ydCh7XG4gICAgICAgICAgICAgIG5vZGU6IHByZXZpb3VzSW1wb3J0Lm5vZGUsXG4gICAgICAgICAgICAgIG1lc3NhZ2U6ICdUaGVyZSBzaG91bGQgYmUgYXQgbGVhc3Qgb25lIGVtcHR5IGxpbmUgYmV0d2VlbiBpbXBvcnQgZ3JvdXBzJyxcbiAgICAgICAgICAgICAgZml4OiBmaXhOZXdMaW5lQWZ0ZXJJbXBvcnQoY29udGV4dCwgcHJldmlvdXNJbXBvcnQpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGVtcHR5TGluZXNCZXR3ZWVuID4gMCAmJiBzaG91bGRBc3NlcnROb05ld2xpbmVXaXRoaW5Hcm91cCkge1xuICAgICAgICAgIGlmIChpc1RoZU5ld2xpbmVCZXR3ZWVuSW1wb3J0c0luVGhlU2FtZUdyb3VwKSB7XG4gICAgICAgICAgICBhbHJlYWR5UmVwb3J0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgY29udGV4dC5yZXBvcnQoe1xuICAgICAgICAgICAgICBub2RlOiBwcmV2aW91c0ltcG9ydC5ub2RlLFxuICAgICAgICAgICAgICBtZXNzYWdlOiAnVGhlcmUgc2hvdWxkIGJlIG5vIGVtcHR5IGxpbmUgd2l0aGluIGltcG9ydCBncm91cCcsXG4gICAgICAgICAgICAgIGZpeDogcmVtb3ZlTmV3TGluZUFmdGVySW1wb3J0KGNvbnRleHQsIGN1cnJlbnRJbXBvcnQsIHByZXZpb3VzSW1wb3J0KSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlbXB0eUxpbmVzQmV0d2VlbiA+IDAgJiYgc2hvdWxkQXNzZXJ0Tm9OZXdsaW5lQmV0d2Vlbkdyb3VwKSB7XG4gICAgICAgIGFscmVhZHlSZXBvcnRlZCA9IHRydWU7XG4gICAgICAgIGNvbnRleHQucmVwb3J0KHtcbiAgICAgICAgICBub2RlOiBwcmV2aW91c0ltcG9ydC5ub2RlLFxuICAgICAgICAgIG1lc3NhZ2U6ICdUaGVyZSBzaG91bGQgYmUgbm8gZW1wdHkgbGluZSBiZXR3ZWVuIGltcG9ydCBncm91cHMnLFxuICAgICAgICAgIGZpeDogcmVtb3ZlTmV3TGluZUFmdGVySW1wb3J0KGNvbnRleHQsIGN1cnJlbnRJbXBvcnQsIHByZXZpb3VzSW1wb3J0KSxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghYWxyZWFkeVJlcG9ydGVkICYmIGlzQ29uc29saWRhdGluZ1NwYWNlQmV0d2VlbkltcG9ydHMpIHtcbiAgICAgICAgaWYgKGVtcHR5TGluZXNCZXR3ZWVuID09PSAwICYmIGN1cnJlbnRJbXBvcnQuaXNNdWx0aWxpbmUpIHtcbiAgICAgICAgICBjb250ZXh0LnJlcG9ydCh7XG4gICAgICAgICAgICBub2RlOiBwcmV2aW91c0ltcG9ydC5ub2RlLFxuICAgICAgICAgICAgbWVzc2FnZTogJ1RoZXJlIHNob3VsZCBiZSBhdCBsZWFzdCBvbmUgZW1wdHkgbGluZSBiZXR3ZWVuIHRoaXMgaW1wb3J0IGFuZCB0aGUgbXVsdGktbGluZSBpbXBvcnQgdGhhdCBmb2xsb3dzIGl0JyxcbiAgICAgICAgICAgIGZpeDogZml4TmV3TGluZUFmdGVySW1wb3J0KGNvbnRleHQsIHByZXZpb3VzSW1wb3J0KSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChlbXB0eUxpbmVzQmV0d2VlbiA9PT0gMCAmJiBwcmV2aW91c0ltcG9ydC5pc011bHRpbGluZSkge1xuICAgICAgICAgIGNvbnRleHQucmVwb3J0KHtcbiAgICAgICAgICAgIG5vZGU6IHByZXZpb3VzSW1wb3J0Lm5vZGUsXG4gICAgICAgICAgICBtZXNzYWdlOiAnVGhlcmUgc2hvdWxkIGJlIGF0IGxlYXN0IG9uZSBlbXB0eSBsaW5lIGJldHdlZW4gdGhpcyBtdWx0aS1saW5lIGltcG9ydCBhbmQgdGhlIGltcG9ydCB0aGF0IGZvbGxvd3MgaXQnLFxuICAgICAgICAgICAgZml4OiBmaXhOZXdMaW5lQWZ0ZXJJbXBvcnQoY29udGV4dCwgcHJldmlvdXNJbXBvcnQpLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIGVtcHR5TGluZXNCZXR3ZWVuID4gMFxuICAgICAgICAgICYmICFwcmV2aW91c0ltcG9ydC5pc011bHRpbGluZVxuICAgICAgICAgICYmICFjdXJyZW50SW1wb3J0LmlzTXVsdGlsaW5lXG4gICAgICAgICAgJiYgaXNUaGVOZXdsaW5lQmV0d2VlbkltcG9ydHNJblRoZVNhbWVHcm91cFxuICAgICAgICApIHtcbiAgICAgICAgICBjb250ZXh0LnJlcG9ydCh7XG4gICAgICAgICAgICBub2RlOiBwcmV2aW91c0ltcG9ydC5ub2RlLFxuICAgICAgICAgICAgbWVzc2FnZTpcbiAgICAgICAgICAgICAgJ1RoZXJlIHNob3VsZCBiZSBubyBlbXB0eSBsaW5lcyBiZXR3ZWVuIHRoaXMgc2luZ2xlLWxpbmUgaW1wb3J0IGFuZCB0aGUgc2luZ2xlLWxpbmUgaW1wb3J0IHRoYXQgZm9sbG93cyBpdCcsXG4gICAgICAgICAgICBmaXg6IHJlbW92ZU5ld0xpbmVBZnRlckltcG9ydChjb250ZXh0LCBjdXJyZW50SW1wb3J0LCBwcmV2aW91c0ltcG9ydCksXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcmV2aW91c0ltcG9ydCA9IGN1cnJlbnRJbXBvcnQ7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRBbHBoYWJldGl6ZUNvbmZpZyhvcHRpb25zKSB7XG4gIGNvbnN0IGFscGhhYmV0aXplID0gb3B0aW9ucy5hbHBoYWJldGl6ZSB8fCB7fTtcbiAgY29uc3Qgb3JkZXIgPSBhbHBoYWJldGl6ZS5vcmRlciB8fCAnaWdub3JlJztcbiAgY29uc3Qgb3JkZXJJbXBvcnRLaW5kID0gYWxwaGFiZXRpemUub3JkZXJJbXBvcnRLaW5kIHx8ICdpZ25vcmUnO1xuICBjb25zdCBjYXNlSW5zZW5zaXRpdmUgPSBhbHBoYWJldGl6ZS5jYXNlSW5zZW5zaXRpdmUgfHwgZmFsc2U7XG5cbiAgcmV0dXJuIHsgb3JkZXIsIG9yZGVySW1wb3J0S2luZCwgY2FzZUluc2Vuc2l0aXZlIH07XG59XG5cbi8vIFRPRE8sIHNlbXZlci1tYWpvcjogQ2hhbmdlIHRoZSBkZWZhdWx0IG9mIFwiZGlzdGluY3RHcm91cFwiIGZyb20gdHJ1ZSB0byBmYWxzZVxuY29uc3QgZGVmYXVsdERpc3RpbmN0R3JvdXAgPSB0cnVlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbWV0YToge1xuICAgIHR5cGU6ICdzdWdnZXN0aW9uJyxcbiAgICBkb2NzOiB7XG4gICAgICBjYXRlZ29yeTogJ1N0eWxlIGd1aWRlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRW5mb3JjZSBhIGNvbnZlbnRpb24gaW4gbW9kdWxlIGltcG9ydCBvcmRlci4nLFxuICAgICAgdXJsOiBkb2NzVXJsKCdvcmRlcicpLFxuICAgIH0sXG5cbiAgICBmaXhhYmxlOiAnY29kZScsXG4gICAgc2NoZW1hOiBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgZ3JvdXBzOiB7XG4gICAgICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICAgICAgdW5pcXVlSXRlbXM6IHRydWUsXG4gICAgICAgICAgICBpdGVtczoge1xuICAgICAgICAgICAgICBvbmVPZjogW1xuICAgICAgICAgICAgICAgIHsgZW51bTogdHlwZXMgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICAgICAgICAgICAgdW5pcXVlSXRlbXM6IHRydWUsXG4gICAgICAgICAgICAgICAgICBpdGVtczogeyBlbnVtOiB0eXBlcyB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcGF0aEdyb3Vwc0V4Y2x1ZGVkSW1wb3J0VHlwZXM6IHtcbiAgICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkaXN0aW5jdEdyb3VwOiB7XG4gICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgICBkZWZhdWx0OiBkZWZhdWx0RGlzdGluY3RHcm91cCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHBhdGhHcm91cHM6IHtcbiAgICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgICBpdGVtczoge1xuICAgICAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICAgIHBhdHRlcm46IHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGF0dGVybk9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZ3JvdXA6IHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgZW51bTogdHlwZXMsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICBlbnVtOiBbJ2FmdGVyJywgJ2JlZm9yZSddLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBmYWxzZSxcbiAgICAgICAgICAgICAgcmVxdWlyZWQ6IFsncGF0dGVybicsICdncm91cCddLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgICduZXdsaW5lcy1iZXR3ZWVuJzoge1xuICAgICAgICAgICAgZW51bTogW1xuICAgICAgICAgICAgICAnaWdub3JlJyxcbiAgICAgICAgICAgICAgJ2Fsd2F5cycsXG4gICAgICAgICAgICAgICdhbHdheXMtYW5kLWluc2lkZS1ncm91cHMnLFxuICAgICAgICAgICAgICAnbmV2ZXInLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgICduZXdsaW5lcy1iZXR3ZWVuLXR5cGVzJzoge1xuICAgICAgICAgICAgZW51bTogW1xuICAgICAgICAgICAgICAnaWdub3JlJyxcbiAgICAgICAgICAgICAgJ2Fsd2F5cycsXG4gICAgICAgICAgICAgICdhbHdheXMtYW5kLWluc2lkZS1ncm91cHMnLFxuICAgICAgICAgICAgICAnbmV2ZXInLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbnNvbGlkYXRlSXNsYW5kczoge1xuICAgICAgICAgICAgZW51bTogW1xuICAgICAgICAgICAgICAnaW5zaWRlLWdyb3VwcycsXG4gICAgICAgICAgICAgICduZXZlcicsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc29ydFR5cGVzR3JvdXA6IHtcbiAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbmFtZWQ6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICAgICAgb25lT2Y6IFt7XG4gICAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICAgICAgICAgICAgICAgIGltcG9ydDogeyB0eXBlOiAnYm9vbGVhbicgfSxcbiAgICAgICAgICAgICAgICBleHBvcnQ6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gICAgICAgICAgICAgICAgcmVxdWlyZTogeyB0eXBlOiAnYm9vbGVhbicgfSxcbiAgICAgICAgICAgICAgICBjanNFeHBvcnRzOiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICAgICAgICAgICAgICAgIHR5cGVzOiB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgIGVudW06IFtcbiAgICAgICAgICAgICAgICAgICAgJ21peGVkJyxcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGVzLWZpcnN0JyxcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGVzLWxhc3QnLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBhZGRpdGlvbmFsUHJvcGVydGllczogZmFsc2UsXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFscGhhYmV0aXplOiB7XG4gICAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgY2FzZUluc2Vuc2l0aXZlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvcmRlcjoge1xuICAgICAgICAgICAgICAgIGVudW06IFsnaWdub3JlJywgJ2FzYycsICdkZXNjJ10sXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJ2lnbm9yZScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9yZGVySW1wb3J0S2luZDoge1xuICAgICAgICAgICAgICAgIGVudW06IFsnaWdub3JlJywgJ2FzYycsICdkZXNjJ10sXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJ2lnbm9yZScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgd2Fybk9uVW5hc3NpZ25lZEltcG9ydHM6IHtcbiAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBmYWxzZSxcbiAgICAgICAgZGVwZW5kZW5jaWVzOiB7XG4gICAgICAgICAgc29ydFR5cGVzR3JvdXA6IHtcbiAgICAgICAgICAgIG9uZU9mOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyBXaGVuIHNvcnRUeXBlc0dyb3VwIGlzIHRydWUsIGdyb3VwcyBtdXN0IE5PVCBiZSBhbiBhcnJheSB0aGF0IGRvZXMgbm90IGNvbnRhaW4gJ3R5cGUnXG4gICAgICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICAgICAgc29ydFR5cGVzR3JvdXA6IHsgZW51bTogW3RydWVdIH0sXG4gICAgICAgICAgICAgICAgICBncm91cHM6IHtcbiAgICAgICAgICAgICAgICAgICAgbm90OiB7XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgICAgICAgICAgICAgICAgICB1bmlxdWVJdGVtczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgb25lT2Y6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBlbnVtOiB0eXBlcy5maWx0ZXIoKHQpID0+IHQgIT09ICd0eXBlJykgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pcXVlSXRlbXM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IHsgZW51bTogdHlwZXMuZmlsdGVyKCh0KSA9PiB0ICE9PSAndHlwZScpIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFsnZ3JvdXBzJ10sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgICBzb3J0VHlwZXNHcm91cDogeyBlbnVtOiBbZmFsc2VdIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnbmV3bGluZXMtYmV0d2Vlbi10eXBlcyc6IHtcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgc29ydFR5cGVzR3JvdXA6IHsgZW51bTogW3RydWVdIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVxdWlyZWQ6IFsnc29ydFR5cGVzR3JvdXAnXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbnNvbGlkYXRlSXNsYW5kczoge1xuICAgICAgICAgICAgb25lT2Y6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGlkYXRlSXNsYW5kczogeyBlbnVtOiBbJ2luc2lkZS1ncm91cHMnXSB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYW55T2Y6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICAgICAgICAgICduZXdsaW5lcy1iZXR3ZWVuJzogeyBlbnVtOiBbJ2Fsd2F5cy1hbmQtaW5zaWRlLWdyb3VwcyddIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBbJ25ld2xpbmVzLWJldHdlZW4nXSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAnbmV3bGluZXMtYmV0d2Vlbi10eXBlcyc6IHsgZW51bTogWydhbHdheXMtYW5kLWluc2lkZS1ncm91cHMnXSB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogWyduZXdsaW5lcy1iZXR3ZWVuLXR5cGVzJ10sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xpZGF0ZUlzbGFuZHM6IHsgZW51bTogWyduZXZlciddIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcblxuICBjcmVhdGUoY29udGV4dCkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBjb250ZXh0Lm9wdGlvbnNbMF0gfHwge307XG4gICAgY29uc3QgbmV3bGluZXNCZXR3ZWVuSW1wb3J0cyA9IG9wdGlvbnNbJ25ld2xpbmVzLWJldHdlZW4nXSB8fCAnaWdub3JlJztcbiAgICBjb25zdCBuZXdsaW5lc0JldHdlZW5UeXBlT25seUltcG9ydHMgPSBvcHRpb25zWyduZXdsaW5lcy1iZXR3ZWVuLXR5cGVzJ10gfHwgbmV3bGluZXNCZXR3ZWVuSW1wb3J0cztcbiAgICBjb25zdCBwYXRoR3JvdXBzRXhjbHVkZWRJbXBvcnRUeXBlcyA9IG5ldyBTZXQob3B0aW9ucy5wYXRoR3JvdXBzRXhjbHVkZWRJbXBvcnRUeXBlcyB8fCBbJ2J1aWx0aW4nLCAnZXh0ZXJuYWwnLCAnb2JqZWN0J10pO1xuICAgIGNvbnN0IHNvcnRUeXBlc0dyb3VwID0gb3B0aW9ucy5zb3J0VHlwZXNHcm91cDtcbiAgICBjb25zdCBjb25zb2xpZGF0ZUlzbGFuZHMgPSBvcHRpb25zLmNvbnNvbGlkYXRlSXNsYW5kcyB8fCAnbmV2ZXInO1xuXG4gICAgY29uc3QgbmFtZWQgPSB7XG4gICAgICB0eXBlczogJ21peGVkJyxcbiAgICAgIC4uLnR5cGVvZiBvcHRpb25zLm5hbWVkID09PSAnb2JqZWN0JyA/IHtcbiAgICAgICAgLi4ub3B0aW9ucy5uYW1lZCxcbiAgICAgICAgaW1wb3J0OiAnaW1wb3J0JyBpbiBvcHRpb25zLm5hbWVkID8gb3B0aW9ucy5uYW1lZC5pbXBvcnQgOiBvcHRpb25zLm5hbWVkLmVuYWJsZWQsXG4gICAgICAgIGV4cG9ydDogJ2V4cG9ydCcgaW4gb3B0aW9ucy5uYW1lZCA/IG9wdGlvbnMubmFtZWQuZXhwb3J0IDogb3B0aW9ucy5uYW1lZC5lbmFibGVkLFxuICAgICAgICByZXF1aXJlOiAncmVxdWlyZScgaW4gb3B0aW9ucy5uYW1lZCA/IG9wdGlvbnMubmFtZWQucmVxdWlyZSA6IG9wdGlvbnMubmFtZWQuZW5hYmxlZCxcbiAgICAgICAgY2pzRXhwb3J0czogJ2Nqc0V4cG9ydHMnIGluIG9wdGlvbnMubmFtZWQgPyBvcHRpb25zLm5hbWVkLmNqc0V4cG9ydHMgOiBvcHRpb25zLm5hbWVkLmVuYWJsZWQsXG4gICAgICB9IDoge1xuICAgICAgICBpbXBvcnQ6IG9wdGlvbnMubmFtZWQsXG4gICAgICAgIGV4cG9ydDogb3B0aW9ucy5uYW1lZCxcbiAgICAgICAgcmVxdWlyZTogb3B0aW9ucy5uYW1lZCxcbiAgICAgICAgY2pzRXhwb3J0czogb3B0aW9ucy5uYW1lZCxcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIGNvbnN0IG5hbWVkR3JvdXBzID0gbmFtZWQudHlwZXMgPT09ICdtaXhlZCcgPyBbXSA6IG5hbWVkLnR5cGVzID09PSAndHlwZXMtbGFzdCcgPyBbJ3ZhbHVlJ10gOiBbJ3R5cGUnXTtcbiAgICBjb25zdCBhbHBoYWJldGl6ZSA9IGdldEFscGhhYmV0aXplQ29uZmlnKG9wdGlvbnMpO1xuICAgIGNvbnN0IGRpc3RpbmN0R3JvdXAgPSBvcHRpb25zLmRpc3RpbmN0R3JvdXAgPT0gbnVsbCA/IGRlZmF1bHREaXN0aW5jdEdyb3VwIDogISFvcHRpb25zLmRpc3RpbmN0R3JvdXA7XG4gICAgbGV0IHJhbmtzO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcGF0aEdyb3VwcywgbWF4UG9zaXRpb24gfSA9IGNvbnZlcnRQYXRoR3JvdXBzRm9yUmFua3Mob3B0aW9ucy5wYXRoR3JvdXBzIHx8IFtdKTtcbiAgICAgIGNvbnN0IHsgZ3JvdXBzLCBvbWl0dGVkVHlwZXMgfSA9IGNvbnZlcnRHcm91cHNUb1JhbmtzKG9wdGlvbnMuZ3JvdXBzIHx8IGRlZmF1bHRHcm91cHMpO1xuICAgICAgcmFua3MgPSB7XG4gICAgICAgIGdyb3VwcyxcbiAgICAgICAgb21pdHRlZFR5cGVzLFxuICAgICAgICBwYXRoR3JvdXBzLFxuICAgICAgICBtYXhQb3NpdGlvbixcbiAgICAgIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIE1hbGZvcm1lZCBjb25maWd1cmF0aW9uXG4gICAgICByZXR1cm4ge1xuICAgICAgICBQcm9ncmFtKG5vZGUpIHtcbiAgICAgICAgICBjb250ZXh0LnJlcG9ydChub2RlLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IGltcG9ydE1hcCA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBleHBvcnRNYXAgPSBuZXcgTWFwKCk7XG5cbiAgICBjb25zdCBpc1R5cGVHcm91cEluR3JvdXBzID0gcmFua3Mub21pdHRlZFR5cGVzLmluZGV4T2YoJ3R5cGUnKSA9PT0gLTE7XG4gICAgY29uc3QgaXNTb3J0aW5nVHlwZXNHcm91cCA9IGlzVHlwZUdyb3VwSW5Hcm91cHMgJiYgc29ydFR5cGVzR3JvdXA7XG5cbiAgICBmdW5jdGlvbiBnZXRCbG9ja0ltcG9ydHMobm9kZSkge1xuICAgICAgaWYgKCFpbXBvcnRNYXAuaGFzKG5vZGUpKSB7XG4gICAgICAgIGltcG9ydE1hcC5zZXQobm9kZSwgW10pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGltcG9ydE1hcC5nZXQobm9kZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0QmxvY2tFeHBvcnRzKG5vZGUpIHtcbiAgICAgIGlmICghZXhwb3J0TWFwLmhhcyhub2RlKSkge1xuICAgICAgICBleHBvcnRNYXAuc2V0KG5vZGUsIFtdKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBleHBvcnRNYXAuZ2V0KG5vZGUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VOYW1lZE9yZGVyUmVwb3J0KGNvbnRleHQsIG5hbWVkSW1wb3J0cykge1xuICAgICAgaWYgKG5hbWVkSW1wb3J0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGNvbnN0IGltcG9ydHMgPSBuYW1lZEltcG9ydHMubWFwKFxuICAgICAgICAgIChuYW1lZEltcG9ydCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qga2luZCA9IG5hbWVkSW1wb3J0LmtpbmQgfHwgJ3ZhbHVlJztcbiAgICAgICAgICAgIGNvbnN0IHJhbmsgPSBuYW1lZEdyb3Vwcy5maW5kSW5kZXgoKGVudHJ5KSA9PiBbXS5jb25jYXQoZW50cnkpLmluZGV4T2Yoa2luZCkgPiAtMSk7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBuYW1lZEltcG9ydC52YWx1ZSxcbiAgICAgICAgICAgICAgcmFuazogcmFuayA9PT0gLTEgPyBuYW1lZEdyb3Vwcy5sZW5ndGggOiByYW5rLFxuICAgICAgICAgICAgICAuLi5uYW1lZEltcG9ydCxcbiAgICAgICAgICAgICAgdmFsdWU6IGAke25hbWVkSW1wb3J0LnZhbHVlfToke25hbWVkSW1wb3J0LmFsaWFzIHx8ICcnfWAsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChhbHBoYWJldGl6ZS5vcmRlciAhPT0gJ2lnbm9yZScpIHtcbiAgICAgICAgICBtdXRhdGVSYW5rc1RvQWxwaGFiZXRpemUoaW1wb3J0cywgYWxwaGFiZXRpemUpO1xuICAgICAgICB9XG5cbiAgICAgICAgbWFrZU91dE9mT3JkZXJSZXBvcnQoY29udGV4dCwgaW1wb3J0cywgY2F0ZWdvcmllcy5uYW1lZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIEltcG9ydERlY2xhcmF0aW9uKG5vZGUpIHtcbiAgICAgICAgLy8gSWdub3JpbmcgdW5hc3NpZ25lZCBpbXBvcnRzIHVubGVzcyB3YXJuT25VbmFzc2lnbmVkSW1wb3J0cyBpcyBzZXRcbiAgICAgICAgaWYgKG5vZGUuc3BlY2lmaWVycy5sZW5ndGggfHwgb3B0aW9ucy53YXJuT25VbmFzc2lnbmVkSW1wb3J0cykge1xuICAgICAgICAgIGNvbnN0IG5hbWUgPSBub2RlLnNvdXJjZS52YWx1ZTtcbiAgICAgICAgICByZWdpc3Rlck5vZGUoXG4gICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBub2RlLFxuICAgICAgICAgICAgICB2YWx1ZTogbmFtZSxcbiAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgIHR5cGU6ICdpbXBvcnQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJhbmtzLFxuICAgICAgICAgICAgZ2V0QmxvY2tJbXBvcnRzKG5vZGUucGFyZW50KSxcbiAgICAgICAgICAgIHBhdGhHcm91cHNFeGNsdWRlZEltcG9ydFR5cGVzLFxuICAgICAgICAgICAgaXNTb3J0aW5nVHlwZXNHcm91cCxcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgaWYgKG5hbWVkLmltcG9ydCkge1xuICAgICAgICAgICAgbWFrZU5hbWVkT3JkZXJSZXBvcnQoXG4gICAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgICAgIG5vZGUuc3BlY2lmaWVycy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgKHNwZWNpZmllcikgPT4gc3BlY2lmaWVyLnR5cGUgPT09ICdJbXBvcnRTcGVjaWZpZXInKS5tYXAoXG4gICAgICAgICAgICAgICAgKHNwZWNpZmllcikgPT4gKHtcbiAgICAgICAgICAgICAgICAgIG5vZGU6IHNwZWNpZmllcixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBzcGVjaWZpZXIuaW1wb3J0ZWQubmFtZSxcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdpbXBvcnQnLFxuICAgICAgICAgICAgICAgICAga2luZDogc3BlY2lmaWVyLmltcG9ydEtpbmQsXG4gICAgICAgICAgICAgICAgICAuLi5zcGVjaWZpZXIubG9jYWwucmFuZ2VbMF0gIT09IHNwZWNpZmllci5pbXBvcnRlZC5yYW5nZVswXSAmJiB7XG4gICAgICAgICAgICAgICAgICAgIGFsaWFzOiBzcGVjaWZpZXIubG9jYWwubmFtZSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFRTSW1wb3J0RXF1YWxzRGVjbGFyYXRpb24obm9kZSkge1xuICAgICAgICAvLyBza2lwIFwiZXhwb3J0IGltcG9ydFwic1xuICAgICAgICBpZiAobm9kZS5pc0V4cG9ydCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkaXNwbGF5TmFtZTtcbiAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICBsZXQgdHlwZTtcbiAgICAgICAgaWYgKG5vZGUubW9kdWxlUmVmZXJlbmNlLnR5cGUgPT09ICdUU0V4dGVybmFsTW9kdWxlUmVmZXJlbmNlJykge1xuICAgICAgICAgIHZhbHVlID0gbm9kZS5tb2R1bGVSZWZlcmVuY2UuZXhwcmVzc2lvbi52YWx1ZTtcbiAgICAgICAgICBkaXNwbGF5TmFtZSA9IHZhbHVlO1xuICAgICAgICAgIHR5cGUgPSAnaW1wb3J0JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWx1ZSA9ICcnO1xuICAgICAgICAgIGRpc3BsYXlOYW1lID0gZ2V0U291cmNlQ29kZShjb250ZXh0KS5nZXRUZXh0KG5vZGUubW9kdWxlUmVmZXJlbmNlKTtcbiAgICAgICAgICB0eXBlID0gJ2ltcG9ydDpvYmplY3QnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVnaXN0ZXJOb2RlKFxuICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAge1xuICAgICAgICAgICAgbm9kZSxcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgZGlzcGxheU5hbWUsXG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmFua3MsXG4gICAgICAgICAgZ2V0QmxvY2tJbXBvcnRzKG5vZGUucGFyZW50KSxcbiAgICAgICAgICBwYXRoR3JvdXBzRXhjbHVkZWRJbXBvcnRUeXBlcyxcbiAgICAgICAgICBpc1NvcnRpbmdUeXBlc0dyb3VwLFxuICAgICAgICApO1xuICAgICAgfSxcbiAgICAgIENhbGxFeHByZXNzaW9uKG5vZGUpIHtcbiAgICAgICAgaWYgKCFpc1N0YXRpY1JlcXVpcmUobm9kZSkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYmxvY2sgPSBnZXRSZXF1aXJlQmxvY2sobm9kZSk7XG4gICAgICAgIGlmICghYmxvY2spIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmFtZSA9IG5vZGUuYXJndW1lbnRzWzBdLnZhbHVlO1xuICAgICAgICByZWdpc3Rlck5vZGUoXG4gICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBub2RlLFxuICAgICAgICAgICAgdmFsdWU6IG5hbWUsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogbmFtZSxcbiAgICAgICAgICAgIHR5cGU6ICdyZXF1aXJlJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJhbmtzLFxuICAgICAgICAgIGdldEJsb2NrSW1wb3J0cyhibG9jayksXG4gICAgICAgICAgcGF0aEdyb3Vwc0V4Y2x1ZGVkSW1wb3J0VHlwZXMsXG4gICAgICAgICAgaXNTb3J0aW5nVHlwZXNHcm91cCxcbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICAuLi5uYW1lZC5yZXF1aXJlICYmIHtcbiAgICAgICAgVmFyaWFibGVEZWNsYXJhdG9yKG5vZGUpIHtcbiAgICAgICAgICBpZiAobm9kZS5pZC50eXBlID09PSAnT2JqZWN0UGF0dGVybicgJiYgaXNSZXF1aXJlRXhwcmVzc2lvbihub2RlLmluaXQpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGUuaWQucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgbm9kZS5pZC5wcm9wZXJ0aWVzW2ldLmtleS50eXBlICE9PSAnSWRlbnRpZmllcidcbiAgICAgICAgICAgICAgICB8fCBub2RlLmlkLnByb3BlcnRpZXNbaV0udmFsdWUudHlwZSAhPT0gJ0lkZW50aWZpZXInXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWFrZU5hbWVkT3JkZXJSZXBvcnQoXG4gICAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgICAgIG5vZGUuaWQucHJvcGVydGllcy5tYXAoKHByb3ApID0+ICh7XG4gICAgICAgICAgICAgICAgbm9kZTogcHJvcCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogcHJvcC5rZXkubmFtZSxcbiAgICAgICAgICAgICAgICB0eXBlOiAncmVxdWlyZScsXG4gICAgICAgICAgICAgICAgLi4ucHJvcC5rZXkucmFuZ2VbMF0gIT09IHByb3AudmFsdWUucmFuZ2VbMF0gJiYge1xuICAgICAgICAgICAgICAgICAgYWxpYXM6IHByb3AudmFsdWUubmFtZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9KSksXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAuLi5uYW1lZC5leHBvcnQgJiYge1xuICAgICAgICBFeHBvcnROYW1lZERlY2xhcmF0aW9uKG5vZGUpIHtcbiAgICAgICAgICBtYWtlTmFtZWRPcmRlclJlcG9ydChcbiAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgICBub2RlLnNwZWNpZmllcnMubWFwKChzcGVjaWZpZXIpID0+ICh7XG4gICAgICAgICAgICAgIG5vZGU6IHNwZWNpZmllcixcbiAgICAgICAgICAgICAgdmFsdWU6IHNwZWNpZmllci5sb2NhbC5uYW1lLFxuICAgICAgICAgICAgICB0eXBlOiAnZXhwb3J0JyxcbiAgICAgICAgICAgICAga2luZDogc3BlY2lmaWVyLmV4cG9ydEtpbmQsXG4gICAgICAgICAgICAgIC4uLnNwZWNpZmllci5sb2NhbC5yYW5nZVswXSAhPT0gc3BlY2lmaWVyLmV4cG9ydGVkLnJhbmdlWzBdICYmIHtcbiAgICAgICAgICAgICAgICBhbGlhczogc3BlY2lmaWVyLmV4cG9ydGVkLm5hbWUsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSksXG4gICAgICAgICAgKTtcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAuLi5uYW1lZC5janNFeHBvcnRzICYmIHtcbiAgICAgICAgQXNzaWdubWVudEV4cHJlc3Npb24obm9kZSkge1xuICAgICAgICAgIGlmIChub2RlLnBhcmVudC50eXBlID09PSAnRXhwcmVzc2lvblN0YXRlbWVudCcpIHtcbiAgICAgICAgICAgIGlmIChpc0NKU0V4cG9ydHMoY29udGV4dCwgbm9kZS5sZWZ0KSkge1xuICAgICAgICAgICAgICBpZiAobm9kZS5yaWdodC50eXBlID09PSAnT2JqZWN0RXhwcmVzc2lvbicpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGUucmlnaHQucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAhbm9kZS5yaWdodC5wcm9wZXJ0aWVzW2ldLmtleVxuICAgICAgICAgICAgICAgICAgICB8fCBub2RlLnJpZ2h0LnByb3BlcnRpZXNbaV0ua2V5LnR5cGUgIT09ICdJZGVudGlmaWVyJ1xuICAgICAgICAgICAgICAgICAgICB8fCAhbm9kZS5yaWdodC5wcm9wZXJ0aWVzW2ldLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIHx8IG5vZGUucmlnaHQucHJvcGVydGllc1tpXS52YWx1ZS50eXBlICE9PSAnSWRlbnRpZmllcidcbiAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbWFrZU5hbWVkT3JkZXJSZXBvcnQoXG4gICAgICAgICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAgICAgICAgbm9kZS5yaWdodC5wcm9wZXJ0aWVzLm1hcCgocHJvcCkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZTogcHJvcCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHByb3Aua2V5Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdleHBvcnQnLFxuICAgICAgICAgICAgICAgICAgICAuLi5wcm9wLmtleS5yYW5nZVswXSAhPT0gcHJvcC52YWx1ZS5yYW5nZVswXSAmJiB7XG4gICAgICAgICAgICAgICAgICAgICAgYWxpYXM6IHByb3AudmFsdWUubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCBuYW1lUGFydHMgPSBnZXROYW1lZENKU0V4cG9ydHMoY29udGV4dCwgbm9kZS5sZWZ0KTtcbiAgICAgICAgICAgICAgaWYgKG5hbWVQYXJ0cyAmJiBuYW1lUGFydHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBuYW1lUGFydHMuam9pbignLicpO1xuICAgICAgICAgICAgICAgIGdldEJsb2NrRXhwb3J0cyhub2RlLnBhcmVudC5wYXJlbnQpLnB1c2goe1xuICAgICAgICAgICAgICAgICAgbm9kZSxcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICB0eXBlOiAnZXhwb3J0JyxcbiAgICAgICAgICAgICAgICAgIHJhbms6IDAsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgJ1Byb2dyYW06ZXhpdCcoKSB7XG4gICAgICAgIGltcG9ydE1hcC5mb3JFYWNoKChpbXBvcnRlZCkgPT4ge1xuICAgICAgICAgIGlmIChuZXdsaW5lc0JldHdlZW5JbXBvcnRzICE9PSAnaWdub3JlJyB8fCBuZXdsaW5lc0JldHdlZW5UeXBlT25seUltcG9ydHMgIT09ICdpZ25vcmUnKSB7XG4gICAgICAgICAgICBtYWtlTmV3bGluZXNCZXR3ZWVuUmVwb3J0KFxuICAgICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAgICBpbXBvcnRlZCxcbiAgICAgICAgICAgICAgbmV3bGluZXNCZXR3ZWVuSW1wb3J0cyxcbiAgICAgICAgICAgICAgbmV3bGluZXNCZXR3ZWVuVHlwZU9ubHlJbXBvcnRzLFxuICAgICAgICAgICAgICBkaXN0aW5jdEdyb3VwLFxuICAgICAgICAgICAgICBpc1NvcnRpbmdUeXBlc0dyb3VwLFxuICAgICAgICAgICAgICBjb25zb2xpZGF0ZUlzbGFuZHMgPT09ICdpbnNpZGUtZ3JvdXBzJ1xuICAgICAgICAgICAgICAgICYmIChuZXdsaW5lc0JldHdlZW5JbXBvcnRzID09PSAnYWx3YXlzLWFuZC1pbnNpZGUtZ3JvdXBzJ1xuICAgICAgICAgICAgICAgICAgfHwgbmV3bGluZXNCZXR3ZWVuVHlwZU9ubHlJbXBvcnRzID09PSAnYWx3YXlzLWFuZC1pbnNpZGUtZ3JvdXBzJyksXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChhbHBoYWJldGl6ZS5vcmRlciAhPT0gJ2lnbm9yZScpIHtcbiAgICAgICAgICAgIG11dGF0ZVJhbmtzVG9BbHBoYWJldGl6ZShpbXBvcnRlZCwgYWxwaGFiZXRpemUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG1ha2VPdXRPZk9yZGVyUmVwb3J0KGNvbnRleHQsIGltcG9ydGVkLCBjYXRlZ29yaWVzLmltcG9ydCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGV4cG9ydE1hcC5mb3JFYWNoKChleHBvcnRlZCkgPT4ge1xuICAgICAgICAgIGlmIChhbHBoYWJldGl6ZS5vcmRlciAhPT0gJ2lnbm9yZScpIHtcbiAgICAgICAgICAgIG11dGF0ZVJhbmtzVG9BbHBoYWJldGl6ZShleHBvcnRlZCwgYWxwaGFiZXRpemUpO1xuICAgICAgICAgICAgbWFrZU91dE9mT3JkZXJSZXBvcnQoY29udGV4dCwgZXhwb3J0ZWQsIGNhdGVnb3JpZXMuZXhwb3J0cyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpbXBvcnRNYXAuY2xlYXIoKTtcbiAgICAgICAgZXhwb3J0TWFwLmNsZWFyKCk7XG4gICAgICB9LFxuICAgIH07XG4gIH0sXG59O1xuIl19