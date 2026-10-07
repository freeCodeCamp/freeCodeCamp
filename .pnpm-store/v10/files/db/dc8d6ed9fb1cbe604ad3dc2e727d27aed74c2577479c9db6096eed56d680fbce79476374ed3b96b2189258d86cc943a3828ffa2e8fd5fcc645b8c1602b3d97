// deno-lint-ignore-file ban-types
// deno-fmt-ignore-file
import { Object } from '../../types/object.mjs';
export function TupleElementsToProperties(types) {
    const result = types.reduceRight((result, right, index) => {
        return { [index]: right, ...result };
    }, {});
    return result;
}
export function TupleToObject(type) {
    const properties = TupleElementsToProperties(type.items);
    const result = Object(properties);
    return result;
}
