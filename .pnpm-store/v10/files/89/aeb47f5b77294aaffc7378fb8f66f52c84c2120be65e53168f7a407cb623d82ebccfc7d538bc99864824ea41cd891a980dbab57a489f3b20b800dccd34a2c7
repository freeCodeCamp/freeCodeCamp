// deno-fmt-ignore-file
import { Memory } from '../../system/memory/index.mjs';
import { Guard } from '../../guard/index.mjs';
import { IsKind } from './schema.mjs';
// ------------------------------------------------------------------
// InvalidLiteralValue
// ------------------------------------------------------------------
export class InvalidLiteralValue extends Error {
    constructor(value) {
        super(`Invalid Literal value`);
        Object.defineProperty(this, 'cause', {
            value: { value },
            writable: false,
            configurable: false,
            enumerable: false
        });
    }
}
export function LiteralTypeName(value) {
    return (Guard.IsBigInt(value) ? 'bigint' :
        Guard.IsBoolean(value) ? 'boolean' :
            Guard.IsNumber(value) ? 'number' :
                Guard.IsString(value) ? 'string' :
                    (() => { throw new InvalidLiteralValue(value); })());
}
// ------------------------------------------------------------------
// Factory
// ------------------------------------------------------------------
/** Creates a Literal type. */
export function Literal(value, options) {
    return Memory.Create({ '~kind': 'Literal' }, { type: LiteralTypeName(value), const: value }, options);
}
// ------------------------------------------------------------------
// Guards
// ------------------------------------------------------------------
/** Returns true if the given value is a TLiteralValue. */
export function IsLiteralValue(value) {
    return Guard.IsBigInt(value)
        || Guard.IsBoolean(value)
        || Guard.IsNumber(value)
        || Guard.IsString(value);
}
/** Returns true if the given value is TLiteral<bigint>. */
export function IsLiteralBigInt(value) {
    return IsLiteral(value) && Guard.IsBigInt(value.const);
}
/** Returns true if the given value is TLiteral<boolean>. */
export function IsLiteralBoolean(value) {
    return IsLiteral(value) && Guard.IsBoolean(value.const);
}
/** Returns true if the given value is TLiteral<number>. */
export function IsLiteralNumber(value) {
    return IsLiteral(value) && Guard.IsNumber(value.const);
}
/** Returns true if the given value is TLiteral<string>. */
export function IsLiteralString(value) {
    return IsLiteral(value) && Guard.IsString(value.const);
}
/** Returns true if the given value is TLiteral. */
export function IsLiteral(value) {
    return IsKind(value, 'Literal');
}
