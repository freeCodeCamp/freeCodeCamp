// deno-fmt-ignore-file
import { Guard } from '../../../guard/index.mjs';
import { Ok, Fail } from './try_result.mjs';
// ------------------------------------------------------------------
// BigInt
// ------------------------------------------------------------------
function FromBigInt(value) {
    return Guard.IsEqual(value, BigInt(0)) ? Ok(null) : Fail();
}
// ------------------------------------------------------------------
// Boolean
// ------------------------------------------------------------------
function FromBoolean(value) {
    return Guard.IsEqual(value, false) ? Ok(null) : Fail();
}
// ------------------------------------------------------------------
// Number
// ------------------------------------------------------------------
function FromNumber(value) {
    return Guard.IsEqual(value, 0) ? Ok(null) : Fail();
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
    return predicate ? Ok(null) : Fail();
}
// ------------------------------------------------------------------
// Try
// ------------------------------------------------------------------
export function TryNull(value) {
    return (Guard.IsBigInt(value) ? FromBigInt(value) :
        Guard.IsBoolean(value) ? FromBoolean(value) :
            Guard.IsNumber(value) ? FromNumber(value) :
                Guard.IsNull(value) ? Ok(null) :
                    Guard.IsString(value) ? FromString(value) :
                        Guard.IsUndefined(value) ? Ok(null) :
                            Fail());
}
