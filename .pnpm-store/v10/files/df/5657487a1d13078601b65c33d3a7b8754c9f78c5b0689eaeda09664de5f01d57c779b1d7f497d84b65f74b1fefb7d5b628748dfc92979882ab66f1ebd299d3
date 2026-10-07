// deno-fmt-ignore-file
import { Unreachable } from '../../system/unreachable/index.mjs';
import { Guard } from '../../guard/index.mjs';
import { IsLiteralBigInt, IsLiteralBoolean, IsLiteralNumber, IsLiteralString } from '../../type/index.mjs';
import { Try } from './try/index.mjs';
// ------------------------------------------------------------------
// BigInt
// ------------------------------------------------------------------
function FromLiteralBigInt(_context, type, value) {
    const result = Try.TryBigInt(value);
    return Try.IsOk(result) && Guard.IsEqual(type.const, result.value) ? result.value : value;
}
// ------------------------------------------------------------------
// Boolean
// ------------------------------------------------------------------
function FromLiteralBoolean(_context, type, value) {
    const result = Try.TryBoolean(value);
    return Try.IsOk(result) && Guard.IsEqual(type.const, result.value) ? result.value : value;
}
// ------------------------------------------------------------------
// Number
// ------------------------------------------------------------------
function FromLiteralNumber(_context, type, value) {
    const result = Try.TryNumber(value);
    return Try.IsOk(result) && Guard.IsEqual(type.const, result.value) ? result.value : value;
}
// ------------------------------------------------------------------
// String
// ------------------------------------------------------------------
function FromLiteralString(_context, type, value) {
    const result = Try.TryString(value);
    return Try.IsOk(result) && Guard.IsEqual(type.const, result.value) ? result.value : value;
}
// deno-coverage-ignore-start - unreachable | guarded
export function FromLiteral(context, type, value) {
    if (Guard.IsEqual(type.const, value))
        return value;
    return (IsLiteralBigInt(type) ? FromLiteralBigInt(context, type, value) :
        IsLiteralBoolean(type) ? FromLiteralBoolean(context, type, value) :
            IsLiteralNumber(type) ? FromLiteralNumber(context, type, value) :
                IsLiteralString(type) ? FromLiteralString(context, type, value) :
                    Unreachable());
}
// deno-coverage-ignore-stop
