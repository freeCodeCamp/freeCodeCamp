// deno-fmt-ignore-file
import { Check } from '../check/index.mjs';
import { Create } from '../create/index.mjs';
import { Convert } from '../convert/index.mjs';
export function FromUnknown(context, type, value) {
    if (Check(context, type, value))
        return value;
    const converted = Convert(context, type, value);
    if (Check(context, type, converted))
        return converted;
    return Create(context, type);
}
