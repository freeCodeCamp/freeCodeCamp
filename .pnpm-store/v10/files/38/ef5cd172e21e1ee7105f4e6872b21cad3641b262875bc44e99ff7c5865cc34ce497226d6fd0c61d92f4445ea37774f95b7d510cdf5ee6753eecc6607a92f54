'use strict';var _docsUrl = require('../docsUrl');var _docsUrl2 = _interopRequireDefault(_docsUrl);
var _object = require('object.values');var _object2 = _interopRequireDefault(_object);
var _arrayPrototype = require('array.prototype.flat');var _arrayPrototype2 = _interopRequireDefault(_arrayPrototype);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}

var meta = {
  type: 'suggestion',
  docs: {
    category: 'Style guide',
    description: 'Prefer named exports to be grouped together in a single export declaration',
    url: (0, _docsUrl2['default'])('group-exports') } };


/* eslint-disable max-len */
var errors = {
  ExportNamedDeclaration: 'Multiple named export declarations; consolidate all named exports into a single export declaration',
  AssignmentExpression: 'Multiple CommonJS exports; consolidate all exports into a single assignment to `module.exports`' };

/* eslint-enable max-len */

/**
                             * Returns an array with names of the properties in the accessor chain for MemberExpression nodes
                             *
                             * Example:
                             *
                             * `module.exports = {}` => ['module', 'exports']
                             * `module.exports.property = true` => ['module', 'exports', 'property']
                             *
                             * @param     {Node}    node    AST Node (MemberExpression)
                             * @return    {Array}           Array with the property names in the chain
                             * @private
                             */
function accessorChain(node) {
  var chain = [];

  do {
    chain.unshift(node.property.name);

    if (node.object.type === 'Identifier') {
      chain.unshift(node.object.name);
      break;
    }

    node = node.object;
  } while (node.type === 'MemberExpression');

  return chain;
}

function create(context) {
  var nodes = {
    modules: {
      set: new Set(),
      sources: {} },

    types: {
      set: new Set(),
      sources: {} },

    commonjs: {
      set: new Set() } };



  return {
    ExportNamedDeclaration: function () {function ExportNamedDeclaration(node) {
        var target = node.exportKind === 'type' ? nodes.types : nodes.modules;
        if (!node.source) {
          target.set.add(node);
        } else if (Array.isArray(target.sources[node.source.value])) {
          target.sources[node.source.value].push(node);
        } else {
          target.sources[node.source.value] = [node];
        }
      }return ExportNamedDeclaration;}(),

    AssignmentExpression: function () {function AssignmentExpression(node) {
        if (node.left.type !== 'MemberExpression') {
          return;
        }

        var chain = accessorChain(node.left);

        // Assignments to module.exports
        // Deeper assignments are ignored since they just modify what's already being exported
        // (ie. module.exports.exported.prop = true is ignored)
        if (chain[0] === 'module' && chain[1] === 'exports' && chain.length <= 3) {
          nodes.commonjs.set.add(node);
          return;
        }

        // Assignments to exports (exports.* = *)
        if (chain[0] === 'exports' && chain.length === 2) {
          nodes.commonjs.set.add(node);
          return;
        }
      }return AssignmentExpression;}(),

    'Program:exit': function () {function onExit() {
        // Report multiple `export` declarations (ES2015 modules)
        if (nodes.modules.set.size > 1) {
          nodes.modules.set.forEach(function (node) {
            context.report({
              node: node,
              message: errors[node.type] });

          });
        }

        // Report multiple `aggregated exports` from the same module (ES2015 modules)
        (0, _arrayPrototype2['default'])((0, _object2['default'])(nodes.modules.sources).
        filter(function (nodesWithSource) {return Array.isArray(nodesWithSource) && nodesWithSource.length > 1;})).
        forEach(function (node) {
          context.report({
            node: node,
            message: errors[node.type] });

        });

        // Report multiple `export type` declarations (FLOW ES2015 modules)
        if (nodes.types.set.size > 1) {
          nodes.types.set.forEach(function (node) {
            context.report({
              node: node,
              message: errors[node.type] });

          });
        }

        // Report multiple `aggregated type exports` from the same module (FLOW ES2015 modules)
        (0, _arrayPrototype2['default'])((0, _object2['default'])(nodes.types.sources).
        filter(function (nodesWithSource) {return Array.isArray(nodesWithSource) && nodesWithSource.length > 1;})).
        forEach(function (node) {
          context.report({
            node: node,
            message: errors[node.type] });

        });

        // Report multiple `module.exports` assignments (CommonJS)
        if (nodes.commonjs.set.size > 1) {
          nodes.commonjs.set.forEach(function (node) {
            context.report({
              node: node,
              message: errors[node.type] });

          });
        }
      }return onExit;}() };

}

