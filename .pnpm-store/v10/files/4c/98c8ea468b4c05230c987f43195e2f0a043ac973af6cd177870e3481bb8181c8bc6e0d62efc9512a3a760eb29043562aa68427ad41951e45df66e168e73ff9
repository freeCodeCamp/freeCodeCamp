'use strict';var _path = require('path');var _path2 = _interopRequireDefault(_path);

var _minimatch = require('minimatch');var _minimatch2 = _interopRequireDefault(_minimatch);
var _resolve = require('eslint-module-utils/resolve');var _resolve2 = _interopRequireDefault(_resolve);
var _importType = require('../core/importType');
var _moduleVisitor = require('eslint-module-utils/moduleVisitor');var _moduleVisitor2 = _interopRequireDefault(_moduleVisitor);
var _docsUrl = require('../docsUrl');var _docsUrl2 = _interopRequireDefault(_docsUrl);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}

var enumValues = { 'enum': ['always', 'ignorePackages', 'never'] };
var patternProperties = {
  type: 'object',
  patternProperties: { '.*': enumValues } };

var properties = {
  type: 'object',
  properties: {
    pattern: patternProperties,
    checkTypeImports: { type: 'boolean' },
    ignorePackages: { type: 'boolean' },
    pathGroupOverrides: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          pattern: {
            type: 'string' },

          patternOptions: {
            type: 'object' },

          action: {
            type: 'string',
            'enum': ['enforce', 'ignore'] } },


        additionalProperties: false,
        required: ['pattern', 'action'] } } } };





