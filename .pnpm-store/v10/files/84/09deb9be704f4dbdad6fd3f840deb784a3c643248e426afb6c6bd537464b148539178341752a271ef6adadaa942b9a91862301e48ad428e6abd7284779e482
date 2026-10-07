"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../compile/util");
const codegen_1 = require("../../compile/codegen");
const metadata_1 = require("./metadata");
const nullable_1 = require("./nullable");
const error_1 = require("./error");
const def = {
    keyword: "values",
    schemaType: "object",
    error: (0, error_1.typeError)("object"),
    code(cxt) {
        (0, metadata_1.checkMetadata)(cxt);
        const { gen, data, schema, it } = cxt;
        const [valid, cond] = (0, nullable_1.checkNullableObject)(cxt, data);
        if ((0, util_1.alwaysValidSchema)(it, schema)) {
            gen.if((0, codegen_1.not)((0, codegen_1.or)(cond, valid)), () => cxt.error());
        }
        else {
            gen.if(cond);
            gen.assign(valid, validateMap());
            gen.elseIf((0, codegen_1.not)(valid));
            cxt.error();
            gen.endIf();
        }
        cxt.ok(valid);
        function validateMap() {
            const _valid = gen.name("valid");
            if (it.allErrors) {
                const validMap = gen.let("valid", true);
                validateValues(() => gen.assign(validMap, false));
                return validMap;
            }
            gen.var(_valid, true);
            validateValues(() => gen.break());
            return _valid;
            function validateValues(notValid) {
                gen.forIn("key", data, (key) => {
                    cxt.subschema({
                        keyword: "values",
                        dataProp: key,
                        dataPropType: util_1.Type.Str,
                    }, _valid);
                    gen.if((0, codegen_1.not)(_valid), notValid);
                });
            }
        }
    },
};
exports.default = def;
//# sourceMappingURL=values.js.map