"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const equal = require("fast-deep-equal");
const SCALAR_TYPES = ["number", "integer", "string", "boolean", "null"];
function getDef() {
    return {
        keyword: "uniqueItemProperties",
        type: "array",
        schemaType: "array",
        compile(keys, parentSchema) {
            const scalar = getScalarKeys(keys, parentSchema);
            return (data) => {
                if (data.length <= 1)
                    return true;
                for (let k = 0; k < keys.length; k++) {
                    const key = keys[k];
                    if (scalar[k]) {
                        const hash = {};
                        for (const x of data) {
                            if (!x || typeof x != "object")
                                continue;
                            let p = x[key];
                            if (p && typeof p == "object")
                                continue;
                            if (typeof p == "string")
                                p = '"' + p;
                            if (hash[p])
                                return false;
                            hash[p] = true;
                        }
                    }
                    else {
                        for (let i = data.length; i--;) {
                            const x = data[i];
                            if (!x || typeof x != "object")
                                continue;
                            for (let j = i; j--;) {
                                const y = data[j];
                                if (y && typeof y == "object" && equal(x[key], y[key]))
                                    return false;
                            }
                        }
                    }
                }
                return true;
            };
        },
        metaSchema: {
            type: "array",
            items: { type: "string" },
        },
    };
}
exports.default = getDef;
function getScalarKeys(keys, schema) {
    return keys.map((key) => {
        var _a, _b, _c;
        const t = (_c = (_b = (_a = schema.items) === null || _a === void 0 ? void 0 : _a.properties) === null || _b === void 0 ? void 0 : _b[key]) === null || _c === void 0 ? void 0 : _c.type;
        return Array.isArray(t)
            ? !t.includes("object") && !t.includes("array")
            : SCALAR_TYPES.includes(t);
    });
}
module.exports = getDef;
//# sourceMappingURL=uniqueItemProperties.js.map