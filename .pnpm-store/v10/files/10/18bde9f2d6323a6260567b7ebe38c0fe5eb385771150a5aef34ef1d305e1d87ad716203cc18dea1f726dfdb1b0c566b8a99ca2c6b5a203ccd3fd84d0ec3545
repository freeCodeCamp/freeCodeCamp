"use strict";

exports.__esModule = true;
exports.hasSibling = hasSibling;
exports.removeExportProperties = removeExportProperties;
/**
 * Check the node has at least one sibling.
 */
function hasSibling(path) {
  return [...path.getAllPrevSiblings(), ...path.getAllNextSiblings()].length !== 0;
}

/**
 * Remove specific properties from a destructured variable named export.
 *
 * If there are no other properties or declarations, the entire export declaration will be removed.
 * If there are other properties, only the matching properties will be removed.
 *
 * Matches exports like these:
 * ```
 * export const { foo } = {} // or `let`/`var`
 * export const { foo, bar: baz } = {} // or `let`/`var`
 * ```
 *
 * This is cheaper than using a nested visitor and traversing upwards to check distance
 * from the export declaration.
 */
function removeExportProperties(exportPath, objectPath, propertiesToRemove) {
  for (let i = 0; i < objectPath.node.properties.length; i++) {
    const property = objectPath.node.properties[i];
    if (property.type !== `ObjectProperty` || property.value.type !== `Identifier` || !propertiesToRemove.includes(property.value.name)) {
      continue;
    }
    const propertyPath = objectPath.get(`properties.${i}`);
    if (hasSibling(propertyPath) && !propertyPath.removed) {
      propertyPath.remove();
      continue;
    }
    if (hasSibling(objectPath.parentPath) && !objectPath.parentPath.removed) {
      objectPath.parentPath.remove();
      break;
    }
    if (!exportPath.removed) {
      exportPath.remove();
    }
  }
}
//# sourceMappingURL=babel-module-exports-helpers.js.map