"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const codegen_1 = require("ajv/dist/compile/codegen");
const transform = {
    trimStart: (s) => s.trimStart(),
    trimEnd: (s) => s.trimEnd(),
    trimLeft: (s) => s.trimStart(),
    trimRight: (s) => s.trimEnd(),
    trim: (s) => s.trim(),
    toLowerCase: (s) => s.toLowerCase(),
    toUpperCase: (s) => s.toUpperCase(),
    toEnumCase: (s, cfg) => (cfg === null || cfg === void 0 ? void 0 : cfg.hash[configKey(s)]) || s,
};
const getDef = Object.assign(_getDef, { transform });
function _getDef() {
    return {
        keyword: "transform",
        schemaType: "array",
        before: "enum",
        code(cxt) {
            const { gen, data, schema, parentSchema, it } = cxt;
            const { parentData, parentDataProperty } = it;
            const tNames = schema;
            if (!tNames.length)
                return;
            let cfg;
            if (tNames.includes("toEnumCase")) {
                const config = getEnumCaseCfg(parentSchema);
                cfg = gen.scopeValue("obj", { ref: config, code: (0, codegen_1.stringify)(config) });
            }
            gen.if((0, codegen_1._) `typeof ${data} == "string" && ${parentData} !== undefined`, () => {
                gen.assign(data, transformExpr(tNames.slice()));
                gen.assign((0, codegen_1._) `${parentData}[${parentDataProperty}]`, data);
            });
            function transformExpr(ts) {
                if (!ts.length)
                    return data;
                const t = ts.pop();
                if (!(t in transform))
                    throw new Error(`transform: unknown transformation ${t}`);
                const func = gen.scopeValue("func", {
                    ref: transform[t],
                    code: (0, codegen_1._) `require("ajv-keywords/dist/definitions/transform").transform${(0, codegen_1.getProperty)(t)}`,
                });
                const arg = transformExpr(ts);
                return cfg && t === "toEnumCase" ? (0, codegen_1._) `${func}(${arg}, ${cfg})` : (0, codegen_1._) `${func}(${arg})`;
            }
        },
        metaSchema: {
            type: "array",
            items: { type: "string", enum: Object.keys(transform) },
        },
    };
}
function getEnumCaseCfg(parentSchema) {
    // build hash table to enum values
    const cfg = { hash: {} };
    // requires `enum` in the same schema as transform
    if (!parentSchema.enum)
        throw new Error('transform: "toEnumCase" requires "enum"');
    for (const v of parentSchema.enum) {
        if (typeof v !== "string")
            continue;
        const k = configKey(v);
        // requires all `enum` values have unique keys
        if (cfg.hash[k]) {
            throw new Error('transform: "toEnumCase" requires all lowercased "enum" values to be unique');
        }
        cfg.hash[k] = v;
    }
    return cfg;
}
function configKey(s) {
    return s.toLowerCase();
}
exports.default = getDef;
module.exports = getDef;
//# sourceMappingURL=transform.js.map