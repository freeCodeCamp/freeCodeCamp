"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const codegen_1 = require("ajv/dist/compile/codegen");
function getDef() {
    return {
        keyword: "deepRequired",
        type: "object",
        schemaType: "array",
        code(ctx) {
            const { schema, data } = ctx;
            const props = schema.map((jp) => (0, codegen_1._) `(${getData(jp)}) === undefined`);
            ctx.fail((0, codegen_1.or)(...props));
            function getData(jsonPointer) {
                if (jsonPointer === "")
                    throw new Error("empty JSON pointer not allowed");
                const segments = jsonPointer.split("/");
                let x = data;
                const xs = segments.map((s, i) => i ? (x = (0, codegen_1._) `${x}${(0, codegen_1.getProperty)(unescapeJPSegment(s))}`) : x);
                return (0, codegen_1.and)(...xs);
            }
        },
        metaSchema: {
            type: "array",
            items: { type: "string", format: "json-pointer" },
        },
    };
}
exports.default = getDef;
function unescapeJPSegment(s) {
    return s.replace(/~1/g, "/").replace(/~0/g, "~");
}
module.exports = getDef;
//# sourceMappingURL=deepRequired.js.map