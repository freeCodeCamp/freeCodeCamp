'use strict';var _slicedToArray = function () {function sliceIterator(arr, i) {var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"]) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}return function (arr, i) {if (Array.isArray(arr)) {return arr;} else if (Symbol.iterator in Object(arr)) {return sliceIterator(arr, i);} else {throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();var _contextCompat = require('eslint-module-utils/contextCompat');

var _docsUrl = require('../docsUrl');var _docsUrl2 = _interopRequireDefault(_docsUrl);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}

function getEmptyBlockRange(tokens, index) {
  var token = tokens[index];
  var nextToken = tokens[index + 1];
  var prevToken = tokens[index - 1];
  var start = token.range[0];
  var end = nextToken.range[1];

  // Remove block tokens and the previous comma
  if (prevToken.value === ',' || prevToken.value === 'type' || prevToken.value === 'typeof') {
    start = prevToken.range[0];
  }

  return [start, end];
}

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      category: 'Helpful warnings',
      description: 'Forbid empty named import blocks.',
      url: (0, _docsUrl2['default'])('no-empty-named-blocks') },

    fixable: 'code',
    schema: [],
    hasSuggestions: true },


  create: function () {function create(context) {
      var importsWithoutNameds = [];

      return {
        ImportDeclaration: function () {function ImportDeclaration(node) {
            if (!node.specifiers.some(function (x) {return x.type === 'ImportSpecifier';})) {
              importsWithoutNameds.push(node);
            }
          }return ImportDeclaration;}(),

        'Program:exit': function () {function ProgramExit(program) {
            var importsTokens = importsWithoutNameds.map(function (node) {return [node, program.tokens.filter(function (x) {return x.range[0] >= node.range[0] && x.range[1] <= node.range[1];})];});

            importsTokens.forEach(function (_ref) {var _ref2 = _slicedToArray(_ref, 2),node = _ref2[0],tokens = _ref2[1];
              tokens.forEach(function (token) {
                var idx = program.tokens.indexOf(token);
                var nextToken = program.tokens[idx + 1];

                if (nextToken && token.value === '{' && nextToken.value === '}') {
                  var hasOtherIdentifiers = tokens.some(function (token) {return token.type === 'Identifier' &&
                    token.value !== 'from' &&
                    token.value !== 'type' &&
                    token.value !== 'typeof';});


                  // If it has no other identifiers it's the only thing in the import, so we can either remove the import
                  // completely or transform it in a side-effects only import
                  if (!hasOtherIdentifiers) {
                    context.report({
                      node: node,
                      message: 'Unexpected empty named import block',
                      suggest: [
                      {
                        desc: 'Remove unused import',
                        fix: function () {function fix(fixer) {
                            // Remove the whole import
                            return fixer.remove(node);
                          }return fix;}() },

                      {
                        desc: 'Remove empty import block',
                        fix: function () {function fix(fixer) {
                            // Remove the empty block and the 'from' token, leaving the import only for its side
                            // effects, e.g. `import 'mod'`
                            var sourceCode = (0, _contextCompat.getSourceCode)(context);
                            var fromToken = program.tokens.find(function (t) {return t.value === 'from';});
                            var importToken = program.tokens.find(function (t) {return t.value === 'import';});
                            var hasSpaceAfterFrom = sourceCode.isSpaceBetween(fromToken, sourceCode.getTokenAfter(fromToken));
                            var hasSpaceAfterImport = sourceCode.isSpaceBetween(importToken, sourceCode.getTokenAfter(fromToken));var _getEmptyBlockRange =

                            getEmptyBlockRange(program.tokens, idx),_getEmptyBlockRange2 = _slicedToArray(_getEmptyBlockRange, 1),start = _getEmptyBlockRange2[0];var _fromToken$range = _slicedToArray(
                            fromToken.range, 2),end = _fromToken$range[1];
                            var range = [start, hasSpaceAfterFrom ? end + 1 : end];

                            return fixer.replaceTextRange(range, hasSpaceAfterImport ? '' : ' ');
                          }return fix;}() }] });



                  } else {
                    context.report({
                      node: node,
                      message: 'Unexpected empty named import block',
                      fix: function () {function fix(fixer) {
                          return fixer.removeRange(getEmptyBlockRange(program.tokens, idx));
                        }return fix;}() });

                  }
                }
              });
            });
          }return ProgramExit;}() };

    }return create;}() };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlcy9uby1lbXB0eS1uYW1lZC1ibG9ja3MuanMiXSwibmFtZXMiOlsiZ2V0RW1wdHlCbG9ja1JhbmdlIiwidG9rZW5zIiwiaW5kZXgiLCJ0b2tlbiIsIm5leHRUb2tlbiIsInByZXZUb2tlbiIsInN0YXJ0IiwicmFuZ2UiLCJlbmQiLCJ2YWx1ZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJtZXRhIiwidHlwZSIsImRvY3MiLCJjYXRlZ29yeSIsImRlc2NyaXB0aW9uIiwidXJsIiwiZml4YWJsZSIsInNjaGVtYSIsImhhc1N1Z2dlc3Rpb25zIiwiY3JlYXRlIiwiY29udGV4dCIsImltcG9ydHNXaXRob3V0TmFtZWRzIiwiSW1wb3J0RGVjbGFyYXRpb24iLCJub2RlIiwic3BlY2lmaWVycyIsInNvbWUiLCJ4IiwicHVzaCIsInByb2dyYW0iLCJpbXBvcnRzVG9rZW5zIiwibWFwIiwiZmlsdGVyIiwiZm9yRWFjaCIsImlkeCIsImluZGV4T2YiLCJoYXNPdGhlcklkZW50aWZpZXJzIiwicmVwb3J0IiwibWVzc2FnZSIsInN1Z2dlc3QiLCJkZXNjIiwiZml4IiwiZml4ZXIiLCJyZW1vdmUiLCJzb3VyY2VDb2RlIiwiZnJvbVRva2VuIiwiZmluZCIsInQiLCJpbXBvcnRUb2tlbiIsImhhc1NwYWNlQWZ0ZXJGcm9tIiwiaXNTcGFjZUJldHdlZW4iLCJnZXRUb2tlbkFmdGVyIiwiaGFzU3BhY2VBZnRlckltcG9ydCIsInJlcGxhY2VUZXh0UmFuZ2UiLCJyZW1vdmVSYW5nZSJdLCJtYXBwaW5ncyI6InFvQkFBQTs7QUFFQSxxQzs7QUFFQSxTQUFTQSxrQkFBVCxDQUE0QkMsTUFBNUIsRUFBb0NDLEtBQXBDLEVBQTJDO0FBQ3pDLE1BQU1DLFFBQVFGLE9BQU9DLEtBQVAsQ0FBZDtBQUNBLE1BQU1FLFlBQVlILE9BQU9DLFFBQVEsQ0FBZixDQUFsQjtBQUNBLE1BQU1HLFlBQVlKLE9BQU9DLFFBQVEsQ0FBZixDQUFsQjtBQUNBLE1BQUlJLFFBQVFILE1B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RCxXQXBFSSx3QkFBUDs7QUFzRUQsS0F0RmMsbUJBQWpCIiwiZmlsZSI6Im5vLWVtcHR5LW5hbWVkLWJsb2Nrcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFNvdXJjZUNvZGUgfSBmcm9tICdlc2xpbnQtbW9kdWxlLXV0aWxzL2NvbnRleHRDb21wYXQnO1xuXG5pbXBvcnQgZG9jc1VybCBmcm9tICcuLi9kb2NzVXJsJztcblxuZnVuY3Rpb24gZ2V0RW1wdHlCbG9ja1JhbmdlKHRva2VucywgaW5kZXgpIHtcbiAgY29uc3QgdG9rZW4gPSB0b2tlbnNbaW5kZXhdO1xuICBjb25zdCBuZXh0VG9rZW4gPSB0b2tlbnNbaW5kZXggKyAxXTtcbiAgY29uc3QgcHJldlRva2VuID0gdG9rZW5zW2luZGV4IC0gMV07XG4gIGxldCBzdGFydCA9IHRva2VuLnJhbmdlWzBdO1xuICBjb25zdCBlbmQgPSBuZXh0VG9rZW4ucmFuZ2VbMV07XG5cbiAgLy8gUmVtb3ZlIGJsb2NrIHRva2VucyBhbmQgdGhlIHByZXZpb3VzIGNvbW1hXG4gIGlmIChwcmV2VG9rZW4udmFsdWUgPT09ICcsJyB8fCBwcmV2VG9rZW4udmFsdWUgPT09ICd0eXBlJyB8fCBwcmV2VG9rZW4udmFsdWUgPT09ICd0eXBlb2YnKSB7XG4gICAgc3RhcnQgPSBwcmV2VG9rZW4ucmFuZ2VbMF07XG4gIH1cblxuICByZXR1cm4gW3N0YXJ0LCBlbmRdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbWV0YToge1xuICAgIHR5cGU6ICdzdWdnZXN0aW9uJyxcbiAgICBkb2NzOiB7XG4gICAgICBjYXRlZ29yeTogJ0hlbHBmdWwgd2FybmluZ3MnLFxuICAgICAgZGVzY3JpcHRpb246ICdGb3JiaWQgZW1wdHkgbmFtZWQgaW1wb3J0IGJsb2Nrcy4nLFxuICAgICAgdXJsOiBkb2NzVXJsKCduby1lbXB0eS1uYW1lZC1ibG9ja3MnKSxcbiAgICB9LFxuICAgIGZpeGFibGU6ICdjb2RlJyxcbiAgICBzY2hlbWE6IFtdLFxuICAgIGhhc1N1Z2dlc3Rpb25zOiB0cnVlLFxuICB9LFxuXG4gIGNyZWF0ZShjb250ZXh0KSB7XG4gICAgY29uc3QgaW1wb3J0c1dpdGhvdXROYW1lZHMgPSBbXTtcblxuICAgIHJldHVybiB7XG4gICAgICBJbXBvcnREZWNsYXJhdGlvbihub2RlKSB7XG4gICAgICAgIGlmICghbm9kZS5zcGVjaWZpZXJzLnNvbWUoKHgpID0+IHgudHlwZSA9PT0gJ0ltcG9ydFNwZWNpZmllcicpKSB7XG4gICAgICAgICAgaW1wb3J0c1dpdGhvdXROYW1lZHMucHVzaChub2RlKTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgJ1Byb2dyYW06ZXhpdCcocHJvZ3JhbSkge1xuICAgICAgICBjb25zdCBpbXBvcnRzVG9rZW5zID0gaW1wb3J0c1dpdGhvdXROYW1lZHMubWFwKChub2RlKSA9PiBbbm9kZSwgcHJvZ3JhbS50b2tlbnMuZmlsdGVyKCh4KSA9PiB4LnJhbmdlWzBdID49IG5vZGUucmFuZ2VbMF0gJiYgeC5yYW5nZVsxXSA8PSBub2RlLnJhbmdlWzFdKV0pO1xuXG4gICAgICAgIGltcG9ydHNUb2tlbnMuZm9yRWFjaCgoW25vZGUsIHRva2Vuc10pID0+IHtcbiAgICAgICAgICB0b2tlbnMuZm9yRWFjaCgodG9rZW4pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlkeCA9IHByb2dyYW0udG9rZW5zLmluZGV4T2YodG9rZW4pO1xuICAgICAgICAgICAgY29uc3QgbmV4dFRva2VuID0gcHJvZ3JhbS50b2tlbnNbaWR4ICsgMV07XG5cbiAgICAgICAgICAgIGlmIChuZXh0VG9rZW4gJiYgdG9rZW4udmFsdWUgPT09ICd7JyAmJiBuZXh0VG9rZW4udmFsdWUgPT09ICd9Jykge1xuICAgICAgICAgICAgICBjb25zdCBoYXNPdGhlcklkZW50aWZpZXJzID0gdG9rZW5zLnNvbWUoKHRva2VuKSA9PiB0b2tlbi50eXBlID09PSAnSWRlbnRpZmllcidcbiAgICAgICAgICAgICAgICAgICYmIHRva2VuLnZhbHVlICE9PSAnZnJvbSdcbiAgICAgICAgICAgICAgICAgICYmIHRva2VuLnZhbHVlICE9PSAndHlwZSdcbiAgICAgICAgICAgICAgICAgICYmIHRva2VuLnZhbHVlICE9PSAndHlwZW9mJyxcbiAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAvLyBJZiBpdCBoYXMgbm8gb3RoZXIgaWRlbnRpZmllcnMgaXQncyB0aGUgb25seSB0aGluZyBpbiB0aGUgaW1wb3J0LCBzbyB3ZSBjYW4gZWl0aGVyIHJlbW92ZSB0aGUgaW1wb3J0XG4gICAgICAgICAgICAgIC8vIGNvbXBsZXRlbHkgb3IgdHJhbnNmb3JtIGl0IGluIGEgc2lkZS1lZmZlY3RzIG9ubHkgaW1wb3J0XG4gICAgICAgICAgICAgIGlmICghaGFzT3RoZXJJZGVudGlmaWVycykge1xuICAgICAgICAgICAgICAgIGNvbnRleHQucmVwb3J0KHtcbiAgICAgICAgICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnVW5leHBlY3RlZCBlbXB0eSBuYW1lZCBpbXBvcnQgYmxvY2snLFxuICAgICAgICAgICAgICAgICAgc3VnZ2VzdDogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgZGVzYzogJ1JlbW92ZSB1bnVzZWQgaW1wb3J0JyxcbiAgICAgICAgICAgICAgICAgICAgICBmaXgoZml4ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgd2hvbGUgaW1wb3J0XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZml4ZXIucmVtb3ZlKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBkZXNjOiAnUmVtb3ZlIGVtcHR5IGltcG9ydCBibG9jaycsXG4gICAgICAgICAgICAgICAgICAgICAgZml4KGZpeGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdGhlIGVtcHR5IGJsb2NrIGFuZCB0aGUgJ2Zyb20nIHRva2VuLCBsZWF2aW5nIHRoZSBpbXBvcnQgb25seSBmb3IgaXRzIHNpZGVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVmZmVjdHMsIGUuZy4gYGltcG9ydCAnbW9kJ2BcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZUNvZGUgPSBnZXRTb3VyY2VDb2RlKGNvbnRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZnJvbVRva2VuID0gcHJvZ3JhbS50b2tlbnMuZmluZCgodCkgPT4gdC52YWx1ZSA9PT0gJ2Zyb20nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltcG9ydFRva2VuID0gcHJvZ3JhbS50b2tlbnMuZmluZCgodCkgPT4gdC52YWx1ZSA9PT0gJ2ltcG9ydCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaGFzU3BhY2VBZnRlckZyb20gPSBzb3VyY2VDb2RlLmlzU3BhY2VCZXR3ZWVuKGZyb21Ub2tlbiwgc291cmNlQ29kZS5nZXRUb2tlbkFmdGVyKGZyb21Ub2tlbikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaGFzU3BhY2VBZnRlckltcG9ydCA9IHNvdXJjZUNvZGUuaXNTcGFjZUJldHdlZW4oaW1wb3J0VG9rZW4sIHNvdXJjZUNvZGUuZ2V0VG9rZW5BZnRlcihmcm9tVG9rZW4pKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgW3N0YXJ0XSA9IGdldEVtcHR5QmxvY2tSYW5nZShwcm9ncmFtLnRva2VucywgaWR4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IFssIGVuZF0gPSBmcm9tVG9rZW4ucmFuZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByYW5nZSA9IFtzdGFydCwgaGFzU3BhY2VBZnRlckZyb20gPyBlbmQgKyAxIDogZW5kXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpeGVyLnJlcGxhY2VUZXh0UmFuZ2UocmFuZ2UsIGhhc1NwYWNlQWZ0ZXJJbXBvcnQgPyAnJyA6ICcgJyk7XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5yZXBvcnQoe1xuICAgICAgICAgICAgICAgICAgbm9kZSxcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdVbmV4cGVjdGVkIGVtcHR5IG5hbWVkIGltcG9ydCBibG9jaycsXG4gICAgICAgICAgICAgICAgICBmaXgoZml4ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpeGVyLnJlbW92ZVJhbmdlKGdldEVtcHR5QmxvY2tSYW5nZShwcm9ncmFtLnRva2VucywgaWR4KSk7XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICB9O1xuICB9LFxufTtcbiJdfQ==