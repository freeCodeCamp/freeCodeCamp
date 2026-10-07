"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequences = {};
const DEFAULTS = {
    timestamp: () => () => Date.now(),
    datetime: () => () => new Date().toISOString(),
    date: () => () => new Date().toISOString().slice(0, 10),
    time: () => () => new Date().toISOString().slice(11),
    random: () => () => Math.random(),
    randomint: (args) => {
        var _a;
        const max = (_a = args === null || args === void 0 ? void 0 : args.max) !== null && _a !== void 0 ? _a : 2;
        return () => Math.floor(Math.random() * max);
    },
    seq: (args) => {
        var _a;
        const name = (_a = args === null || args === void 0 ? void 0 : args.name) !== null && _a !== void 0 ? _a : "";
        sequences[name] || (sequences[name] = 0);
        return () => sequences[name]++;
    },
};
const getDef = Object.assign(_getDef, { DEFAULTS });
function _getDef() {
    return {
        keyword: "dynamicDefaults",
        type: "object",
        schemaType: ["string", "object"],
        modifying: true,
        valid: true,
        compile(schema, _parentSchema, it) {
            if (!it.opts.useDefaults || it.compositeRule)
                return () => true;
            const fs = {};
            for (const key in schema)
                fs[key] = getDefault(schema[key]);
            const empty = it.opts.useDefaults === "empty";
            return (data) => {
                for (const prop in schema) {
                    if (data[prop] === undefined || (empty && (data[prop] === null || data[prop] === ""))) {
                        data[prop] = fs[prop]();
                    }
                }
                return true;
            };
        },
        metaSchema: {
            type: "object",
            additionalProperties: {
                anyOf: [
                    { type: "string" },
                    {
                        type: "object",
                        additionalProperties: false,
                        required: ["func", "args"],
                        properties: {
                            func: { type: "string" },
                            args: { type: "object" },
                        },
                    },
                ],
            },
        },
    };
}
function getDefault(d) {
    return typeof d == "object" ? getObjDefault(d) : getStrDefault(d);
}
function getObjDefault({ func, args }) {
    const def = DEFAULTS[func];
    assertDefined(func, def);
    return def(args);
}
function getStrDefault(d = "") {
    const def = DEFAULTS[d];
    assertDefined(d, def);
    return def();
}
function assertDefined(name, def) {
    if (!def)
        throw new Error(`invalid "dynamicDefaults" keyword property value: ${name}`);
}
exports.default = getDef;
module.exports = getDef;
//# sourceMappingURL=dynamicDefaults.js.map