// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
import { Unreachable } from '../../system/unreachable/unreachable.mjs';
import { IsLiteral, Literal } from '../types/literal.mjs';
import { IsBigInt } from '../types/bigint.mjs';
import { IsBoolean } from '../types/boolean.mjs';
import { IsNumber } from '../types/number.mjs';
import { IsString } from '../types/string.mjs';
import { ExtendsRight } from './extends_right.mjs';
import * as Result from './result.mjs';
function ExtendsLiteralValue(inferred, left, right) {
    return (left === right
        ? Result.ExtendsTrue(inferred)
        : Result.ExtendsFalse());
}
function ExtendsLiteralBigInt(inferred, left, right) {
    return (IsLiteral(right) ? ExtendsLiteralValue(inferred, left, right.const) :
        IsBigInt(right) ? Result.ExtendsTrue(inferred) :
            ExtendsRight(inferred, Literal(left), right));
}
function ExtendsLiteralBoolean(inferred, left, right) {
    return (IsLiteral(right) ? ExtendsLiteralValue(inferred, left, right.const) :
        IsBoolean(right) ? Result.ExtendsTrue(inferred) :
            ExtendsRight(inferred, Literal(left), right));
}
function ExtendsLiteralNumber(inferred, left, right) {
    return (IsLiteral(right) ? ExtendsLiteralValue(inferred, left, right.const) :
        IsNumber(right) ? Result.ExtendsTrue(inferred) :
            ExtendsRight(inferred, Literal(left), right));
}
function ExtendsLiteralString(inferred, left, right) {
    return (IsLiteral(right) ? ExtendsLiteralValue(inferred, left, right.const) :
        IsString(right) ? Result.ExtendsTrue(inferred) :
            ExtendsRight(inferred, Literal(left), right));
}
export function ExtendsLiteral(inferred, left, right) {
    return (Guard.IsBigInt(left.const) ? ExtendsLiteralBigInt(inferred, left.const, right) :
        Guard.IsBoolean(left.const) ? ExtendsLiteralBoolean(inferred, left.const, right) :
            Guard.IsNumber(left.const) ? ExtendsLiteralNumber(inferred, left.const, right) :
                Guard.IsString(left.const) ? ExtendsLiteralString(inferred, left.const, right) :
                    Unreachable() // ExtendsRight(inferred, left, right)
    );
}
// deno-coverage-ignore-stop
