// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
import { Clone } from '../clone/index.mjs';
export function FromDefault(_context, schema) {
    return Guard.IsFunction(schema.default)
        ? schema.default(schema)
        : Guard.IsObject(schema.default)
            ? Clone(schema.default)
            : schema.default;
}
