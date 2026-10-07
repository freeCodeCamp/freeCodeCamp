"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const codegen_1 = require("../../compile/codegen");
const metadata_1 = require("./metadata");
const nullable_1 = require("./nullable");
const error = {
    message: "must be equal to one of the allowed values",
    params: ({ schemaCode }) => (0, codegen_1._) `{allowedValues: ${schemaCode}}`,
};
const def = {
    keyword: "enum",
    schemaType: "array",
    error,
    code(cxt) {
        (0, metadata_1.checkMetadata)(cxt);
        const { gen, data, schema, schemaValue, parentSchema, it } = cxt;
        if (schema.length === 0)
            throw new Error("enum must have non-empty array");
        if (schema.length !== new Set(schema).size)
            throw new Error("enum items must be unique");
        let valid;
        const isString = (0, codegen_1._) `typeof ${data} == "string"`;
        if (schema.length >= it.opts.loopEnum) {
            let cond;
            [valid, cond] = (0, nullable_1.checkNullable)(cxt, isString);
            gen.if(cond, loopEnum);
        }
        else {
            /* istanbul ignore if */
            if (!Array.isArray(schema))
                throw new Error("ajv implementation error");
            valid = (0, codegen_1.and)(isString, (0, codegen_1.or)(...schema.map((value) => (0, codegen_1._) `${data} === ${value}`)));
            if (parentSchema.nullable)
                valid = (0, codegen_1.or)((0, codegen_1._) `${data} === null`, valid);
        }
        cxt.pass(valid);
        function loopEnum() {
            gen.forOf("v", schemaValue, (v) => gen.if((0, codegen_1._) `${valid} = ${data} === ${v}`, () => gen.break()));
        }
    },
};
exports.default = def;
//# sourceMappingURL=enum.js.map