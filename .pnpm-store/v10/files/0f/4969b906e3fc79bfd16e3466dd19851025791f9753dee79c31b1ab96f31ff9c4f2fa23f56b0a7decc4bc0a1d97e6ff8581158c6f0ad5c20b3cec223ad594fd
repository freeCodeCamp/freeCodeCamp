"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../compile/util");
const code_1 = require("../code");
const codegen_1 = require("../../compile/codegen");
const metadata_1 = require("./metadata");
const nullable_1 = require("./nullable");
const error_1 = require("./error");
const def = {
    keyword: "elements",
    schemaType: "object",
    error: (0, error_1.typeError)("array"),
    code(cxt) {
        (0, metadata_1.checkMetadata)(cxt);
        const { gen, data, schema, it } = cxt;
        if ((0, util_1.alwaysValidSchema)(it, schema))
            return;
        const [valid] = (0, nullable_1.checkNullable)(cxt);
        gen.if((0, codegen_1.not)(valid), () => gen.if((0, codegen_1._) `Array.isArray(${data})`, () => gen.assign(valid, (0, code_1.validateArray)(cxt)), () => cxt.error()));
        cxt.ok(valid);
    },
};
exports.default = def;
//# sourceMappingURL=elements.js.map