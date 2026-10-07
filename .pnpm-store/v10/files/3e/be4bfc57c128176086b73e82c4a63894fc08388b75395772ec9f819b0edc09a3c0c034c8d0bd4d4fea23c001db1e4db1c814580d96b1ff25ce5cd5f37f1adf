import type { BlockScalar, FlowScalar } from '../parse/cst';
import type { Range } from './Node';
import { NodeBase } from './Node';
import type { ToJSContext } from './toJS';
export declare const isScalarValue: (value: unknown) => boolean;
export declare namespace Scalar {
    interface Parsed extends Scalar {
        range: Range;
        source: string;
        srcToken?: FlowScalar | BlockScalar;
    }
    type BLOCK_FOLDED = 'BLOCK_FOLDED';
    type BLOCK_LITERAL = 'BLOCK_LITERAL';
    type PLAIN = 'PLAIN';
    type QUOTE_DOUBLE = 'QUOTE_DOUBLE';
    type QUOTE_SINGLE = 'QUOTE_SINGLE';
    type Type = BLOCK_FOLDED | BLOCK_LITERAL | PLAIN | QUOTE_DOUBLE | QUOTE_SINGLE;
}
export declare class Scalar<T = unknown> extends NodeBase {
    static readonly BLOCK_FOLDED = "BLOCK_FOLDED";
    static readonly BLOCK_LITERAL = "BLOCK_LITERAL";
    static readonly PLAIN = "PLAIN";
    static readonly QUOTE_DOUBLE = "QUOTE_DOUBLE";
    static readonly QUOTE_SINGLE = "QUOTE_SINGLE";
    value: T;
    /** An optional anchor on this node. Used by alias nodes. */
    anchor?: string;
    /**
     * By default (undefined), numbers use decimal notation.
     * The YAML 1.2 core schema only supports 'HEX' and 'OCT'.
     * The YAML 1.1 schema also supports 'BIN' and 'TIME'
     */
    format?: string;
    /** If `value` is a number, use this value when stringifying this node. */
    minFractionDigits?: number;
    /** Set during parsing to the source string value */
    source?: string;
    /** The scalar style used for the node's string representation */
    type?: Scalar.Type;
    constructor(value: T);
    toJSON(arg?: any, ctx?: ToJSContext): any;
    toString(): string;
}
