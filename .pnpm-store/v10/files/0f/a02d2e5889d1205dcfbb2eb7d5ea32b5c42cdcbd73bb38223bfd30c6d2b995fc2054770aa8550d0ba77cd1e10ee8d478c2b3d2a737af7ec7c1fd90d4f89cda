import { isArray } from "./TypeCheck.js";
/**
 * Make the property not writable using `defineProperty`. Internal use only.
 */
export function readOnly(target, property) {
    if (isArray(property)) {
        property.forEach((str) => readOnly(target, str));
    }
    else {
        Object.defineProperty(target, property, {
            enumerable: true,
            writable: false,
        });
    }
}
/**
 * Make an attribute writeable. Internal use only.
 */
export function writable(target, property) {
    if (isArray(property)) {
        property.forEach((str) => writable(target, str));
    }
    else {
        Object.defineProperty(target, property, {
            writable: true,
        });
    }
}
export const noOp = () => {
    // no operation here!
};
//# sourceMappingURL=Interface.js.map