// deno-fmt-ignore-file
import { Guard } from '../../../guard/index.mjs';
import { Ok, Fail, IsOk } from './try_result.mjs';
import { TryBigInt } from './try_bigint.mjs';
// ------------------------------------------------------------------
// BigInt
// ------------------------------------------------------------------
const maxBigInt = BigInt(Number.MAX_SAFE_INTEGER);
const minBigInt = BigInt(Number.MIN_SAFE_INTEGER);
function FromBigInt(value) {
    return (value <= maxBigInt && value >= minBigInt) ? Ok(Number(value)) : Fail();
}
function FromBoolean(value) {
    return Ok(value ? 1 : 0);
}
// ------------------------------------------------------------------
// String
// ------------------------------------------------------------------
function FromString(value) {
    const coerced = +value;
    if (Guard.IsNumber(coerced))
        return Ok(coerced);
    const lowercase = value.toLowerCase();
    if (Guard.IsEqual(lowercase, 'false'))
        return Ok(0);
    if (Guard.IsEqual(lowercase, 'true'))
        return Ok(1);
    const result = TryBigInt(value);
    if (IsOk(result))
        return (result.value <= maxBigInt && result.value >= minBigInt) ? Ok(Number(result.value)) : Fail();
    return Fail();
}
// ------------------------------------------------------------------
// Try
// ------------------------------------------------------------------
export function TryNumber(value) {
    return (Guard.IsBigInt(value) ? FromBigInt(value) :
        Guard.IsBoolean(value) ? FromBoolean(value) :
            Guard.IsNumber(value) ? Ok(value) :
                Guard.IsNull(value) ? Ok(0) :
                    Guard.IsString(value) ? FromString(value) :
                        Guard.IsUndefined(value) ? Ok(0) :
                            Fail());
}
