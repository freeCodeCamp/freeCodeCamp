"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkMetadata = void 0;
const util_1 = require("../../compile/util");
const def = {
    keyword: "metadata",
    schemaType: "object",
    code(cxt) {
        checkMetadata(cxt);
        const { gen, schema, it } = cxt;
        if ((0, util_1.alwaysValidSchema)(it, schema))
            return;
        const valid = gen.name("valid");
        cxt.subschema({ keyword: "metadata", jtdMetadata: true }, valid);
        cxt.ok(valid);
    },
};
function checkMetadata({ it, keyword }, metadata) {
    if (it.jtdMetadata !== metadata) {
        throw new Error(`JTD: "${keyword}" cannot be used in this schema location`);
    }
}
exports.checkMetadata = checkMetadata;
exports.default = def;
//# sourceMappingURL=metadata.js.map