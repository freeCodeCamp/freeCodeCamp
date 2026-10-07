// deno-fmt-ignore-file
import { Guard } from '../../../guard/index.mjs';
import { Ok, Fail } from './try_result.mjs';
// ------------------------------------------------------------------
// BigInt
// ------------------------------------------------------------------
function FromBigInt(value) {
    return (Guard.IsEqual(value, BigInt(0)) ? Ok(false) :
        Guard.IsEqual(value, BigInt(1)) ? Ok(true) :
            Fail());
}
// ------------------------------------------------------------------
// Number
// ------------------------------------------------------------------
function FromNumber(value) {
    return (Guard.IsEqual(value, 0) ? Ok(false) :
        Guard.IsEqual(value, 1) ? Ok(true) :
            Fail());
}
// ------------------------------------------------------------------
// String
// ------------------------------------------------------------------
function FromString(value) {
    return (Guard.IsEqual(value.toLowerCase(), 'false') ? Ok(false) :
        Guard.IsEqual(value.toLowerCase(), 'true') ? Ok(true) :
            Guard.IsEqual(value, '0') ? Ok(false) :
                Guard.IsEqual(value, '1') ? Ok(true) :
                    Fail());
}
// ------------------------------------------------------------------
// Try
// ------------------------------------------------------------------
export function TryBoolean(value) {
    return (Guard.IsBigInt(value) ? FromBigInt(value) :
        Guard.IsBoolean(value) ? Ok(value) :
            Guard.IsNumber(value) ? FromNumber(value) :
                Guard.IsNull(value) ? Ok(false) :
                    Guard.IsString(value) ? FromString(value) :
                        Guard.IsUndefined(value) ? Ok(false) :
                            Fail());
}
