import type { Range } from '../nodes/Node';
import { Scalar } from '../nodes/Scalar';
import type { FlowScalar } from '../parse/cst';
import type { ComposeErrorHandler } from './composer';
export declare function resolveFlowScalar(scalar: FlowScalar, strict: boolean, onError: ComposeErrorHandler): {
    value: string;
    type: Scalar.PLAIN | Scalar.QUOTE_DOUBLE | Scalar.QUOTE_SINGLE | null;
    comment: string;
    range: Range;
};
