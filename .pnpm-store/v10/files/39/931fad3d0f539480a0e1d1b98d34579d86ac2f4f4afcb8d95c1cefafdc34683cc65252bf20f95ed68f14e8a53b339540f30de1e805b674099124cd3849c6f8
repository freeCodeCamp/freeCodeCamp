'use strict';var _slicedToArray = function () {function sliceIterator(arr, i) {var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"]) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}return function (arr, i) {if (Array.isArray(arr)) {return arr;} else if (Symbol.iterator in Object(arr)) {return sliceIterator(arr, i);} else {throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();var _path = require('path');var path = _interopRequireWildcard(_path);
var _contextCompat = require('eslint-module-utils/contextCompat');

var _builder = require('../exportMap/builder');var _builder2 = _interopRequireDefault(_builder);
var _docsUrl = require('../docsUrl');var _docsUrl2 = _interopRequireDefault(_docsUrl);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj['default'] = obj;return newObj;}}

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      category: 'Static analysis',
      description: 'Ensure named imports correspond to a named export in the remote file.',
      url: (0, _docsUrl2['default'])('named') },

    schema: [
    {
      type: 'object',
      properties: {
        commonjs: {
          type: 'boolean' } },


      additionalProperties: false }] },




  create: function () {function create(context) {
      var options = context.options[0] || {};

      function checkSpecifiers(key, type, node) {
        // ignore local exports and type imports/exports
        if (
        node.source == null ||
        node.importKind === 'type' ||
        node.importKind === 'typeof' ||
        node.exportKind === 'type')
        {
          return;
        }

        if (!node.specifiers.some(function (im) {return im.type === type;})) {
          return; // no named imports/exports
        }

        var imports = _builder2['default'].get(node.source.value, context);
        if (imports == null || imports.parseGoal === 'ambiguous') {
          return;
        }

        if (imports.errors.length) {
          imports.reportErrors(context, node);
          return;
        }

        node.specifiers.forEach(function (im) {
          if (
          im.type !== type
          // ignore type imports
          || im.importKind === 'type' || im.importKind === 'typeof')
          {
            return;
          }

          var name = im[key].name || im[key].value;

          var deepLookup = imports.hasDeep(name);

          if (!deepLookup.found) {
            if (deepLookup.path.length > 1) {
              var deepPath = deepLookup.path.
              map(function (i) {return path.relative(path.dirname((0, _contextCompat.getPhysicalFilename)(context)), i.path);}).
              join(' -> ');

              context.report(im[key], String(name) + ' not found via ' + String(deepPath));
            } else {
              context.report(im[key], String(name) + ' not found in \'' + String(node.source.value) + '\'');
            }
          }
        });
      }

      function checkRequire(node) {
        if (
        !options.commonjs ||
        node.type !== 'VariableDeclarator'
        // return if it's not an object destructure or it's an empty object destructure
        || !node.id || node.id.type !== 'ObjectPattern' || node.id.properties.length === 0
        // return if there is no call expression on the right side
        || !node.init || node.init.type !== 'CallExpression')
        {
          return;
        }

        var call = node.init;var _call$arguments = _slicedToArray(
        call.arguments, 1),source = _call$arguments[0];
        var variableImports = node.id.properties;
        var variableExports = _builder2['default'].get(source.value, context);

        if (
        // return if it's not a commonjs require statement
        call.callee.type !== 'Identifier' || call.callee.name !== 'require' || call.arguments.length !== 1
        // return if it's not a string source
        || source.type !== 'Literal' ||
        variableExports == null ||
        variableExports.parseGoal === 'ambiguous')
        {
          return;
        }

        if (variableExports.errors.length) {
          variableExports.reportErrors(context, node);
          return;
        }

        variableImports.forEach(function (im) {
          if (im.type !== 'Property' || !im.key || im.key.type !== 'Identifier') {
            return;
          }

          var deepLookup = variableExports.hasDeep(im.key.name);

          if (!deepLookup.found) {
            if (deepLookup.path.length > 1) {
              var deepPath = deepLookup.path.
              map(function (i) {return path.relative(path.dirname((0, _contextCompat.getFilename)(context)), i.path);}).
              join(' -> ');

              context.report(im.key, String(im.key.name) + ' not found via ' + String(deepPath));
            } else {
              context.report(im.key, String(im.key.name) + ' not found in \'' + String(source.value) + '\'');
            }
          }
        });
      }

      return {
        ImportDeclaration: checkSpecifiers.bind(null, 'imported', 'ImportSpecifier'),

        ExportNamedDeclaration: checkSpecifiers.bind(null, 'local', 'ExportSpecifier'),

        VariableDeclarator: checkRequire };

    }return create;}() };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlcy9uYW1lZC5qcyJdLCJuYW1lcyI6WyJwYXRoIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1ldGEiLCJ0eXBlIiwiZG9jcyIsImNhdGVnb3J5IiwiZGVzY3JpcHRpb24iLCJ1cmwiLCJzY2hlbWEiLCJwcm9wZXJ0aWVzIiwiY29tbW9uanMiLCJhZGRpdGlvbmFsUHJvcGVydGllcyIsImNyZWF0ZSIsImNvbnRleHQiLCJvcHRpb25zIiwiY2hlY2tTcGVjaWZpZXJzIiwia2V5Iiwibm9kZSIsInNvdXJjZSIsImltcG9ydEtpbmQiLCJleHBvcnRLaW5kIiwic3BlY2lmaWVycyIsInNvbWUiLCJpbSIsImltcG9ydHMiLCJFeHBvcnRNYXBCdWlsZGVyIiwiZ2V0IiwidmFsdWUiLCJwYXJzZUdvYWwiLCJlcnJvcnMiLCJsZW5ndGgiLCJyZXBvcnRFcnJvcnMiLCJmb3JFYWNoIiwibmFtZSIsImRlZXBMb29rdXAiLCJoYXNEZWVwIiwiZm91bmQiLCJkZWVwUGF0aCIsIm1hcCIsImkiLCJyZWxhdGl2ZSIsImRpcm5hbWUiLCJqb2luIiwicmVwb3J0IiwiY2hlY2tSZXF1aXJlIiwiaWQiLCJpbml0IiwiY2FsbCIsImFyZ3VtZW50cyIsInZhcmlhYmxlSW1wb3J0cyIsInZhcmlhYmxlRXhwb3J0cyIsImNhbGxlZSIsIkltcG9ydERlY2xhcmF0aW9uIiwiYmluZCIsIkV4cG9ydE5hbWVkRGVjbGFyYXRpb24iLCJWYXJpYWJsZURlY2xhcmF0b3IiXSwibWFwcGluZ3MiOiJxb0JBQUEsNEIsSUFBWUEsSTtBQUNaOztBQUVBLCtDO0FBQ0EscUM7O0FBRUFDLE9BQU9DLE9BQVAsR0FBaUI7QUFDZkMsUUFBTTtBQUNKQyxVQUFNLFNBREY7QUFFSkMsVUFBTTtBQUNKQyxnQkFBVSxpQkFETjtBQUVKQyxtQkFBYSx1RUFGVDtBQUdKQyxXQUFLLDBCQUFRLE9BQVIsQ0FIRCxFQUZGOztBQU9KQyxZQUFRO0FBQ047QUFDRUwsWUFBTSxRQURSO0FBRUVNLGtCQUFZ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QVdILFdBQVduQyxJQUFYO0FBQ2R1QyxpQkFEYyxDQUNWLFVBQUNDLENBQUQsVUFBT3hDLEtBQUt5QyxRQUFMLENBQWN6QyxLQUFLMEMsT0FBTCxDQUFhLGdDQUFZNUIsT0FBWixDQUFiLENBQWQsRUFBa0QwQixFQUFFeEMsSUFBcEQsQ0FBUCxFQURVO0FBRWQyQyxrQkFGYyxDQUVULE1BRlMsQ0FBakI7O0FBSUE3QixzQkFBUThCLE1BQVIsQ0FBZXBCLEdBQUdQLEdBQWxCLFNBQTBCTyxHQUFHUCxHQUFILENBQU9pQixJQUFqQywrQkFBdURJLFFBQXZEO0FBQ0QsYUFORCxNQU1PO0FBQ0x4QixzQkFBUThCLE1BQVIsQ0FBZXBCLEdBQUdQLEdBQWxCLFNBQTBCTyxHQUFHUCxHQUFILENBQU9pQixJQUFqQyxnQ0FBdURmLE9BQU9TLEtBQTlEO0FBQ0Q7QUFDRjtBQUNGLFNBbEJEO0FBbUJEOztBQUVELGFBQU87QUFDTHlCLDJCQUFtQnJDLGdCQUFnQnNDLElBQWhCLENBQXFCLElBQXJCLEVBQTJCLFVBQTNCLEVBQXVDLGlCQUF2QyxDQURkOztBQUdMQyxnQ0FBd0J2QyxnQkFBZ0JzQyxJQUFoQixDQUFxQixJQUFyQixFQUEyQixPQUEzQixFQUFvQyxpQkFBcEMsQ0FIbkI7O0FBS0xFLDRCQUFvQlgsWUFMZixFQUFQOztBQU9ELEtBekljLG1CQUFqQiIsImZpbGUiOiJuYW1lZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBnZXRGaWxlbmFtZSwgZ2V0UGh5c2ljYWxGaWxlbmFtZSB9IGZyb20gJ2VzbGludC1tb2R1bGUtdXRpbHMvY29udGV4dENvbXBhdCc7XG5cbmltcG9ydCBFeHBvcnRNYXBCdWlsZGVyIGZyb20gJy4uL2V4cG9ydE1hcC9idWlsZGVyJztcbmltcG9ydCBkb2NzVXJsIGZyb20gJy4uL2RvY3NVcmwnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbWV0YToge1xuICAgIHR5cGU6ICdwcm9ibGVtJyxcbiAgICBkb2NzOiB7XG4gICAgICBjYXRlZ29yeTogJ1N0YXRpYyBhbmFseXNpcycsXG4gICAgICBkZXNjcmlwdGlvbjogJ0Vuc3VyZSBuYW1lZCBpbXBvcnRzIGNvcnJlc3BvbmQgdG8gYSBuYW1lZCBleHBvcnQgaW4gdGhlIHJlbW90ZSBmaWxlLicsXG4gICAgICB1cmw6IGRvY3NVcmwoJ25hbWVkJyksXG4gICAgfSxcbiAgICBzY2hlbWE6IFtcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICBjb21tb25qczoge1xuICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcblxuICBjcmVhdGUoY29udGV4dCkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBjb250ZXh0Lm9wdGlvbnNbMF0gfHwge307XG5cbiAgICBmdW5jdGlvbiBjaGVja1NwZWNpZmllcnMoa2V5LCB0eXBlLCBub2RlKSB7XG4gICAgICAvLyBpZ25vcmUgbG9jYWwgZXhwb3J0cyBhbmQgdHlwZSBpbXBvcnRzL2V4cG9ydHNcbiAgICAgIGlmIChcbiAgICAgICAgbm9kZS5zb3VyY2UgPT0gbnVsbFxuICAgICAgICB8fCBub2RlLmltcG9ydEtpbmQgPT09ICd0eXBlJ1xuICAgICAgICB8fCBub2RlLmltcG9ydEtpbmQgPT09ICd0eXBlb2YnXG4gICAgICAgIHx8IG5vZGUuZXhwb3J0S2luZCA9PT0gJ3R5cGUnXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW5vZGUuc3BlY2lmaWVycy5zb21lKChpbSkgPT4gaW0udHlwZSA9PT0gdHlwZSkpIHtcbiAgICAgICAgcmV0dXJuOyAvLyBubyBuYW1lZCBpbXBvcnRzL2V4cG9ydHNcbiAgICAgIH1cblxuICAgICAgY29uc3QgaW1wb3J0cyA9IEV4cG9ydE1hcEJ1aWxkZXIuZ2V0KG5vZGUuc291cmNlLnZhbHVlLCBjb250ZXh0KTtcbiAgICAgIGlmIChpbXBvcnRzID09IG51bGwgfHwgaW1wb3J0cy5wYXJzZUdvYWwgPT09ICdhbWJpZ3VvdXMnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGltcG9ydHMuZXJyb3JzLmxlbmd0aCkge1xuICAgICAgICBpbXBvcnRzLnJlcG9ydEVycm9ycyhjb250ZXh0LCBub2RlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBub2RlLnNwZWNpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAoaW0pIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGltLnR5cGUgIT09IHR5cGVcbiAgICAgICAgICAvLyBpZ25vcmUgdHlwZSBpbXBvcnRzXG4gICAgICAgICAgfHwgaW0uaW1wb3J0S2luZCA9PT0gJ3R5cGUnIHx8IGltLmltcG9ydEtpbmQgPT09ICd0eXBlb2YnXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5hbWUgPSBpbVtrZXldLm5hbWUgfHwgaW1ba2V5XS52YWx1ZTtcblxuICAgICAgICBjb25zdCBkZWVwTG9va3VwID0gaW1wb3J0cy5oYXNEZWVwKG5hbWUpO1xuXG4gICAgICAgIGlmICghZGVlcExvb2t1cC5mb3VuZCkge1xuICAgICAgICAgIGlmIChkZWVwTG9va3VwLnBhdGgubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgY29uc3QgZGVlcFBhdGggPSBkZWVwTG9va3VwLnBhdGhcbiAgICAgICAgICAgICAgLm1hcCgoaSkgPT4gcGF0aC5yZWxhdGl2ZShwYXRoLmRpcm5hbWUoZ2V0UGh5c2ljYWxGaWxlbmFtZShjb250ZXh0KSksIGkucGF0aCkpXG4gICAgICAgICAgICAgIC5qb2luKCcgLT4gJyk7XG5cbiAgICAgICAgICAgIGNvbnRleHQucmVwb3J0KGltW2tleV0sIGAke25hbWV9IG5vdCBmb3VuZCB2aWEgJHtkZWVwUGF0aH1gKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udGV4dC5yZXBvcnQoaW1ba2V5XSwgYCR7bmFtZX0gbm90IGZvdW5kIGluICcke25vZGUuc291cmNlLnZhbHVlfSdgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrUmVxdWlyZShub2RlKSB7XG4gICAgICBpZiAoXG4gICAgICAgICFvcHRpb25zLmNvbW1vbmpzXG4gICAgICAgIHx8IG5vZGUudHlwZSAhPT0gJ1ZhcmlhYmxlRGVjbGFyYXRvcidcbiAgICAgICAgLy8gcmV0dXJuIGlmIGl0J3Mgbm90IGFuIG9iamVjdCBkZXN0cnVjdHVyZSBvciBpdCdzIGFuIGVtcHR5IG9iamVjdCBkZXN0cnVjdHVyZVxuICAgICAgICB8fCAhbm9kZS5pZCB8fCBub2RlLmlkLnR5cGUgIT09ICdPYmplY3RQYXR0ZXJuJyB8fCBub2RlLmlkLnByb3BlcnRpZXMubGVuZ3RoID09PSAwXG4gICAgICAgIC8vIHJldHVybiBpZiB0aGVyZSBpcyBubyBjYWxsIGV4cHJlc3Npb24gb24gdGhlIHJpZ2h0IHNpZGVcbiAgICAgICAgfHwgIW5vZGUuaW5pdCB8fCBub2RlLmluaXQudHlwZSAhPT0gJ0NhbGxFeHByZXNzaW9uJ1xuICAgICAgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2FsbCA9IG5vZGUuaW5pdDtcbiAgICAgIGNvbnN0IFtzb3VyY2VdID0gY2FsbC5hcmd1bWVudHM7XG4gICAgICBjb25zdCB2YXJpYWJsZUltcG9ydHMgPSBub2RlLmlkLnByb3BlcnRpZXM7XG4gICAgICBjb25zdCB2YXJpYWJsZUV4cG9ydHMgPSBFeHBvcnRNYXBCdWlsZGVyLmdldChzb3VyY2UudmFsdWUsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoXG4gICAgICAgIC8vIHJldHVybiBpZiBpdCdzIG5vdCBhIGNvbW1vbmpzIHJlcXVpcmUgc3RhdGVtZW50XG4gICAgICAgIGNhbGwuY2FsbGVlLnR5cGUgIT09ICdJZGVudGlmaWVyJyB8fCBjYWxsLmNhbGxlZS5uYW1lICE9PSAncmVxdWlyZScgfHwgY2FsbC5hcmd1bWVudHMubGVuZ3RoICE9PSAxXG4gICAgICAgIC8vIHJldHVybiBpZiBpdCdzIG5vdCBhIHN0cmluZyBzb3VyY2VcbiAgICAgICAgfHwgc291cmNlLnR5cGUgIT09ICdMaXRlcmFsJ1xuICAgICAgICB8fCB2YXJpYWJsZUV4cG9ydHMgPT0gbnVsbFxuICAgICAgICB8fCB2YXJpYWJsZUV4cG9ydHMucGFyc2VHb2FsID09PSAnYW1iaWd1b3VzJ1xuICAgICAgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHZhcmlhYmxlRXhwb3J0cy5lcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgIHZhcmlhYmxlRXhwb3J0cy5yZXBvcnRFcnJvcnMoY29udGV4dCwgbm9kZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyaWFibGVJbXBvcnRzLmZvckVhY2goZnVuY3Rpb24gKGltKSB7XG4gICAgICAgIGlmIChpbS50eXBlICE9PSAnUHJvcGVydHknIHx8ICFpbS5rZXkgfHwgaW0ua2V5LnR5cGUgIT09ICdJZGVudGlmaWVyJykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRlZXBMb29rdXAgPSB2YXJpYWJsZUV4cG9ydHMuaGFzRGVlcChpbS5rZXkubmFtZSk7XG5cbiAgICAgICAgaWYgKCFkZWVwTG9va3VwLmZvdW5kKSB7XG4gICAgICAgICAgaWYgKGRlZXBMb29rdXAucGF0aC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBjb25zdCBkZWVwUGF0aCA9IGRlZXBMb29rdXAucGF0aFxuICAgICAgICAgICAgICAubWFwKChpKSA9PiBwYXRoLnJlbGF0aXZlKHBhdGguZGlybmFtZShnZXRGaWxlbmFtZShjb250ZXh0KSksIGkucGF0aCkpXG4gICAgICAgICAgICAgIC5qb2luKCcgLT4gJyk7XG5cbiAgICAgICAgICAgIGNvbnRleHQucmVwb3J0KGltLmtleSwgYCR7aW0ua2V5Lm5hbWV9IG5vdCBmb3VuZCB2aWEgJHtkZWVwUGF0aH1gKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udGV4dC5yZXBvcnQoaW0ua2V5LCBgJHtpbS5rZXkubmFtZX0gbm90IGZvdW5kIGluICcke3NvdXJjZS52YWx1ZX0nYCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgSW1wb3J0RGVjbGFyYXRpb246IGNoZWNrU3BlY2lmaWVycy5iaW5kKG51bGwsICdpbXBvcnRlZCcsICdJbXBvcnRTcGVjaWZpZXInKSxcblxuICAgICAgRXhwb3J0TmFtZWREZWNsYXJhdGlvbjogY2hlY2tTcGVjaWZpZXJzLmJpbmQobnVsbCwgJ2xvY2FsJywgJ0V4cG9ydFNwZWNpZmllcicpLFxuXG4gICAgICBWYXJpYWJsZURlY2xhcmF0b3I6IGNoZWNrUmVxdWlyZSxcbiAgICB9O1xuICB9LFxufTtcbiJdfQ==