"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const codegen_1 = require("ajv/dist/compile/codegen");
const _util_1 = require("./_util");
const regexpMetaSchema = {
    type: "object",
    properties: {
        pattern: { type: "string" },
        flags: { type: "string", nullable: true },
    },
    required: ["pattern"],
    additionalProperties: false,
};
const metaRegexp = /^\/(.*)\/([gimuy]*)$/;
function getDef() {
    return {
        keyword: "regexp",
        type: "string",
        schemaType: ["string", "object"],
        code(cxt) {
            const { data, schema } = cxt;
            const regx = getRegExp(schema);
            cxt.pass((0, codegen_1._) `${regx}.test(${data})`);
            function getRegExp(sch) {
                if (typeof sch == "object")
                    return (0, _util_1.usePattern)(cxt, sch.pattern, sch.flags);
                const rx = metaRegexp.exec(sch);
                if (rx)
                    return (0, _util_1.usePattern)(cxt, rx[1], rx[2]);
                throw new Error("cannot parse string into RegExp");
            }
        },
        metaSchema: {
            anyOf: [{ type: "string" }, regexpMetaSchema],
        },
    };
}
exports.default = getDef;
module.exports = getDef;
//# sourceMappingURL=regexp.js.map