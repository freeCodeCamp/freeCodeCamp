"use strict";

exports.__esModule = true;
exports.computeAccessibleName = computeAccessibleName;
var _accessibleNameAndDescription = require("./accessible-name-and-description");
var _util = require("./util");
/**
 * https://w3c.github.io/aria/#namefromprohibited
 */
function prohibitsNaming(node) {
  return (0, _util.hasAnyConcreteRoles)(node, ["caption", "code", "deletion", "emphasis", "generic", "insertion", "none", "paragraph", "presentation", "strong", "subscript", "superscript"]);
}

/**
 * implements https://w3c.github.io/accname/#mapping_additional_nd_name
 * @param root
 * @param options
 * @returns
 */
function computeAccessibleName(root) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (prohibitsNaming(root)) {
    return "";
  }
  return (0, _accessibleNameAndDescription.computeTextAlternative)(root, options);
}
//# sourceMappingURL=accessible-name.js.map