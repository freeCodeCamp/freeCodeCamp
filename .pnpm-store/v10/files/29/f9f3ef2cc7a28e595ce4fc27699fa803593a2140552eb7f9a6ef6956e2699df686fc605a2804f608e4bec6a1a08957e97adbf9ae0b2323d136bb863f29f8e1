import { ExportNamedDeclaration, ObjectPattern } from "@babel/types";
import { NodePath } from "@babel/core";
/**
 * Check the node has at least one sibling.
 */
export declare function hasSibling(path: NodePath): boolean;
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
export declare function removeExportProperties(exportPath: NodePath<ExportNamedDeclaration>, objectPath: NodePath<ObjectPattern>, propertiesToRemove: Array<string>): void;
