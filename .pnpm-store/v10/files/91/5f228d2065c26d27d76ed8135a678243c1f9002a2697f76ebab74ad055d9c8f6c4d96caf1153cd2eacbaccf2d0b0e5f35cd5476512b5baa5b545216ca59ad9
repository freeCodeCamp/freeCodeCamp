'use strict';var _messages;function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

var isCoreModule = require('is-core-module');var _require =
require('../docsUrl'),docsUrl = _require['default'];

var DO_PREFER_MESSAGE_ID = 'requireNodeProtocol';
var NEVER_PREFER_MESSAGE_ID = 'forbidNodeProtocol';
var messages = (_messages = {}, _defineProperty(_messages,
DO_PREFER_MESSAGE_ID, 'Prefer `node:{{moduleName}}` over `{{moduleName}}`.'), _defineProperty(_messages,
NEVER_PREFER_MESSAGE_ID, 'Prefer `{{moduleName}}` over `node:{{moduleName}}`.'), _messages);


function replaceStringLiteral(
fixer,
node,
text,
relativeRangeStart,
relativeRangeEnd)
{
  var firstCharacterIndex = node.range[0] + 1;
  var start = Number.isInteger(relativeRangeEnd) ?
  relativeRangeStart + firstCharacterIndex :
  firstCharacterIndex;
  var end = Number.isInteger(relativeRangeEnd) ?
  relativeRangeEnd + firstCharacterIndex :
  node.range[1] - 1;

  return fixer.replaceTextRange([start, end], text);
}

function isStringLiteral(node) {
  return node && node.type === 'Literal' && typeof node.value === 'string';
}

function isStaticRequireWith1Param(node) {
  return !node.optional &&
  node.callee.type === 'Identifier' &&
  node.callee.name === 'require'
  // check for only 1 argument
  && node.arguments.length === 1 &&
  node.arguments[0] &&
  isStringLiteral(node.arguments[0]);
}

