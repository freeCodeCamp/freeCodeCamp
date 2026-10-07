// deno-fmt-ignore-file
import { Guard } from '../../../guard/index.mjs';
import { Ok, Fail } from './try_result.mjs';
export function TryString(value) {
    return (Guard.IsBigInt(value) ? Ok(value.toString()) :
        Guard.IsBoolean(value) ? Ok(value.toString()) :
            Guard.IsNumber(value) ? Ok(value.toString()) :
                Guard.IsNull(value) ? Ok('null') :
                    Guard.IsString(value) ? Ok(value) :
                        Guard.IsUndefined(value) ? Ok('') :
                            Fail());
}
