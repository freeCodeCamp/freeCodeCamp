'use strict';var _moduleVisitor = require('eslint-module-utils/moduleVisitor');var _moduleVisitor2 = _interopRequireDefault(_moduleVisitor);
var _docsUrl = require('../docsUrl');var _docsUrl2 = _interopRequireDefault(_docsUrl);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}

var DEFAULT_MAX = 10;
var DEFAULT_IGNORE_TYPE_IMPORTS = false;
var TYPE_IMPORT = 'type';

var countDependencies = function countDependencies(dependencies, lastNode, context) {var _ref =
  context.options[0] || { max: DEFAULT_MAX },max = _ref.max;

  if (dependencies.size > max) {
    context.report(lastNode, 'Maximum number of dependencies (' + String(max) + ') exceeded.');
  }
};

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      category: 'Style guide',
      description: 'Enforce the maximum number of dependencies a module can have.',
      url: (0, _docsUrl2['default'])('max-dependencies') },


    schema: [
    {
      type: 'object',
      properties: {
        max: { type: 'number' },
        ignoreTypeImports: { type: 'boolean' } },

      additionalProperties: false }] },




  create: function () {function create(context) {var _ref2 =


      context.options[0] || {},_ref2$ignoreTypeImpor = _ref2.ignoreTypeImports,ignoreTypeImports = _ref2$ignoreTypeImpor === undefined ? DEFAULT_IGNORE_TYPE_IMPORTS : _ref2$ignoreTypeImpor;

      var dependencies = new Set(); // keep track of dependencies
      var lastNode = void 0; // keep track of the last node to report on

      return Object.assign({
        'Program:exit': function () {function ProgramExit() {
            countDependencies(dependencies, lastNode, context);
          }return ProgramExit;}() },
      (0, _moduleVisitor2['default'])(
      function (source, _ref3) {var importKind = _ref3.importKind;
        if (importKind !== TYPE_IMPORT || !ignoreTypeImports) {
          dependencies.add(source.value);
        }
        lastNode = source;
      },
      { commonjs: true }));


    }return create;}() };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlcy9tYXgtZGVwZW5kZW5jaWVzLmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfTUFYIiwiREVGQVVMVF9JR05PUkVfVFlQRV9JTVBPUlRTIiwiVFlQRV9JTVBPUlQiLCJjb3VudERlcGVuZGVuY2llcyIsImRlcGVuZGVuY2llcyIsImxhc3ROb2RlIiwiY29udGV4dCIsIm9wdGlvbnMiLCJtYXgiLCJzaXplIiwicmVwb3J0IiwibW9kdWxlIiwiZXhwb3J0cyIsIm1ldGEiLCJ0eXBlIiwiZG9jcyIsImNhdGVnb3J5IiwiZGVzY3JpcHRpb24iLCJ1cmwiLCJzY2hlbWEiLCJwcm9wZXJ0aWVzIiwiaWdub3JlVHlwZUltcG9ydHMiLCJhZGRpdGlvbmFsUHJvcGVydGllcyIsImNyZWF0ZSIsIlNldCIsInNvdXJjZSIsImltcG9ydEtpbmQiLCJhZGQiLCJ2YWx1ZSIsImNvbW1vbmpzIl0sIm1hcHBpbmdzIjoiYUFBQSxrRTtBQUNBLHFDOztBQUVBLElBQU1BLGNBQWMsRUFBcEI7QUFDQSxJQUFNQyw4QkFBOEIsS0FBcEM7QUFDQSxJQUFNQyxjQUFjLE1BQXBCOztBQUVBLElBQU1DLG9CQUFvQixTQUFwQkEsaUJBQW9CLENBQUNDLFlBQUQsRUFBZUMsUUFBZixFQUF5QkMsT0FBekIsRUFBcUM7QUFDN0NBLFVBQVFDLE9BQVIsQ0FBZ0IsQ0FBaEIsS0FBc0IsRUFBRUMsS0FBS1IsV0FBUCxFQUR1QixDQUNyRFEsR0FEcUQsUUFDckRBLEdBRHFEOztBQUc3RCxNQUFJSixhQUFhSyxJQUFiLEdBQW9CRCxHQUF4QixFQUE2QjtBQUMzQkYsWUFBUUksTUFBUixDQUFlTCxRQUFmLDhDQUE0REcsR0FBNUQ7QUFDRDtBQUNGLENBTkQ7O0FBUUFHLE9BQU9DLE9BQVAsR0FBaUI7QUFDZkMsUUFBTTtBQUNKQyxVQUFNLFlBREY7QUFFSkMsVUFBTTtBQUNKQyxnQkFBVSxhQUROO0FBRUpDLG1CQUFhLCtEQUZUO0FBR0pDLFdBQUssMEJBQVEsa0JBQVIsQ0FIRCxFQUZGOzs7QUFRSkMsWUFBUTtBQUNOO0FBQ0VMLFlBQU0sUUFEUjtBQUVFTSxrQkFBWTtBQUNWWixhQUFLLEVBQUVNLE1BQU0sUUFBUixFQURLO0FBRVZPLDJCQUFtQixFQUFFUCxNQUFNLFNBQVIsRUFGVCxFQUZkOztBQU1FUSw0QkFBc0IsS0FOeEIsRUFETSxDQVJKLEVBRFM7Ozs7O0FBcUJmQyxRQXJCZSwrQkFxQlJqQixPQXJCUSxFQXFCQzs7O0FBR1ZBLGNBQVFDLE9BQVIsQ0FBZ0IsQ0FBaEIsS0FBc0IsRUFIWiwrQkFFWmMsaUJBRlksQ0FFWkEsaUJBRlkseUNBRVFwQiwyQkFGUjs7QUFLZCxVQUFNRyxlQUFlLElBQUlvQixHQUFKLEVBQXJCLENBTGMsQ0FLa0I7QUFDaEMsVUFBSW5CLGlCQUFKLENBTmMsQ0FNQTs7QUFFZDtBQUNFLHNCQURGLHNDQUNtQjtBQUNmRiw4QkFBa0JDLFlBQWxCLEVBQWdDQyxRQUFoQyxFQUEwQ0MsT0FBMUM7QUFDRCxXQUhIO0FBSUs7QUFDRCxnQkFBQ21CLE1BQUQsU0FBNEIsS0FBakJDLFVBQWlCLFNBQWpCQSxVQUFpQjtBQUMxQixZQUFJQSxlQUFleEIsV0FBZixJQUE4QixDQUFDbUIsaUJBQW5DLEVBQXNEO0FBQ3BEakIsdUJBQWF1QixHQUFiLENBQWlCRixPQUFPRyxLQUF4QjtBQUNEO0FBQ0R2QixtQkFBV29CLE1BQVg7QUFDRCxPQU5BO0FBT0QsUUFBRUksVUFBVSxJQUFaLEVBUEMsQ0FKTDs7O0FBY0QsS0EzQ2MsbUJBQWpCIiwiZmlsZSI6Im1heC1kZXBlbmRlbmNpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kdWxlVmlzaXRvciBmcm9tICdlc2xpbnQtbW9kdWxlLXV0aWxzL21vZHVsZVZpc2l0b3InO1xuaW1wb3J0IGRvY3NVcmwgZnJvbSAnLi4vZG9jc1VybCc7XG5cbmNvbnN0IERFRkFVTFRfTUFYID0gMTA7XG5jb25zdCBERUZBVUxUX0lHTk9SRV9UWVBFX0lNUE9SVFMgPSBmYWxzZTtcbmNvbnN0IFRZUEVfSU1QT1JUID0gJ3R5cGUnO1xuXG5jb25zdCBjb3VudERlcGVuZGVuY2llcyA9IChkZXBlbmRlbmNpZXMsIGxhc3ROb2RlLCBjb250ZXh0KSA9PiB7XG4gIGNvbnN0IHsgbWF4IH0gPSBjb250ZXh0Lm9wdGlvbnNbMF0gfHwgeyBtYXg6IERFRkFVTFRfTUFYIH07XG5cbiAgaWYgKGRlcGVuZGVuY2llcy5zaXplID4gbWF4KSB7XG4gICAgY29udGV4dC5yZXBvcnQobGFzdE5vZGUsIGBNYXhpbXVtIG51bWJlciBvZiBkZXBlbmRlbmNpZXMgKCR7bWF4fSkgZXhjZWVkZWQuYCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBtZXRhOiB7XG4gICAgdHlwZTogJ3N1Z2dlc3Rpb24nLFxuICAgIGRvY3M6IHtcbiAgICAgIGNhdGVnb3J5OiAnU3R5bGUgZ3VpZGUnLFxuICAgICAgZGVzY3JpcHRpb246ICdFbmZvcmNlIHRoZSBtYXhpbXVtIG51bWJlciBvZiBkZXBlbmRlbmNpZXMgYSBtb2R1bGUgY2FuIGhhdmUuJyxcbiAgICAgIHVybDogZG9jc1VybCgnbWF4LWRlcGVuZGVuY2llcycpLFxuICAgIH0sXG5cbiAgICBzY2hlbWE6IFtcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICBtYXg6IHsgdHlwZTogJ251bWJlcicgfSxcbiAgICAgICAgICBpZ25vcmVUeXBlSW1wb3J0czogeyB0eXBlOiAnYm9vbGVhbicgfSxcbiAgICAgICAgfSxcbiAgICAgICAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGZhbHNlLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuXG4gIGNyZWF0ZShjb250ZXh0KSB7XG4gICAgY29uc3Qge1xuICAgICAgaWdub3JlVHlwZUltcG9ydHMgPSBERUZBVUxUX0lHTk9SRV9UWVBFX0lNUE9SVFMsXG4gICAgfSA9IGNvbnRleHQub3B0aW9uc1swXSB8fCB7fTtcblxuICAgIGNvbnN0IGRlcGVuZGVuY2llcyA9IG5ldyBTZXQoKTsgLy8ga2VlcCB0cmFjayBvZiBkZXBlbmRlbmNpZXNcbiAgICBsZXQgbGFzdE5vZGU7IC8vIGtlZXAgdHJhY2sgb2YgdGhlIGxhc3Qgbm9kZSB0byByZXBvcnQgb25cblxuICAgIHJldHVybiB7XG4gICAgICAnUHJvZ3JhbTpleGl0JygpIHtcbiAgICAgICAgY291bnREZXBlbmRlbmNpZXMoZGVwZW5kZW5jaWVzLCBsYXN0Tm9kZSwgY29udGV4dCk7XG4gICAgICB9LFxuICAgICAgLi4ubW9kdWxlVmlzaXRvcihcbiAgICAgICAgKHNvdXJjZSwgeyBpbXBvcnRLaW5kIH0pID0+IHtcbiAgICAgICAgICBpZiAoaW1wb3J0S2luZCAhPT0gVFlQRV9JTVBPUlQgfHwgIWlnbm9yZVR5cGVJbXBvcnRzKSB7XG4gICAgICAgICAgICBkZXBlbmRlbmNpZXMuYWRkKHNvdXJjZS52YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxhc3ROb2RlID0gc291cmNlO1xuICAgICAgICB9LFxuICAgICAgICB7IGNvbW1vbmpzOiB0cnVlIH0sXG4gICAgICApLFxuICAgIH07XG4gIH0sXG59O1xuIl19