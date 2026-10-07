import type { IGatsbyNode } from "../redux/types";
import type { GatsbyIterable } from "../datastore/common/iterable";
type Data = IGatsbyNode | GatsbyIterable<IGatsbyNode>;
type sanitizeNode = (data: Data, isNode?: boolean, path?: Set<unknown>) => Data | undefined;
/**
 * Make data serializable
 * @param {(Object|Array)} data to sanitize
 * @param {boolean} isNode = true
 * @param {Set<string>} path = new Set
 */
export declare const sanitizeNode: sanitizeNode;
export {};
