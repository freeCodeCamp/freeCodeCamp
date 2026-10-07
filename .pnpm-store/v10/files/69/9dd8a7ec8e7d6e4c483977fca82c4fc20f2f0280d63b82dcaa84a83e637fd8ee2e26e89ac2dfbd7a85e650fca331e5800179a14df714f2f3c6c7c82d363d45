"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkNullableObject = exports.checkNullable = void 0;
const codegen_1 = require("../../compile/codegen");
function checkNullable({ gen, data, parentSchema }, cond = codegen_1.nil) {
    const valid = gen.name("valid");
    if (parentSchema.nullable) {
        gen.let(valid, (0, codegen_1._) `${data} === null`);
        cond = (0, codegen_1.not)(valid);
    }
    else {
        gen.let(valid, false);
    }
    return [valid, cond];
}
exports.checkNullable = checkNullable;
function checkNullableObject(cxt, cond) {
    const [valid, cond_] = checkNullable(cxt, cond);
    return [valid, (0, codegen_1._) `${cond_} && typeof ${cxt.data} == "object" && !Array.isArray(${cxt.data})`];
}
exports.checkNullableObject = checkNullableObject;
//# sourceMappingURL=nullable.js.map