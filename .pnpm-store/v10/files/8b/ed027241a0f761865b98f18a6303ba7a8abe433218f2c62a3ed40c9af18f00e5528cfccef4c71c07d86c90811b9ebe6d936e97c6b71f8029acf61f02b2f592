import type { ParsedNode } from '../nodes/Node';
import type { BlockMap, BlockSequence, FlowCollection, SourceToken } from '../parse/cst';
import type { ComposeContext, ComposeNode } from './compose-node';
import type { ComposeErrorHandler } from './composer';
interface Props {
    anchor: SourceToken | null;
    tag: SourceToken | null;
    newlineAfterProp: SourceToken | null;
}
export declare function composeCollection(CN: ComposeNode, ctx: ComposeContext, token: BlockMap | BlockSequence | FlowCollection, props: Props, onError: ComposeErrorHandler): ParsedNode;
export {};
