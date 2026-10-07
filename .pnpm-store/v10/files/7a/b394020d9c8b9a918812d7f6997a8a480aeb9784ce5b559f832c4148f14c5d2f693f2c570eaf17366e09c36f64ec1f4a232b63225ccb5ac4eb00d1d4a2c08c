"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const codegen_1 = require("ajv/dist/compile/codegen");
const _util_1 = require("./_util");
const error = {
    message: ({ params: { schemaProp } }) => schemaProp
        ? (0, codegen_1.str) `should match case "${schemaProp}" schema`
        : (0, codegen_1.str) `should match default case schema`,
    params: ({ params: { schemaProp } }) => schemaProp ? (0, codegen_1._) `{failingCase: ${schemaProp}}` : (0, codegen_1._) `{failingDefault: true}`,
};
function getDef(opts) {
    const metaSchema = (0, _util_1.metaSchemaRef)(opts);
    return [
        {
            keyword: "select",
            schemaType: ["string", "number", "boolean", "null"],
            $data: true,
            error,
            dependencies: ["selectCases"],
            code(cxt) {
                const { gen, schemaCode, parentSchema } = cxt;
                cxt.block$data(codegen_1.nil, () => {
                    const valid = gen.let("valid", true);
                    const schValid = gen.name("_valid");
                    const value = gen.const("value", (0, codegen_1._) `${schemaCode} === null ? "null" : ${schemaCode}`);
                    gen.if(false); // optimizer should remove it from generated code
                    for (const schemaProp in parentSchema.selectCases) {
                        cxt.setParams({ schemaProp });
                        gen.elseIf((0, codegen_1._) `"" + ${value} == ${schemaProp}`); // intentional ==, to match numbers and booleans
                        const schCxt = cxt.subschema({ keyword: "selectCases", schemaProp }, schValid);
                        cxt.mergeEvaluated(schCxt, codegen_1.Name);
                        gen.assign(valid, schValid);
                    }
                    gen.else();
                    if (parentSchema.selectDefault !== undefined) {
                        cxt.setParams({ schemaProp: undefined });
                        const schCxt = cxt.subschema({ keyword: "selectDefault" }, schValid);
                        cxt.mergeEvaluated(schCxt, codegen_1.Name);
                        gen.assign(valid, schValid);
                    }
                    gen.endIf();
                    cxt.pass(valid);
                });
            },
        },
        {
            keyword: "selectCases",
            dependencies: ["select"],
            metaSchema: {
                type: "object",
                additionalProperties: metaSchema,
            },
        },
        {
            keyword: "selectDefault",
            dependencies: ["select", "selectCases"],
            metaSchema,
        },
    ];
}
exports.default = getDef;
module.exports = getDef;
//# sourceMappingURL=select.js.map