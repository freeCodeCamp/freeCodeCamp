'use strict';var _contextCompat = require('eslint-module-utils/contextCompat');
var _vm = require('vm');var _vm2 = _interopRequireDefault(_vm);

var _docsUrl = require('../docsUrl');var _docsUrl2 = _interopRequireDefault(_docsUrl);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      category: 'Style guide',
      description: 'Enforce a leading comment with the webpackChunkName for dynamic imports.',
      url: (0, _docsUrl2['default'])('dynamic-import-chunkname') },

    schema: [{
      type: 'object',
      properties: {
        importFunctions: {
          type: 'array',
          uniqueItems: true,
          items: {
            type: 'string' } },


        allowEmpty: {
          type: 'boolean' },

        webpackChunknameFormat: {
          type: 'string' } } }],



    hasSuggestions: true },


  create: function () {function create(context) {
      var config = context.options[0];var _ref =
      config || {},_ref$importFunctions = _ref.importFunctions,importFunctions = _ref$importFunctions === undefined ? [] : _ref$importFunctions,_ref$allowEmpty = _ref.allowEmpty,allowEmpty = _ref$allowEmpty === undefined ? false : _ref$allowEmpty;var _ref2 =
      config || {},_ref2$webpackChunknam = _ref2.webpackChunknameFormat,webpackChunknameFormat = _ref2$webpackChunknam === undefined ? '([0-9a-zA-Z-_/.]|\\[(request|index)\\])+' : _ref2$webpackChunknam;

      var paddedCommentRegex = /^ (\S[\s\S]+\S) $/;
      var commentStyleRegex = /^( ((webpackChunkName: .+)|((webpackPrefetch|webpackPreload): (true|false|-?[0-9]+))|(webpackIgnore: (true|false))|((webpackInclude|webpackExclude): \/.*\/)|(webpackMode: ["'](lazy|lazy-once|eager|weak)["'])|(webpackExports: (['"]\w+['"]|\[(['"]\w+['"], *)+(['"]\w+['"]*)\]))),?)+ $/;
      var chunkSubstrFormat = 'webpackChunkName: ["\']' + String(webpackChunknameFormat) + '["\'],? ';
      var chunkSubstrRegex = new RegExp(chunkSubstrFormat);
      var eagerModeFormat = 'webpackMode: ["\']eager["\'],? ';
      var eagerModeRegex = new RegExp(eagerModeFormat);

      function run(node, arg) {
        var sourceCode = (0, _contextCompat.getSourceCode)(context);
        var leadingComments = sourceCode.getCommentsBefore ?
        sourceCode.getCommentsBefore(arg) // This method is available in ESLint >= 4.
        : sourceCode.getComments(arg).leading; // This method is deprecated in ESLint 7.

        if ((!leadingComments || leadingComments.length === 0) && !allowEmpty) {
          context.report({
            node: node,
            message: 'dynamic imports require a leading comment with the webpack chunkname' });

          return;
        }

        var isChunknamePresent = false;
        var isEagerModePresent = false;var _iteratorNormalCompletion = true;var _didIteratorError = false;var _iteratorError = undefined;try {

          for (var _iterator = leadingComments[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {var comment = _step.value;
            if (comment.type !== 'Block') {
              context.report({
                node: node,
                message: 'dynamic imports require a /* foo */ style comment, not a // foo comment' });

              return;
            }

            if (!paddedCommentRegex.test(comment.value)) {
              context.report({
                node: node,
                message: 'dynamic imports require a block comment padded with spaces - /* foo */' });

              return;
            }

            try {
              // just like webpack itself does
              _vm2['default'].runInNewContext('(function() {return {' + String(comment.value) + '}})()');
            } catch (error) {
              context.report({
                node: node,
                message: 'dynamic imports require a "webpack" comment with valid syntax' });

              return;
            }

            if (!commentStyleRegex.test(comment.value)) {
              context.report({
                node: node,
                message: 'dynamic imports require a "webpack" comment with valid syntax' });


              return;
            }

            if (eagerModeRegex.test(comment.value)) {
              isEagerModePresent = true;
            }

            if (chunkSubstrRegex.test(comment.value)) {
              isChunknamePresent = true;
            }
          }} catch (err) {_didIteratorError = true;_iteratorError = err;} finally {try {if (!_iteratorNormalCompletion && _iterator['return']) {_iterator['return']();}} finally {if (_didIteratorError) {throw _iteratorError;}}}

        if (isChunknamePresent && isEagerModePresent) {
          context.report({
            node: node,
            message: 'dynamic imports using eager mode do not need a webpackChunkName',
            suggest: [
            {
              desc: 'Remove webpackChunkName',
              fix: function () {function fix(fixer) {var _iteratorNormalCompletion2 = true;var _didIteratorError2 = false;var _iteratorError2 = undefined;try {
                    for (var _iterator2 = leadingComments[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {var _comment = _step2.value;
                      if (chunkSubstrRegex.test(_comment.value)) {
                        var replacement = _comment.value.replace(chunkSubstrRegex, '').trim().replace(/,$/, '');
                        if (replacement === '') {
                          return fixer.remove(_comment);
                        } else {
                          return fixer.replaceText(_comment, '/* ' + String(replacement) + ' */');
                        }
                      }
                    }} catch (err) {_didIteratorError2 = true;_iteratorError2 = err;} finally {try {if (!_iteratorNormalCompletion2 && _iterator2['return']) {_iterator2['return']();}} finally {if (_didIteratorError2) {throw _iteratorError2;}}}
                }return fix;}() },

            {
              desc: 'Remove webpackMode',
              fix: function () {function fix(fixer) {var _iteratorNormalCompletion3 = true;var _didIteratorError3 = false;var _iteratorError3 = undefined;try {
                    for (var _iterator3 = leadingComments[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {var _comment2 = _step3.value;
                      if (eagerModeRegex.test(_comment2.value)) {
                        var replacement = _comment2.value.replace(eagerModeRegex, '').trim().replace(/,$/, '');
                        if (replacement === '') {
                          return fixer.remove(_comment2);
                        } else {
                          return fixer.replaceText(_comment2, '/* ' + String(replacement) + ' */');
                        }
                      }
                    }} catch (err) {_didIteratorError3 = true;_iteratorError3 = err;} finally {try {if (!_iteratorNormalCompletion3 && _iterator3['return']) {_iterator3['return']();}} finally {if (_didIteratorError3) {throw _iteratorError3;}}}
                }return fix;}() }] });



        }

        if (!isChunknamePresent && !allowEmpty && !isEagerModePresent) {
          context.report({
            node: node,
            message: 'dynamic imports require a leading comment in the form /*' +
            chunkSubstrFormat + '*/' });

        }
      }

      return {
        ImportExpression: function () {function ImportExpression(node) {
            run(node, node.source);
          }return ImportExpression;}(),

        CallExpression: function () {function CallExpression(node) {
            if (node.callee.type !== 'Import' && importFunctions.indexOf(node.callee.name) < 0) {
              return;
            }

            run(node, node.arguments[0]);
          }return CallExpression;}() };

    }return create;}() };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlcy9keW5hbWljLWltcG9ydC1jaHVua25hbWUuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIm1ldGEiLCJ0eXBlIiwiZG9jcyIsImNhdGVnb3J5IiwiZGVzY3JpcHRpb24iLCJ1cmwiLCJzY2hlbWEiLCJwcm9wZXJ0aWVzIiwiaW1wb3J0RnVuY3Rpb25zIiwidW5pcXVlSXRlbXMiLCJpdGVtcyIsImFsbG93RW1wdHkiLCJ3ZWJwYWNrQ2h1bmtuYW1lRm9ybWF0IiwiaGFzU3VnZ2VzdGlvbnMiLCJjcmVhdGUiLCJjb250ZXh0IiwiY29uZmlnIiwib3B0aW9ucyIsInBhZGRlZENvbW1lbnRSZWdleCIsImNvbW1lbnRTdHlsZVJlZ2V4IiwiY2h1bmtTdWJzdHJGb3JtYXQiLCJjaHVua1N1YnN0clJlZ2V4IiwiUmVnRXhwIiwiZWFnZXJNb2RlRm9ybWF0IiwiZWFnZXJNb2RlUmVnZXgiLCJydW4iLCJub2RlIiwiYXJnIiwic291cmNlQ29kZSIsImxlYWRpbmdDb21tZW50cyIsImdldENvbW1lbnRzQmVmb3JlIiwiZ2V0Q29tbWVudHMiLCJsZWFkaW5nIiwibGVuZ3RoIiwicmVwb3J0IiwibWVzc2FnZSIsImlzQ2h1bmtuYW1lUHJlc2VudCIsImlzRWFnZXJNb2RlUHJlc2VudCIsImNvbW1lbnQiLCJ0ZXN0IiwidmFsdWUiLCJ2bSIsInJ1bkluTmV3Q29udGV4dCIsImVycm9yIiwic3VnZ2VzdCIsImRlc2MiLCJmaXgiLCJmaXhlciIsInJlcGxhY2VtZW50IiwicmVwbGFjZSIsInRyaW0iLCJyZW1vdmUiLCJyZXBsYWNlVGV4dCIsIkltcG9ydEV4cHJlc3Npb24iLCJzb3VyY2UiLCJDYWxsRXhwcmVzc2lvbiIsImNhbGxlZSIsImluZGV4T2YiLCJuYW1lIiwiYXJndW1lbnRzIl0sIm1hcHBpbmdzIjoiYUFBQTtBQUNBLHdCOztBQUVBLHFDOztBQUVBQSxPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZDLFFBQU07QUFDSkMsVUFBTSxZ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RUFBdEMsRUFBMEMwQixJQUExQyxHQUFpREQsT0FBakQsQ0FBeUQsSUFBekQsRUFBK0QsRUFBL0QsQ0FBcEI7QUFDQSw0QkFBSUQsZ0JBQWdCLEVBQXBCLEVBQXdCO0FBQ3RCLGlDQUFPRCxNQUFNSSxNQUFOLENBQWFiLFNBQWIsQ0FBUDtBQUNELHlCQUZELE1BRU87QUFDTCxpQ0FBT1MsTUFBTUssV0FBTixDQUFrQmQsU0FBbEIsaUJBQWlDVSxXQUFqQyxVQUFQO0FBQ0Q7QUFDRjtBQUNGLHFCQVZRO0FBV1YsaUJBYkgsZ0JBaEJPLENBSEksRUFBZjs7OztBQW9DRDs7QUFFRCxZQUFJLENBQUNaLGtCQUFELElBQXVCLENBQUN6QixVQUF4QixJQUFzQyxDQUFDMEIsa0JBQTNDLEVBQStEO0FBQzdEdEIsa0JBQVFtQixNQUFSLENBQWU7QUFDYlIsc0JBRGE7QUFFYlM7QUFDNkRmLDZCQUQ3RCxPQUZhLEVBQWY7O0FBS0Q7QUFDRjs7QUFFRCxhQUFPO0FBQ0xpQyx3QkFESyx5Q0FDWTNCLElBRFosRUFDa0I7QUFDckJELGdCQUFJQyxJQUFKLEVBQVVBLEtBQUs0QixNQUFmO0FBQ0QsV0FISTs7QUFLTEMsc0JBTEssdUNBS1U3QixJQUxWLEVBS2dCO0FBQ25CLGdCQUFJQSxLQUFLOEIsTUFBTCxDQUFZdkQsSUFBWixLQUFxQixRQUFyQixJQUFpQ08sZ0JBQWdCaUQsT0FBaEIsQ0FBd0IvQixLQUFLOEIsTUFBTCxDQUFZRSxJQUFwQyxJQUE0QyxDQUFqRixFQUFvRjtBQUNsRjtBQUNEOztBQUVEakMsZ0JBQUlDLElBQUosRUFBVUEsS0FBS2lDLFNBQUwsQ0FBZSxDQUFmLENBQVY7QUFDRCxXQVhJLDJCQUFQOztBQWFELEtBcktjLG1CQUFqQiIsImZpbGUiOiJkeW5hbWljLWltcG9ydC1jaHVua25hbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTb3VyY2VDb2RlIH0gZnJvbSAnZXNsaW50LW1vZHVsZS11dGlscy9jb250ZXh0Q29tcGF0JztcbmltcG9ydCB2bSBmcm9tICd2bSc7XG5cbmltcG9ydCBkb2NzVXJsIGZyb20gJy4uL2RvY3NVcmwnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbWV0YToge1xuICAgIHR5cGU6ICdzdWdnZXN0aW9uJyxcbiAgICBkb2NzOiB7XG4gICAgICBjYXRlZ29yeTogJ1N0eWxlIGd1aWRlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRW5mb3JjZSBhIGxlYWRpbmcgY29tbWVudCB3aXRoIHRoZSB3ZWJwYWNrQ2h1bmtOYW1lIGZvciBkeW5hbWljIGltcG9ydHMuJyxcbiAgICAgIHVybDogZG9jc1VybCgnZHluYW1pYy1pbXBvcnQtY2h1bmtuYW1lJyksXG4gICAgfSxcbiAgICBzY2hlbWE6IFt7XG4gICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgaW1wb3J0RnVuY3Rpb25zOiB7XG4gICAgICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgICAgICB1bmlxdWVJdGVtczogdHJ1ZSxcbiAgICAgICAgICBpdGVtczoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgYWxsb3dFbXB0eToge1xuICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgfSxcbiAgICAgICAgd2VicGFja0NodW5rbmFtZUZvcm1hdDoge1xuICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9XSxcbiAgICBoYXNTdWdnZXN0aW9uczogdHJ1ZSxcbiAgfSxcblxuICBjcmVhdGUoY29udGV4dCkge1xuICAgIGNvbnN0IGNvbmZpZyA9IGNvbnRleHQub3B0aW9uc1swXTtcbiAgICBjb25zdCB7IGltcG9ydEZ1bmN0aW9ucyA9IFtdLCBhbGxvd0VtcHR5ID0gZmFsc2UgfSA9IGNvbmZpZyB8fCB7fTtcbiAgICBjb25zdCB7IHdlYnBhY2tDaHVua25hbWVGb3JtYXQgPSAnKFswLTlhLXpBLVotXy8uXXxcXFxcWyhyZXF1ZXN0fGluZGV4KVxcXFxdKSsnIH0gPSBjb25maWcgfHwge307XG5cbiAgICBjb25zdCBwYWRkZWRDb21tZW50UmVnZXggPSAvXiAoXFxTW1xcc1xcU10rXFxTKSAkLztcbiAgICBjb25zdCBjb21tZW50U3R5bGVSZWdleCA9IC9eKCAoKHdlYnBhY2tDaHVua05hbWU6IC4rKXwoKHdlYnBhY2tQcmVmZXRjaHx3ZWJwYWNrUHJlbG9hZCk6ICh0cnVlfGZhbHNlfC0/WzAtOV0rKSl8KHdlYnBhY2tJZ25vcmU6ICh0cnVlfGZhbHNlKSl8KCh3ZWJwYWNrSW5jbHVkZXx3ZWJwYWNrRXhjbHVkZSk6IFxcLy4qXFwvKXwod2VicGFja01vZGU6IFtcIiddKGxhenl8bGF6eS1vbmNlfGVhZ2VyfHdlYWspW1wiJ10pfCh3ZWJwYWNrRXhwb3J0czogKFsnXCJdXFx3K1snXCJdfFxcWyhbJ1wiXVxcdytbJ1wiXSwgKikrKFsnXCJdXFx3K1snXCJdKilcXF0pKSksPykrICQvO1xuICAgIGNvbnN0IGNodW5rU3Vic3RyRm9ybWF0ID0gYHdlYnBhY2tDaHVua05hbWU6IFtcIiddJHt3ZWJwYWNrQ2h1bmtuYW1lRm9ybWF0fVtcIiddLD8gYDtcbiAgICBjb25zdCBjaHVua1N1YnN0clJlZ2V4ID0gbmV3IFJlZ0V4cChjaHVua1N1YnN0ckZvcm1hdCk7XG4gICAgY29uc3QgZWFnZXJNb2RlRm9ybWF0ID0gYHdlYnBhY2tNb2RlOiBbXCInXWVhZ2VyW1wiJ10sPyBgO1xuICAgIGNvbnN0IGVhZ2VyTW9kZVJlZ2V4ID0gbmV3IFJlZ0V4cChlYWdlck1vZGVGb3JtYXQpO1xuXG4gICAgZnVuY3Rpb24gcnVuKG5vZGUsIGFyZykge1xuICAgICAgY29uc3Qgc291cmNlQ29kZSA9IGdldFNvdXJjZUNvZGUoY29udGV4dCk7XG4gICAgICBjb25zdCBsZWFkaW5nQ29tbWVudHMgPSBzb3VyY2VDb2RlLmdldENvbW1lbnRzQmVmb3JlXG4gICAgICAgID8gc291cmNlQ29kZS5nZXRDb21tZW50c0JlZm9yZShhcmcpIC8vIFRoaXMgbWV0aG9kIGlzIGF2YWlsYWJsZSBpbiBFU0xpbnQgPj0gNC5cbiAgICAgICAgOiBzb3VyY2VDb2RlLmdldENvbW1lbnRzKGFyZykubGVhZGluZzsgLy8gVGhpcyBtZXRob2QgaXMgZGVwcmVjYXRlZCBpbiBFU0xpbnQgNy5cblxuICAgICAgaWYgKCghbGVhZGluZ0NvbW1lbnRzIHx8IGxlYWRpbmdDb21tZW50cy5sZW5ndGggPT09IDApICYmICFhbGxvd0VtcHR5KSB7XG4gICAgICAgIGNvbnRleHQucmVwb3J0KHtcbiAgICAgICAgICBub2RlLFxuICAgICAgICAgIG1lc3NhZ2U6ICdkeW5hbWljIGltcG9ydHMgcmVxdWlyZSBhIGxlYWRpbmcgY29tbWVudCB3aXRoIHRoZSB3ZWJwYWNrIGNodW5rbmFtZScsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCBpc0NodW5rbmFtZVByZXNlbnQgPSBmYWxzZTtcbiAgICAgIGxldCBpc0VhZ2VyTW9kZVByZXNlbnQgPSBmYWxzZTtcblxuICAgICAgZm9yIChjb25zdCBjb21tZW50IG9mIGxlYWRpbmdDb21tZW50cykge1xuICAgICAgICBpZiAoY29tbWVudC50eXBlICE9PSAnQmxvY2snKSB7XG4gICAgICAgICAgY29udGV4dC5yZXBvcnQoe1xuICAgICAgICAgICAgbm9kZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdkeW5hbWljIGltcG9ydHMgcmVxdWlyZSBhIC8qIGZvbyAqLyBzdHlsZSBjb21tZW50LCBub3QgYSAvLyBmb28gY29tbWVudCcsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFwYWRkZWRDb21tZW50UmVnZXgudGVzdChjb21tZW50LnZhbHVlKSkge1xuICAgICAgICAgIGNvbnRleHQucmVwb3J0KHtcbiAgICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgICBtZXNzYWdlOiBgZHluYW1pYyBpbXBvcnRzIHJlcXVpcmUgYSBibG9jayBjb21tZW50IHBhZGRlZCB3aXRoIHNwYWNlcyAtIC8qIGZvbyAqL2AsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBqdXN0IGxpa2Ugd2VicGFjayBpdHNlbGYgZG9lc1xuICAgICAgICAgIHZtLnJ1bkluTmV3Q29udGV4dChgKGZ1bmN0aW9uKCkge3JldHVybiB7JHtjb21tZW50LnZhbHVlfX19KSgpYCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29udGV4dC5yZXBvcnQoe1xuICAgICAgICAgICAgbm9kZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBkeW5hbWljIGltcG9ydHMgcmVxdWlyZSBhIFwid2VicGFja1wiIGNvbW1lbnQgd2l0aCB2YWxpZCBzeW50YXhgLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghY29tbWVudFN0eWxlUmVnZXgudGVzdChjb21tZW50LnZhbHVlKSkge1xuICAgICAgICAgIGNvbnRleHQucmVwb3J0KHtcbiAgICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgICAgICBgZHluYW1pYyBpbXBvcnRzIHJlcXVpcmUgYSBcIndlYnBhY2tcIiBjb21tZW50IHdpdGggdmFsaWQgc3ludGF4YCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWFnZXJNb2RlUmVnZXgudGVzdChjb21tZW50LnZhbHVlKSkge1xuICAgICAgICAgIGlzRWFnZXJNb2RlUHJlc2VudCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2h1bmtTdWJzdHJSZWdleC50ZXN0KGNvbW1lbnQudmFsdWUpKSB7XG4gICAgICAgICAgaXNDaHVua25hbWVQcmVzZW50ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNDaHVua25hbWVQcmVzZW50ICYmIGlzRWFnZXJNb2RlUHJlc2VudCkge1xuICAgICAgICBjb250ZXh0LnJlcG9ydCh7XG4gICAgICAgICAgbm9kZSxcbiAgICAgICAgICBtZXNzYWdlOiAnZHluYW1pYyBpbXBvcnRzIHVzaW5nIGVhZ2VyIG1vZGUgZG8gbm90IG5lZWQgYSB3ZWJwYWNrQ2h1bmtOYW1lJyxcbiAgICAgICAgICBzdWdnZXN0OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGRlc2M6ICdSZW1vdmUgd2VicGFja0NodW5rTmFtZScsXG4gICAgICAgICAgICAgIGZpeChmaXhlcikge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY29tbWVudCBvZiBsZWFkaW5nQ29tbWVudHMpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChjaHVua1N1YnN0clJlZ2V4LnRlc3QoY29tbWVudC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVwbGFjZW1lbnQgPSBjb21tZW50LnZhbHVlLnJlcGxhY2UoY2h1bmtTdWJzdHJSZWdleCwgJycpLnRyaW0oKS5yZXBsYWNlKC8sJC8sICcnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcGxhY2VtZW50ID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmaXhlci5yZW1vdmUoY29tbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpeGVyLnJlcGxhY2VUZXh0KGNvbW1lbnQsIGAvKiAke3JlcGxhY2VtZW50fSAqL2ApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZGVzYzogJ1JlbW92ZSB3ZWJwYWNrTW9kZScsXG4gICAgICAgICAgICAgIGZpeChmaXhlcikge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY29tbWVudCBvZiBsZWFkaW5nQ29tbWVudHMpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChlYWdlck1vZGVSZWdleC50ZXN0KGNvbW1lbnQudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcGxhY2VtZW50ID0gY29tbWVudC52YWx1ZS5yZXBsYWNlKGVhZ2VyTW9kZVJlZ2V4LCAnJykudHJpbSgpLnJlcGxhY2UoLywkLywgJycpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVwbGFjZW1lbnQgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpeGVyLnJlbW92ZShjb21tZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZml4ZXIucmVwbGFjZVRleHQoY29tbWVudCwgYC8qICR7cmVwbGFjZW1lbnR9ICovYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzQ2h1bmtuYW1lUHJlc2VudCAmJiAhYWxsb3dFbXB0eSAmJiAhaXNFYWdlck1vZGVQcmVzZW50KSB7XG4gICAgICAgIGNvbnRleHQucmVwb3J0KHtcbiAgICAgICAgICBub2RlLFxuICAgICAgICAgIG1lc3NhZ2U6XG4gICAgICAgICAgICBgZHluYW1pYyBpbXBvcnRzIHJlcXVpcmUgYSBsZWFkaW5nIGNvbW1lbnQgaW4gdGhlIGZvcm0gLyoke2NodW5rU3Vic3RyRm9ybWF0fSovYCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIEltcG9ydEV4cHJlc3Npb24obm9kZSkge1xuICAgICAgICBydW4obm9kZSwgbm9kZS5zb3VyY2UpO1xuICAgICAgfSxcblxuICAgICAgQ2FsbEV4cHJlc3Npb24obm9kZSkge1xuICAgICAgICBpZiAobm9kZS5jYWxsZWUudHlwZSAhPT0gJ0ltcG9ydCcgJiYgaW1wb3J0RnVuY3Rpb25zLmluZGV4T2Yobm9kZS5jYWxsZWUubmFtZSkgPCAwKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcnVuKG5vZGUsIG5vZGUuYXJndW1lbnRzWzBdKTtcbiAgICAgIH0sXG4gICAgfTtcbiAgfSxcbn07XG4iXX0=