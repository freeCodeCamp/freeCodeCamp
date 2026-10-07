"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const codegen_1 = require("ajv/dist/compile/codegen");
const _util_1 = require("./_util");
const error = {
    message: ({ params: { missingPattern } }) => (0, codegen_1.str) `should have property matching pattern '${missingPattern}'`,
    params: ({ params: { missingPattern } }) => (0, codegen_1._) `{missingPattern: ${missingPattern}}`,
};
function getDef() {
    return {
        keyword: "patternRequired",
        type: "object",
        schemaType: "array",
        error,
        code(cxt) {
            const { gen, schema, data } = cxt;
            if (schema.length === 0)
                return;
            const valid = gen.let("valid", true);
            for (const pat of schema)
                validateProperties(pat);
            function validateProperties(pattern) {
                const matched = gen.let("matched", false);
                gen.forIn("key", data, (key) => {
                    gen.assign(matched, (0, codegen_1._) `${(0, _util_1.usePattern)(cxt, pattern)}.test(${key})`);
                    gen.if(matched, () => gen.break());
                });
                cxt.setParams({ missingPattern: pattern });
                gen.assign(valid, (0, codegen_1.and)(valid, matched));
                cxt.pass(valid);
            }
        },
        metaSchema: {
            type: "array",
            items: { type: "string", format: "regex" },
            uniqueItems: true,
        },
    };
}
exports.default = getDef;
module.exports = getDef;
//# sourceMappingURL=patternRequired.js.map