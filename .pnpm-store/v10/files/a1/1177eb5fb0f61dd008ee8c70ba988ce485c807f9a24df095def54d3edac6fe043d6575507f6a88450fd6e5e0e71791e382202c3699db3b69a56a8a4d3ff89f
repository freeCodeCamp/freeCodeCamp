"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getDef() {
    return {
        keyword: "allRequired",
        type: "object",
        schemaType: "boolean",
        macro(schema, parentSchema) {
            if (!schema)
                return true;
            const required = Object.keys(parentSchema.properties);
            if (required.length === 0)
                return true;
            return { required };
        },
        dependencies: ["properties"],
    };
}
exports.default = getDef;
module.exports = getDef;
//# sourceMappingURL=allRequired.js.map