module.exports = {
  meta: meta,
  create: create };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlcy9ncm91cC1leHBvcnRzLmpzIl0sIm5hbWVzIjpbIm1ldGEiLCJ0eXBlIiwiZG9jcyIsImNhdGVnb3J5IiwiZGVzY3JpcHRpb24iLCJ1cmwiLCJlcnJvcnMiLCJFeHBvcnROYW1lZERlY2xhcmF0aW9uIiwiQXNzaWdubWVudEV4cHJlc3Npb24iLCJhY2Nlc3NvckNoYWluIiwibm9kZSIsImNoYWluIiwidW5zaGlmdCIsInByb3BlcnR5IiwibmFtZSIsIm9iamVjdCIsImNyZWF0ZSIsImNvbnRleHQiLCJub2RlcyIsIm1vZHVsZXMiLCJzZXQiLCJTZXQiLCJzb3VyY2VzIiwidHlwZXMiLCJjb21tb25qcyIsInRhcmdldCIsImV4cG9ydEtpbmQiLCJzb3VyY2UiLCJhZGQiLCJBcnJheSIsImlzQXJyYXkiLCJ2YWx1ZSIsInB1c2giLCJsZWZ0IiwibGVuZ3RoIiwib25FeGl0Iiwic2l6ZSIsImZvckVhY2giLCJyZXBvcnQiLCJtZXNzYWdlIiwiZmlsdGVyIiwibm9kZXNXaXRoU291cmNlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6ImFBQUEscUM7QUFDQSx1QztBQUNBLHNEOztBQUVBLElBQU1BLE9BQU87QUFDWEMsUUFBTSxZQURLO0FBRVhDLFFBQU07QUFDSkMsY0FBVSxhQUROO0FBRUpDLGlCQUFhLDRFQUZUO0FBR0pDLFNBQUssMEJBQVEsZUFBUixDQUhELEVBRkssRUFBYjs7O0FBUUE7QUFDQSxJQUFNQyxTQUFTO0FBQ2JDLDBCQUF3QixvR0FEWDtBQUViQyx3QkFBc0IsaUdBRlQsRUFBZjs7QUFJQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FBWUEsU0FBU0MsYUFBVCxDQUF1QkMsSUFBdkIsRUFBNkI7QUFDM0IsTUFBTUMsUUFBUSxFQUFkOztBQUVBLEtBQUc7QUFDREEsVUFBTUMsT0FBTixDQUFjRixLQUFLRyxRQUFMLENBQWNDLElBQTVCOztBQUVBLFFBQUlKLEtBQUtLLE1BQUwsQ0FBWWQsSUFBWixLQUFxQixZQUF6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akIiLCJmaWxlIjoiZ3JvdXAtZXhwb3J0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkb2NzVXJsIGZyb20gJy4uL2RvY3NVcmwnO1xuaW1wb3J0IHZhbHVlcyBmcm9tICdvYmplY3QudmFsdWVzJztcbmltcG9ydCBmbGF0IGZyb20gJ2FycmF5LnByb3RvdHlwZS5mbGF0JztcblxuY29uc3QgbWV0YSA9IHtcbiAgdHlwZTogJ3N1Z2dlc3Rpb24nLFxuICBkb2NzOiB7XG4gICAgY2F0ZWdvcnk6ICdTdHlsZSBndWlkZScsXG4gICAgZGVzY3JpcHRpb246ICdQcmVmZXIgbmFtZWQgZXhwb3J0cyB0byBiZSBncm91cGVkIHRvZ2V0aGVyIGluIGEgc2luZ2xlIGV4cG9ydCBkZWNsYXJhdGlvbicsXG4gICAgdXJsOiBkb2NzVXJsKCdncm91cC1leHBvcnRzJyksXG4gIH0sXG59O1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuY29uc3QgZXJyb3JzID0ge1xuICBFeHBvcnROYW1lZERlY2xhcmF0aW9uOiAnTXVsdGlwbGUgbmFtZWQgZXhwb3J0IGRlY2xhcmF0aW9uczsgY29uc29saWRhdGUgYWxsIG5hbWVkIGV4cG9ydHMgaW50byBhIHNpbmdsZSBleHBvcnQgZGVjbGFyYXRpb24nLFxuICBBc3NpZ25tZW50RXhwcmVzc2lvbjogJ011bHRpcGxlIENvbW1vbkpTIGV4cG9ydHM7IGNvbnNvbGlkYXRlIGFsbCBleHBvcnRzIGludG8gYSBzaW5nbGUgYXNzaWdubWVudCB0byBgbW9kdWxlLmV4cG9ydHNgJyxcbn07XG4vKiBlc2xpbnQtZW5hYmxlIG1heC1sZW4gKi9cblxuLyoqXG4gKiBSZXR1cm5zIGFuIGFycmF5IHdpdGggbmFtZXMgb2YgdGhlIHByb3BlcnRpZXMgaW4gdGhlIGFjY2Vzc29yIGNoYWluIGZvciBNZW1iZXJFeHByZXNzaW9uIG5vZGVzXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiBgbW9kdWxlLmV4cG9ydHMgPSB7fWAgPT4gWydtb2R1bGUnLCAnZXhwb3J0cyddXG4gKiBgbW9kdWxlLmV4cG9ydHMucHJvcGVydHkgPSB0cnVlYCA9PiBbJ21vZHVsZScsICdleHBvcnRzJywgJ3Byb3BlcnR5J11cbiAqXG4gKiBAcGFyYW0gICAgIHtOb2RlfSAgICBub2RlICAgIEFTVCBOb2RlIChNZW1iZXJFeHByZXNzaW9uKVxuICogQHJldHVybiAgICB7QXJyYXl9ICAgICAgICAgICBBcnJheSB3aXRoIHRoZSBwcm9wZXJ0eSBuYW1lcyBpbiB0aGUgY2hhaW5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFjY2Vzc29yQ2hhaW4obm9kZSkge1xuICBjb25zdCBjaGFpbiA9IFtdO1xuXG4gIGRvIHtcbiAgICBjaGFpbi51bnNoaWZ0KG5vZGUucHJvcGVydHkubmFtZSk7XG5cbiAgICBpZiAobm9kZS5vYmplY3QudHlwZSA9PT0gJ0lkZW50aWZpZXInKSB7XG4gICAgICBjaGFpbi51bnNoaWZ0KG5vZGUub2JqZWN0Lm5hbWUpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgbm9kZSA9IG5vZGUub2JqZWN0O1xuICB9IHdoaWxlIChub2RlLnR5cGUgPT09ICdNZW1iZXJFeHByZXNzaW9uJyk7XG5cbiAgcmV0dXJuIGNoYWluO1xufVxuXG5mdW5jdGlvbiBjcmVhdGUoY29udGV4dCkge1xuICBjb25zdCBub2RlcyA9IHtcbiAgICBtb2R1bGVzOiB7XG4gICAgICBzZXQ6IG5ldyBTZXQoKSxcbiAgICAgIHNvdXJjZXM6IHt9LFxuICAgIH0sXG4gICAgdHlwZXM6IHtcbiAgICAgIHNldDogbmV3IFNldCgpLFxuICAgICAgc291cmNlczoge30sXG4gICAgfSxcbiAgICBjb21tb25qczoge1xuICAgICAgc2V0OiBuZXcgU2V0KCksXG4gICAgfSxcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIEV4cG9ydE5hbWVkRGVjbGFyYXRpb24obm9kZSkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gbm9kZS5leHBvcnRLaW5kID09PSAndHlwZScgPyBub2Rlcy50eXBlcyA6IG5vZGVzLm1vZHVsZXM7XG4gICAgICBpZiAoIW5vZGUuc291cmNlKSB7XG4gICAgICAgIHRhcmdldC5zZXQuYWRkKG5vZGUpO1xuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHRhcmdldC5zb3VyY2VzW25vZGUuc291cmNlLnZhbHVlXSkpIHtcbiAgICAgICAgdGFyZ2V0LnNvdXJjZXNbbm9kZS5zb3VyY2UudmFsdWVdLnB1c2gobm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YXJnZXQuc291cmNlc1tub2RlLnNvdXJjZS52YWx1ZV0gPSBbbm9kZV07XG4gICAgICB9XG4gICAgfSxcblxuICAgIEFzc2lnbm1lbnRFeHByZXNzaW9uKG5vZGUpIHtcbiAgICAgIGlmIChub2RlLmxlZnQudHlwZSAhPT0gJ01lbWJlckV4cHJlc3Npb24nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2hhaW4gPSBhY2Nlc3NvckNoYWluKG5vZGUubGVmdCk7XG5cbiAgICAgIC8vIEFzc2lnbm1lbnRzIHRvIG1vZHVsZS5leHBvcnRzXG4gICAgICAvLyBEZWVwZXIgYXNzaWdubWVudHMgYXJlIGlnbm9yZWQgc2luY2UgdGhleSBqdXN0IG1vZGlmeSB3aGF0J3MgYWxyZWFkeSBiZWluZyBleHBvcnRlZFxuICAgICAgLy8gKGllLiBtb2R1bGUuZXhwb3J0cy5leHBvcnRlZC5wcm9wID0gdHJ1ZSBpcyBpZ25vcmVkKVxuICAgICAgaWYgKGNoYWluWzBdID09PSAnbW9kdWxlJyAmJiBjaGFpblsxXSA9PT0gJ2V4cG9ydHMnICYmIGNoYWluLmxlbmd0aCA8PSAzKSB7XG4gICAgICAgIG5vZGVzLmNvbW1vbmpzLnNldC5hZGQobm9kZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gQXNzaWdubWVudHMgdG8gZXhwb3J0cyAoZXhwb3J0cy4qID0gKilcbiAgICAgIGlmIChjaGFpblswXSA9PT0gJ2V4cG9ydHMnICYmIGNoYWluLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBub2Rlcy5jb21tb25qcy5zZXQuYWRkKG5vZGUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSxcblxuICAgICdQcm9ncmFtOmV4aXQnOiBmdW5jdGlvbiBvbkV4aXQoKSB7XG4gICAgICAvLyBSZXBvcnQgbXVsdGlwbGUgYGV4cG9ydGAgZGVjbGFyYXRpb25zIChFUzIwMTUgbW9kdWxlcylcbiAgICAgIGlmIChub2Rlcy5tb2R1bGVzLnNldC5zaXplID4gMSkge1xuICAgICAgICBub2Rlcy5tb2R1bGVzLnNldC5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgY29udGV4dC5yZXBvcnQoe1xuICAgICAgICAgICAgbm9kZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yc1tub2RlLnR5cGVdLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gUmVwb3J0IG11bHRpcGxlIGBhZ2dyZWdhdGVkIGV4cG9ydHNgIGZyb20gdGhlIHNhbWUgbW9kdWxlIChFUzIwMTUgbW9kdWxlcylcbiAgICAgIGZsYXQodmFsdWVzKG5vZGVzLm1vZHVsZXMuc291cmNlcylcbiAgICAgICAgLmZpbHRlcigobm9kZXNXaXRoU291cmNlKSA9PiBBcnJheS5pc0FycmF5KG5vZGVzV2l0aFNvdXJjZSkgJiYgbm9kZXNXaXRoU291cmNlLmxlbmd0aCA+IDEpKVxuICAgICAgICAuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnRleHQucmVwb3J0KHtcbiAgICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvcnNbbm9kZS50eXBlXSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgIC8vIFJlcG9ydCBtdWx0aXBsZSBgZXhwb3J0IHR5cGVgIGRlY2xhcmF0aW9ucyAoRkxPVyBFUzIwMTUgbW9kdWxlcylcbiAgICAgIGlmIChub2Rlcy50eXBlcy5zZXQuc2l6ZSA+IDEpIHtcbiAgICAgICAgbm9kZXMudHlwZXMuc2V0LmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgICBjb250ZXh0LnJlcG9ydCh7XG4gICAgICAgICAgICBub2RlLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JzW25vZGUudHlwZV0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBSZXBvcnQgbXVsdGlwbGUgYGFnZ3JlZ2F0ZWQgdHlwZSBleHBvcnRzYCBmcm9tIHRoZSBzYW1lIG1vZHVsZSAoRkxPVyBFUzIwMTUgbW9kdWxlcylcbiAgICAgIGZsYXQodmFsdWVzKG5vZGVzLnR5cGVzLnNvdXJjZXMpXG4gICAgICAgIC5maWx0ZXIoKG5vZGVzV2l0aFNvdXJjZSkgPT4gQXJyYXkuaXNBcnJheShub2Rlc1dpdGhTb3VyY2UpICYmIG5vZGVzV2l0aFNvdXJjZS5sZW5ndGggPiAxKSlcbiAgICAgICAgLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgICBjb250ZXh0LnJlcG9ydCh7XG4gICAgICAgICAgICBub2RlLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JzW25vZGUudHlwZV0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAvLyBSZXBvcnQgbXVsdGlwbGUgYG1vZHVsZS5leHBvcnRzYCBhc3NpZ25tZW50cyAoQ29tbW9uSlMpXG4gICAgICBpZiAobm9kZXMuY29tbW9uanMuc2V0LnNpemUgPiAxKSB7XG4gICAgICAgIG5vZGVzLmNvbW1vbmpzLnNldC5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgY29udGV4dC5yZXBvcnQoe1xuICAgICAgICAgICAgbm9kZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yc1tub2RlLnR5cGVdLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbWV0YSxcbiAgY3JlYXRlLFxufTtcbiJdfQ==