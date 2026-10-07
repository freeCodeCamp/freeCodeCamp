export function toDebugString(input) {
    if (typeof input !== "object" || input == null) {
        return input;
    }
    if ("ref" in input) {
        return `$${toDebugString(input.ref)}`;
    }
    if ("fn" in input) {
        return `${input.fn}(${(input.argv || []).map(toDebugString).join(", ")})`;
    }
    return JSON.stringify(input, null, 2);
}
