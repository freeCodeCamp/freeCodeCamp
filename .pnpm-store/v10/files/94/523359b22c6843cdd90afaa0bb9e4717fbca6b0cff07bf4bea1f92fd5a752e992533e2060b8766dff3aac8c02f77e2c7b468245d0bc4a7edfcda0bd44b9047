// deno-fmt-ignore-file
import { Guard } from '../../../guard/index.mjs';
import { Ok, Fail } from './try_result.mjs';
// ------------------------------------------------------------------
// BigInt
// ------------------------------------------------------------------
function FromBigInt(value) {
    return Guard.IsEqual(value, BigInt(0)) ? Ok(undefined) : Fail();
}
// ------------------------------------------------------------------
// Boolean
// ------------------------------------------------------------------
function FromBoolean(value) {
    return Guard.IsEqual(value, false) ? Ok(undefined) : Fail();
}
// ------------------------------------------------------------------
// Number
// ------------------------------------------------------------------
function FromNumber(value) {
    return Guard.IsEqual(value, 0) ? Ok(undefined) : Fail();
}
// ------------------------------------------------------------------
// String
// ------------------------------------------------------------------
function FromString(value) {
    const lowercase = value.toLowerCase();
    const predicate = Guard.IsEqual(lowercase, 'undefined')
        || Guard.IsEqual(lowercase, 'null')
        || Guard.IsEqual(value, '')
        || Guard.IsEqual(value, '0');
    return predicate ? Ok(undefined) : Fail();
}
// ------------------------------------------------------------------
// Try
// ------------------------------------------------------------------
export function TryUndefined(value) {
    return (Guard.IsBigInt(value) ? FromBigInt(value) :
        Guard.IsBoolean(value) ? FromBoolean(value) :
            Guard.IsNumber(value) ? FromNumber(value) :
                Guard.IsNull(value) ? Ok(undefined) :
                    Guard.IsString(value) ? FromString(value) :
                        Guard.IsUndefined(value) ? Ok(value) :
                            Fail());
}
