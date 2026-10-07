"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const codegen_1 = require("../../compile/codegen");
const metadata_1 = require("./metadata");
const nullable_1 = require("./nullable");
const error_1 = require("./error");
const types_1 = require("../discriminator/types");
const error = {
    message: (cxt) => {
        const { schema, params } = cxt;
        return params.discrError
            ? params.discrError === types_1.DiscrError.Tag
                ? `tag "${schema}" must be string`
                : `value of tag "${schema}" must be in mapping`
            : (0, error_1.typeErrorMessage)(cxt, "object");
    },
    params: (cxt) => {
        const { schema, params } = cxt;
        return params.discrError
            ? (0, codegen_1._) `{error: ${params.discrError}, tag: ${schema}, tagValue: ${params.tag}}`
            : (0, error_1.typeErrorParams)(cxt, "object");
    },
};
const def = {
    keyword: "discriminator",
    schemaType: "string",
    implements: ["mapping"],
    error,
    code(cxt) {
        (0, metadata_1.checkMetadata)(cxt);
        const { gen, data, schema, parentSchema } = cxt;
        const [valid, cond] = (0, nullable_1.checkNullableObject)(cxt, data);
        gen.if(cond);
        validateDiscriminator();
        gen.elseIf((0, codegen_1.not)(valid));
        cxt.error();
        gen.endIf();
        cxt.ok(valid);
        function validateDiscriminator() {
            const tag = gen.const("tag", (0, codegen_1._) `${data}${(0, codegen_1.getProperty)(schema)}`);
            gen.if((0, codegen_1._) `${tag} === undefined`);
            cxt.error(false, { discrError: types_1.DiscrError.Tag, tag });
            gen.elseIf((0, codegen_1._) `typeof ${tag} == "string"`);
            validateMapping(tag);
            gen.else();
            cxt.error(false, { discrError: types_1.DiscrError.Tag, tag }, { instancePath: schema });
            gen.endIf();
        }
        function validateMapping(tag) {
            gen.if(false);
            for (const tagValue in parentSchema.mapping) {
                gen.elseIf((0, codegen_1._) `${tag} === ${tagValue}`);
                gen.assign(valid, applyTagSchema(tagValue));
            }
            gen.else();
            cxt.error(false, { discrError: types_1.DiscrError.Mapping, tag }, { instancePath: schema, schemaPath: "mapping", parentSchema: true });
            gen.endIf();
        }
        function applyTagSchema(schemaProp) {
            const _valid = gen.name("valid");
            cxt.subschema({
                keyword: "mapping",
                schemaProp,
                jtdDiscriminator: schema,
            }, _valid);
            return _valid;
        }
    },
};
exports.default = def;
//# sourceMappingURL=discriminator.js.map