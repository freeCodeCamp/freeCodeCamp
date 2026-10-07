// deno-fmt-ignore-file
import { Guard } from '../../../guard/index.mjs';
import { Object } from '../../types/object.mjs';
import { Readonly } from '../../types/_readonly.mjs';
export function FromObject(properties) {
    const mapped = Guard.Keys(properties).reduce((result, left) => {
        return { ...result, [left]: Readonly(properties[left]) };
    }, {});
    const result = Object(mapped);
    return result;
}
