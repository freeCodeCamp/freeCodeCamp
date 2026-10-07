// deno-fmt-ignore-file
import { Memory } from '../../../system/memory/index.mjs';
export function CreateRecord(key, value) {
    const type = 'object';
    const patternProperties = { [key]: value };
    return Memory.Create({ ['~kind']: 'Record' }, { type, patternProperties });
}
