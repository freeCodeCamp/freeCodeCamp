// deno-fmt-ignore-file
import { Guard } from '../../../guard/index.mjs';
import { Object } from '../../types/object.mjs';
import { Optional } from '../../types/_optional.mjs';
export function FromObject(properties) {
    const mapped = Guard.Keys(properties).reduce((result, left) => {
        return { ...result, [left]: Optional(properties[left]) };
    }, {});
    const result = Object(mapped);
    return result;
}
