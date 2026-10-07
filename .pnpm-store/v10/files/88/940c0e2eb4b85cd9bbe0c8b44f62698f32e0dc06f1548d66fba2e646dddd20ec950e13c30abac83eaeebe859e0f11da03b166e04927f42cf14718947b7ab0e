"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getDef() {
    return {
        keyword: "prohibited",
        type: "object",
        schemaType: "array",
        macro: function (schema) {
            if (schema.length === 0)
                return true;
            if (schema.length === 1)
                return { not: { required: schema } };
            return { not: { anyOf: schema.map((p) => ({ required: [p] })) } };
        },
        metaSchema: {
            type: "array",
            items: { type: "string" },
        },
    };
}
exports.default = getDef;
module.exports = getDef;
//# sourceMappingURL=prohibited.js.map