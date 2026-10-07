"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../compile/util");
const def = {
    keyword: ["maxContains", "minContains"],
    type: "array",
    schemaType: "number",
    code({ keyword, parentSchema, it }) {
        if (parentSchema.contains === undefined) {
            (0, util_1.checkStrictMode)(it, `"${keyword}" without "contains" is ignored`);
        }
    },
};
exports.default = def;
//# sourceMappingURL=limitContains.js.map