function checkAndReport(src, context) {
  // TODO use src.quasis[0].value.raw
  if (!src || src.type === 'TemplateLiteral') {return;}
  var moduleName = 'value' in src ? src.value : src.name;
  if (typeof moduleName !== 'string') {console.log(src, moduleName);}var
  settings = context.settings;
  var nodeVersion = settings && settings['import/node-version'];
  if (
  typeof nodeVersion !== 'undefined' && (

  typeof nodeVersion !== 'string' ||
  !/^[0-9]+\.[0-9]+\.[0-9]+$/.test(nodeVersion)))

  {
    throw new TypeError('`import/node-version` setting must be a string in the format "10.23.45" (a semver version, with no leading zero)');
  }

  if (context.options[0] === 'never') {
    if (!moduleName.startsWith('node:')) {return;}

    var actualModuleName = moduleName.slice(5);
    if (!isCoreModule(actualModuleName, nodeVersion || undefined)) {return;}

    context.report({
      node: src,
      message: messages[NEVER_PREFER_MESSAGE_ID],
      data: { moduleName: actualModuleName },
      /** @param {import('eslint').Rule.RuleFixer} fixer */
      fix: function () {function fix(fixer) {
          return replaceStringLiteral(fixer, src, '', 0, 5);
        }return fix;}() });

  } else if (context.options[0] === 'always') {
    if (
    moduleName.startsWith('node:') ||
    !isCoreModule(moduleName, nodeVersion || undefined) ||
    !isCoreModule('node:' + String(moduleName), nodeVersion || undefined))
    {
      return;
    }

    context.report({
      node: src,
      message: messages[DO_PREFER_MESSAGE_ID],
      data: { moduleName: moduleName },
      /** @param {import('eslint').Rule.RuleFixer} fixer */
      fix: function () {function fix(fixer) {
          return replaceStringLiteral(fixer, src, 'node:', 0, 0);
        }return fix;}() });

  } else if (typeof context.options[0] === 'undefined') {
    throw new Error('Missing option');
  } else {
    throw new Error('Unexpected option: ' + String(context.options[0]));
  }
}

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Enforce either using, or omitting, the `node:` protocol when importing Node.js builtin modules.',
      recommended: true,
      category: 'Static analysis',
      url: docsUrl('enforce-node-protocol-usage') },

    fixable: 'code',
    schema: {
      type: 'array',
      minItems: 1,
      maxItems: 1,
      items: [
      {
        'enum': ['always', 'never'] }] },



    messages: messages },

  create: function () {function create(context) {
      return {
        CallExpression: function () {function CallExpression(node) {
            if (!isStaticRequireWith1Param(node)) {return;}

            var arg = node.arguments[0];

            return checkAndReport(arg, context);
          }return CallExpression;}(),
        ExportNamedDeclaration: function () {function ExportNamedDeclaration(node) {
            return checkAndReport(node.source, context);
          }return ExportNamedDeclaration;}(),
        ImportDeclaration: function () {function ImportDeclaration(node) {
            return checkAndReport(node.source, context);
          }return ImportDeclaration;}(),
        ImportExpression: function () {function ImportExpression(node) {
            if (!isStringLiteral(node.source)) {return;}

            return checkAndReport(node.source, context);
          }return ImportExpression;}() };

    }return create;}() };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlcy9lbmZvcmNlLW5vZGUtcHJvdG9jb2wtdXNhZ2UuanMiXSwibmFtZXMiOlsiaXNDb3JlTW9kdWxlIiwicmVxdWlyZSIsImRvY3NVcmwiLCJET19QUkVGRVJfTUVTU0FHRV9JRCIsIk5FVkVSX1BSRUZFUl9NRVNTQUdFX0lEIiwibWVzc2FnZXMiLCJyZXBsYWNlU3RyaW5nTGl0ZXJhbCIsImZpeGVyIiwibm9kZSIsInRleHQiLCJyZWxhdGl2ZVJhbmdlU3RhcnQiLCJyZWxhdGl2ZVJhbmdlRW5kIiwiZmlyc3RDaGFyYWN0ZXJJbmRleCIsInJhbmdlIiwic3RhcnQiLCJOdW1iZXIiLCJpc0ludGVnZXIiLCJlbmQiLCJyZXBsYWNlVGV4dFJhbmdlIiwiaXNTdHJpbmdMaXRlcmFsIiwidHlwZSIsInZhbHVlIiwiaXNTdGF0aWNSZXF1aXJlV2l0aDFQYXJhbSIsIm9wdGlvbmFsIiwiY2FsbGVlIiwibmFtZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsImNoZWNrQW5kUmVwb3J0Iiwic3JjIiwiY29udGV4dCIsIm1vZHVsZU5hbWUiLCJjb25zb2xlIiwibG9nIiwic2V0dGluZ3MiLCJub2RlVmVyc2lvbiIsInRlc3QiLCJUeXBlRXJyb3IiLCJvcHRpb25zIiwic3RhcnRzV2l0aCIsImFjdHVhbE1vZHVsZU5hbWUiLCJzbGljZSIsInVuZGVmaW5lZCIsInJlcG9ydCIsIm1lc3NhZ2UiLCJkYXRhIiwiZml4IiwiRXJyb3IiLCJtb2R1bGUiLCJleHBvcnRzIiwibWV0YSIsImRvY3MiLCJkZXNjcmlwdGlvbiIsInJlY29tbWVuZGVkIiwiY2F0ZWdvcnkiLCJ1cmwiLCJmaXhhYmxlIiwic2NoZW1hIiwibWluSXRlbXMiLCJtYXhJdGVtcyIsIml0ZW1zIiwiY3JlYXRlIiwiQ2FsbEV4cHJlc3Npb24iLCJhcmciLCJFeHBvcnROYW1lZERlY2xhcmF0aW9uIiwic291cmNlIiwiSW1wb3J0RGVjbGFyYXRpb24iLCJJbXBvcnRFeHByZXNzaW9uIl0sIm1h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b3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGlzQ29yZU1vZHVsZSA9IHJlcXVpcmUoJ2lzLWNvcmUtbW9kdWxlJyk7XG5jb25zdCB7IGRlZmF1bHQ6IGRvY3NVcmwgfSA9IHJlcXVpcmUoJy4uL2RvY3NVcmwnKTtcblxuY29uc3QgRE9fUFJFRkVSX01FU1NBR0VfSUQgPSAncmVxdWlyZU5vZGVQcm90b2NvbCc7XG5jb25zdCBORVZFUl9QUkVGRVJfTUVTU0FHRV9JRCA9ICdmb3JiaWROb2RlUHJvdG9jb2wnO1xuY29uc3QgbWVzc2FnZXMgPSB7XG4gIFtET19QUkVGRVJfTUVTU0FHRV9JRF06ICdQcmVmZXIgYG5vZGU6e3ttb2R1bGVOYW1lfX1gIG92ZXIgYHt7bW9kdWxlTmFtZX19YC4nLFxuICBbTkVWRVJfUFJFRkVSX01FU1NBR0VfSURdOiAnUHJlZmVyIGB7e21vZHVsZU5hbWV9fWAgb3ZlciBgbm9kZTp7e21vZHVsZU5hbWV9fWAuJyxcbn07XG5cbmZ1bmN0aW9uIHJlcGxhY2VTdHJpbmdMaXRlcmFsKFxuICBmaXhlcixcbiAgbm9kZSxcbiAgdGV4dCxcbiAgcmVsYXRpdmVSYW5nZVN0YXJ0LFxuICByZWxhdGl2ZVJhbmdlRW5kLFxuKSB7XG4gIGNvbnN0IGZpcnN0Q2hhcmFjdGVySW5kZXggPSBub2RlLnJhbmdlWzBdICsgMTtcbiAgY29uc3Qgc3RhcnQgPSBOdW1iZXIuaXNJbnRlZ2VyKHJlbGF0aXZlUmFuZ2VFbmQpXG4gICAgPyByZWxhdGl2ZVJhbmdlU3RhcnQgKyBmaXJzdENoYXJhY3RlckluZGV4XG4gICAgOiBmaXJzdENoYXJhY3RlckluZGV4O1xuICBjb25zdCBlbmQgPSBOdW1iZXIuaXNJbnRlZ2VyKHJlbGF0aXZlUmFuZ2VFbmQpXG4gICAgPyByZWxhdGl2ZVJhbmdlRW5kICsgZmlyc3RDaGFyYWN0ZXJJbmRleFxuICAgIDogbm9kZS5yYW5nZVsxXSAtIDE7XG5cbiAgcmV0dXJuIGZpeGVyLnJlcGxhY2VUZXh0UmFuZ2UoW3N0YXJ0LCBlbmRdLCB0ZXh0KTtcbn1cblxuZnVuY3Rpb24gaXNTdHJpbmdMaXRlcmFsKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUgJiYgbm9kZS50eXBlID09PSAnTGl0ZXJhbCcgJiYgdHlwZW9mIG5vZGUudmFsdWUgPT09ICdzdHJpbmcnO1xufVxuXG5mdW5jdGlvbiBpc1N0YXRpY1JlcXVpcmVXaXRoMVBhcmFtKG5vZGUpIHtcbiAgcmV0dXJuICFub2RlLm9wdGlvbmFsXG4gICAgJiYgbm9kZS5jYWxsZWUudHlwZSA9PT0gJ0lkZW50aWZpZXInXG4gICAgJiYgbm9kZS5jYWxsZWUubmFtZSA9PT0gJ3JlcXVpcmUnXG4gICAgLy8gY2hlY2sgZm9yIG9ubHkgMSBhcmd1bWVudFxuICAgICYmIG5vZGUuYXJndW1lbnRzLmxlbmd0aCA9PT0gMVxuICAgICYmIG5vZGUuYXJndW1lbnRzWzBdXG4gICAgJiYgaXNTdHJpbmdMaXRlcmFsKG5vZGUuYXJndW1lbnRzWzBdKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tBbmRSZXBvcnQoc3JjLCBjb250ZXh0KSB7XG4gIC8vIFRPRE8gdXNlIHNyYy5xdWFzaXNbMF0udmFsdWUucmF3XG4gIGlmICghc3JjIHx8IHNyYy50eXBlID09PSAnVGVtcGxhdGVMaXRlcmFsJykgeyByZXR1cm47IH1cbiAgY29uc3QgbW9kdWxlTmFtZSA9ICd2YWx1ZScgaW4gc3JjID8gc3JjLnZhbHVlIDogc3JjLm5hbWU7XG4gIGlmICh0eXBlb2YgbW9kdWxlTmFtZSAhPT0gJ3N0cmluZycpIHsgY29uc29sZS5sb2coc3JjLCBtb2R1bGVOYW1lKTsgfVxuICBjb25zdCB7IHNldHRpbmdzIH0gPSBjb250ZXh0O1xuICBjb25zdCBub2RlVmVyc2lvbiA9IHNldHRpbmdzICYmIHNldHRpbmdzWydpbXBvcnQvbm9kZS12ZXJzaW9uJ107XG4gIGlmIChcbiAgICB0eXBlb2Ygbm9kZVZlcnNpb24gIT09ICd1bmRlZmluZWQnXG4gICAgJiYgKFxuICAgICAgdHlwZW9mIG5vZGVWZXJzaW9uICE9PSAnc3RyaW5nJ1xuICAgICAgfHwgISgvXlswLTldK1xcLlswLTldK1xcLlswLTldKyQvKS50ZXN0KG5vZGVWZXJzaW9uKVxuICAgIClcbiAgKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYGltcG9ydC9ub2RlLXZlcnNpb25gIHNldHRpbmcgbXVzdCBiZSBhIHN0cmluZyBpbiB0aGUgZm9ybWF0IFwiMTAuMjMuNDVcIiAoYSBzZW12ZXIgdmVyc2lvbiwgd2l0aCBubyBsZWFkaW5nIHplcm8pJyk7XG4gIH1cblxuICBpZiAoY29udGV4dC5vcHRpb25zWzBdID09PSAnbmV2ZXInKSB7XG4gICAgaWYgKCFtb2R1bGVOYW1lLnN0YXJ0c1dpdGgoJ25vZGU6JykpIHsgcmV0dXJuOyB9XG5cbiAgICBjb25zdCBhY3R1YWxNb2R1bGVOYW1lID0gbW9kdWxlTmFtZS5zbGljZSg1KTtcbiAgICBpZiAoIWlzQ29yZU1vZHVsZShhY3R1YWxNb2R1bGVOYW1lLCBub2RlVmVyc2lvbiB8fCB1bmRlZmluZWQpKSB7IHJldHVybjsgfVxuXG4gICAgY29udGV4dC5yZXBvcnQoe1xuICAgICAgbm9kZTogc3JjLFxuICAgICAgbWVzc2FnZTogbWVzc2FnZXNbTkVWRVJfUFJFRkVSX01FU1NBR0VfSURdLFxuICAgICAgZGF0YTogeyBtb2R1bGVOYW1lOiBhY3R1YWxNb2R1bGVOYW1lIH0sXG4gICAgICAvKiogQHBhcmFtIHtpbXBvcnQoJ2VzbGludCcpLlJ1bGUuUnVsZUZpeGVyfSBmaXhlciAqL1xuICAgICAgZml4KGZpeGVyKSB7XG4gICAgICAgIHJldHVybiByZXBsYWNlU3RyaW5nTGl0ZXJhbChmaXhlciwgc3JjLCAnJywgMCwgNSk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9IGVsc2UgaWYgKGNvbnRleHQub3B0aW9uc1swXSA9PT0gJ2Fsd2F5cycpIHtcbiAgICBpZiAoXG4gICAgICBtb2R1bGVOYW1lLnN0YXJ0c1dpdGgoJ25vZGU6JylcbiAgICAgIHx8ICFpc0NvcmVNb2R1bGUobW9kdWxlTmFtZSwgbm9kZVZlcnNpb24gfHwgdW5kZWZpbmVkKVxuICAgICAgfHwgIWlzQ29yZU1vZHVsZShgbm9kZToke21vZHVsZU5hbWV9YCwgbm9kZVZlcnNpb24gfHwgdW5kZWZpbmVkKVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnRleHQucmVwb3J0KHtcbiAgICAgIG5vZGU6IHNyYyxcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VzW0RPX1BSRUZFUl9NRVNTQUdFX0lEXSxcbiAgICAgIGRhdGE6IHsgbW9kdWxlTmFtZSB9LFxuICAgICAgLyoqIEBwYXJhbSB7aW1wb3J0KCdlc2xpbnQnKS5SdWxlLlJ1bGVGaXhlcn0gZml4ZXIgKi9cbiAgICAgIGZpeChmaXhlcikge1xuICAgICAgICByZXR1cm4gcmVwbGFjZVN0cmluZ0xpdGVyYWwoZml4ZXIsIHNyYywgJ25vZGU6JywgMCwgMCk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBjb250ZXh0Lm9wdGlvbnNbMF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIG9wdGlvbicpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBvcHRpb246ICR7Y29udGV4dC5vcHRpb25zWzBdfWApO1xuICB9XG59XG5cbi8qKiBAdHlwZSB7aW1wb3J0KCdlc2xpbnQnKS5SdWxlLlJ1bGVNb2R1bGV9ICovXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbWV0YToge1xuICAgIHR5cGU6ICdzdWdnZXN0aW9uJyxcbiAgICBkb2NzOiB7XG4gICAgICBkZXNjcmlwdGlvbjogJ0VuZm9yY2UgZWl0aGVyIHVzaW5nLCBvciBvbWl0dGluZywgdGhlIGBub2RlOmAgcHJvdG9jb2wgd2hlbiBpbXBvcnRpbmcgTm9kZS5qcyBidWlsdGluIG1vZHVsZXMuJyxcbiAgICAgIHJlY29tbWVuZGVkOiB0cnVlLFxuICAgICAgY2F0ZWdvcnk6ICdTdGF0aWMgYW5hbHlzaXMnLFxuICAgICAgdXJsOiBkb2NzVXJsKCdlbmZvcmNlLW5vZGUtcHJvdG9jb2wtdXNhZ2UnKSxcbiAgICB9LFxuICAgIGZpeGFibGU6ICdjb2RlJyxcbiAgICBzY2hlbWE6IHtcbiAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICBtaW5JdGVtczogMSxcbiAgICAgIG1heEl0ZW1zOiAxLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGVudW06IFsnYWx3YXlzJywgJ25ldmVyJ10sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAgbWVzc2FnZXMsXG4gIH0sXG4gIGNyZWF0ZShjb250ZXh0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIENhbGxFeHByZXNzaW9uKG5vZGUpIHtcbiAgICAgICAgaWYgKCFpc1N0YXRpY1JlcXVpcmVXaXRoMVBhcmFtKG5vZGUpKSB7IHJldHVybjsgfVxuXG4gICAgICAgIGNvbnN0IGFyZyA9IG5vZGUuYXJndW1lbnRzWzBdO1xuXG4gICAgICAgIHJldHVybiBjaGVja0FuZFJlcG9ydChhcmcsIGNvbnRleHQpO1xuICAgICAgfSxcbiAgICAgIEV4cG9ydE5hbWVkRGVjbGFyYXRpb24obm9kZSkge1xuICAgICAgICByZXR1cm4gY2hlY2tBbmRSZXBvcnQobm9kZS5zb3VyY2UsIGNvbnRleHQpO1xuICAgICAgfSxcbiAgICAgIEltcG9ydERlY2xhcmF0aW9uKG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIGNoZWNrQW5kUmVwb3J0KG5vZGUuc291cmNlLCBjb250ZXh0KTtcbiAgICAgIH0sXG4gICAgICBJbXBvcnRFeHByZXNzaW9uKG5vZGUpIHtcbiAgICAgICAgaWYgKCFpc1N0cmluZ0xpdGVyYWwobm9kZS5zb3VyY2UpKSB7IHJldHVybjsgfVxuXG4gICAgICAgIHJldHVybiBjaGVja0FuZFJlcG9ydChub2RlLnNvdXJjZSwgY29udGV4dCk7XG4gICAgICB9LFxuICAgIH07XG4gIH0sXG59O1xuIl19