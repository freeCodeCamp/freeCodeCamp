"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasRef = void 0;
const compile_1 = require("../../compile");
const codegen_1 = require("../../compile/codegen");
const ref_error_1 = require("../../compile/ref_error");
const names_1 = require("../../compile/names");
const ref_1 = require("../core/ref");
const metadata_1 = require("./metadata");
const def = {
    keyword: "ref",
    schemaType: "string",
    code(cxt) {
        (0, metadata_1.checkMetadata)(cxt);
        const { gen, data, schema: ref, parentSchema, it } = cxt;
        const { schemaEnv: { root }, } = it;
        const valid = gen.name("valid");
        if (parentSchema.nullable) {
            gen.var(valid, (0, codegen_1._) `${data} === null`);
            gen.if((0, codegen_1.not)(valid), validateJtdRef);
        }
        else {
            gen.var(valid, false);
            validateJtdRef();
        }
        cxt.ok(valid);
        function validateJtdRef() {
            var _a;
            const refSchema = (_a = root.schema.definitions) === null || _a === void 0 ? void 0 : _a[ref];
            if (!refSchema) {
                throw new ref_error_1.default(it.opts.uriResolver, "", ref, `No definition ${ref}`);
            }
            if (hasRef(refSchema) || !it.opts.inlineRefs)
                callValidate(refSchema);
            else
                inlineRefSchema(refSchema);
        }
        function callValidate(schema) {
            const sch = compile_1.compileSchema.call(it.self, new compile_1.SchemaEnv({ schema, root, schemaPath: `/definitions/${ref}` }));
            const v = (0, ref_1.getValidate)(cxt, sch);
            const errsCount = gen.const("_errs", names_1.default.errors);
            (0, ref_1.callRef)(cxt, v, sch, sch.$async);
            gen.assign(valid, (0, codegen_1._) `${errsCount} === ${names_1.default.errors}`);
        }
        function inlineRefSchema(schema) {
            const schName = gen.scopeValue("schema", it.opts.code.source === true ? { ref: schema, code: (0, codegen_1.stringify)(schema) } : { ref: schema });
            cxt.subschema({
                schema,
                dataTypes: [],
                schemaPath: codegen_1.nil,
                topSchemaRef: schName,
                errSchemaPath: `/definitions/${ref}`,
            }, valid);
        }
    },
};
function hasRef(schema) {
    for (const key in schema) {
        let sch;
        if (key === "ref" || (typeof (sch = schema[key]) == "object" && hasRef(sch)))
            return true;
    }
    return false;
}
exports.hasRef = hasRef;
exports.default = def;
//# sourceMappingURL=ref.js.map