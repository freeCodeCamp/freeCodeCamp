// deno-fmt-ignore-file
import { FromType } from './from_type.mjs';
export function FromConstructor(context, type) {
    const instanceType = FromType(context, type.instanceType);
    return class {
        constructor() {
            Object.assign(this, instanceType);
        }
    };
}
