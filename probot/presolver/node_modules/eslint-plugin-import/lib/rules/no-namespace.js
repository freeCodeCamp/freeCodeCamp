'use strict';

/**
 * @fileoverview Rule to disallow namespace import
 * @author Radek Benkel
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------


module.exports = {
  meta: {
    docs: {}
  },

  create: function (context) {
    return {
      'ImportNamespaceSpecifier': function (node) {
        context.report(node, `Unexpected namespace import.`);
      }
    };
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL25vLW5hbWVzcGFjZS5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwibWV0YSIsImRvY3MiLCJjcmVhdGUiLCJjb250ZXh0Iiwibm9kZSIsInJlcG9ydCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7OztBQUdBQSxPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZDLFFBQU07QUFDSkMsVUFBTTtBQURGLEdBRFM7O0FBS2ZDLFVBQVEsVUFBVUMsT0FBVixFQUFtQjtBQUN6QixXQUFPO0FBQ0wsa0NBQTRCLFVBQVVDLElBQVYsRUFBZ0I7QUFDMUNELGdCQUFRRSxNQUFSLENBQWVELElBQWYsRUFBc0IsOEJBQXRCO0FBQ0Q7QUFISSxLQUFQO0FBS0Q7QUFYYyxDQUFqQiIsImZpbGUiOiJydWxlcy9uby1uYW1lc3BhY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgUnVsZSB0byBkaXNhbGxvdyBuYW1lc3BhY2UgaW1wb3J0XG4gKiBAYXV0aG9yIFJhZGVrIEJlbmtlbFxuICovXG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBSdWxlIERlZmluaXRpb25cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG1ldGE6IHtcbiAgICBkb2NzOiB7fSxcbiAgfSxcblxuICBjcmVhdGU6IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdJbXBvcnROYW1lc3BhY2VTcGVjaWZpZXInOiBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICBjb250ZXh0LnJlcG9ydChub2RlLCBgVW5leHBlY3RlZCBuYW1lc3BhY2UgaW1wb3J0LmApXG4gICAgICB9LFxuICAgIH1cbiAgfSxcbn1cbiJdfQ==