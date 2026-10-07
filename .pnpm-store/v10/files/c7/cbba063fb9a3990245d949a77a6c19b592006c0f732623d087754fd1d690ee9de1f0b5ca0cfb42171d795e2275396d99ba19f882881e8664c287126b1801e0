import type { Range } from '../nodes/Node';
import { Scalar } from '../nodes/Scalar';
import type { BlockScalar } from '../parse/cst';
import type { ComposeContext } from './compose-node';
import type { ComposeErrorHandler } from './composer';
export declare function resolveBlockScalar(ctx: ComposeContext, scalar: BlockScalar, onError: ComposeErrorHandler): {
    value: string;
    type: Scalar.BLOCK_FOLDED | Scalar.BLOCK_LITERAL | null;
    comment: string;
    range: Range;
};
