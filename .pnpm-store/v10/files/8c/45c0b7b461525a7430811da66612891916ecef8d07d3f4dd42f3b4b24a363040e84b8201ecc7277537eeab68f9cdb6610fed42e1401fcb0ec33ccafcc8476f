import { computeTextAlternative } from "./accessible-name-and-description.mjs";
import { hasAnyConcreteRoles } from "./util.mjs";

/**
 * https://w3c.github.io/aria/#namefromprohibited
 */
function prohibitsNaming(node) {
  return hasAnyConcreteRoles(node, ["caption", "code", "deletion", "emphasis", "generic", "insertion", "paragraph", "presentation", "strong", "subscript", "superscript"]);
}

/**
 * implements https://w3c.github.io/accname/#mapping_additional_nd_name
 * @param root
 * @param options
 * @returns
 */
export function computeAccessibleName(root) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (prohibitsNaming(root)) {
    return "";
  }
  return computeTextAlternative(root, options);
}
//# sourceMappingURL=accessible-name.mjs.map