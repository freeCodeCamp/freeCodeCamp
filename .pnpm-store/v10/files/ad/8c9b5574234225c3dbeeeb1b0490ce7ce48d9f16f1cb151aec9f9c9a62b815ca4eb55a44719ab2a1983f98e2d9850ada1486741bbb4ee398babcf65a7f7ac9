'use strict';var _contextCompat = require('eslint-module-utils/contextCompat');

var _docsUrl = require('../docsUrl');var _docsUrl2 = _interopRequireDefault(_docsUrl);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}

function isComma(token) {
  return token.type === 'Punctuator' && token.value === ',';
}

/**
   * @param {import('eslint').Rule.Fix[]} fixes
   * @param {import('eslint').Rule.RuleFixer} fixer
   * @param {import('eslint').SourceCode.SourceCode} sourceCode
   * @param {(ImportSpecifier | ImportDefaultSpecifier | ImportNamespaceSpecifier)[]} specifiers
   * */
function removeSpecifiers(fixes, fixer, sourceCode, specifiers) {var _iteratorNormalCompletion = true;var _didIteratorError = false;var _iteratorError = undefined;try {
    for (var _iterator = specifiers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {var specifier = _step.value;
      // remove the trailing comma
      var token = sourceCode.getTokenAfter(specifier);
      if (token && isComma(token)) {
        fixes.push(fixer.remove(token));
      }
      fixes.push(fixer.remove(specifier));
    }} catch (err) {_didIteratorError = true;_iteratorError = err;} finally {try {if (!_iteratorNormalCompletion && _iterator['return']) {_iterator['return']();}} finally {if (_didIteratorError) {throw _iteratorError;}}}
}

/** @type {(node: import('estree').Node, sourceCode: import('eslint').SourceCode.SourceCode, specifiers: (ImportSpecifier | ImportNamespaceSpecifier)[], kind: 'type' | 'typeof') => string} */
function getImportText(
node,
sourceCode,
specifiers,
kind)
{
  var sourceString = sourceCode.getText(node.source);
  if (specifiers.length === 0) {
    return '';
  }

  var names = specifiers.map(function (s) {
    if (s.imported.name === s.local.name) {
      return s.imported.name;
    }
    return String(s.imported.name) + ' as ' + String(s.local.name);
  });
  // insert a fresh top-level import
  return 'import ' + String(kind) + ' {' + String(names.join(', ')) + '} from ' + String(sourceString) + ';';
}

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      category: 'Style guide',
      description: 'Enforce or ban the use of inline type-only markers for named imports.',
      url: (0, _docsUrl2['default'])('consistent-type-specifier-style') },

    fixable: 'code',
    schema: [
    {
      type: 'string',
      'enum': ['prefer-inline', 'prefer-top-level'],
      'default': 'prefer-inline' }] },




  create: function () {function create(context) {
      var sourceCode = (0, _contextCompat.getSourceCode)(context);

      if (context.options[0] === 'prefer-inline') {
        return {
          ImportDeclaration: function () {function ImportDeclaration(node) {
              if (node.importKind === 'value' || node.importKind == null) {
                // top-level value / unknown is valid
                return;
              }

              if (
              // no specifiers (import type {} from '') have no specifiers to mark as inline
              node.specifiers.length === 0 ||
              node.specifiers.length === 1
              // default imports are both "inline" and "top-level"
              && (
              node.specifiers[0].type === 'ImportDefaultSpecifier'
              // namespace imports are both "inline" and "top-level"
              || node.specifiers[0].type === 'ImportNamespaceSpecifier'))

              {
                return;
              }

              context.report({
                node: node,
                message: 'Prefer using inline {{kind}} specifiers instead of a top-level {{kind}}-only import.',
                data: {
                  kind: node.importKind },

                fix: function () {function fix(fixer) {
                    var kindToken = sourceCode.getFirstToken(node, { skip: 1 });

                    return [].concat(
                    kindToken ? fixer.remove(kindToken) : [],
                    node.specifiers.map(function (specifier) {return fixer.insertTextBefore(specifier, String(node.importKind) + ' ');}));

                  }return fix;}() });

            }return ImportDeclaration;}() };

      }

      // prefer-top-level
      return {
        /** @param {import('estree').ImportDeclaration} node */
        ImportDeclaration: function () {function ImportDeclaration(node) {
            if (
            // already top-level is valid
            node.importKind === 'type' ||
            node.importKind === 'typeof'
            // no specifiers (import {} from '') cannot have inline - so is valid
            || node.specifiers.length === 0 ||
            node.specifiers.length === 1
            // default imports are both "inline" and "top-level"
            && (
            node.specifiers[0].type === 'ImportDefaultSpecifier'
            // namespace imports are both "inline" and "top-level"
            || node.specifiers[0].type === 'ImportNamespaceSpecifier'))

            {
              return;
            }

            /** @type {typeof node.specifiers} */
            var typeSpecifiers = [];
            /** @type {typeof node.specifiers} */
            var typeofSpecifiers = [];
            /** @type {typeof node.specifiers} */
            var valueSpecifiers = [];
            /** @type {typeof node.specifiers[number]} */
            var defaultSpecifier = null;var _iteratorNormalCompletion2 = true;var _didIteratorError2 = false;var _iteratorError2 = undefined;try {
              for (var _iterator2 = node.specifiers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {var specifier = _step2.value;
                if (specifier.type === 'ImportDefaultSpecifier') {
                  defaultSpecifier = specifier;
                  continue;
                }

                if (specifier.importKind === 'type') {
                  typeSpecifiers.push(specifier);
                } else if (specifier.importKind === 'typeof') {
                  typeofSpecifiers.push(specifier);
                } else if (specifier.importKind === 'value' || specifier.importKind == null) {
                  valueSpecifiers.push(specifier);
                }
              }} catch (err) {_didIteratorError2 = true;_iteratorError2 = err;} finally {try {if (!_iteratorNormalCompletion2 && _iterator2['return']) {_iterator2['return']();}} finally {if (_didIteratorError2) {throw _iteratorError2;}}}

            var typeImport = getImportText(node, sourceCode, typeSpecifiers, 'type');
            var typeofImport = getImportText(node, sourceCode, typeofSpecifiers, 'typeof');
            var newImports = (String(typeImport) + '\n' + String(typeofImport)).trim();

            if (typeSpecifiers.length + typeofSpecifiers.length === node.specifiers.length) {
              /** @type {('type' | 'typeof')[]} */
              // all specifiers have inline specifiers - so we replace the entire import
              var kind = [].concat(
              typeSpecifiers.length > 0 ? 'type' : [],
              typeofSpecifiers.length > 0 ? 'typeof' : []);


              context.report({
                node: node,
                message: 'Prefer using a top-level {{kind}}-only import instead of inline {{kind}} specifiers.',
                data: {
                  kind: kind.join('/') },

                fix: function () {function fix(fixer) {
                    return fixer.replaceText(node, newImports);
                  }return fix;}() });

            } else {
              // remove specific specifiers and insert new imports for them
              typeSpecifiers.concat(typeofSpecifiers).forEach(function (specifier) {
                context.report({
                  node: specifier,
                  message: 'Prefer using a top-level {{kind}}-only import instead of inline {{kind}} specifiers.',
                  data: {
                    kind: specifier.importKind },

                  fix: function () {function fix(fixer) {
                      /** @type {import('eslint').Rule.Fix[]} */
                      var fixes = [];

                      // if there are no value specifiers, then the other report fixer will be called, not this one

                      if (valueSpecifiers.length > 0) {
                        // import { Value, type Type } from 'mod';

                        // we can just remove the type specifiers
                        removeSpecifiers(fixes, fixer, sourceCode, typeSpecifiers);
                        removeSpecifiers(fixes, fixer, sourceCode, typeofSpecifiers);

                        // make the import nicely formatted by also removing the trailing comma after the last value import
                        // eg
                        // import { Value, type Type } from 'mod';
                        // to
                        // import { Value  } from 'mod';
                        // not
                        // import { Value,  } from 'mod';
                        var maybeComma = sourceCode.getTokenAfter(valueSpecifiers[valueSpecifiers.length - 1]);
                        if (isComma(maybeComma)) {
                          fixes.push(fixer.remove(maybeComma));
                        }
                      } else if (defaultSpecifier) {
                        // import Default, { type Type } from 'mod';

                        // remove the entire curly block so we don't leave an empty one behind
                        // NOTE - the default specifier *must* be the first specifier always!
                        //        so a comma exists that we also have to clean up or else it's bad syntax
                        var comma = sourceCode.getTokenAfter(defaultSpecifier, isComma);
                        var closingBrace = sourceCode.getTokenAfter(
                        node.specifiers[node.specifiers.length - 1],
                        function (token) {return token.type === 'Punctuator' && token.value === '}';});

                        fixes.push(fixer.removeRange([
                        comma.range[0],
                        closingBrace.range[1]]));

                      }

                      return fixes.concat(
                      // insert the new imports after the old declaration
                      fixer.insertTextAfter(node, '\n' + String(newImports)));

                    }return fix;}() });

              });
            }
          }return ImportDeclaration;}() };

    }return create;}() };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlcy9jb25zaXN0ZW50LXR5cGUtc3BlY2lmaWVyLXN0eWxlLmpzIl0sIm5hbWVzIjpbImlzQ29tbWEiLCJ0b2tlbiIsInR5cGUiLCJ2YWx1ZSIsInJlbW92ZVNwZWNpZmllcnMiLCJmaXhlcyIsImZpeGVyIiwic291cmNlQ29kZSIsInNwZWNpZmllcnMiLCJzcGVjaWZpZXIiLCJnZXRUb2tlbkFmdGVyIiwicHVzaCIsInJlbW92ZSIsImdldEltcG9ydFRleHQiLCJub2RlIiwia2luZCIsInNvdXJjZVN0cmluZyIsImdldFRleHQiLCJzb3VyY2UiLCJsZW5ndGgiLCJuYW1lcyIsIm1hcCIsInMiLCJpbXBvcnRlZCIsIm5hbWUiLCJsb2NhbCIsImpvaW4iLCJtb2R1bGUiLCJleHBvcnRzIiwibWV0YSIsImRvY3MiLCJjYXRlZ29yeSIsImRlc2NyaXB0aW9uIiwidXJsIiwiZml4YWJsZSIsInNjaGVtYSIsImNyZWF0ZSIsImNvbnRleHQiLCJvcHRpb25zIiwiSW1wb3J0RGVjbGFyYXRpb24iLCJpbXBvcnRLaW5kIiwicmVwb3J0IiwibWVzc2FnZSIsImRhdGEiLCJmaXgiLCJraW5kVG9rZW4iLCJnZXRGaXJzdFRva2VuIiwic2tpcCIsImNvbmNhdCIsImluc2VydFRleHRCZWZvcmUiLCJ0eXBlU3BlY2lmaWVycyIsInR5cGVvZlNwZWNpZmllcnMiLCJ2YWx1ZVNwZWNpZmllcnMiLCJkZWZhdWx0U3BlY2lmaWVyIiwidHlwZUltcG9ydCIsInR5cGVvZkltcG9ydCIsIm5ld0ltcG9ydHMiLCJ0cmltIiwicmVwbGFjZVRleHQiLCJmb3JFYWNoIiwibWF5YmVDb21tYSIsImNvbW1hIiwiY2xvc2luZ0JyYWNlIiwicmVtb3ZlUmFuZ2UiLCJyYW5nZSIsImluc2VydFRleHRBZnRlciJdLCJtYXBwaW5ncyI6ImFBQUE7O0FBRUEscUM7O0FBRUEsU0FBU0EsT0FBVCxDQUFpQkMsS0FBakIsRUFBd0I7QUFDdEIsU0FBT0EsTUFBTUMsSUFBTixLQUFl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bkJJLDZCQUFLTixVQUFMLENBQWdCTSxLQUFLTixVQUFMLENBQWdCVyxNQUFoQixHQUF5QixDQUF6QyxDQURtQjtBQUVuQixrQ0FBQ2xCLEtBQUQsVUFBV0EsTUFBTUMsSUFBTixLQUFlLFlBQWYsSUFBK0JELE1BQU1FLEtBQU4sS0FBZ0IsR0FBMUQsRUFGbUIsQ0FBckI7O0FBSUFFLDhCQUFNTSxJQUFOLENBQVdMLE1BQU15RCxXQUFOLENBQWtCO0FBQzNCRiw4QkFBTUcsS0FBTixDQUFZLENBQVosQ0FEMkI7QUFFM0JGLHFDQUFhRSxLQUFiLENBQW1CLENBQW5CLENBRjJCLENBQWxCLENBQVg7O0FBSUQ7O0FBRUQsNkJBQU8zRCxNQUFNMkMsTUFBTjtBQUNMO0FBQ0ExQyw0QkFBTTJELGVBQU4sQ0FBc0JuRCxJQUF0QixnQkFBaUMwQyxVQUFqQyxFQUZLLENBQVA7O0FBSUQscUJBbkRZLGdCQUFmOztBQXFERCxlQXRERDtBQXVERDtBQUNGLFdBM0hJLDhCQUFQOztBQTZIRCxLQTVMYyxtQkFBakIiLCJmaWxlIjoiY29uc2lzdGVudC10eXBlLXNwZWNpZmllci1zdHlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFNvdXJjZUNvZGUgfSBmcm9tICdlc2xpbnQtbW9kdWxlLXV0aWxzL2NvbnRleHRDb21wYXQnO1xuXG5pbXBvcnQgZG9jc1VybCBmcm9tICcuLi9kb2NzVXJsJztcblxuZnVuY3Rpb24gaXNDb21tYSh0b2tlbikge1xuICByZXR1cm4gdG9rZW4udHlwZSA9PT0gJ1B1bmN0dWF0b3InICYmIHRva2VuLnZhbHVlID09PSAnLCc7XG59XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoJ2VzbGludCcpLlJ1bGUuRml4W119IGZpeGVzXG4gKiBAcGFyYW0ge2ltcG9ydCgnZXNsaW50JykuUnVsZS5SdWxlRml4ZXJ9IGZpeGVyXG4gKiBAcGFyYW0ge2ltcG9ydCgnZXNsaW50JykuU291cmNlQ29kZS5Tb3VyY2VDb2RlfSBzb3VyY2VDb2RlXG4gKiBAcGFyYW0geyhJbXBvcnRTcGVjaWZpZXIgfCBJbXBvcnREZWZhdWx0U3BlY2lmaWVyIHwgSW1wb3J0TmFtZXNwYWNlU3BlY2lmaWVyKVtdfSBzcGVjaWZpZXJzXG4gKiAqL1xuZnVuY3Rpb24gcmVtb3ZlU3BlY2lmaWVycyhmaXhlcywgZml4ZXIsIHNvdXJjZUNvZGUsIHNwZWNpZmllcnMpIHtcbiAgZm9yIChjb25zdCBzcGVjaWZpZXIgb2Ygc3BlY2lmaWVycykge1xuICAgIC8vIHJlbW92ZSB0aGUgdHJhaWxpbmcgY29tbWFcbiAgICBjb25zdCB0b2tlbiA9IHNvdXJjZUNvZGUuZ2V0VG9rZW5BZnRlcihzcGVjaWZpZXIpO1xuICAgIGlmICh0b2tlbiAmJiBpc0NvbW1hKHRva2VuKSkge1xuICAgICAgZml4ZXMucHVzaChmaXhlci5yZW1vdmUodG9rZW4pKTtcbiAgICB9XG4gICAgZml4ZXMucHVzaChmaXhlci5yZW1vdmUoc3BlY2lmaWVyKSk7XG4gIH1cbn1cblxuLyoqIEB0eXBlIHsobm9kZTogaW1wb3J0KCdlc3RyZWUnKS5Ob2RlLCBzb3VyY2VDb2RlOiBpbXBvcnQoJ2VzbGludCcpLlNvdXJjZUNvZGUuU291cmNlQ29kZSwgc3BlY2lmaWVyczogKEltcG9ydFNwZWNpZmllciB8IEltcG9ydE5hbWVzcGFjZVNwZWNpZmllcilbXSwga2luZDogJ3R5cGUnIHwgJ3R5cGVvZicpID0+IHN0cmluZ30gKi9cbmZ1bmN0aW9uIGdldEltcG9ydFRleHQoXG4gIG5vZGUsXG4gIHNvdXJjZUNvZGUsXG4gIHNwZWNpZmllcnMsXG4gIGtpbmQsXG4pIHtcbiAgY29uc3Qgc291cmNlU3RyaW5nID0gc291cmNlQ29kZS5nZXRUZXh0KG5vZGUuc291cmNlKTtcbiAgaWYgKHNwZWNpZmllcnMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgY29uc3QgbmFtZXMgPSBzcGVjaWZpZXJzLm1hcCgocykgPT4ge1xuICAgIGlmIChzLmltcG9ydGVkLm5hbWUgPT09IHMubG9jYWwubmFtZSkge1xuICAgICAgcmV0dXJuIHMuaW1wb3J0ZWQubmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIGAke3MuaW1wb3J0ZWQubmFtZX0gYXMgJHtzLmxvY2FsLm5hbWV9YDtcbiAgfSk7XG4gIC8vIGluc2VydCBhIGZyZXNoIHRvcC1sZXZlbCBpbXBvcnRcbiAgcmV0dXJuIGBpbXBvcnQgJHtraW5kfSB7JHtuYW1lcy5qb2luKCcsICcpfX0gZnJvbSAke3NvdXJjZVN0cmluZ307YDtcbn1cblxuLyoqIEB0eXBlIHtpbXBvcnQoJ2VzbGludCcpLlJ1bGUuUnVsZU1vZHVsZX0gKi9cbm1vZHVsZS5leHBvcnRzID0ge1xuICBtZXRhOiB7XG4gICAgdHlwZTogJ3N1Z2dlc3Rpb24nLFxuICAgIGRvY3M6IHtcbiAgICAgIGNhdGVnb3J5OiAnU3R5bGUgZ3VpZGUnLFxuICAgICAgZGVzY3JpcHRpb246ICdFbmZvcmNlIG9yIGJhbiB0aGUgdXNlIG9mIGlubGluZSB0eXBlLW9ubHkgbWFya2VycyBmb3IgbmFtZWQgaW1wb3J0cy4nLFxuICAgICAgdXJsOiBkb2NzVXJsKCdjb25zaXN0ZW50LXR5cGUtc3BlY2lmaWVyLXN0eWxlJyksXG4gICAgfSxcbiAgICBmaXhhYmxlOiAnY29kZScsXG4gICAgc2NoZW1hOiBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICBlbnVtOiBbJ3ByZWZlci1pbmxpbmUnLCAncHJlZmVyLXRvcC1sZXZlbCddLFxuICAgICAgICBkZWZhdWx0OiAncHJlZmVyLWlubGluZScsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG5cbiAgY3JlYXRlKGNvbnRleHQpIHtcbiAgICBjb25zdCBzb3VyY2VDb2RlID0gZ2V0U291cmNlQ29kZShjb250ZXh0KTtcblxuICAgIGlmIChjb250ZXh0Lm9wdGlvbnNbMF0gPT09ICdwcmVmZXItaW5saW5lJykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgSW1wb3J0RGVjbGFyYXRpb24obm9kZSkge1xuICAgICAgICAgIGlmIChub2RlLmltcG9ydEtpbmQgPT09ICd2YWx1ZScgfHwgbm9kZS5pbXBvcnRLaW5kID09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIHRvcC1sZXZlbCB2YWx1ZSAvIHVua25vd24gaXMgdmFsaWRcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAvLyBubyBzcGVjaWZpZXJzIChpbXBvcnQgdHlwZSB7fSBmcm9tICcnKSBoYXZlIG5vIHNwZWNpZmllcnMgdG8gbWFyayBhcyBpbmxpbmVcbiAgICAgICAgICAgIG5vZGUuc3BlY2lmaWVycy5sZW5ndGggPT09IDBcbiAgICAgICAgICAgIHx8IG5vZGUuc3BlY2lmaWVycy5sZW5ndGggPT09IDFcbiAgICAgICAgICAgIC8vIGRlZmF1bHQgaW1wb3J0cyBhcmUgYm90aCBcImlubGluZVwiIGFuZCBcInRvcC1sZXZlbFwiXG4gICAgICAgICAgICAmJiAoXG4gICAgICAgICAgICAgIG5vZGUuc3BlY2lmaWVyc1swXS50eXBlID09PSAnSW1wb3J0RGVmYXVsdFNwZWNpZmllcidcbiAgICAgICAgICAgICAgLy8gbmFtZXNwYWNlIGltcG9ydHMgYXJlIGJvdGggXCJpbmxpbmVcIiBhbmQgXCJ0b3AtbGV2ZWxcIlxuICAgICAgICAgICAgICB8fCBub2RlLnNwZWNpZmllcnNbMF0udHlwZSA9PT0gJ0ltcG9ydE5hbWVzcGFjZVNwZWNpZmllcidcbiAgICAgICAgICAgIClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LnJlcG9ydCh7XG4gICAgICAgICAgICBub2RlLFxuICAgICAgICAgICAgbWVzc2FnZTogJ1ByZWZlciB1c2luZyBpbmxpbmUge3traW5kfX0gc3BlY2lmaWVycyBpbnN0ZWFkIG9mIGEgdG9wLWxldmVsIHt7a2luZH19LW9ubHkgaW1wb3J0LicsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgIGtpbmQ6IG5vZGUuaW1wb3J0S2luZCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmaXgoZml4ZXIpIHtcbiAgICAgICAgICAgICAgY29uc3Qga2luZFRva2VuID0gc291cmNlQ29kZS5nZXRGaXJzdFRva2VuKG5vZGUsIHsgc2tpcDogMSB9KTtcblxuICAgICAgICAgICAgICByZXR1cm4gW10uY29uY2F0KFxuICAgICAgICAgICAgICAgIGtpbmRUb2tlbiA/IGZpeGVyLnJlbW92ZShraW5kVG9rZW4pIDogW10sXG4gICAgICAgICAgICAgICAgbm9kZS5zcGVjaWZpZXJzLm1hcCgoc3BlY2lmaWVyKSA9PiBmaXhlci5pbnNlcnRUZXh0QmVmb3JlKHNwZWNpZmllciwgYCR7bm9kZS5pbXBvcnRLaW5kfSBgKSksXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBwcmVmZXItdG9wLWxldmVsXG4gICAgcmV0dXJuIHtcbiAgICAgIC8qKiBAcGFyYW0ge2ltcG9ydCgnZXN0cmVlJykuSW1wb3J0RGVjbGFyYXRpb259IG5vZGUgKi9cbiAgICAgIEltcG9ydERlY2xhcmF0aW9uKG5vZGUpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIC8vIGFscmVhZHkgdG9wLWxldmVsIGlzIHZhbGlkXG4gICAgICAgICAgbm9kZS5pbXBvcnRLaW5kID09PSAndHlwZSdcbiAgICAgICAgICB8fCBub2RlLmltcG9ydEtpbmQgPT09ICd0eXBlb2YnXG4gICAgICAgICAgLy8gbm8gc3BlY2lmaWVycyAoaW1wb3J0IHt9IGZyb20gJycpIGNhbm5vdCBoYXZlIGlubGluZSAtIHNvIGlzIHZhbGlkXG4gICAgICAgICAgfHwgbm9kZS5zcGVjaWZpZXJzLmxlbmd0aCA9PT0gMFxuICAgICAgICAgIHx8IG5vZGUuc3BlY2lmaWVycy5sZW5ndGggPT09IDFcbiAgICAgICAgICAvLyBkZWZhdWx0IGltcG9ydHMgYXJlIGJvdGggXCJpbmxpbmVcIiBhbmQgXCJ0b3AtbGV2ZWxcIlxuICAgICAgICAgICYmIChcbiAgICAgICAgICAgIG5vZGUuc3BlY2lmaWVyc1swXS50eXBlID09PSAnSW1wb3J0RGVmYXVsdFNwZWNpZmllcidcbiAgICAgICAgICAgIC8vIG5hbWVzcGFjZSBpbXBvcnRzIGFyZSBib3RoIFwiaW5saW5lXCIgYW5kIFwidG9wLWxldmVsXCJcbiAgICAgICAgICAgIHx8IG5vZGUuc3BlY2lmaWVyc1swXS50eXBlID09PSAnSW1wb3J0TmFtZXNwYWNlU3BlY2lmaWVyJ1xuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEB0eXBlIHt0eXBlb2Ygbm9kZS5zcGVjaWZpZXJzfSAqL1xuICAgICAgICBjb25zdCB0eXBlU3BlY2lmaWVycyA9IFtdO1xuICAgICAgICAvKiogQHR5cGUge3R5cGVvZiBub2RlLnNwZWNpZmllcnN9ICovXG4gICAgICAgIGNvbnN0IHR5cGVvZlNwZWNpZmllcnMgPSBbXTtcbiAgICAgICAgLyoqIEB0eXBlIHt0eXBlb2Ygbm9kZS5zcGVjaWZpZXJzfSAqL1xuICAgICAgICBjb25zdCB2YWx1ZVNwZWNpZmllcnMgPSBbXTtcbiAgICAgICAgLyoqIEB0eXBlIHt0eXBlb2Ygbm9kZS5zcGVjaWZpZXJzW251bWJlcl19ICovXG4gICAgICAgIGxldCBkZWZhdWx0U3BlY2lmaWVyID0gbnVsbDtcbiAgICAgICAgZm9yIChjb25zdCBzcGVjaWZpZXIgb2Ygbm9kZS5zcGVjaWZpZXJzKSB7XG4gICAgICAgICAgaWYgKHNwZWNpZmllci50eXBlID09PSAnSW1wb3J0RGVmYXVsdFNwZWNpZmllcicpIHtcbiAgICAgICAgICAgIGRlZmF1bHRTcGVjaWZpZXIgPSBzcGVjaWZpZXI7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc3BlY2lmaWVyLmltcG9ydEtpbmQgPT09ICd0eXBlJykge1xuICAgICAgICAgICAgdHlwZVNwZWNpZmllcnMucHVzaChzcGVjaWZpZXIpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoc3BlY2lmaWVyLmltcG9ydEtpbmQgPT09ICd0eXBlb2YnKSB7XG4gICAgICAgICAgICB0eXBlb2ZTcGVjaWZpZXJzLnB1c2goc3BlY2lmaWVyKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHNwZWNpZmllci5pbXBvcnRLaW5kID09PSAndmFsdWUnIHx8IHNwZWNpZmllci5pbXBvcnRLaW5kID09IG51bGwpIHtcbiAgICAgICAgICAgIHZhbHVlU3BlY2lmaWVycy5wdXNoKHNwZWNpZmllcik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdHlwZUltcG9ydCA9IGdldEltcG9ydFRleHQobm9kZSwgc291cmNlQ29kZSwgdHlwZVNwZWNpZmllcnMsICd0eXBlJyk7XG4gICAgICAgIGNvbnN0IHR5cGVvZkltcG9ydCA9IGdldEltcG9ydFRleHQobm9kZSwgc291cmNlQ29kZSwgdHlwZW9mU3BlY2lmaWVycywgJ3R5cGVvZicpO1xuICAgICAgICBjb25zdCBuZXdJbXBvcnRzID0gYCR7dHlwZUltcG9ydH1cXG4ke3R5cGVvZkltcG9ydH1gLnRyaW0oKTtcblxuICAgICAgICBpZiAodHlwZVNwZWNpZmllcnMubGVuZ3RoICsgdHlwZW9mU3BlY2lmaWVycy5sZW5ndGggPT09IG5vZGUuc3BlY2lmaWVycy5sZW5ndGgpIHtcbiAgICAgICAgICAvKiogQHR5cGUgeygndHlwZScgfCAndHlwZW9mJylbXX0gKi9cbiAgICAgICAgICAvLyBhbGwgc3BlY2lmaWVycyBoYXZlIGlubGluZSBzcGVjaWZpZXJzIC0gc28gd2UgcmVwbGFjZSB0aGUgZW50aXJlIGltcG9ydFxuICAgICAgICAgIGNvbnN0IGtpbmQgPSBbXS5jb25jYXQoXG4gICAgICAgICAgICB0eXBlU3BlY2lmaWVycy5sZW5ndGggPiAwID8gJ3R5cGUnIDogW10sXG4gICAgICAgICAgICB0eXBlb2ZTcGVjaWZpZXJzLmxlbmd0aCA+IDAgPyAndHlwZW9mJyA6IFtdLFxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBjb250ZXh0LnJlcG9ydCh7XG4gICAgICAgICAgICBub2RlLFxuICAgICAgICAgICAgbWVzc2FnZTogJ1ByZWZlciB1c2luZyBhIHRvcC1sZXZlbCB7e2tpbmR9fS1vbmx5IGltcG9ydCBpbnN0ZWFkIG9mIGlubGluZSB7e2tpbmR9fSBzcGVjaWZpZXJzLicsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgIGtpbmQ6IGtpbmQuam9pbignLycpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZpeChmaXhlcikge1xuICAgICAgICAgICAgICByZXR1cm4gZml4ZXIucmVwbGFjZVRleHQobm9kZSwgbmV3SW1wb3J0cyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHJlbW92ZSBzcGVjaWZpYyBzcGVjaWZpZXJzIGFuZCBpbnNlcnQgbmV3IGltcG9ydHMgZm9yIHRoZW1cbiAgICAgICAgICB0eXBlU3BlY2lmaWVycy5jb25jYXQodHlwZW9mU3BlY2lmaWVycykuZm9yRWFjaCgoc3BlY2lmaWVyKSA9PiB7XG4gICAgICAgICAgICBjb250ZXh0LnJlcG9ydCh7XG4gICAgICAgICAgICAgIG5vZGU6IHNwZWNpZmllcixcbiAgICAgICAgICAgICAgbWVzc2FnZTogJ1ByZWZlciB1c2luZyBhIHRvcC1sZXZlbCB7e2tpbmR9fS1vbmx5IGltcG9ydCBpbnN0ZWFkIG9mIGlubGluZSB7e2tpbmR9fSBzcGVjaWZpZXJzLicsXG4gICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBraW5kOiBzcGVjaWZpZXIuaW1wb3J0S2luZCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZml4KGZpeGVyKSB7XG4gICAgICAgICAgICAgICAgLyoqIEB0eXBlIHtpbXBvcnQoJ2VzbGludCcpLlJ1bGUuRml4W119ICovXG4gICAgICAgICAgICAgICAgY29uc3QgZml4ZXMgPSBbXTtcblxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZXJlIGFyZSBubyB2YWx1ZSBzcGVjaWZpZXJzLCB0aGVuIHRoZSBvdGhlciByZXBvcnQgZml4ZXIgd2lsbCBiZSBjYWxsZWQsIG5vdCB0aGlzIG9uZVxuXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlU3BlY2lmaWVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAvLyBpbXBvcnQgeyBWYWx1ZSwgdHlwZSBUeXBlIH0gZnJvbSAnbW9kJztcblxuICAgICAgICAgICAgICAgICAgLy8gd2UgY2FuIGp1c3QgcmVtb3ZlIHRoZSB0eXBlIHNwZWNpZmllcnNcbiAgICAgICAgICAgICAgICAgIHJlbW92ZVNwZWNpZmllcnMoZml4ZXMsIGZpeGVyLCBzb3VyY2VDb2RlLCB0eXBlU3BlY2lmaWVycyk7XG4gICAgICAgICAgICAgICAgICByZW1vdmVTcGVjaWZpZXJzKGZpeGVzLCBmaXhlciwgc291cmNlQ29kZSwgdHlwZW9mU3BlY2lmaWVycyk7XG5cbiAgICAgICAgICAgICAgICAgIC8vIG1ha2UgdGhlIGltcG9ydCBuaWNlbHkgZm9ybWF0dGVkIGJ5IGFsc28gcmVtb3ZpbmcgdGhlIHRyYWlsaW5nIGNvbW1hIGFmdGVyIHRoZSBsYXN0IHZhbHVlIGltcG9ydFxuICAgICAgICAgICAgICAgICAgLy8gZWdcbiAgICAgICAgICAgICAgICAgIC8vIGltcG9ydCB7IFZhbHVlLCB0eXBlIFR5cGUgfSBmcm9tICdtb2QnO1xuICAgICAgICAgICAgICAgICAgLy8gdG9cbiAgICAgICAgICAgICAgICAgIC8vIGltcG9ydCB7IFZhbHVlICB9IGZyb20gJ21vZCc7XG4gICAgICAgICAgICAgICAgICAvLyBub3RcbiAgICAgICAgICAgICAgICAgIC8vIGltcG9ydCB7IFZhbHVlLCAgfSBmcm9tICdtb2QnO1xuICAgICAgICAgICAgICAgICAgY29uc3QgbWF5YmVDb21tYSA9IHNvdXJjZUNvZGUuZ2V0VG9rZW5BZnRlcih2YWx1ZVNwZWNpZmllcnNbdmFsdWVTcGVjaWZpZXJzLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICAgICAgICAgIGlmIChpc0NvbW1hKG1heWJlQ29tbWEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpeGVzLnB1c2goZml4ZXIucmVtb3ZlKG1heWJlQ29tbWEpKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRlZmF1bHRTcGVjaWZpZXIpIHtcbiAgICAgICAgICAgICAgICAgIC8vIGltcG9ydCBEZWZhdWx0LCB7IHR5cGUgVHlwZSB9IGZyb20gJ21vZCc7XG5cbiAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgZW50aXJlIGN1cmx5IGJsb2NrIHNvIHdlIGRvbid0IGxlYXZlIGFuIGVtcHR5IG9uZSBiZWhpbmRcbiAgICAgICAgICAgICAgICAgIC8vIE5PVEUgLSB0aGUgZGVmYXVsdCBzcGVjaWZpZXIgKm11c3QqIGJlIHRoZSBmaXJzdCBzcGVjaWZpZXIgYWx3YXlzIVxuICAgICAgICAgICAgICAgICAgLy8gICAgICAgIHNvIGEgY29tbWEgZXhpc3RzIHRoYXQgd2UgYWxzbyBoYXZlIHRvIGNsZWFuIHVwIG9yIGVsc2UgaXQncyBiYWQgc3ludGF4XG4gICAgICAgICAgICAgICAgICBjb25zdCBjb21tYSA9IHNvdXJjZUNvZGUuZ2V0VG9rZW5BZnRlcihkZWZhdWx0U3BlY2lmaWVyLCBpc0NvbW1hKTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGNsb3NpbmdCcmFjZSA9IHNvdXJjZUNvZGUuZ2V0VG9rZW5BZnRlcihcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zcGVjaWZpZXJzW25vZGUuc3BlY2lmaWVycy5sZW5ndGggLSAxXSxcbiAgICAgICAgICAgICAgICAgICAgKHRva2VuKSA9PiB0b2tlbi50eXBlID09PSAnUHVuY3R1YXRvcicgJiYgdG9rZW4udmFsdWUgPT09ICd9JyxcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICBmaXhlcy5wdXNoKGZpeGVyLnJlbW92ZVJhbmdlKFtcbiAgICAgICAgICAgICAgICAgICAgY29tbWEucmFuZ2VbMF0sXG4gICAgICAgICAgICAgICAgICAgIGNsb3NpbmdCcmFjZS5yYW5nZVsxXSxcbiAgICAgICAgICAgICAgICAgIF0pKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZml4ZXMuY29uY2F0KFxuICAgICAgICAgICAgICAgICAgLy8gaW5zZXJ0IHRoZSBuZXcgaW1wb3J0cyBhZnRlciB0aGUgb2xkIGRlY2xhcmF0aW9uXG4gICAgICAgICAgICAgICAgICBmaXhlci5pbnNlcnRUZXh0QWZ0ZXIobm9kZSwgYFxcbiR7bmV3SW1wb3J0c31gKSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfTtcbiAgfSxcbn07XG4iXX0=