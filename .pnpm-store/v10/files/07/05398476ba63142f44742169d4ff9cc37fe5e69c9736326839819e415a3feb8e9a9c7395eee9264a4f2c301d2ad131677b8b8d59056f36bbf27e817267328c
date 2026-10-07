"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objFilter = void 0;
const common_types_1 = require("./common-types");
function objFilter(original = {}, filter = () => true) {
    const obj = {};
    common_types_1.objectKeys(original).forEach((key) => {
        if (filter(key, original[key])) {
            obj[key] = original[key];
        }
    });
    return obj;
}
exports.objFilter = objFilter;
