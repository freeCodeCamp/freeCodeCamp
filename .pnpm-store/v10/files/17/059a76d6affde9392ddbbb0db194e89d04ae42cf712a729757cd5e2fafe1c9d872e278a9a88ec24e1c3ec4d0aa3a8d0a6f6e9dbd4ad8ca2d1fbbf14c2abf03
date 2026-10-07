import type { ErrorCode } from '../errors';
import type { Range } from '../nodes/Node';
import type { Scalar } from '../nodes/Scalar';
import type { BlockScalar, FlowScalar, SourceToken, Token } from './cst';
/**
 * If `token` is a CST flow or block scalar, determine its string value and a few other attributes.
 * Otherwise, return `null`.
 */
export declare function resolveAsScalar(token: FlowScalar | BlockScalar, strict?: boolean, onError?: (offset: number, code: ErrorCode, message: string) => void): {
    value: string;
    type: Scalar.Type | null;
    comment: string;
    range: Range;
};
export declare function resolveAsScalar(token: Token | null | undefined, strict?: boolean, onError?: (offset: number, code: ErrorCode, message: string) => void): {
    value: string;
    type: Scalar.Type | null;
    comment: string;
    range: Range;
} | null;
/**
 * Create a new scalar token with `value`
 *
 * Values that represent an actual string but may be parsed as a different type should use a `type` other than `'PLAIN'`,
 * as this function does not support any schema operations and won't check for such conflicts.
 *
 * @param value The string representation of the value, which will have its content properly indented.
 * @param context.end Comments and whitespace after the end of the value, or after the block scalar header. If undefined, a newline will be added.
 * @param context.implicitKey Being within an implicit key may affect the resolved type of the token's value.
 * @param context.indent The indent level of the token.
 * @param context.inFlow Is this scalar within a flow collection? This may affect the resolved type of the token's value.
 * @param context.offset The offset position of the token.
 * @param context.type The preferred type of the scalar token. If undefined, the previous type of the `token` will be used, defaulting to `'PLAIN'`.
 */
export declare function createScalarToken(value: string, context: {
    end?: SourceToken[];
    implicitKey?: boolean;
    indent: number;
    inFlow?: boolean;
    offset?: number;
    type?: Scalar.Type;
}): BlockScalar | FlowScalar;
/**
 * Set the value of `token` to the given string `value`, overwriting any previous contents and type that it may have.
 *
 * Best efforts are made to retain any comments previously associated with the `token`,
 * though all contents within a collection's `items` will be overwritten.
 *
 * Values that represent an actual string but may be parsed as a different type should use a `type` other than `'PLAIN'`,
 * as this function does not support any schema operations and won't check for such conflicts.
 *
 * @param token Any token. If it does not include an `indent` value, the value will be stringified as if it were an implicit key.
 * @param value The string representation of the value, which will have its content properly indented.
 * @param context.afterKey In most cases, values after a key should have an additional level of indentation.
 * @param context.implicitKey Being within an implicit key may affect the resolved type of the token's value.
 * @param context.inFlow Being within a flow collection may affect the resolved type of the token's value.
 * @param context.type The preferred type of the scalar token. If undefined, the previous type of the `token` will be used, defaulting to `'PLAIN'`.
 */
export declare function setScalarValue(token: Token, value: string, context?: {
    afterKey?: boolean;
    implicitKey?: boolean;
    inFlow?: boolean;
    type?: Scalar.Type;
}): void;
