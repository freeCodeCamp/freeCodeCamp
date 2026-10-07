import type { Node } from '../nodes/Node';
import type { Schema } from '../schema/Schema';
import type { CollectionTag, ScalarTag } from '../schema/types';
import type { Replacer } from './Document';
export interface CreateNodeContext {
    aliasDuplicateObjects: boolean;
    keepUndefined: boolean;
    onAnchor: (source: unknown) => string;
    onTagObj?: (tagObj: ScalarTag | CollectionTag) => void;
    sourceObjects: Map<unknown, {
        anchor: string | null;
        node: Node | null;
    }>;
    replacer?: Replacer;
    schema: Schema;
}
export declare function createNode(value: unknown, tagName: string | undefined, ctx: CreateNodeContext): Node;
