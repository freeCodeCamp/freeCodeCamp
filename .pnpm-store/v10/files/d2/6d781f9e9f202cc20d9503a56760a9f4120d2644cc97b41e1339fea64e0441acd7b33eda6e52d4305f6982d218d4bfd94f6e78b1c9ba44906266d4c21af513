import type { Node } from '../nodes/Node';
import type { Document } from './Document';
/**
 * Verify that the input string is a valid anchor.
 *
 * Will throw on errors.
 */
export declare function anchorIsValid(anchor: string): true;
export declare function anchorNames(root: Document<Node, boolean> | Node): Set<string>;
/** Find a new anchor name with the given `prefix` and a one-indexed suffix. */
export declare function findNewAnchor(prefix: string, exclude: Set<string>): string;
export declare function createNodeAnchors(doc: Document<Node, boolean>, prefix: string): {
    onAnchor: (source: unknown) => string;
    /**
     * With circular references, the source node is only resolved after all
     * of its child nodes are. This is why anchors are set only after all of
     * the nodes have been created.
     */
    setAnchors: () => void;
    sourceObjects: Map<unknown, {
        anchor: string | null;
        node: Node | null;
    }>;
};
