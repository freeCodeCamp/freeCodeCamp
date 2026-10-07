// deno-fmt-ignore-file
import { FromType } from './from_type.mjs';
export function FromUnion(types) {
    return types.reduce((result, left) => {
        return [...result, ...FromType(left)];
    }, []);
}
