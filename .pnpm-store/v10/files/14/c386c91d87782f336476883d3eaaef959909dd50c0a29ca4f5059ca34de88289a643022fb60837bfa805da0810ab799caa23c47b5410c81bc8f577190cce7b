"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const codegen_1 = require("ajv/dist/compile/codegen");
const TYPES = ["undefined", "string", "number", "object", "function", "boolean", "symbol"];
function getDef() {
    return {
        keyword: "typeof",
        schemaType: ["string", "array"],
        code(cxt) {
            const { data, schema, schemaValue } = cxt;
            cxt.fail(typeof schema == "string"
                ? (0, codegen_1._) `typeof ${data} != ${schema}`
                : (0, codegen_1._) `${schemaValue}.indexOf(typeof ${data}) < 0`);
        },
        metaSchema: {
            anyOf: [
                { type: "string", enum: TYPES },
                { type: "array", items: { type: "string", enum: TYPES } },
            ],
        },
    };
}
exports.default = getDef;
module.exports = getDef;
//# sourceMappingURL=typeof.js.map