function buildProperties(context) {

  var result = {
    defaultConfig: 'never',
    pattern: {},
    ignorePackages: false };


  context.options.forEach(function (obj) {

    // If this is a string, set defaultConfig to its value
    if (typeof obj === 'string') {
      result.defaultConfig = obj;
      return;
    }

    // If this is not the new structure, transfer all props to result.pattern
    if (obj.pattern === undefined && obj.ignorePackages === undefined && obj.checkTypeImports === undefined) {
      Object.assign(result.pattern, obj);
      return;
    }

    // If pattern is provided, transfer all props
    if (obj.pattern !== undefined) {
      Object.assign(result.pattern, obj.pattern);
    }

    // If ignorePackages is provided, transfer it to result
    if (obj.ignorePackages !== undefined) {
      result.ignorePackages = obj.ignorePackages;
    }

    if (obj.checkTypeImports !== undefined) {
      result.checkTypeImports = obj.checkTypeImports;
    }

    if (obj.pathGroupOverrides !== undefined) {
      result.pathGroupOverrides = obj.pathGroupOverrides;
    }
  });

  if (result.defaultConfig === 'ignorePackages') {
    result.defaultConfig = 'always';
    result.ignorePackages = true;
  }

  return result;
}

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      category: 'Style guide',
      description: 'Ensure consistent use of file extension within the import path.',
      url: (0, _docsUrl2['default'])('extensions') },


    schema: {
      anyOf: [
      {
        type: 'array',
        items: [enumValues],
        additionalItems: false },

      {
        type: 'array',
        items: [
        enumValues,
        properties],

        additionalItems: false },

      {
        type: 'array',
        items: [properties],
        additionalItems: false },

      {
        type: 'array',
        items: [patternProperties],
        additionalItems: false },

      {
        type: 'array',
        items: [
        enumValues,
        patternProperties],

        additionalItems: false }] } },





  create: function () {function create(context) {

      var props = buildProperties(context);

      function getModifier(extension) {
        return props.pattern[extension] || props.defaultConfig;
      }

      function isUseOfExtensionRequired(extension, isPackage) {
        return getModifier(extension) === 'always' && (!props.ignorePackages || !isPackage);
      }

      function isUseOfExtensionForbidden(extension) {
        return getModifier(extension) === 'never';
      }

      function isResolvableWithoutExtension(file) {
        var extension = _path2['default'].extname(file);
        var fileWithoutExtension = file.slice(0, -extension.length);
        var resolvedFileWithoutExtension = (0, _resolve2['default'])(fileWithoutExtension, context);

        return resolvedFileWithoutExtension === (0, _resolve2['default'])(file, context);
      }

      function isExternalRootModule(file) {
        if (file === '.' || file === '..') {return false;}
        var slashCount = file.split('/').length - 1;

        if (slashCount === 0) {return true;}
        if ((0, _importType.isScoped)(file) && slashCount <= 1) {return true;}
        return false;
      }

      function computeOverrideAction(pathGroupOverrides, path) {
        for (var i = 0, l = pathGroupOverrides.length; i < l; i++) {var _pathGroupOverrides$i =
          pathGroupOverrides[i],pattern = _pathGroupOverrides$i.pattern,patternOptions = _pathGroupOverrides$i.patternOptions,action = _pathGroupOverrides$i.action;
          if ((0, _minimatch2['default'])(path, pattern, patternOptions || { nocomment: true })) {
            return action;
          }
        }
      }

      function checkFileExtension(source, node) {
        // bail if the declaration doesn't have a source, e.g. "export { foo };", or if it's only partially typed like in an editor
        if (!source || !source.value) {return;}

        var importPathWithQueryString = source.value;

        // If not undefined, the user decided if rules are enforced on this import
        var overrideAction = computeOverrideAction(
        props.pathGroupOverrides || [],
        importPathWithQueryString);


        if (overrideAction === 'ignore') {
          return;
        }

        // don't enforce anything on builtins
        if (!overrideAction && (0, _importType.isBuiltIn)(importPathWithQueryString, context.settings)) {return;}

        var importPath = importPathWithQueryString.replace(/\?(.*)$/, '');

        // don't enforce in root external packages as they may have names with `.js`.
        // Like `import Decimal from decimal.js`)
        if (!overrideAction && isExternalRootModule(importPath)) {return;}

        var resolvedPath = (0, _resolve2['default'])(importPath, context);

        // get extension from resolved path, if possible.
        // for unresolved, use source value.
        var extension = _path2['default'].extname(resolvedPath || importPath).substring(1);

        // determine if this is a module
        var isPackage = (0, _importType.isExternalModule)(
        importPath,
        (0, _resolve2['default'])(importPath, context),
        context) ||
        (0, _importType.isScoped)(importPath);

        if (!extension || !importPath.endsWith('.' + String(extension))) {
          // ignore type-only imports and exports
          if (!props.checkTypeImports && (node.importKind === 'type' || node.exportKind === 'type')) {return;}
          var extensionRequired = isUseOfExtensionRequired(extension, !overrideAction && isPackage);
          var extensionForbidden = isUseOfExtensionForbidden(extension);
          if (extensionRequired && !extensionForbidden) {
            context.report({
              node: source,
              message: 'Missing file extension ' + (
              extension ? '"' + String(extension) + '" ' : '') + 'for "' + String(importPathWithQueryString) + '"' });

          }
        } else if (extension) {
          if (isUseOfExtensionForbidden(extension) && isResolvableWithoutExtension(importPath)) {
            context.report({
              node: source,
              message: 'Unexpected use of file extension "' + String(extension) + '" for "' + String(importPathWithQueryString) + '"' });

          }
        }
      }

      return (0, _moduleVisitor2['default'])(checkFileExtension, { commonjs: true });
    }return create;}() };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlcy9leHRlbnNpb25zLmpzIl0sIm5hbWVzIjpbImVudW1WYWx1ZXMiLCJwYXR0ZXJuUHJvcGVydGllcyIsInR5cGUiLCJwcm9wZXJ0aWVzIiwicGF0dGVybiIsImNoZWNrVHlwZUltcG9ydHMiLCJpZ25vcmVQYWNrYWdlcyIsInBhdGhHcm91cE92ZXJyaWRlcyIsIml0ZW1zIiwicGF0dGVybk9wdGlvbnMiLCJhY3Rpb24iLCJhZGRpdGlvbmFsUHJvcGVydGllcyIsInJlcXVpcmVkIiwiYnVpbGRQcm9wZXJ0aWVzIiwiY29udGV4dCIsInJlc3VsdCIsImRlZmF1bHRDb25maWciLCJvcHRpb25zIiwiZm9yRWFjaCIsIm9iaiIsInVuZGVmaW5lZCIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJtZXRhIiwiZG9jcyIsImNhdGVnb3J5IiwiZGVzY3JpcHRpb24iLCJ1cmwiLCJzY2hlbWEiLCJhbnlPZiIsImFkZGl0aW9uYWxJdGVtcyIsImNyZWF0ZSIsInByb3BzIiwiZ2V0TW9kaWZpZXIiLCJleHRlbnNpb24iLCJpc1VzZU9mRXh0ZW5zaW9uUmVxdWlyZWQiLCJpc1BhY2thZ2UiLCJpc1VzZU9mRXh0ZW5zaW9uRm9yYmlkZGVuIiwiaXNSZXNvbHZhYmxlV2l0aG91dEV4dGVuc2lvbiIsImZpbGUiLCJwYXRoIiwiZXh0bmFtZSIsImZpbGVXaXRob3V0RXh0ZW5zaW9uIiwic2xpY2UiLCJsZW5ndGgiLCJyZXNvbHZlZEZpbGVXaXRob3V0RXh0ZW5zaW9uIiwiaXNFeHRlcm5hbFJvb3RNb2R1bGUiLCJzbGFzaENvdW50Iiwic3BsaXQiLCJjb21wdXRlT3ZlcnJpZGVBY3Rpb24iLCJpIiwibCIsIm5vY29tbWVudCIsImNoZWNrRmlsZUV4dGVuc2lvbiIsInNvdXJjZSIsIm5vZGUiLCJ2YWx1ZSIsImltcG9ydFBhdGhXaXRoUXVlcnlTdHJpbmciLCJvdmVycmlkZUFjdGlvbiIsInNldHRpbmdzIiwiaW1wb3J0UGF0aCIsInJlcGxhY2UiLCJyZXNvbHZlZFBhdGgiLCJzdWJzdHJpbmciLCJlbmRzV2l0aCIsImltcG9ydEtpbmQiLCJleHBvcnRLaW5kIiwiZXh0ZW5zaW9uUmVxdWlyZWQiLCJleHRlbnNpb25Gb3JiaWRkZW4iLCJyZXBvcnQiLCJtZXNzYWdlIiwiY29tbW9uanMiXSwibWFwcGluZ3MiOiJhQUFBLDRCOztBQUVBLHNDO0FBQ0Esc0Q7QUFDQTtBQUNBLGtFO0FBQ0EscUM7O0FBRUEsSUFBTUEsYUFBYSxFQUFFLFFBQU0sQ0FBQyxRQUFELEVBQVcsZ0JBQVgsRUFBNkIsT0FBN0IsQ0FBUixFQUFuQjtBQUNBLElBQU1DLG9CQUFvQjtBQUN4QkMsUUFBTSxRQURrQjtBQUV4QkQscUJBQW1CLEVBQUUsTUFBTUQsVUFBUixFQUZLLEVBQTFCOztBQUlBLElBQU1HLGFBQWE7QUFDakJELFFBQU0sUUFEVztBQUVqQkMsY0FBWTtBQUNWQyxhQUFTSCxpQkFEQztBQUVWSSxzQkFBa0IsRUFBRUgsTUFBTSxTQUFSLEVBRlI7QUFHVkksb0JBQWdCLEVBQUVKLE1BQU0sU0FBUixFQUhOO0FBSVZLLHdCQUFvQjtBQUNsQkwsWUFBTSxPQURZO0FBRWxCTSxhQUFPO0FBQ0xOLGNBQU0sUUFERDtBQUVMQyxvQkFBWTtBQUNWQyxtQkFBUztBQUNQRixrQkFBTSxRQURDLEVBREM7O0FBSVZPLDBCQUFnQjtBQUNkUCxrQkFBTSxRQURRLEVBSk47O0FBT1ZRLGtCQUFRO0FBQ05SLGtCQUFNLFFBREE7QUFFTixvQkFBTSxDQUFDLFNBQUQsRUFBWSxRQUFaLENBRkEsRUFQRSxFQUZQOzs7QUFjTFMsOEJBQXNCLEtBZGpCO0FBZUxDLGtCQUFVLENBQUMsU0FBRCxFQUFZLFFBQVosQ0FmTCxFQUZXLEVBSlYsRUFGSyxFQUFuQjs7Ozs7O0FBNkJBLFNBQVNDLGVBQVQsQ0FBeUJDLE9BQXpCLEVBQWtDOztBQUVoQyxNQUFNQyxTQUFTO0FBQ2JDLG1CQUFlLE9BREY7QUFFYlosYUFBUyxFQUZJO0FBR2JFLG9CQUFnQixLQUhILEVBQWY7OztBQU1B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TCxLQUFvQixNQUFwQixJQUE4QlYsS0FBS1csVUFBTCxLQUFvQixNQUE5RSxDQUFKLEVBQTJGLENBQUUsT0FBUztBQUN0RyxjQUFNQyxvQkFBb0JoQyx5QkFBeUJELFNBQXpCLEVBQW9DLENBQUN3QixjQUFELElBQW1CdEIsU0FBdkQsQ0FBMUI7QUFDQSxjQUFNZ0MscUJBQXFCL0IsMEJBQTBCSCxTQUExQixDQUEzQjtBQUNBLGNBQUlpQyxxQkFBcUIsQ0FBQ0Msa0JBQTFCLEVBQThDO0FBQzVDeEQsb0JBQVF5RCxNQUFSLENBQWU7QUFDYmQsb0JBQU1ELE1BRE87QUFFYmdCO0FBQzRCcEMsdUNBQWdCQSxTQUFoQixXQUFnQyxFQUQ1RCxxQkFDc0V1Qix5QkFEdEUsT0FGYSxFQUFmOztBQUtEO0FBQ0YsU0FaRCxNQVlPLElBQUl2QixTQUFKLEVBQWU7QUFDcEIsY0FBSUcsMEJBQTBCSCxTQUExQixLQUF3Q0ksNkJBQTZCc0IsVUFBN0IsQ0FBNUMsRUFBc0Y7QUFDcEZoRCxvQkFBUXlELE1BQVIsQ0FBZTtBQUNiZCxvQkFBTUQsTUFETztBQUViZ0IscUVBQThDcEMsU0FBOUMsdUJBQWlFdUIseUJBQWpFLE9BRmEsRUFBZjs7QUFJRDtBQUNGO0FBQ0Y7O0FBRUQsYUFBTyxnQ0FBY0osa0JBQWQsRUFBa0MsRUFBRWtCLFVBQVUsSUFBWixFQUFsQyxDQUFQO0FBQ0QsS0FySmMsbUJBQWpCIiwiZmlsZSI6ImV4dGVuc2lvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuaW1wb3J0IG1pbmltYXRjaCBmcm9tICdtaW5pbWF0Y2gnO1xuaW1wb3J0IHJlc29sdmUgZnJvbSAnZXNsaW50LW1vZHVsZS11dGlscy9yZXNvbHZlJztcbmltcG9ydCB7IGlzQnVpbHRJbiwgaXNFeHRlcm5hbE1vZHVsZSwgaXNTY29wZWQgfSBmcm9tICcuLi9jb3JlL2ltcG9ydFR5cGUnO1xuaW1wb3J0IG1vZHVsZVZpc2l0b3IgZnJvbSAnZXNsaW50LW1vZHVsZS11dGlscy9tb2R1bGVWaXNpdG9yJztcbmltcG9ydCBkb2NzVXJsIGZyb20gJy4uL2RvY3NVcmwnO1xuXG5jb25zdCBlbnVtVmFsdWVzID0geyBlbnVtOiBbJ2Fsd2F5cycsICdpZ25vcmVQYWNrYWdlcycsICduZXZlciddIH07XG5jb25zdCBwYXR0ZXJuUHJvcGVydGllcyA9IHtcbiAgdHlwZTogJ29iamVjdCcsXG4gIHBhdHRlcm5Qcm9wZXJ0aWVzOiB7ICcuKic6IGVudW1WYWx1ZXMgfSxcbn07XG5jb25zdCBwcm9wZXJ0aWVzID0ge1xuICB0eXBlOiAnb2JqZWN0JyxcbiAgcHJvcGVydGllczoge1xuICAgIHBhdHRlcm46IHBhdHRlcm5Qcm9wZXJ0aWVzLFxuICAgIGNoZWNrVHlwZUltcG9ydHM6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gICAgaWdub3JlUGFja2FnZXM6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gICAgcGF0aEdyb3VwT3ZlcnJpZGVzOiB7XG4gICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgaXRlbXM6IHtcbiAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICBwYXR0ZXJuOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHBhdHRlcm5PcHRpb25zOiB7XG4gICAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFjdGlvbjoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICBlbnVtOiBbJ2VuZm9yY2UnLCAnaWdub3JlJ10sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGZhbHNlLFxuICAgICAgICByZXF1aXJlZDogWydwYXR0ZXJuJywgJ2FjdGlvbiddLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufTtcblxuZnVuY3Rpb24gYnVpbGRQcm9wZXJ0aWVzKGNvbnRleHQpIHtcblxuICBjb25zdCByZXN1bHQgPSB7XG4gICAgZGVmYXVsdENvbmZpZzogJ25ldmVyJyxcbiAgICBwYXR0ZXJuOiB7fSxcbiAgICBpZ25vcmVQYWNrYWdlczogZmFsc2UsXG4gIH07XG5cbiAgY29udGV4dC5vcHRpb25zLmZvckVhY2goKG9iaikgPT4ge1xuXG4gICAgLy8gSWYgdGhpcyBpcyBhIHN0cmluZywgc2V0IGRlZmF1bHRDb25maWcgdG8gaXRzIHZhbHVlXG4gICAgaWYgKHR5cGVvZiBvYmogPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXN1bHQuZGVmYXVsdENvbmZpZyA9IG9iajtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGlzIGlzIG5vdCB0aGUgbmV3IHN0cnVjdHVyZSwgdHJhbnNmZXIgYWxsIHByb3BzIHRvIHJlc3VsdC5wYXR0ZXJuXG4gICAgaWYgKG9iai5wYXR0ZXJuID09PSB1bmRlZmluZWQgJiYgb2JqLmlnbm9yZVBhY2thZ2VzID09PSB1bmRlZmluZWQgJiYgb2JqLmNoZWNrVHlwZUltcG9ydHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgT2JqZWN0LmFzc2lnbihyZXN1bHQucGF0dGVybiwgb2JqKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBJZiBwYXR0ZXJuIGlzIHByb3ZpZGVkLCB0cmFuc2ZlciBhbGwgcHJvcHNcbiAgICBpZiAob2JqLnBhdHRlcm4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgT2JqZWN0LmFzc2lnbihyZXN1bHQucGF0dGVybiwgb2JqLnBhdHRlcm4pO1xuICAgIH1cblxuICAgIC8vIElmIGlnbm9yZVBhY2thZ2VzIGlzIHByb3ZpZGVkLCB0cmFuc2ZlciBpdCB0byByZXN1bHRcbiAgICBpZiAob2JqLmlnbm9yZVBhY2thZ2VzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlc3VsdC5pZ25vcmVQYWNrYWdlcyA9IG9iai5pZ25vcmVQYWNrYWdlcztcbiAgICB9XG5cbiAgICBpZiAob2JqLmNoZWNrVHlwZUltcG9ydHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVzdWx0LmNoZWNrVHlwZUltcG9ydHMgPSBvYmouY2hlY2tUeXBlSW1wb3J0cztcbiAgICB9XG5cbiAgICBpZiAob2JqLnBhdGhHcm91cE92ZXJyaWRlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXN1bHQucGF0aEdyb3VwT3ZlcnJpZGVzID0gb2JqLnBhdGhHcm91cE92ZXJyaWRlcztcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChyZXN1bHQuZGVmYXVsdENvbmZpZyA9PT0gJ2lnbm9yZVBhY2thZ2VzJykge1xuICAgIHJlc3VsdC5kZWZhdWx0Q29uZmlnID0gJ2Fsd2F5cyc7XG4gICAgcmVzdWx0Lmlnbm9yZVBhY2thZ2VzID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBtZXRhOiB7XG4gICAgdHlwZTogJ3N1Z2dlc3Rpb24nLFxuICAgIGRvY3M6IHtcbiAgICAgIGNhdGVnb3J5OiAnU3R5bGUgZ3VpZGUnLFxuICAgICAgZGVzY3JpcHRpb246ICdFbnN1cmUgY29uc2lzdGVudCB1c2Ugb2YgZmlsZSBleHRlbnNpb24gd2l0aGluIHRoZSBpbXBvcnQgcGF0aC4nLFxuICAgICAgdXJsOiBkb2NzVXJsKCdleHRlbnNpb25zJyksXG4gICAgfSxcblxuICAgIHNjaGVtYToge1xuICAgICAgYW55T2Y6IFtcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgaXRlbXM6IFtlbnVtVmFsdWVzXSxcbiAgICAgICAgICBhZGRpdGlvbmFsSXRlbXM6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgZW51bVZhbHVlcyxcbiAgICAgICAgICAgIHByb3BlcnRpZXMsXG4gICAgICAgICAgXSxcbiAgICAgICAgICBhZGRpdGlvbmFsSXRlbXM6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgICAgICBpdGVtczogW3Byb3BlcnRpZXNdLFxuICAgICAgICAgIGFkZGl0aW9uYWxJdGVtczogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICAgIGl0ZW1zOiBbcGF0dGVyblByb3BlcnRpZXNdLFxuICAgICAgICAgIGFkZGl0aW9uYWxJdGVtczogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICBlbnVtVmFsdWVzLFxuICAgICAgICAgICAgcGF0dGVyblByb3BlcnRpZXMsXG4gICAgICAgICAgXSxcbiAgICAgICAgICBhZGRpdGlvbmFsSXRlbXM6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxuXG4gIGNyZWF0ZShjb250ZXh0KSB7XG5cbiAgICBjb25zdCBwcm9wcyA9IGJ1aWxkUHJvcGVydGllcyhjb250ZXh0KTtcblxuICAgIGZ1bmN0aW9uIGdldE1vZGlmaWVyKGV4dGVuc2lvbikge1xuICAgICAgcmV0dXJuIHByb3BzLnBhdHRlcm5bZXh0ZW5zaW9uXSB8fCBwcm9wcy5kZWZhdWx0Q29uZmlnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzVXNlT2ZFeHRlbnNpb25SZXF1aXJlZChleHRlbnNpb24sIGlzUGFja2FnZSkge1xuICAgICAgcmV0dXJuIGdldE1vZGlmaWVyKGV4dGVuc2lvbikgPT09ICdhbHdheXMnICYmICghcHJvcHMuaWdub3JlUGFja2FnZXMgfHwgIWlzUGFja2FnZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNVc2VPZkV4dGVuc2lvbkZvcmJpZGRlbihleHRlbnNpb24pIHtcbiAgICAgIHJldHVybiBnZXRNb2RpZmllcihleHRlbnNpb24pID09PSAnbmV2ZXInO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzUmVzb2x2YWJsZVdpdGhvdXRFeHRlbnNpb24oZmlsZSkge1xuICAgICAgY29uc3QgZXh0ZW5zaW9uID0gcGF0aC5leHRuYW1lKGZpbGUpO1xuICAgICAgY29uc3QgZmlsZVdpdGhvdXRFeHRlbnNpb24gPSBmaWxlLnNsaWNlKDAsIC1leHRlbnNpb24ubGVuZ3RoKTtcbiAgICAgIGNvbnN0IHJlc29sdmVkRmlsZVdpdGhvdXRFeHRlbnNpb24gPSByZXNvbHZlKGZpbGVXaXRob3V0RXh0ZW5zaW9uLCBjb250ZXh0KTtcblxuICAgICAgcmV0dXJuIHJlc29sdmVkRmlsZVdpdGhvdXRFeHRlbnNpb24gPT09IHJlc29sdmUoZmlsZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNFeHRlcm5hbFJvb3RNb2R1bGUoZmlsZSkge1xuICAgICAgaWYgKGZpbGUgPT09ICcuJyB8fCBmaWxlID09PSAnLi4nKSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgY29uc3Qgc2xhc2hDb3VudCA9IGZpbGUuc3BsaXQoJy8nKS5sZW5ndGggLSAxO1xuXG4gICAgICBpZiAoc2xhc2hDb3VudCA9PT0gMCkgIHsgcmV0dXJuIHRydWU7IH1cbiAgICAgIGlmIChpc1Njb3BlZChmaWxlKSAmJiBzbGFzaENvdW50IDw9IDEpIHsgcmV0dXJuIHRydWU7IH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb21wdXRlT3ZlcnJpZGVBY3Rpb24ocGF0aEdyb3VwT3ZlcnJpZGVzLCBwYXRoKSB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IHBhdGhHcm91cE92ZXJyaWRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgY29uc3QgeyBwYXR0ZXJuLCBwYXR0ZXJuT3B0aW9ucywgYWN0aW9uIH0gPSBwYXRoR3JvdXBPdmVycmlkZXNbaV07XG4gICAgICAgIGlmIChtaW5pbWF0Y2gocGF0aCwgcGF0dGVybiwgcGF0dGVybk9wdGlvbnMgfHwgeyBub2NvbW1lbnQ6IHRydWUgfSkpIHtcbiAgICAgICAgICByZXR1cm4gYWN0aW9uO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tGaWxlRXh0ZW5zaW9uKHNvdXJjZSwgbm9kZSkge1xuICAgICAgLy8gYmFpbCBpZiB0aGUgZGVjbGFyYXRpb24gZG9lc24ndCBoYXZlIGEgc291cmNlLCBlLmcuIFwiZXhwb3J0IHsgZm9vIH07XCIsIG9yIGlmIGl0J3Mgb25seSBwYXJ0aWFsbHkgdHlwZWQgbGlrZSBpbiBhbiBlZGl0b3JcbiAgICAgIGlmICghc291cmNlIHx8ICFzb3VyY2UudmFsdWUpIHsgcmV0dXJuOyB9XG5cbiAgICAgIGNvbnN0IGltcG9ydFBhdGhXaXRoUXVlcnlTdHJpbmcgPSBzb3VyY2UudmFsdWU7XG5cbiAgICAgIC8vIElmIG5vdCB1bmRlZmluZWQsIHRoZSB1c2VyIGRlY2lkZWQgaWYgcnVsZXMgYXJlIGVuZm9yY2VkIG9uIHRoaXMgaW1wb3J0XG4gICAgICBjb25zdCBvdmVycmlkZUFjdGlvbiA9IGNvbXB1dGVPdmVycmlkZUFjdGlvbihcbiAgICAgICAgcHJvcHMucGF0aEdyb3VwT3ZlcnJpZGVzIHx8IFtdLFxuICAgICAgICBpbXBvcnRQYXRoV2l0aFF1ZXJ5U3RyaW5nLFxuICAgICAgKTtcblxuICAgICAgaWYgKG92ZXJyaWRlQWN0aW9uID09PSAnaWdub3JlJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGRvbid0IGVuZm9yY2UgYW55dGhpbmcgb24gYnVpbHRpbnNcbiAgICAgIGlmICghb3ZlcnJpZGVBY3Rpb24gJiYgaXNCdWlsdEluKGltcG9ydFBhdGhXaXRoUXVlcnlTdHJpbmcsIGNvbnRleHQuc2V0dGluZ3MpKSB7IHJldHVybjsgfVxuXG4gICAgICBjb25zdCBpbXBvcnRQYXRoID0gaW1wb3J0UGF0aFdpdGhRdWVyeVN0cmluZy5yZXBsYWNlKC9cXD8oLiopJC8sICcnKTtcblxuICAgICAgLy8gZG9uJ3QgZW5mb3JjZSBpbiByb290IGV4dGVybmFsIHBhY2thZ2VzIGFzIHRoZXkgbWF5IGhhdmUgbmFtZXMgd2l0aCBgLmpzYC5cbiAgICAgIC8vIExpa2UgYGltcG9ydCBEZWNpbWFsIGZyb20gZGVjaW1hbC5qc2ApXG4gICAgICBpZiAoIW92ZXJyaWRlQWN0aW9uICYmIGlzRXh0ZXJuYWxSb290TW9kdWxlKGltcG9ydFBhdGgpKSB7IHJldHVybjsgfVxuXG4gICAgICBjb25zdCByZXNvbHZlZFBhdGggPSByZXNvbHZlKGltcG9ydFBhdGgsIGNvbnRleHQpO1xuXG4gICAgICAvLyBnZXQgZXh0ZW5zaW9uIGZyb20gcmVzb2x2ZWQgcGF0aCwgaWYgcG9zc2libGUuXG4gICAgICAvLyBmb3IgdW5yZXNvbHZlZCwgdXNlIHNvdXJjZSB2YWx1ZS5cbiAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IHBhdGguZXh0bmFtZShyZXNvbHZlZFBhdGggfHwgaW1wb3J0UGF0aCkuc3Vic3RyaW5nKDEpO1xuXG4gICAgICAvLyBkZXRlcm1pbmUgaWYgdGhpcyBpcyBhIG1vZHVsZVxuICAgICAgY29uc3QgaXNQYWNrYWdlID0gaXNFeHRlcm5hbE1vZHVsZShcbiAgICAgICAgaW1wb3J0UGF0aCxcbiAgICAgICAgcmVzb2x2ZShpbXBvcnRQYXRoLCBjb250ZXh0KSxcbiAgICAgICAgY29udGV4dCxcbiAgICAgICkgfHwgaXNTY29wZWQoaW1wb3J0UGF0aCk7XG5cbiAgICAgIGlmICghZXh0ZW5zaW9uIHx8ICFpbXBvcnRQYXRoLmVuZHNXaXRoKGAuJHtleHRlbnNpb259YCkpIHtcbiAgICAgICAgLy8gaWdub3JlIHR5cGUtb25seSBpbXBvcnRzIGFuZCBleHBvcnRzXG4gICAgICAgIGlmICghcHJvcHMuY2hlY2tUeXBlSW1wb3J0cyAmJiAobm9kZS5pbXBvcnRLaW5kID09PSAndHlwZScgfHwgbm9kZS5leHBvcnRLaW5kID09PSAndHlwZScpKSB7IHJldHVybjsgfVxuICAgICAgICBjb25zdCBleHRlbnNpb25SZXF1aXJlZCA9IGlzVXNlT2ZFeHRlbnNpb25SZXF1aXJlZChleHRlbnNpb24sICFvdmVycmlkZUFjdGlvbiAmJiBpc1BhY2thZ2UpO1xuICAgICAgICBjb25zdCBleHRlbnNpb25Gb3JiaWRkZW4gPSBpc1VzZU9mRXh0ZW5zaW9uRm9yYmlkZGVuKGV4dGVuc2lvbik7XG4gICAgICAgIGlmIChleHRlbnNpb25SZXF1aXJlZCAmJiAhZXh0ZW5zaW9uRm9yYmlkZGVuKSB7XG4gICAgICAgICAgY29udGV4dC5yZXBvcnQoe1xuICAgICAgICAgICAgbm9kZTogc291cmNlLFxuICAgICAgICAgICAgbWVzc2FnZTpcbiAgICAgICAgICAgICAgYE1pc3NpbmcgZmlsZSBleHRlbnNpb24gJHtleHRlbnNpb24gPyBgXCIke2V4dGVuc2lvbn1cIiBgIDogJyd9Zm9yIFwiJHtpbXBvcnRQYXRoV2l0aFF1ZXJ5U3RyaW5nfVwiYCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChleHRlbnNpb24pIHtcbiAgICAgICAgaWYgKGlzVXNlT2ZFeHRlbnNpb25Gb3JiaWRkZW4oZXh0ZW5zaW9uKSAmJiBpc1Jlc29sdmFibGVXaXRob3V0RXh0ZW5zaW9uKGltcG9ydFBhdGgpKSB7XG4gICAgICAgICAgY29udGV4dC5yZXBvcnQoe1xuICAgICAgICAgICAgbm9kZTogc291cmNlLFxuICAgICAgICAgICAgbWVzc2FnZTogYFVuZXhwZWN0ZWQgdXNlIG9mIGZpbGUgZXh0ZW5zaW9uIFwiJHtleHRlbnNpb259XCIgZm9yIFwiJHtpbXBvcnRQYXRoV2l0aFF1ZXJ5U3RyaW5nfVwiYCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtb2R1bGVWaXNpdG9yKGNoZWNrRmlsZUV4dGVuc2lvbiwgeyBjb21tb25qczogdHJ1ZSB9KTtcbiAgfSxcbn07XG4iXX0=