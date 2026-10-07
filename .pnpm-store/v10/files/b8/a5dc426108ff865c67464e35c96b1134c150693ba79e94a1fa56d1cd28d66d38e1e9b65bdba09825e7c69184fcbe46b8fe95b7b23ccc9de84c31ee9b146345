// deno-fmt-ignore-file
import { Guard } from '../../../guard/index.mjs';
import { Ok } from './try_result.mjs';
export function TryArray(value) {
    return Guard.IsArray(value) ? Ok(value) : Ok([value]);
}
