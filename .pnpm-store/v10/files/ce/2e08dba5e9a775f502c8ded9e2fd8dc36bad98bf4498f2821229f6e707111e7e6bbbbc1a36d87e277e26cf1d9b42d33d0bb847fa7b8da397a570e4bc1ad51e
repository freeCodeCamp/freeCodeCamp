"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseUnionDef = exports.primitiveMappings = void 0;
const parseDef_js_1 = require("../parseDef.js");
exports.primitiveMappings = {
    ZodString: "string",
    ZodNumber: "number",
    ZodBigInt: "integer",
    ZodBoolean: "boolean",
    ZodNull: "null",
};
function parseUnionDef(def, refs) {
    if (refs.target === "openApi3")
        return asAnyOf(def, refs);
    const options = def.options instanceof Map ? Array.from(def.options.values()) : def.options;
    // This blocks tries to look ahead a bit to produce nicer looking schemas with type array instead of anyOf.
    if (options.every((x) => x._def.typeName in exports.primitiveMappings &&
        (!x._def.checks || !x._def.checks.length))) {
        // all types in union are primitive and lack checks, so might as well squash into {type: [...]}
        const types = options.reduce((types, x) => {
            const type = exports.primitiveMappings[x._def.typeName]; //Can be safely casted due to row 43
            return type && !types.includes(type) ? [...types, type] : types;
        }, []);
        return {
            type: types.length > 1 ? types : types[0],
        };
    }
    else if (options.every((x) => x._def.typeName === "ZodLiteral" && !x.description)) {
        // all options literals
        const types = options.reduce((acc, x) => {
            const type = typeof x._def.value;
            switch (type) {
                case "string":
                case "number":
                case "boolean":
                    return [...acc, type];
                case "bigint":
                    return [...acc, "integer"];
                case "object":
                    if (x._def.value === null)
                        return [...acc, "null"];
                case "symbol":
                case "undefined":
                case "function":
                default:
                    return acc;
            }
        }, []);
        if (types.length === options.length) {
            // all the literals are primitive, as far as null can be considered primitive
            const uniqueTypes = types.filter((x, i, a) => a.indexOf(x) === i);
            return {
                type: uniqueTypes.length > 1 ? uniqueTypes : uniqueTypes[0],
                enum: options.reduce((acc, x) => {
                    return acc.includes(x._def.value) ? acc : [...acc, x._def.value];
                }, []),
            };
        }
    }
    else if (options.every((x) => x._def.typeName === "ZodEnum")) {
        return {
            type: "string",
            enum: options.reduce((acc, x) => [
                ...acc,
                ...x._def.values.filter((x) => !acc.includes(x)),
            ], []),
        };
    }
    return asAnyOf(def, refs);
}
exports.parseUnionDef = parseUnionDef;
const asAnyOf = (def, refs) => {
    const anyOf = (def.options instanceof Map
        ? Array.from(def.options.values())
        : def.options)
        .map((x, i) => (0, parseDef_js_1.parseDef)(x._def, {
        ...refs,
        currentPath: [...refs.currentPath, "anyOf", `${i}`],
    }))
        .filter((x) => !!x &&
        (!refs.strictUnions ||
            (typeof x === "object" && Object.keys(x).length > 0)));
    return anyOf.length ? { anyOf } : undefined;
};
