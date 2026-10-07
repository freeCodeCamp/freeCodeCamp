export function parseLiteralDef(def, refs) {
    const parsedType = typeof def.value;
    if (parsedType !== "bigint" &&
        parsedType !== "number" &&
        parsedType !== "boolean" &&
        parsedType !== "string") {
        return {
            type: Array.isArray(def.value) ? "array" : "object",
        };
    }
    if (refs.target === "openApi3") {
        return {
            type: parsedType === "bigint" ? "integer" : parsedType,
            enum: [def.value],
        };
    }
    return {
        type: parsedType === "bigint" ? "integer" : parsedType,
        const: def.value,
    };
}
